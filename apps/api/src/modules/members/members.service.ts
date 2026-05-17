import { AppError, NotFoundError } from "../../utils/errors.js"
import type { CreateMemberInput, UpdateMemberInput, FreezeMemberInput } from "./members.schema.js"
import { randomBytes } from "crypto"

export class MembersService {
  constructor(private prisma: any) {}

  async createMember(tenantId: string, input: CreateMemberInput) {
    // Check email uniqueness within tenant
    const existing = await this.prisma.member.findUnique({
      where: {
        tenantId_email: {
          tenantId,
          email: input.email,
        },
      },
    })
    if (existing) throw new AppError("A member with this email already exists", 409)

    // Generate QR code (unique token)
    const qrCode = `PF-${tenantId.slice(0, 6)}-${randomBytes(8).toString("hex").toUpperCase()}`

    // Calculate expiry if plan provided
    let expiresAt: Date | undefined
    if (input.expiresAt) {
      expiresAt = new Date(input.expiresAt)
    } else if (input.membershipPlanId) {
      const plan = await this.prisma.membershipPlan.findUnique({
        where: { id: input.membershipPlanId },
      })
      if (plan) {
        const now = new Date()
        if (plan.billingCycle === "MONTHLY") {
          expiresAt = new Date(now.setMonth(now.getMonth() + 1))
        } else if (plan.billingCycle === "QUARTERLY") {
          expiresAt = new Date(now.setMonth(now.getMonth() + 3))
        } else if (plan.billingCycle === "ANNUAL") {
          expiresAt = new Date(now.setFullYear(now.getFullYear() + 1))
        }
      }
    }

    const member = await this.prisma.member.create({
      data: {
        tenantId,
        name: input.name,
        email: input.email,
        phone: input.phone,
        membershipPlanId: input.membershipPlanId,
        emergencyContact: input.emergencyContact,
        notes: input.notes,
        qrCode,
        expiresAt,
        status: "ACTIVE",
      },
      include: {
        plan: true,
      },
    })

    return member
  }

  async getMembers(tenantId: string, page = 1, limit = 20, search?: string) {
    const skip = (page - 1) * limit

    const where: any = { tenantId }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
      ]
    }

    const [members, total] = await Promise.all([
      this.prisma.member.findMany({
        where,
        include: { plan: true },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      this.prisma.member.count({ where }),
    ])

    return {
      members,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    }
  }

  async getMember(tenantId: string, memberId: string) {
    const member = await this.prisma.member.findFirst({
      where: { id: memberId, tenantId },
      include: {
        plan: true,
        checkIns: {
          orderBy: { checkedInAt: "desc" },
          take: 10,
        },
        payments: {
          orderBy: { createdAt: "desc" },
          take: 5,
        },
      },
    })

    if (!member) throw new NotFoundError("Member not found")
    return member
  }

async updateMember(tenantId: string, memberId: string, input: UpdateMemberInput) {
  const member = await this.prisma.member.findFirst({
    where: { id: memberId, tenantId },
  })
  if (!member) throw new NotFoundError("Member not found")

  // Build update data explicitly, only include defined fields
  const data: any = {}
  if (input.name !== undefined) data.name = input.name
  if (input.email !== undefined) data.email = input.email
  if (input.phone !== undefined) data.phone = input.phone
  if (input.membershipPlanId !== undefined) data.membershipPlanId = input.membershipPlanId
  if (input.emergencyContact !== undefined) data.emergencyContact = input.emergencyContact
  if (input.notes !== undefined) data.notes = input.notes
  if (input.expiresAt !== undefined) data.expiresAt = new Date(input.expiresAt)

  const updated = await this.prisma.member.update({
    where: { id: memberId },
    data,
    include: { plan: true },
  })

  return updated
}
  async freezeMember(tenantId: string, memberId: string, input: FreezeMemberInput) {
    const member = await this.prisma.member.findFirst({
      where: { id: memberId, tenantId },
    })
    if (!member) throw new NotFoundError("Member not found")
    if (member.status !== "ACTIVE") throw new AppError("Only active memberships can be frozen")

    // Push expiry forward by frozen days
    const currentExpiry = member.expiresAt ? new Date(member.expiresAt) : new Date()
    currentExpiry.setDate(currentExpiry.getDate() + input.frozenDays)

    const updated = await this.prisma.member.update({
      where: { id: memberId },
      data: {
        status: "FROZEN",
        frozenAt: new Date(),
        frozenDays: member.frozenDays + input.frozenDays,
        expiresAt: currentExpiry,
      },
    })

    return updated
  }

  async unfreezeMember(tenantId: string, memberId: string) {
    const member = await this.prisma.member.findFirst({
      where: { id: memberId, tenantId },
    })
    if (!member) throw new NotFoundError("Member not found")
    if (member.status !== "FROZEN") throw new AppError("Member is not frozen")

    const updated = await this.prisma.member.update({
      where: { id: memberId },
      data: {
        status: "ACTIVE",
        frozenAt: null,
      },
    })

    return updated
  }

  async cancelMember(tenantId: string, memberId: string) {
    const member = await this.prisma.member.findFirst({
      where: { id: memberId, tenantId },
    })
    if (!member) throw new NotFoundError("Member not found")

    const updated = await this.prisma.member.update({
      where: { id: memberId },
      data: { status: "CANCELLED" },
    })

    return updated
  }
}