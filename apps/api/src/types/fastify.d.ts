import { PrismaClient } from "@primefit/db"

declare module "fastify" {
  interface FastifyInstance {
    prisma: any
  }
}