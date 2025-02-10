import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Menu,
} from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 transform border-r border-gray-200 bg-white p-4 transition-all dark:border-gray-800 dark:bg-gray-950",
          isCollapsed && "-translate-x-full md:translate-x-0 md:w-16"
        )}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              {!isCollapsed && (
                <h2 className="text-lg font-bold">Dashboard</h2>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="md:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800",
                    location.pathname === item.href &&
                      "bg-gray-100 dark:bg-gray-800"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.title}</span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={cn(
          "ml-64 transition-all",
          isCollapsed && "ml-0 md:ml-16"
        )}
      >
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
          <div className="flex h-16 items-center gap-4 px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-lg font-semibold">SaaS Dashboard</h1>
          </div>
        </header>
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}