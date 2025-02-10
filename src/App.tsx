import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Dashboard } from "@/components/dashboard/Dashboard"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Router>
          <DashboardLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/analytics"
                element={<div className="p-4">Analytics Page (Coming Soon)</div>}
              />
              <Route
                path="/customers"
                element={<div className="p-4">Customers Page (Coming Soon)</div>}
              />
              <Route
                path="/settings"
                element={<div className="p-4">Settings Page (Coming Soon)</div>}
              />
            </Routes>
          </DashboardLayout>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App