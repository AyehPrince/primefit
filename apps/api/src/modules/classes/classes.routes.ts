import type { FastifyInstance } from "fastify"
import { ClassesService } from "./classes.service.js"
import { createClassSchema, updateClassSchema, bookClassSchema } from "./classes.schema.js"
import { authenticate } from "../../middleware/authenticate.js"
import { AppError } from "../../utils/errors.js"

export async function classesRoutes(server: FastifyInstance) {
  const classesService = new ClassesService(server.prisma)

  server.addHook("preHandler", authenticate)

  // POST /classes — create class
  server.post("/", async (request, reply) => {
    try {
      const payload = request.user as any
      const input = createClassSchema.parse(request.body)
      const classSession = await classesService.createClass(payload.tenantId, input)
      return reply.status(201).send(classSession)
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

  // GET /classes — list classes
  server.get("/", async (request, reply) => {
    try {
      const payload = request.user as any
      const { page, limit, upcoming } = request.query as any
      const result = await classesService.getClasses(
        payload.tenantId,
        Number(page) || 1,
        Number(limit) || 20,
        upcoming === "true"
      )
      return reply.send(result)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // GET /classes/:id — get single class
  server.get("/:id", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      const classSession = await classesService.getClass(payload.tenantId, id)
      return reply.send(classSession)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // PATCH /classes/:id — update class
  server.patch("/:id", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      const input = updateClassSchema.parse(request.body)
      const classSession = await classesService.updateClass(payload.tenantId, id, input)
      return reply.send(classSession)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // POST /classes/:id/cancel — cancel class
  server.post("/:id/cancel", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      const classSession = await classesService.cancelClass(payload.tenantId, id)
      return reply.send({ message: "Class cancelled", classSession })
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // POST /classes/:id/book — book a spot
  server.post("/:id/book", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      const input = bookClassSchema.parse(request.body)
      const booking = await classesService.bookClass(payload.tenantId, id, input)
      return reply.status(201).send(booking)
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

  // GET /classes/:id/bookings — get bookings for a class
  server.get("/:id/bookings", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      const result = await classesService.getBookings(payload.tenantId, id)
      return reply.send(result)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // DELETE /classes/:id/bookings/:bookingId — cancel booking
  server.delete("/:id/bookings/:bookingId", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id, bookingId } = request.params as any
      const booking = await classesService.cancelBooking(payload.tenantId, id, bookingId)
      return reply.send({ message: "Booking cancelled", booking })
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })
}