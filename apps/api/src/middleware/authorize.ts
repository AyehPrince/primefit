import type { FastifyRequest, FastifyReply } from "fastify"

export function authorize(...roles: string[]) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const payload = request.user as any
    if (!roles.includes(payload.role)) {
      return reply.status(403).send({
        error: `Access denied. Required roles: ${roles.join(", ")}`,
      })
    }
  }
}