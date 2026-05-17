import { AppError, NotFoundError } from "../../utils/errors.js"
import type { InitializePaymentInput } from "./payments.schema.js"

export class PaymentsService {
  constructor(private prisma: any) {}

  async initializePayment(tenantId: string, input: InitializePaymentInput) {
    // Verify member exists
    const member = await this.prisma.member.findFirst({
      where: { id: input.memberId, tenantId },
    })
    if (!member) throw new NotFoundError("Member not found")

    // Create pending payment record
    const payment = await this.prisma.payment.create({
      data: {
        memberId: input.memberId,
        tenantId,
        amount: input.amount,
        currency: "GHS",
        status: "PENDING",
        description: input.description ?? "Membership payment",
      },
    })

    // Initialize Paystack transaction
    const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: member.email,
        amount: Math.round(input.amount * 100), // Paystack uses pesewas
        currency: "GHS",
        reference: payment.id,
        metadata: {
          memberId: member.id,
          memberName: member.name,
          tenantId,
          paymentId: payment.id,
          description: input.description,
        },
        callback_url: `${process.env.WEB_URL}/payments/verify`,
      }),
    })

    const paystackData = await paystackRes.json() as any
    


    if (!paystackData.status) {
      // Update payment as failed
      await this.prisma.payment.update({
        where: { id: payment.id },
        data: { status: "FAILED" },
      })
      throw new AppError("Failed to initialize payment with Paystack")
    }

    // Store gateway reference
    await this.prisma.payment.update({
      where: { id: payment.id },
      data: {
        gatewayRef: paystackData.data.reference,
        gatewayData: paystackData.data,
      },
    })

    return {
      paymentId: payment.id,
      authorizationUrl: paystackData.data.authorization_url,
      reference: paystackData.data.reference,
      amount: input.amount,
      currency: "GHS",
      member: {
        id: member.id,
        name: member.name,
        email: member.email,
      },
    }
  }

  async verifyPayment(reference: string) {
    // Verify with Paystack
    const paystackRes = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    )

    const paystackData = await paystackRes.json() as any

    if (!paystackData.status) {
      throw new AppError("Failed to verify payment")
    }

    const transaction = paystackData.data

    // Find payment record
    const payment = await this.prisma.payment.findFirst({
      where: { gatewayRef: reference },
      include: { member: true },
    })

    if (!payment) throw new NotFoundError("Payment record not found")

    if (transaction.status === "success") {
      // Update payment status
      await this.prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: "SUCCESS",
          paidAt: new Date(),
          gatewayData: transaction,
        },
      })

      return {
        verified: true,
        status: "SUCCESS",
        amount: transaction.amount / 100,
        currency: transaction.currency,
        paidAt: transaction.paid_at,
        member: {
          id: payment.member.id,
          name: payment.member.name,
          email: payment.member.email,
        },
      }
    } else {
      await this.prisma.payment.update({
        where: { id: payment.id },
        data: { status: "FAILED" },
      })

      return {
        verified: false,
        status: transaction.status,
      }
    }
  }

  async handleWebhook(event: any) {
    if (event.event === "charge.success") {
      const reference = event.data.reference

      const payment = await this.prisma.payment.findFirst({
        where: { gatewayRef: reference },
      })

      if (payment && payment.status !== "SUCCESS") {
        await this.prisma.payment.update({
          where: { id: payment.id },
          data: {
            status: "SUCCESS",
            paidAt: new Date(),
            gatewayData: event.data,
          },
        })
      }
    }

    return { received: true }
  }

  async getPayments(tenantId: string, page = 1, limit = 20) {
    const skip = (page - 1) * limit

    const [payments, total] = await Promise.all([
      this.prisma.payment.findMany({
        where: { tenantId },
        include: {
          member: {
            select: { id: true, name: true, email: true },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      this.prisma.payment.count({ where: { tenantId } }),
    ])

    const totalRevenue = await this.prisma.payment.aggregate({
      where: { tenantId, status: "SUCCESS" },
      _sum: { amount: true },
    })

    return {
      payments,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      totalRevenue: totalRevenue._sum.amount ?? 0,
    }
  }

  async getMemberPayments(tenantId: string, memberId: string) {
    const member = await this.prisma.member.findFirst({
      where: { id: memberId, tenantId },
    })
    if (!member) throw new NotFoundError("Member not found")

    const payments = await this.prisma.payment.findMany({
      where: { memberId, tenantId },
      orderBy: { createdAt: "desc" },
    })

    return {
      member: { id: member.id, name: member.name, email: member.email },
      payments,
    }
  }
}