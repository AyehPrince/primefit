import { AppError, UnauthorizedError } from "../../utils/errors.js"
import type { RegisterInput, LoginInput } from "./auth.schema.js"
import { hashPassword, verifyPassword } from "../../utils/hash.js"

export class AuthService {
  constructor(private prisma: any) {}

  async register(input: RegisterInput) {
    const existing = await this.prisma.staff.findFirst({
      where: { email: input.email },
    })
    if (existing) throw new AppError("Email already in use", 409)

    const slug = input.gymName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")

    const slugExists = await this.prisma.tenant.findUnique({ where: { slug } })
    if (slugExists) throw new AppError("Gym name already taken", 409)

    const result = await this.prisma.$transaction(async (tx: any) => {
      const tenant = await tx.tenant.create({
        data: {
          name: input.gymName,
          slug,
        },
      })

      const owner = await tx.staff.create({
        data: {
          tenantId: tenant.id,
          name: input.ownerName,
          email: input.email,
          passwordHash: await hashPassword(input.password),
          phone: input.phone,
          role: "OWNER",
        },
      })

      return { tenant, owner }
    })

    return {
      tenantId: result.tenant.id,
      gymName: result.tenant.name,
      slug: result.tenant.slug,
      owner: {
        id: result.owner.id,
        name: result.owner.name,
        email: result.owner.email,
        role: result.owner.role,
      },
    }
  }

async login(input: LoginInput) {
  // Find staff by email across all tenants
  const staff = await this.prisma.staff.findFirst({
    where: { email: input.email },
    include: { tenant: true },
  })

  if (!staff) throw new UnauthorizedError("Invalid credentials")
  if (!staff.isActive) throw new UnauthorizedError("Account is disabled")

  const valid = await verifyPassword(input.password, staff.passwordHash)
  if (!valid) throw new UnauthorizedError("Invalid credentials")

  await this.prisma.staff.update({
    where: { id: staff.id },
    data: { lastLoginAt: new Date() },
  })

  return {
    id: staff.id,
    name: staff.name,
    email: staff.email,
    role: staff.role,
    tenantId: staff.tenantId,
    gymName: staff.tenant.name,
  }
}

  async getMe(staffId: string) {
    const staff = await this.prisma.staff.findUnique({
      where: { id: staffId },
      include: { tenant: true },
    })
    if (!staff) throw new UnauthorizedError()
    return {
      id: staff.id,
      name: staff.name,
      email: staff.email,
      role: staff.role,
      tenantId: staff.tenantId,
      gymName: staff.tenant.name,
      avatarUrl: staff.avatarUrl,
    }
  }
}