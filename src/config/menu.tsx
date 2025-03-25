import React from "react"
import { Home, BarChart2, Settings } from "lucide-react"

export type MenuItem = {
  label: string
  path: string
  icon: React.ReactNode
}

export const menuItems: MenuItem[] = [
  { label: "Dashboard", path: "/dashboard", icon: <Home size={16} /> },
  { label: "Analytics", path: "/analytics", icon: <BarChart2 size={16} /> },
  { label: "Settings", path: "/settings", icon: <Settings size={16} /> },
]