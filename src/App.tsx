import { AppRoutes } from "@/routes/appRoutes"
import { ThemeProvider } from "@/components/ui/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-theme">
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App