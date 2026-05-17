import { z } from "zod"

export const createPlanSchema = z.object({
  name: z.string().min(2, "Plan name must be at least 2 characters").trim(),
  description: z.string().trim().optional(),
  price: z.number().min(0, "Price must be positive"),
  billingCycle: z.enum(["MONTHLY", "QUARTERLY", "ANNUAL"]).default("MONTHLY"),
  maxClassesPerWeek: z.number().optional(),
  accessHoursStart: z.number().min(0).max(23).default(0),
  accessHoursEnd: z.number().min(0).max(23).default(23),
  features: z.array(z.string().trim()).default([]),
})

export const updatePlanSchema = createPlanSchema.partial()

export type CreatePlanInput = z.infer<typeof createPlanSchema>
export type UpdatePlanInput = z.infer<typeof updatePlanSchema>