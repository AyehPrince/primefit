import { AppError, NotFoundError } from "../../utils/errors.js"
import type { CreatePlanInput, UpdatePlanInput } from "./plans.schema.js"

export class PlansService {
  constructor(private prisma: any) {}

  async createPlan(tenantId: string, input: CreatePlanInput) {
    const plan = await this.prisma.membershipPlan.create({
      data: {
        tenantId,
        name: input.name,
        description: input.description,
        price: input.price,
        billingCycle: input.billingCycle,
        maxClassesPerWeek: input.maxClassesPerWeek,
        accessHoursStart: input.accessHoursStart,
        accessHoursEnd: input.accessHoursEnd,
        features: input.features,
      },
    })
    return plan
  }

  async getPlans(tenantId: string) {
    const plans = await this.prisma.membershipPlan.findMany({
      where: { tenantId, isActive: true },
      orderBy: { price: "asc" },
      include: {
        _count: { select: { members: true } },
      },
    })
    return plans
  }

  async getPlan(tenantId: string, planId: string) {
    const plan = await this.prisma.membershipPlan.findFirst({
      where: { id: planId, tenantId },
      include: {
        _count: { select: { members: true } },
        members: {
          where: { status: "ACTIVE" },
          select: { id: true, name: true, email: true, status: true },
          take: 10,
        },
      },
    })
    if (!plan) throw new NotFoundError("Plan not found")
    return plan
  }

  async updatePlan(tenantId: string, planId: string, input: UpdatePlanInput) {
    const plan = await this.prisma.membershipPlan.findFirst({
      where: { id: planId, tenantId },
    })
    if (!plan) throw new NotFoundError("Plan not found")

    const data: any = {}
    if (input.name !== undefined) data.name = input.name
    if (input.description !== undefined) data.description = input.description
    if (input.price !== undefined) data.price = input.price
    if (input.billingCycle !== undefined) data.billingCycle = input.billingCycle
    if (input.maxClassesPerWeek !== undefined) data.maxClassesPerWeek = input.maxClassesPerWeek
    if (input.accessHoursStart !== undefined) data.accessHoursStart = input.accessHoursStart
    if (input.accessHoursEnd !== undefined) data.accessHoursEnd = input.accessHoursEnd
    if (input.features !== undefined) data.features = input.features

    return await this.prisma.membershipPlan.update({
      where: { id: planId },
      data,
    })
  }

  async deletePlan(tenantId: string, planId: string) {
    const plan = await this.prisma.membershipPlan.findFirst({
      where: { id: planId, tenantId },
    })
    if (!plan) throw new NotFoundError("Plan not found")

    // Soft delete — just mark inactive
    return await this.prisma.membershipPlan.update({
      where: { id: planId },
      data: { isActive: false },
    })
  }
}