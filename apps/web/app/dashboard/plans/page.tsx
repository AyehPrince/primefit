"use client"

import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import api from "@/lib/api"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Plus, BadgeCheck, Users } from "lucide-react"

export default function PlansPage() {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    billingCycle: "MONTHLY",
    maxClassesPerWeek: "",
    accessHoursStart: "6",
    accessHoursEnd: "22",
    features: "",
  })

  const { data: plans, isLoading } = useQuery({
    queryKey: ["plans"],
    queryFn: () => api.get("/plans").then((r) => r.data),
  })

  const createPlan = useMutation({
    mutationFn: (data: any) => api.post("/plans", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["plans"] })
      toast.success("Plan created successfully!")
      setOpen(false)
      setForm({
        name: "",
        description: "",
        price: "",
        billingCycle: "MONTHLY",
        maxClassesPerWeek: "",
        accessHoursStart: "6",
        accessHoursEnd: "22",
        features: "",
      })
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.error ?? "Failed to create plan")
    },
  })

  const deletePlan = useMutation({
    mutationFn: (id: string) => api.delete(`/plans/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["plans"] })
      toast.success("Plan deactivated")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createPlan.mutate({
      name: form.name,
      description: form.description,
      price: Number(form.price),
      billingCycle: form.billingCycle,
      maxClassesPerWeek: form.maxClassesPerWeek ? Number(form.maxClassesPerWeek) : undefined,
      accessHoursStart: Number(form.accessHoursStart),
      accessHoursEnd: Number(form.accessHoursEnd),
      features: form.features.split(",").map((f) => f.trim()).filter(Boolean),
    })
  }

  const cycleLabel: any = {
    MONTHLY: "/ month",
    QUARTERLY: "/ quarter",
    ANNUAL: "/ year",
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Membership Plans</h1>
          <p className="text-slate-500 mt-1">Manage your gym's subscription plans</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Plan
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Membership Plan</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label>Plan Name</Label>
                <Input
                  placeholder="Monthly Basic"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Input
                  placeholder="Access to gym floor and equipment"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Price (GHS)</Label>
                  <Input
                    type="number"
                    placeholder="150"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Billing Cycle</Label>
                  <Select
                    value={form.billingCycle}
                    onValueChange={(v) => setForm({ ...form, billingCycle: v })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MONTHLY">Monthly</SelectItem>
                      <SelectItem value="QUARTERLY">Quarterly</SelectItem>
                      <SelectItem value="ANNUAL">Annual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Access Start (hour)</Label>
                  <Input
                    type="number"
                    min="0"
                    max="23"
                    value={form.accessHoursStart}
                    onChange={(e) => setForm({ ...form, accessHoursStart: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Access End (hour)</Label>
                  <Input
                    type="number"
                    min="0"
                    max="23"
                    value={form.accessHoursEnd}
                    onChange={(e) => setForm({ ...form, accessHoursEnd: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Features (comma separated)</Label>
                <Input
                  placeholder="Gym floor access, Locker room, Free WiFi"
                  value={form.features}
                  onChange={(e) => setForm({ ...form, features: e.target.value })}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                disabled={createPlan.isPending}
              >
                {createPlan.isPending ? "Creating..." : "Create Plan"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Plans grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-48 w-full" />
          ))}
        </div>
      ) : plans?.length === 0 ? (
        <div className="text-center py-12">
          <BadgeCheck className="h-12 w-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500">No plans yet</p>
          <p className="text-slate-400 text-sm mt-1">Create your first membership plan</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans?.map((plan: any) => (
            <Card key={plan.id} className="relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <CardDescription className="mt-1">{plan.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {plan.billingCycle}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900">
                    GHS {Number(plan.price).toFixed(0)}
                  </span>
                  <span className="text-slate-400 text-sm ml-1">
                    {cycleLabel[plan.billingCycle]}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-500">
                    {plan._count?.members ?? 0} active members
                  </span>
                </div>

                {plan.features?.length > 0 && (
                  <ul className="space-y-1 mb-4">
                    {plan.features.map((feature: string, i: number) => (
                      <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                        <span className="text-orange-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="text-xs text-slate-400">
                  Access: {plan.accessHoursStart}:00 — {plan.accessHoursEnd}:00
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 text-red-500 hover:text-red-600 hover:bg-red-50"
                  onClick={() => deletePlan.mutate(plan.id)}
                >
                  Deactivate Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}