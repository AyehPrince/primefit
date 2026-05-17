import type { FastifyInstance } from "fastify"
import { StaffService } from "./staff.service.js"
import { createStaffSchema, updateStaffSchema } from "./staff.schema.js"
import { authenticate } from "../../middleware/authenticate.js"
import { AppError } from "../../utils/errors.js"

export async function staffRoutes(server: FastifyInstance) {
  const staffService = new StaffService(server.prisma)

  server.addHook("preHandler", authenticate)

  // POST /staff — add staff member
  server.post("/", async (request, reply) => {
    try {
      const payload = request.user as any
      // Only owners and admins can add staff
      if (!["OWNER", "ADMIN"].includes(payload.role)) {
        return reply.status(403).send({ error: "Only owners and admins can add staff" })
      }
      const input = createStaffSchema.parse(request.body)
      const staff = await staffService.createStaff(payload.tenantId, input)
      return reply.status(201).send(staff)
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

  // GET /staff — list all staff
  server.get("/", async (request, reply) => {
    try {
      const payload = request.user as any
      const staff = await staffService.getStaff(payload.tenantId)
      return reply.send(staff)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // GET /staff/:id — get single staff member
  server.get("/:id", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      const staff = await staffService.getStaffMember(payload.tenantId, id)
      return reply.send(staff)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // PATCH /staff/:id — update staff member
  server.patch("/:id", async (request, reply) => {
    try {
      const payload = request.user as any
      if (!["OWNER", "ADMIN"].includes(payload.role)) {
        return reply.status(403).send({ error: "Only owners and admins can update staff" })
      }
      const { id } = request.params as any
      const input = updateStaffSchema.parse(request.body)
      const staff = await staffService.updateStaff(payload.tenantId, id, input)
      return reply.send(staff)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // DELETE /staff/:id — deactivate staff member
  server.delete("/:id", async (request, reply) => {
    try {
      const payload = request.user as any
      if (!["OWNER", "ADMIN"].includes(payload.role)) {
        return reply.status(403).send({ error: "Only owners and admins can deactivate staff" })
      }
      const { id } = request.params as any
      const staff = await staffService.deactivateStaff(payload.tenantId, id)
      return reply.send({ message: "Staff member deactivated", staff })
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })
}