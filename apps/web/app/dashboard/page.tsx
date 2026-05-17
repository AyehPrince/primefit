"use client"

import { useQuery } from "@tanstack/react-query"
import { useAuthStore } from "@/lib/store"
import api from "@/lib/api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Users,
  CreditCard,
  LogIn,
  Calendar,
  TrendingUp,
  UserCheck,
} from "lucide-react"

export default function DashboardPage() {
  const { user } = useAuthStore()

  const { data: members, isLoading: loadingMembers } = useQuery({
    queryKey: ["members"],
    queryFn: () => api.get("/members?limit=5").then((r) => r.data),
  })

  const { data: payments, isLoading: loadingPayments } = useQuery({
    queryKey: ["payments"],
    queryFn: () => api.get("/payments?limit=5").then((r) => r.data),
  })

  const { data: checkIns, isLoading: loadingCheckIns } = useQuery({
    queryKey: ["checkins"],
    queryFn: () => api.get("/checkin?limit=5").then((r) => r.data),
  })

  const { data: classes, isLoading: loadingClasses } = useQuery({
    queryKey: ["classes"],
    queryFn: () => api.get("/classes?upcoming=true&limit=5").then((r) => r.data),
  })

  const activeMembers = members?.members?.filter((m: any) => m.status === "ACTIVE").length ?? 0
  const totalMembers = members?.pagination?.total ?? 0
  const totalRevenue = payments?.totalRevenue ?? 0
  const todayCheckIns = checkIns?.pagination?.total ?? 0
  const upcomingClasses = classes?.pagination?.total ?? 0

  const stats = [
    {
      title: "Total Members",
      value: totalMembers,
      sub: `${activeMembers} active`,
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: "Total Revenue",
      value: `GHS ${Number(totalRevenue).toFixed(2)}`,
      sub: "All time",
      icon: CreditCard,
      color: "text-green-500",
      bg: "bg-green-50",
    },
    {
      title: "Check-ins",
      value: todayCheckIns,
      sub: "Total recorded",
      icon: LogIn,
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      title: "Upcoming Classes",
      value: upcomingClasses,
      sub: "Scheduled",
      icon: Calendar,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Good {new Date().getHours() < 12 ? "morning" : new Date().getHours() < 17 ? "afternoon" : "evening"}, {user?.name?.split(" ")[0]} 👋
        </h1>
        <p className="text-slate-500 mt-1">
          Here's what's happening at {user?.gymName} today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{stat.sub}</p>
                  </div>
                  <div className={`${stat.bg} p-3 rounded-xl`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent members */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-orange-500" />
              Recent Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loadingMembers ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            ) : members?.members?.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-4">No members yet</p>
            ) : (
              <div className="space-y-3">
                {members?.members?.slice(0, 5).map((member: any) => (
                  <div key={member.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-slate-100 rounded-full h-8 w-8 flex items-center justify-center text-xs font-medium text-slate-600">
                        {member.name.split(" ").map((n: string) => n[0]).join("").toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{member.name}</p>
                        <p className="text-xs text-slate-400">{member.email}</p>
                      </div>
                    </div>
                    <Badge
                      variant={member.status === "ACTIVE" ? "default" : "secondary"}
                      className={member.status === "ACTIVE" ? "bg-green-100 text-green-700 hover:bg-green-100" : ""}
                    >
                      {member.status}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent check-ins */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-orange-500" />
              Recent Check-ins
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loadingCheckIns ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            ) : checkIns?.checkIns?.length === 0 ? (
              <p className="text-slate-400 text-sm text-center py-4">No check-ins yet</p>
            ) : (
              <div className="space-y-3">
                {checkIns?.checkIns?.slice(0, 5).map((checkIn: any) => (
                  <div key={checkIn.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-orange-100 rounded-full h-8 w-8 flex items-center justify-center">
                        <LogIn className="h-4 w-4 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{checkIn.member?.name}</p>
                        <p className="text-xs text-slate-400">
                          {new Date(checkIn.checkedInAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {checkIn.method}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}