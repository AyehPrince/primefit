import type { FastifyInstance } from "fastify"
import { MembersService } from "./members.service.js"
import { createMemberSchema, updateMemberSchema, freezeMemberSchema } from "./members.schema.js"
import { authenticate } from "../../middleware/authenticate.js"
import { AppError } from "../../utils/errors.js"

export async function membersRoutes(server: FastifyInstance) {
  const membersService = new MembersService(server.prisma)

  // All routes require authentication
  server.addHook("preHandler", authenticate)

  // POST /members — create member
  server.post("/", async (request, reply) => {
    try {
      const payload = request.user as any
      const input = createMemberSchema.parse(request.body)
      const member = await membersService.createMember(payload.tenantId, input)
      return reply.status(201).send(member)
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

  // GET /members — list members
  server.get("/", async (request, reply) => {
    try {
      const payload = request.user as any
      const { page, limit, search } = request.query as any
      const result = await membersService.getMembers(
        payload.tenantId,
        Number(page) || 1,
        Number(limit) || 20,
        search
      )
      return reply.send(result)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // GET /members/:id — get single member
  server.get("/:id", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      const member = await membersService.getMember(payload.tenantId, id)
      return reply.send(member)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // PATCH /members/:id — update member
  server.patch("/:id", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      const input = updateMemberSchema.parse(request.body)
      const member = await membersService.updateMember(payload.tenantId, id, input)
      return reply.send(member)
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

  // POST /members/:id/freeze — freeze membership
  server.post("/:id/freeze", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      const input = freezeMemberSchema.parse(request.body)
      const member = await membersService.freezeMember(payload.tenantId, id, input)
      return reply.send(member)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

// POST /members/:id/unfreeze — unfreeze membership
server.post("/:id/unfreeze", {
  config: { rawBody: false },
}, async (request, reply) => {
  try {
    const payload = request.user as any
    const { id } = request.params as any
    const member = await membersService.unfreezeMember(payload.tenantId, id)
    return reply.send(member)
  } catch (err: any) {
    if (err instanceof AppError) {
      return reply.status(err.statusCode).send({ error: err.message })
    }
    throw err
  }
})

  // DELETE /members/:id — cancel membership
  server.delete("/:id", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      const member = await membersService.cancelMember(payload.tenantId, id)
      return reply.send({ message: "Membership cancelled", member })
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })
}