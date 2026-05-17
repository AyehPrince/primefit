import { z } from "zod"

export const createMemberSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Invalid email").trim().toLowerCase(),
  phone: z.string().trim().optional(),
  membershipPlanId: z.string().trim().optional(),
  emergencyContact: z.string().trim().optional(),
  notes: z.string().trim().optional(),
  expiresAt: z.string().trim().optional(),
})

export const updateMemberSchema = z.object({
  name: z.string().min(2).trim().optional(),
  email: z.string().email().trim().toLowerCase().optional(),
  phone: z.string().trim().optional(),
  membershipPlanId: z.string().trim().optional(),
  emergencyContact: z.string().trim().optional(),
  notes: z.string().trim().optional(),
  expiresAt: z.string().trim().optional(),
})

export const freezeMemberSchema = z.object({
  frozenDays: z.number().min(1, "Must freeze for at least 1 day"),
})

export type CreateMemberInput = z.infer<typeof createMemberSchema>
export type UpdateMemberInput = z.infer<typeof updateMemberSchema>
export type FreezeMemberInput = z.infer<typeof freezeMemberSchema>