import React from "react"
import { Home, Library, Search, Heart, History, Settings } from "lucide-react"

export type MenuItem = {
  label: string
  path: string
  icon: React.ReactNode
  // Optional children for submenus
  children?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  { label: "Home", path: "/dashboard", icon: <Home size={16} /> },
  { label: "Library", path: "/library", icon: <Library size={16} /> },
  { label: "Search", path: "/search", icon: <Search size={16} /> },
  { label: "Favorites", path: "/favorites", icon: <Heart size={16} /> },
  { label: "History", path: "/history", icon: <History size={16} /> },
  { label: "Settings", path: "/settings", icon: <Settings size={16} /> },
]