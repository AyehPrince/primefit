import { AppError, NotFoundError } from "../../utils/errors.js"
import { hashPassword } from "../../utils/hash.js"
import type { CreateStaffInput, UpdateStaffInput } from "./staff.schema.js"

export class StaffService {
  constructor(private prisma: any) {}

  async createStaff(tenantId: string, input: CreateStaffInput) {
    // Check email uniqueness within tenant
    const existing = await this.prisma.staff.findUnique({
      where: {
        tenantId_email: {
          tenantId,
          email: input.email.trim().toLowerCase(),
        },
      },
    })
    if (existing) throw new AppError("A staff member with this email already exists", 409)

    const staff = await this.prisma.staff.create({
      data: {
        tenantId,
        name: input.name,
        email: input.email.trim().toLowerCase(),
        passwordHash: await hashPassword(input.password),
        role: input.role,
        phone: input.phone,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        isActive: true,
        createdAt: true,
      },
    })

    return staff
  }

  async getStaff(tenantId: string) {
    const staff = await this.prisma.staff.findMany({
      where: { tenantId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        isActive: true,
        lastLoginAt: true,
        createdAt: true,
        _count: {
          select: { classSessions: true },
        },
      },
      orderBy: { createdAt: "asc" },
    })

    return staff
  }

  async getStaffMember(tenantId: string, staffId: string) {
    const staff = await this.prisma.staff.findFirst({
      where: { id: staffId, tenantId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        isActive: true,
        lastLoginAt: true,
        createdAt: true,
        classSessions: {
          select: {
            id: true,
            name: true,
            startTime: true,
            endTime: true,
            capacity: true,
          },
          orderBy: { startTime: "desc" },
          take: 10,
        },
      },
    })

    if (!staff) throw new NotFoundError("Staff member not found")
    return staff
  }

  async updateStaff(tenantId: string, staffId: string, input: UpdateStaffInput) {
    const staff = await this.prisma.staff.findFirst({
      where: { id: staffId, tenantId },
    })
    if (!staff) throw new NotFoundError("Staff member not found")
    if (staff.role === "OWNER") throw new AppError("Cannot modify the owner account")

    const data: any = {}
    if (input.name !== undefined) data.name = input.name
    if (input.phone !== undefined) data.phone = input.phone
    if (input.role !== undefined) data.role = input.role
    if (input.isActive !== undefined) data.isActive = input.isActive

    return await this.prisma.staff.update({
      where: { id: staffId },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        phone: true,
        isActive: true,
        createdAt: true,
      },
    })
  }

  async deactivateStaff(tenantId: string, staffId: string) {
    const staff = await this.prisma.staff.findFirst({
      where: { id: staffId, tenantId },
    })
    if (!staff) throw new NotFoundError("Staff member not found")
    if (staff.role === "OWNER") throw new AppError("Cannot deactivate the owner account")

    return await this.prisma.staff.update({
      where: { id: staffId },
      data: { isActive: false },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
      },
    })
  }
}