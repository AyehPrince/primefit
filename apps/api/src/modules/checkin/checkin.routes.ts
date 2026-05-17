import type { FastifyInstance } from "fastify"
import { CheckInService } from "./checkin.service.js"
import { checkInSchema } from "./checkin.schema.js"
import { authenticate } from "../../middleware/authenticate.js"
import { AppError } from "../../utils/errors.js"

export async function checkInRoutes(server: FastifyInstance) {
  const checkInService = new CheckInService(server.prisma)

  server.addHook("preHandler", authenticate)

  // POST /checkin — check in a member
  server.post("/", async (request, reply) => {
    try {
      const payload = request.user as any
      const input = checkInSchema.parse(request.body)
      const result = await checkInService.checkIn(payload.tenantId, input)
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

  // GET /checkin — list all check-ins
  server.get("/", async (request, reply) => {
    try {
      const payload = request.user as any
      const { page, limit, date } = request.query as any
      const result = await checkInService.getCheckIns(
        payload.tenantId,
        Number(page) || 1,
        Number(limit) || 20,
        date
      )
      return reply.send(result)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // GET /checkin/member/:memberId — get check-ins for a specific member
  server.get("/member/:memberId", async (request, reply) => {
    try {
      const payload = request.user as any
      const { memberId } = request.params as any
      const result = await checkInService.getMemberCheckIns(
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