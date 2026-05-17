import { z } from "zod"

export const initializePaymentSchema = z.object({
  memberId: z.string().min(1, "Member ID is required").trim(),
  amount: z.number().min(1, "Amount must be greater than 0"),
  description: z.string().trim().optional(),
  planId: z.string().trim().optional(),
})

export type InitializePaymentInput = z.infer<typeof initializePaymentSchema>