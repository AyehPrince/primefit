import type { FastifyInstance } from "fastify"
import { PaymentsService } from "./payments.service.js"
import { initializePaymentSchema } from "./payments.schema.js"
import { authenticate } from "../../middleware/authenticate.js"
import { AppError } from "../../utils/errors.js"
import crypto from "crypto"

export async function paymentsRoutes(server: FastifyInstance) {
  const paymentsService = new PaymentsService(server.prisma)

  // POST /payments/webhook — Paystack webhook (no auth, separate scope)
  server.register(async (publicRoutes) => {
    publicRoutes.post("/webhook", async (request, reply) => {
      try {
        const secret = process.env.PAYSTACK_SECRET_KEY
        if (!secret) {
          return reply.status(500).send({ error: "Payment configuration error" })
        }

        const hash = crypto
          .createHmac("sha512", secret)
          .update(JSON.stringify(request.body))
          .digest("hex")

        if (hash !== request.headers["x-paystack-signature"]) {
          return reply.status(401).send({ error: "Invalid signature" })
        }

        const result = await paymentsService.handleWebhook(request.body)
        return reply.send(result)
      } catch (err: any) {
        throw err
      }
    })
  })

  // All routes below require authentication
  server.addHook("preHandler", authenticate)

  // POST /payments/initialize — start a payment
  server.post("/initialize", async (request, reply) => {
    try {
      const payload = request.user as any
      const input = initializePaymentSchema.parse(request.body)
      const result = await paymentsService.initializePayment(payload.tenantId, input)
      return reply.status(201).send(result)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      if (err.errors) {
        return reply.status(400).send({ error: err.errors[0].message })
      }
      throw err
    }
  })

  // GET /payments/verify/:reference — verify a payment
  server.get("/verify/:reference", async (request, reply) => {
    try {
      const { reference } = request.params as any
      const result = await paymentsService.verifyPayment(reference)
      return reply.send(result)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // GET /payments — list all payments
  server.get("/", async (request, reply) => {
    try {
      const payload = request.user as any
      const { page, limit } = request.query as any
      const result = await paymentsService.getPayments(
        payload.tenantId,
        Number(page) || 1,
        Number(limit) || 20
      )
      return reply.send(result)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // GET /payments/member/:memberId — member payment history
  server.get("/member/:memberId", async (request, reply) => {
    try {
      const payload = request.user as any
      const { memberId } = request.params as any
      const result = await paymentsService.getMemberPayments(
        payload.tenantId,
        memberId
      )
      return reply.send(result)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })
}