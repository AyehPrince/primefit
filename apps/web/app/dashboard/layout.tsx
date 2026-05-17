"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { useAuthStore } from "@/lib/store"
import { cn } from "@/lib/utils"
import {
  Dumbbell,
  LayoutDashboard,
  Users,
  CreditCard,
  Calendar,
  LogIn,
  BadgeCheck,
  LogOut,
  Menu,
  X,
  UserCog,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/members", label: "Members", icon: Users },
  { href: "/dashboard/plans", label: "Plans", icon: BadgeCheck },
  { href: "/dashboard/classes", label: "Classes", icon: Calendar },
  { href: "/dashboard/checkin", label: "Check-in", icon: LogIn },
  { href: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { href: "/dashboard/staff", label: "Staff", icon: UserCog },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const { user, clearAuth, isAuthenticated } = useAuthStore()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!isAuthenticated()) {
      router.push("/login")
    }
  }, [])

  if (!mounted) return (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
  </div>
)

  const handleLogout = () => {
    clearAuth()
    toast.success("Logged out successfully")
    router.push("/login")
  }

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase() ?? "?"

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-72 bg-slate-900 z-30 transform transition-transform duration-200",
          "lg:relative lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-6">
          <div className="bg-orange-500 p-2 rounded-lg">
            <Dumbbell className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold">PrimeFit</h1>
            <p className="text-slate-400 text-xs truncate max-w-[130px]">
              {user?.gymName ?? "Loading..."}
            </p>
          </div>
          <button
            className="ml-auto lg:hidden text-slate-400"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <Separator className="bg-slate-700" />

        {/* Nav */}
        <nav className="p-4 space-y-2 mt-2 pb-32">
  {navItems.map((item) => {
    const Icon = item.icon
    const active = pathname === item.href
    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setSidebarOpen(false)}
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
          active
            ? "bg-orange-500 text-white"
            : "text-slate-400 hover:text-white hover:bg-slate-800"
        )}
      >
        <Icon className="h-5 w-5 flex-shrink-0" />
        {item.label}
      </Link>
    )
  })}
</nav>

{/* User */}
<div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-900">
  <Separator className="bg-slate-700 mb-4" />
  <div className="flex items-center gap-3">
    <Avatar className="h-9 w-9 flex-shrink-0">
      <AvatarFallback className="bg-orange-500 text-white text-xs font-bold">
        {initials}
      </AvatarFallback>
    </Avatar>
    <div className="flex-1 min-w-0">
      <p className="text-white text-sm font-medium truncate">{user?.name}</p>
      <p className="text-slate-400 text-xs">{user?.role}</p>
    </div>
    <Button
      variant="ghost"
      size="icon"
      onClick={handleLogout}
      className="text-slate-400 hover:text-red-400 hover:bg-slate-800 flex-shrink-0"
    >
      <LogOut className="h-4 w-4" />
    </Button>
  </div>
</div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-4 lg:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5 text-slate-600" />
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-1.5 rounded-md">
              <Dumbbell className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-slate-900">PrimeFit</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}