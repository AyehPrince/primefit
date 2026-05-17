import type { FastifyInstance } from "fastify"
import { AuthService } from "./auth.service.js"
import { registerSchema, loginSchema } from "./auth.schema.js"
import { authenticate } from "../../middleware/authenticate.js"
import { AppError } from "../../utils/errors.js"

export async function authRoutes(server: FastifyInstance) {
  const authService = new AuthService(server.prisma)

  // POST /auth/register
  server.post("/register", async (request, reply) => {
    try {
      const input = registerSchema.parse(request.body)
      const result = await authService.register(input)
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

  // POST /auth/login
  server.post("/login", async (request, reply) => {
    try {
      const input = loginSchema.parse(request.body)
      const user = await authService.login(input)
      const token = server.jwt.sign(
        {
          id: user.id,
          tenantId: user.tenantId,
          role: user.role,
          gymName: user.gymName,
        },
        { expiresIn: "24h" }
      )
      return reply.send({ token, user })
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // GET /auth/me
  server.get(
    "/me",
    { preHandler: authenticate },
    async (request, reply) => {
      try {
        const payload = request.user as any
        const user = await authService.getMe(payload.id)
        return reply.send(user)
      } catch (err: any) {
        if (err instanceof AppError) {
          return reply.status(err.statusCode).send({ error: err.message })
        }
        throw err
      }
    }
  )
}