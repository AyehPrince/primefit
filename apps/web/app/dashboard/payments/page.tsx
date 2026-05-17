"use client"

import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import api from "@/lib/api"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { CreditCard, Plus, TrendingUp, ExternalLink } from "lucide-react"

export default function PaymentsPage() {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    memberId: "",
    amount: "",
    description: "",
  })
  const [paymentLink, setPaymentLink] = useState<string | null>(null)

  const { data, isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: () => api.get("/payments?limit=20").then((r) => r.data),
  })

  const { data: members } = useQuery({
    queryKey: ["members-list"],
    queryFn: () => api.get("/members?limit=100").then((r) => r.data),
  })

  const initPayment = useMutation({
    mutationFn: (data: any) => api.post("/payments/initialize", data),
    onSuccess: (res) => {
      setPaymentLink(res.data.authorizationUrl)
      queryClient.invalidateQueries({ queryKey: ["payments"] })
      toast.success("Payment link generated!")
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.error ?? "Failed to initialize payment")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    initPayment.mutate({
      memberId: form.memberId,
      amount: Number(form.amount),
      description: form.description,
    })
  }

  const statusColor: any = {
    SUCCESS: "bg-green-100 text-green-700",
    PENDING: "bg-yellow-100 text-yellow-700",
    FAILED: "bg-red-100 text-red-700",
    REFUNDED: "bg-blue-100 text-blue-700",
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Payments</h1>
          <p className="text-slate-500 mt-1">Track and manage member payments</p>
        </div>
        <Dialog open={open} onOpenChange={(o) => {
          setOpen(o)
          if (!o) {
            setPaymentLink(null)
            setForm({ memberId: "", amount: "", description: "" })
          }
        }}>
          <DialogTrigger asChild>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Payment
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Initialize Payment</DialogTitle>
            </DialogHeader>
            {paymentLink ? (
              <div className="space-y-4 mt-2">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-green-700 font-medium mb-2">Payment link generated!</p>
                  <p className="text-sm text-green-600 mb-4">
                    Share this link with the member to complete payment
                  </p>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                    onClick={() => window.open(paymentLink, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open Payment Page
                  </Button>
                </div>
                <p className="text-xs text-slate-400 text-center break-all">{paymentLink}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                <div className="space-y-2">
                  <Label>Member</Label>
                  <select
                    className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm"
                    value={form.memberId}
                    onChange={(e) => setForm({ ...form, memberId: e.target.value })}
                    required
                  >
                    <option value="">Select a member...</option>
                    {members?.members?.map((m: any) => (
                      <option key={m.id} value={m.id}>
                        {m.name} — {m.email}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Amount (GHS)</Label>
                  <Input
                    type="number"
                    placeholder="150"
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Input
                    placeholder="Monthly Basic plan payment"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={initPayment.isPending}
                >
                  {initPayment.isPending ? "Generating..." : "Generate Payment Link"}
                </Button>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Revenue card */}
      <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Total Revenue</p>
              <p className="text-4xl font-bold mt-1">
                GHS {Number(data?.totalRevenue ?? 0).toFixed(2)}
              </p>
              <p className="text-orange-100 text-sm mt-1">All time successful payments</p>
            </div>
            <TrendingUp className="h-16 w-16 text-orange-300" />
          </div>
        </CardContent>
      </Card>

      {/* Payments table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-orange-500" />
            Payment History
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-6 space-y-3">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : data?.payments?.length === 0 ? (
            <div className="p-12 text-center">
              <CreditCard className="h-12 w-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500">No payments yet</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.payments?.map((payment: any) => (
                  <TableRow key={payment.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-sm text-slate-900">
                          {payment.member?.name}
                        </p>
                        <p className="text-xs text-slate-400">{payment.member?.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-slate-900">
                      GHS {Number(payment.amount).toFixed(2)}
                    </TableCell>
                    <TableCell className="text-sm text-slate-600">
                      {payment.description ?? "—"}
                    </TableCell>
                    <TableCell>
                      <Badge className={`${statusColor[payment.status]} border-0`}>
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-slate-500">
                      {new Date(payment.createdAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}