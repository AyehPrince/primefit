import { createRequire } from "module"
import { PrismaPg } from "@prisma/adapter-pg"

const require = createRequire(import.meta.url)
const { PrismaClient: PrismaClientCJS } = require("./generated/client/index.js")

export const PrismaClient = PrismaClientCJS

export function createPrismaClient() {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  })
  return new PrismaClientCJS({ adapter })
}