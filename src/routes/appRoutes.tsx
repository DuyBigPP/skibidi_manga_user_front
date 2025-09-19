import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "@/contexts/AuthContext"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import { AppLayout } from "@/components/layout/AppLayout"
import { generateRoutes } from "@/utils/routeGenerator"
import { menuItems } from "@/config/menu"

// Import login page
import LoginPage from "@/pages/login"

export function AppRoutes() {
  const protectedRoutes = generateRoutes(menuItems)

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Route - Login */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Protected Routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }>
            {/* Default redirect to dashboard */}
            <Route index element={<Navigate to="/dashboard" replace />} />
            
            {/* Auto-generated protected routes */}
            {protectedRoutes}
          </Route>
          
          {/* Catch all - redirect to dashboard or login */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}