import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AdminLayout } from "@/components/layout/AdminLayout"
import DashboardPage from "@/pages/dashboard/DashboardPage"
import AnalyticsPage from "@/pages/analytics/AnalyticsPage"
import SettingsPage from "@/pages/settings/SettingsPage"
import Submenu1 from "@/pages/menu1/submenu1"
import Submenu2 from "@/pages/menu1/submenu2"

export function AdminRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="menu1" element={<Navigate to="/menu1/submenu1" replace />} />
          <Route path="menu1/submenu1" element={<Submenu1 />} />
          <Route path="menu1/submenu2" element={<Submenu2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}