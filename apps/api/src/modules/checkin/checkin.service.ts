import { AppError, NotFoundError } from "../../utils/errors.js"
import type { CheckInInput } from "./checkin.schema.js"

export class CheckInService {
  constructor(private prisma: any) {}

  async checkIn(tenantId: string, input: CheckInInput) {
    let member: any

    // Resolve member by method
    if (input.method === "QR") {
      member = await this.prisma.member.findFirst({
        where: { qrCode: input.identifier, tenantId },
        include: { plan: true },
      })
    } else if (input.method === "PIN") {
      member = await this.prisma.member.findFirst({
        where: { pin: input.identifier, tenantId },
        include: { plan: true },
      })
    } else {
      // MANUAL — search by name or email
      member = await this.prisma.member.findFirst({
        where: {
          tenantId,
          OR: [
            { name: { contains: input.identifier, mode: "insensitive" } },
            { email: { contains: input.identifier, mode: "insensitive" } },
          ],
        },
        include: { plan: true },
      })
    }

    if (!member) throw new NotFoundError("Member not found")

    // Check membership status
    if (member.status === "CANCELLED") {
      throw new AppError("Membership is cancelled", 403)
    }
    if (member.status === "FROZEN") {
      throw new AppError("Membership is frozen", 403)
    }
    if (member.status === "EXPIRED") {
      throw new AppError("Membership has expired", 403)
    }

    // Check access hours if plan exists
    if (member.plan) {
      const currentHour = new Date().getHours()
      if (
        currentHour < member.plan.accessHoursStart ||
        currentHour > member.plan.accessHoursEnd
      ) {
        throw new AppError(
          `Access only allowed between ${member.plan.accessHoursStart}:00 and ${member.plan.accessHoursEnd}:00`,
          403
        )
      }
    }

    // Check expiry
    if (member.expiresAt && new Date(member.expiresAt) < new Date()) {
      await this.prisma.member.update({
        where: { id: member.id },
        data: { status: "EXPIRED" },
      })
      throw new AppError("Membership has expired", 403)
    }

    // Log check-in
    const checkIn = await this.prisma.checkIn.create({
      data: {
        memberId: member.id,
        tenantId,
        method: input.method,
      },
    })

    return {
      granted: true,
      checkInId: checkIn.id,
      checkedInAt: checkIn.checkedInAt,
      member: {
        id: member.id,
        name: member.name,
        email: member.email,
        status: member.status,
        plan: member.plan?.name ?? "No plan",
        expiresAt: member.expiresAt,
        qrCode: member.qrCode,
      },
    }
  }

  async getCheckIns(tenantId: string, page = 1, limit = 20, date?: string) {
    const skip = (page - 1) * limit

    const where: any = { tenantId }

    if (date) {
      const start = new Date(date)
      start.setHours(0, 0, 0, 0)
      const end = new Date(date)
      end.setHours(23, 59, 59, 999)
      where.checkedInAt = { gte: start, lte: end }
    }

    const [checkIns, total] = await Promise.all([
      this.prisma.checkIn.findMany({
        where,
        include: {
          member: {
            select: {
              id: true,
              name: true,
              email: true,
              qrCode: true,
              status: true,
            },
          },
        },
        orderBy: { checkedInAt: "desc" },
        skip,
        take: limit,
      }),
      this.prisma.checkIn.count({ where }),
    ])

    return {
      checkIns,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    }
  }

  async getMemberCheckIns(tenantId: string, memberId: string) {
    const member = await this.prisma.member.findFirst({
      where: { id: memberId, tenantId },
    })
    if (!member) throw new NotFoundError("Member not found")

    const checkIns = await this.prisma.checkIn.findMany({
      where: { memberId, tenantId },
      orderBy: { checkedInAt: "desc" },
      take: 50,
    })

    return {
      member: { id: member.id, name: member.name, email: member.email },
      totalCheckIns: checkIns.length,
      checkIns,
    }
  }
}