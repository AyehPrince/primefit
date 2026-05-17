import { z } from "zod"

export const createClassSchema = z.object({
  name: z.string().min(2, "Class name must be at least 2 characters").trim(),
  description: z.string().trim().optional(),
  capacity: z.number().min(1, "Capacity must be at least 1").default(20),
  startTime: z.string().min(1, "Start time is required").trim(),
  endTime: z.string().min(1, "End time is required").trim(),
  location: z.string().trim().optional(),
  trainerId: z.string().trim().optional(),
  isRecurring: z.boolean().default(false),
  recurrenceRule: z.string().trim().optional(),
})

export const updateClassSchema = createClassSchema.partial()

export const bookClassSchema = z.object({
  memberId: z.string().min(1, "Member ID is required").trim(),
})

export type CreateClassInput = z.infer<typeof createClassSchema>
export type UpdateClassInput = z.infer<typeof updateClassSchema>
export type BookClassInput = z.infer<typeof bookClassSchema>