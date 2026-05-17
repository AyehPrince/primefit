import { z } from "zod"

export const registerSchema = z.object({
  gymName: z.string().min(2, "Gym name must be at least 2 characters").trim(),
  ownerName: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Invalid email").trim().toLowerCase(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().trim().optional(),
})

export const loginSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z.string(),
  tenantId: z.string().trim(),
})

export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>