import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Dashboard } from "@/components/dashboard/Dashboard"
import { LandingPage } from "@/pages/LandingPage"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/dashboard"
              element={
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              }
            />
            <Route
              path="/analytics"
              element={
                <DashboardLayout>
                  <div className="p-4">Analytics Page (Coming Soon)</div>
                </DashboardLayout>
              }
            />
            <Route
              path="/customers"
              element={
                <DashboardLayout>
                  <div className="p-4">Customers Page (Coming Soon)</div>
                </DashboardLayout>
              }
            />
            <Route
              path="/settings"
              element={
                <DashboardLayout>
                  <div className="p-4">Settings Page (Coming Soon)</div>
                </DashboardLayout>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App