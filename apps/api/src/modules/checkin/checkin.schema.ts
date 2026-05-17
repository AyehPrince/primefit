import { z } from "zod"

export const checkInSchema = z.object({
  identifier: z.string().min(1, "Identifier is required").trim(),
  method: z.enum(["QR", "PIN", "MANUAL"]).default("MANUAL"),
})

export type CheckInInput = z.infer<typeof checkInSchema>