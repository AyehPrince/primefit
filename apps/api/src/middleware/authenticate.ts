import type { FastifyRequest, FastifyReply } from "fastify"

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    await request.jwtVerify()
    const payload = request.user as any
    if (!payload.id || !payload.tenantId || !payload.role) {
      return reply.status(401).send({ error: "Invalid token payload" })
    }
  } catch (err) {
    reply.status(401).send({ error: "Unauthorized" })
  }
}