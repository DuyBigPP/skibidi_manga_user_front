import type React from "react"
import { useLocation, Link } from "react-router-dom"
import { ChevronRight, Home } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { menuItems } from "@/config/menu"

interface BreadcrumbItem {
  label: string
  path: string
  icon?: React.ReactNode
}

export function BreadcrumbHeader() {
  const location = useLocation()
  const breadcrumbs = generateBreadcrumbs(location.pathname)

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center bg-background px-4 lg:px-6">
      <div className="flex h-full items-center gap-3">
        <SidebarTrigger />
        <div data-orientation="vertical" className="shrink-0 bg-border w-[1px] h-4"></div>

        <nav className="flex items-center text-sm">
          <ol className="flex items-center gap-1">
            <li>
              <Link
                to="/"
                className="flex h-9 items-center gap-1.5 rounded-md px-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Home className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only sm:inline">Home</span>
              </Link>
            </li>

            {breadcrumbs.map((item, index) => (
              <li key={item.path} className="flex items-center gap-1">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="flex h-9 items-center gap-1.5 rounded-md px-2 font-medium text-foreground">
                    {item.icon}
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="flex h-9 items-center gap-1.5 rounded-md px-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.icon}
                    <span className="hidden md:inline">{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  )
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  // Split the pathname into segments
  const paths = pathname.split("/").filter(Boolean)
  if (paths.length === 0) return []

  const breadcrumbs: BreadcrumbItem[] = []
  let currentPath = ""

  paths.forEach((segment) => {
    currentPath += `/${segment}`

    // Find matching menu item
    const menuItem = findMenuItemByPath(currentPath)
    if (menuItem) {
      // If the menu item has children and the current path exactly matches the parent's path,
      // set breadcrumbPath to the first child's path.
      const breadcrumbPath =
        menuItem.children && menuItem.children.length > 0 && currentPath === menuItem.path
          ? menuItem.children[0].path
          : menuItem.path

      breadcrumbs.push({
        label: menuItem.label,
        path: breadcrumbPath,
        icon: menuItem.icon,
      })
    } else {
      // For paths not defined in the menu, create a formatted label.
      breadcrumbs.push({
        label: formatBreadcrumbLabel(segment),
        path: currentPath,
      })
    }
  })

  return breadcrumbs
}

function findMenuItemByPath(path: string) {
  // Search through the menu items for a matching path.
  return menuItems.find((item) => item.path === path)
}

function formatBreadcrumbLabel(segment: string): string {
  // Convert kebab-case or camelCase to Title Case with spaces.
  return segment
    .replace(/-/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (char) => char.toUpperCase())
}