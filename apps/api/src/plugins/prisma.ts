import fp from "fastify-plugin"
import { PrismaPg } from "@prisma/adapter-pg"
import type { FastifyPluginAsync } from "fastify"
import { PrismaClient } from "@prisma/client"


const prismaPlugin: FastifyPluginAsync = fp(async (server) => {
  const connectionString = process.env.DATABASE_URL!

  const adapter = new PrismaPg({
    connectionString,
    max: 10,
  })

  const prisma = new PrismaClient({ adapter })

  try {
    await prisma.$connect()
    server.log.info("✅ Database connected successfully")
  } catch (err) {
    server.log.error("❌ Database connection failed")
    throw err
  }

  server.decorate("prisma", prisma)

  server.addHook("onClose", async (instance: any) => {
    await instance.prisma.$disconnect()
  })
})

export default prismaPlugin