import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AdminLayout } from "@/components/layout/AdminLayout"
import DashboardPage from "@/pages/dashboard/DashboardPage"
import AnalyticsPage from "@/pages/analytics/AnalyticsPage"
import SettingsPage from "@/pages/settings/SettingsPage"

export function AdminRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

