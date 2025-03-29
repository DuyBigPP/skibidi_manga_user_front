import { AdminRoutes } from "@/routes/adminRoutes"
import { ThemeProvider } from "@/components/ui/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <AdminRoutes />
    </ThemeProvider>
  )
}

export default App