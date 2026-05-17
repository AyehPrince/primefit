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
import { Plus, Calendar, Users, Clock } from "lucide-react"

export default function ClassesPage() {
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: "",
    description: "",
    capacity: "20",
    startTime: "",
    endTime: "",
    location: "",
  })

  const { data, isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: () => api.get("/classes?limit=20").then((r) => r.data),
  })

  const createClass = useMutation({
    mutationFn: (data: any) => api.post("/classes", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes"] })
      toast.success("Class created successfully!")
      setOpen(false)
      setForm({ name: "", description: "", capacity: "20", startTime: "", endTime: "", location: "" })
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.error ?? "Failed to create class")
    },
  })

  const cancelClass = useMutation({
    mutationFn: (id: string) => api.post(`/classes/${id}/cancel`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classes"] })
      toast.success("Class cancelled")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createClass.mutate({
      ...form,
      capacity: Number(form.capacity),
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Classes</h1>
          <p className="text-slate-500 mt-1">Schedule and manage gym classes</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Class
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Schedule New Class</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label>Class Name</Label>
                <Input
                  placeholder="Morning HIIT"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Input
                  placeholder="High intensity interval training"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Capacity</Label>
                  <Input
                    type="number"
                    value={form.capacity}
                    onChange={(e) => setForm({ ...form, capacity: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input
                    placeholder="Main Floor"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Start Time</Label>
                <Input
                  type="datetime-local"
                  value={form.startTime}
                  onChange={(e) => setForm({ ...form, startTime: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>End Time</Label>
                <Input
                  type="datetime-local"
                  value={form.endTime}
                  onChange={(e) => setForm({ ...form, endTime: e.target.value })}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                disabled={createClass.isPending}
              >
                {createClass.isPending ? "Scheduling..." : "Schedule Class"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Classes table */}
      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-6 space-y-3">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : data?.classes?.length === 0 ? (
            <div className="p-12 text-center">
              <Calendar className="h-12 w-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500">No classes scheduled</p>
              <p className="text-slate-400 text-sm mt-1">Schedule your first class to get started</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class</TableHead>
                  <TableHead>Start Time</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Bookings</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.classes?.map((cls: any) => {
                  const start = new Date(cls.startTime)
                  const end = new Date(cls.endTime)
                  const duration = Math.round((end.getTime() - start.getTime()) / 60000)
                  const spotsLeft = cls.capacity - (cls._count?.bookings ?? 0)

                  return (
                    <TableRow key={cls.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-slate-900">{cls.name}</p>
                          <p className="text-xs text-slate-400">{cls.description}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-slate-600">
                        <div>
                          <p>{start.toLocaleDateString()}</p>
                          <p className="text-xs text-slate-400">{start.toLocaleTimeString()}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm text-slate-600">
                          <Clock className="h-3 w-3" />
                          {duration} min
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-slate-600">
                        {cls.location ?? "—"}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm">
                          <Users className="h-3 w-3 text-slate-400" />
                          <span className={spotsLeft === 0 ? "text-red-500" : "text-slate-600"}>
                            {cls._count?.bookings ?? 0}/{cls.capacity}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={cls.isCancelled
                            ? "bg-red-100 text-red-700 border-0"
                            : "bg-green-100 text-green-700 border-0"
                          }
                        >
                          {cls.isCancelled ? "Cancelled" : "Active"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {!cls.isCancelled && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => cancelClass.mutate(cls.id)}
                          >
                            Cancel
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}