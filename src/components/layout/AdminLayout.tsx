import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AdminSidebar } from "./Sidebar"
import { BreadcrumbHeader } from "./Header"

export function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        <SidebarInset className="flex w-full flex-1 flex-col">
          <BreadcrumbHeader />
          <main className="flex-1 w-full p-4 md:p-6">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

