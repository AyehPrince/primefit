import { AppError, NotFoundError } from "../../utils/errors.js"
import type { CreateClassInput, UpdateClassInput, BookClassInput } from "./classes.schema.js"

export class ClassesService {
  constructor(private prisma: any) {}

  async createClass(tenantId: string, input: CreateClassInput) {
    // Validate trainer belongs to tenant if provided
    if (input.trainerId) {
      const trainer = await this.prisma.staff.findFirst({
        where: { id: input.trainerId, tenantId },
      })
      if (!trainer) throw new NotFoundError("Trainer not found")
    }

    const classSession = await this.prisma.classSession.create({
      data: {
        tenantId,
        name: input.name,
        description: input.description,
        capacity: input.capacity,
        startTime: new Date(input.startTime),
        endTime: new Date(input.endTime),
        location: input.location,
        trainerId: input.trainerId,
        isRecurring: input.isRecurring,
        recurrenceRule: input.recurrenceRule,
      },
      include: {
        trainer: {
          select: { id: true, name: true, email: true, role: true },
        },
        _count: { select: { bookings: true } },
      },
    })

    return classSession
  }

  async getClasses(tenantId: string, page = 1, limit = 20, upcoming = false) {
    const skip = (page - 1) * limit

    const where: any = { tenantId, isCancelled: false }

    if (upcoming) {
      where.startTime = { gte: new Date() }
    }

    const [classes, total] = await Promise.all([
      this.prisma.classSession.findMany({
        where,
        include: {
          trainer: {
            select: { id: true, name: true, email: true },
          },
          _count: { select: { bookings: true } },
        },
        orderBy: { startTime: "asc" },
        skip,
        take: limit,
      }),
      this.prisma.classSession.count({ where }),
    ])

    return {
      classes,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    }
  }

  async getClass(tenantId: string, classId: string) {
    const classSession = await this.prisma.classSession.findFirst({
      where: { id: classId, tenantId },
      include: {
        trainer: {
          select: { id: true, name: true, email: true, role: true },
        },
        bookings: {
          where: { status: "CONFIRMED" },
          include: {
            member: {
              select: { id: true, name: true, email: true, phone: true },
            },
          },
        },
        _count: { select: { bookings: true } },
      },
    })

    if (!classSession) throw new NotFoundError("Class not found")

    return {
      ...classSession,
      spotsAvailable: classSession.capacity - classSession.bookings.length,
    }
  }

  async updateClass(tenantId: string, classId: string, input: UpdateClassInput) {
    const classSession = await this.prisma.classSession.findFirst({
      where: { id: classId, tenantId },
    })
    if (!classSession) throw new NotFoundError("Class not found")

    const data: any = {}
    if (input.name !== undefined) data.name = input.name
    if (input.description !== undefined) data.description = input.description
    if (input.capacity !== undefined) data.capacity = input.capacity
    if (input.startTime !== undefined) data.startTime = new Date(input.startTime)
    if (input.endTime !== undefined) data.endTime = new Date(input.endTime)
    if (input.location !== undefined) data.location = input.location
    if (input.trainerId !== undefined) data.trainerId = input.trainerId
    if (input.isRecurring !== undefined) data.isRecurring = input.isRecurring
    if (input.recurrenceRule !== undefined) data.recurrenceRule = input.recurrenceRule

    return await this.prisma.classSession.update({
      where: { id: classId },
      data,
      include: {
        trainer: {
          select: { id: true, name: true, email: true },
        },
      },
    })
  }

  async cancelClass(tenantId: string, classId: string) {
    const classSession = await this.prisma.classSession.findFirst({
      where: { id: classId, tenantId },
    })
    if (!classSession) throw new NotFoundError("Class not found")
    if (classSession.isCancelled) throw new AppError("Class is already cancelled")

    // Cancel all bookings
    await this.prisma.booking.updateMany({
      where: { classSessionId: classId, status: "CONFIRMED" },
      data: { status: "CANCELLED", cancelledAt: new Date() },
    })

    return await this.prisma.classSession.update({
      where: { id: classId },
      data: { isCancelled: true },
    })
  }

  async bookClass(tenantId: string, classId: string, input: BookClassInput) {
    const classSession = await this.prisma.classSession.findFirst({
      where: { id: classId, tenantId },
      include: {
        _count: { select: { bookings: true } },
      },
    })
    if (!classSession) throw new NotFoundError("Class not found")
    if (classSession.isCancelled) throw new AppError("Class has been cancelled")

    // Check capacity
    const confirmedBookings = await this.prisma.booking.count({
      where: { classSessionId: classId, status: "CONFIRMED" },
    })
    if (confirmedBookings >= classSession.capacity) {
      throw new AppError("Class is full", 409)
    }

    // Check member exists and is active
    const member = await this.prisma.member.findFirst({
      where: { id: input.memberId, tenantId },
    })
    if (!member) throw new NotFoundError("Member not found")
    if (member.status !== "ACTIVE") {
      throw new AppError("Member does not have an active membership", 403)
    }

    // Check already booked
    const existingBooking = await this.prisma.booking.findFirst({
      where: {
        memberId: input.memberId,
        classSessionId: classId,
        status: "CONFIRMED",
      },
    })
    if (existingBooking) throw new AppError("Member already booked for this class", 409)

    const booking = await this.prisma.booking.create({
      data: {
        memberId: input.memberId,
        classSessionId: classId,
        status: "CONFIRMED",
      },
      include: {
        member: {
          select: { id: true, name: true, email: true },
        },
        classSession: {
          select: { id: true, name: true, startTime: true, endTime: true, location: true },
        },
      },
    })

    return booking
  }

  async cancelBooking(tenantId: string, classId: string, bookingId: string) {
    const booking = await this.prisma.booking.findFirst({
      where: {
        id: bookingId,
        classSessionId: classId,
        member: { tenantId },
      },
    })
    if (!booking) throw new NotFoundError("Booking not found")
    if (booking.status === "CANCELLED") throw new AppError("Booking already cancelled")

    return await this.prisma.booking.update({
      where: { id: bookingId },
      data: { status: "CANCELLED", cancelledAt: new Date() },
    })
  }

  async getBookings(tenantId: string, classId: string) {
    const classSession = await this.prisma.classSession.findFirst({
      where: { id: classId, tenantId },
    })
    if (!classSession) throw new NotFoundError("Class not found")

    const bookings = await this.prisma.booking.findMany({
      where: { classSessionId: classId },
      include: {
        member: {
          select: { id: true, name: true, email: true, phone: true },
        },
      },
      orderBy: { bookedAt: "asc" },
    })

    return {
      classSession: {
        id: classSession.id,
        name: classSession.name,
        startTime: classSession.startTime,
        capacity: classSession.capacity,
        spotsAvailable: classSession.capacity - bookings.filter((b: any) => b.status === "CONFIRMED").length,
      },
      bookings,
    }
  }
}