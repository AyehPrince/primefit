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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { LogIn, CheckCircle, XCircle, Search } from "lucide-react"

export default function CheckInPage() {
  const queryClient = useQueryClient()
  const [identifier, setIdentifier] = useState("")
  const [method, setMethod] = useState<string>("QR")
  const [lastCheckIn, setLastCheckIn] = useState<any>(null)

  const { data: checkIns, isLoading } = useQuery({
    queryKey: ["checkins"],
    queryFn: () => api.get("/checkin?limit=20").then((r) => r.data),
  })

  const checkIn = useMutation({
    mutationFn: (data: any) => api.post("/checkin", data),
    onSuccess: (res) => {
      setLastCheckIn(res.data)
      setIdentifier("")
      queryClient.invalidateQueries({ queryKey: ["checkins"] })
      toast.success(`✅ ${res.data.member.name} checked in!`)
    },
    onError: (err: any) => {
      setLastCheckIn({ error: err.response?.data?.error ?? "Check-in failed" })
      toast.error(err.response?.data?.error ?? "Check-in failed")
    },
  })

  const handleCheckIn = (e: React.FormEvent) => {
    e.preventDefault()
    if (!identifier.trim()) return
    checkIn.mutate({ identifier, method })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Check-in</h1>
        <p className="text-slate-500 mt-1">Scan QR code or search member to check in</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Check-in form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LogIn className="h-5 w-5 text-orange-500" />
              Check In Member
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCheckIn} className="space-y-4">
              <div className="space-y-2">
                <Label>Method</Label>
                <Select value={method} onValueChange={(value) => setMethod(value ?? "QR")}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="QR">QR Code</SelectItem>
                    <SelectItem value="PIN">PIN</SelectItem>
                    <SelectItem value="MANUAL">Manual (Name/Email)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>
                  {method === "QR" ? "QR Code" : method === "PIN" ? "PIN" : "Name or Email"}
                </Label>
                <Input
                  placeholder={
                    method === "QR"
                      ? "Scan or paste QR code..."
                      : method === "PIN"
                      ? "Enter PIN..."
                      : "Enter member name or email..."
                  }
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  autoFocus
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                disabled={checkIn.isPending || !identifier.trim()}
              >
                {checkIn.isPending ? "Checking in..." : "Check In"}
              </Button>
            </form>

            {/* Result */}
            {lastCheckIn && (
              <div className={`mt-6 p-4 rounded-lg border ${
                lastCheckIn.error
                  ? "bg-red-50 border-red-200"
                  : "bg-green-50 border-green-200"
              }`}>
                {lastCheckIn.error ? (
                  <div className="flex items-center gap-3">
                    <XCircle className="h-8 w-8 text-red-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-700">Access Denied</p>
                      <p className="text-sm text-red-600">{lastCheckIn.error}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-700">Access Granted!</p>
                      <p className="text-lg font-bold text-green-800">{lastCheckIn.member?.name}</p>
                      <p className="text-sm text-green-600">{lastCheckIn.member?.plan}</p>
                      <p className="text-xs text-green-500 mt-1">
                        {new Date(lastCheckIn.checkedInAt).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent check-ins */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-orange-500" />
              Recent Check-ins
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="p-6 space-y-3">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            ) : checkIns?.checkIns?.length === 0 ? (
              <div className="p-8 text-center">
                <LogIn className="h-10 w-10 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-400 text-sm">No check-ins yet today</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Member</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {checkIns?.checkIns?.map((checkIn: any) => (
                    <TableRow key={checkIn.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-sm text-slate-900">
                            {checkIn.member?.name}
                          </p>
                          <p className="text-xs text-slate-400">{checkIn.member?.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {checkIn.method}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-slate-500">
                        {new Date(checkIn.checkedInAt).toLocaleTimeString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}