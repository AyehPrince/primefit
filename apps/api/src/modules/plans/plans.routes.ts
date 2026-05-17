import type { FastifyInstance } from "fastify"
import { PlansService } from "./plans.service.js"
import { createPlanSchema, updatePlanSchema } from "./plans.schema.js"
import { authenticate } from "../../middleware/authenticate.js"
import { AppError } from "../../utils/errors.js"

export async function plansRoutes(server: FastifyInstance) {
  const plansService = new PlansService(server.prisma)

  server.addHook("preHandler", authenticate)

  // POST /plans
  server.post("/", async (request, reply) => {
    try {
      const payload = request.user as any
      const input = createPlanSchema.parse(request.body)
      const plan = await plansService.createPlan(payload.tenantId, input)
      return reply.status(201).send(plan)
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

  // GET /plans
  server.get("/", async (request, reply) => {
    try {
      const payload = request.user as any
      const plans = await plansService.getPlans(payload.tenantId)
      return reply.send(plans)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // GET /plans/:id
  server.get("/:id", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      const plan = await plansService.getPlan(payload.tenantId, id)
      return reply.send(plan)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // PATCH /plans/:id
  server.patch("/:id", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      const input = updatePlanSchema.parse(request.body)
      const plan = await plansService.updatePlan(payload.tenantId, id, input)
      return reply.send(plan)
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })

  // DELETE /plans/:id
  server.delete("/:id", async (request, reply) => {
    try {
      const payload = request.user as any
      const { id } = request.params as any
      await plansService.deletePlan(payload.tenantId, id)
      return reply.send({ message: "Plan deactivated" })
    } catch (err: any) {
      if (err instanceof AppError) {
        return reply.status(err.statusCode).send({ error: err.message })
      }
      throw err
    }
  })
}