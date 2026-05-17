import { z } from "zod"

export const createStaffSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Invalid email").trim().toLowerCase(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["ADMIN", "TRAINER", "RECEPTIONIST"]).default("RECEPTIONIST"),
  phone: z.string().trim().optional(),
})

export const updateStaffSchema = z.object({
  name: z.string().min(2).trim().optional(),
  phone: z.string().trim().optional(),
  role: z.enum(["ADMIN", "TRAINER", "RECEPTIONIST"]).optional(),
  isActive: z.boolean().optional(),
})

export type CreateStaffInput = z.infer<typeof createStaffSchema>
export type UpdateStaffInput = z.infer<typeof updateStaffSchema>