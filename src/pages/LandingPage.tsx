import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp, Users, Zap, ChevronRight, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"

export function LandingPage(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <LineChart className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">MetricFlow</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Button variant="ghost">Features</Button>
                <Button variant="ghost">Pricing</Button>
                <Button variant="ghost">Documentation</Button>
                <Button variant="ghost">About</Button>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative mt-16 overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 pt-16 dark:from-gray-900 dark:to-gray-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/5"></div>
            <div className="absolute -bottom-48 left-0 h-96 w-96 rounded-full bg-primary/5"></div>
            <div className="absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-primary/5"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Top Badge */}
            <div className="mx-auto mb-8 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm dark:border-gray-800 dark:bg-gray-900">
              <span className="mr-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                New
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                Introducing Advanced Analytics 2.0
              </span>
              <ChevronRight className="ml-2 h-4 w-4 text-gray-400" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Transform Your SaaS Metrics
              <span className="relative mt-2 block text-primary">
                Into Growth Opportunities
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 300 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C71.5 2.5 143.5 2.5 299 5.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Get deep insights into your subscription analytics. Track MRR, churn,
              and customer behavior with powerful visualization tools designed for
              modern SaaS businesses.
            </p>

            {/* Enhanced CTA Section */}
            <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="h-12 px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8">
                Schedule Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                Cancel anytime
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
                >
                  <dt className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto mt-20 max-w-7xl">
            <div className="relative rounded-xl bg-gray-900 p-4 shadow-2xl">
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                  alt="Dashboard Preview"
                  className="w-full object-cover"
                />
              </div>
              {/* Floating Cards */}
              <div className="absolute -left-8 top-1/2 hidden -translate-y-1/2 transform rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-800 dark:bg-gray-900 md:block">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Monthly Growth</p>
                    <p className="text-lg font-bold text-primary">+28.4%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-8 top-1/4 hidden transform rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-800 dark:bg-gray-900 md:block">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Active Users</p>
                    <p className="text-lg font-bold text-green-600">12.5k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content remains the same */}
      {/* ... */}
    </div>
  )
}

const stats = [
  {
    label: "Active Users",
    value: "10,000+",
  },
  {
    label: "Data Points",
    value: "1B+",
  },
  {
    label: "Countries",
    value: "150+",
  },
  {
    label: "Customer Rating",
    value: "4.9/5",
  },
]