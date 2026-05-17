import "dotenv/config"
import Fastify from "fastify"
import cors from "@fastify/cors"
import helmet from "@fastify/helmet"
import jwt from "@fastify/jwt"
import rateLimit from "@fastify/rate-limit"
import cron from "node-cron"
import prismaPlugin from "./plugins/prisma.js"
import { authRoutes } from "./modules/auth/auth.routes.js"
import { membersRoutes } from "./modules/members/members.routes.js"
import { plansRoutes } from "./modules/plans/plans.routes.js"
import { checkInRoutes } from "./modules/checkin/checkin.routes.js"
import { classesRoutes } from "./modules/classes/classes.routes.js"
import { paymentsRoutes } from "./modules/payments/payments.routes.js"
import { staffRoutes } from "./modules/staff/staff.routes.js"

// ── Validate required environment variables ───────────
const requiredEnvVars = ["DATABASE_URL", "JWT_SECRET", "PAYSTACK_SECRET_KEY"]
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`)
  }
}

const start = async () => {
  const server = Fastify({
    logger: {
      transport: {
        target: "pino-pretty",
        options: { colorize: true },
      },
    },
  })

  // ── Global error handler ──────────────────────────────
server.setErrorHandler((error: any, request, reply) => {
  server.log.error(error)

  if (error.validation) {
    return reply.status(400).send({
      error: "Validation error",
      details: error.validation,
    })
  }

  if (error.statusCode === 429) {
    return reply.status(429).send({
      error: "Too many requests. Please try again later.",
    })
  }

  return reply.status(error.statusCode ?? 500).send({
    error: process.env.NODE_ENV === "production"
      ? "Internal server error"
      : error.message,
  })
})

  // ── Plugins ───────────────────────────────────────────
  await server.register(helmet, {
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
  await server.register(cors, {
    origin: true,
    credentials: true,
  })
  await server.register(jwt, {
    secret: process.env.JWT_SECRET!,
  })
  await server.register(rateLimit, {
    max: 100,
    timeWindow: "1 minute",
  })
  await server.register(prismaPlugin)

  // ── Cron jobs (after prismaPlugin) ───────────────────
  cron.schedule("0 0 * * *", async () => {
    server.log.info("Running membership expiry check...")
    const expired = await server.prisma.member.updateMany({
      where: {
        status: "ACTIVE",
        expiresAt: { lt: new Date() },
      },
      data: { status: "EXPIRED" },
    })
    server.log.info(`Expired ${expired.count} memberships`)
  })

  // ── Routes ────────────────────────────────────────────
  await server.register(authRoutes, { prefix: "/auth" })
  await server.register(membersRoutes, { prefix: "/members" })
  await server.register(plansRoutes, { prefix: "/plans" })
  await server.register(checkInRoutes, { prefix: "/checkin" })
  await server.register(classesRoutes, { prefix: "/classes" })
  await server.register(paymentsRoutes, { prefix: "/payments" })
  await server.register(staffRoutes, { prefix: "/staff" })

  // ── Health check ──────────────────────────────────────
  server.get("/health", async () => {
    return {
      status: "ok",
      service: "PrimeFit API",
      timestamp: new Date().toISOString(),
    }
  })

  try {
    const port = Number(process.env.API_PORT) || 3001
    await server.listen({ port, host: "0.0.0.0" })
    console.log(`🚀 PrimeFit API running on port ${port}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()