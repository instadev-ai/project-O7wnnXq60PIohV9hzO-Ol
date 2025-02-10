import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp, Users, Zap } from "lucide-react"
import { Link } from "react-router-dom"

export function LandingPage(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="mt-16 px-4 pt-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Transform Your SaaS Metrics
            <span className="block text-primary">Into Growth Opportunities</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Get deep insights into your subscription analytics. Track MRR, churn,
            and customer behavior with powerful visualization tools designed for
            modern SaaS businesses.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6">
              Schedule Demo
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto mt-20 max-w-7xl overflow-hidden rounded-xl bg-gray-900 p-4 shadow-2xl">
          <div className="aspect-[16/9] overflow-hidden rounded-lg bg-gray-800">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
              alt="Dashboard Preview"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto mt-32 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to scale your SaaS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Powerful features to help you track, analyze, and grow your
            subscription business.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="mx-auto mt-32 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Track the metrics that matter most
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Get real-time insights into your key business metrics. From MRR to
              customer churn, we help you make data-driven decisions.
            </p>
            <ul className="mt-8 space-y-4">
              {metrics.map((metric, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {metric}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl bg-gray-900 p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary opacity-10 rounded-2xl" />
            <div className="relative space-y-4">
              {/* Placeholder for charts/graphs */}
              <div className="h-24 rounded-lg bg-gray-800" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 rounded-lg bg-gray-800" />
                <div className="h-32 rounded-lg bg-gray-800" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto mt-32 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-20 shadow-xl sm:px-12 sm:py-32">
          <div className="relative">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your SaaS metrics?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-50">
                Join thousands of SaaS companies using MetricFlow to make better,
                data-driven decisions.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-12 px-6 bg-white text-primary hover:bg-gray-100"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 text-white border-white hover:bg-white/10"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Product
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-primary dark:text-gray-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-primary dark:text-gray-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Resources
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-primary dark:text-gray-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-primary dark:text-gray-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} MetricFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Revenue Analytics",
    description:
      "Track MRR, ARR, and revenue growth with detailed breakdowns and forecasting.",
    icon: BarChart3,
  },
  {
    title: "Customer Insights",
    description:
      "Understand your customers better with cohort analysis and behavior tracking.",
    icon: Users,
  },
  {
    title: "Churn Analysis",
    description:
      "Identify churn patterns and take proactive measures to retain customers.",
    icon: PieChart,
  },
  {
    title: "Real-time Metrics",
    description:
      "Get instant updates on your key metrics with real-time dashboard updates.",
    icon: Zap,
  },
  {
    title: "Custom Reports",
    description:
      "Create and schedule custom reports tailored to your business needs.",
    icon: LineChart,
  },
  {
    title: "Growth Tracking",
    description:
      "Monitor your growth metrics and identify opportunities for expansion.",
    icon: TrendingUp,
  },
]

const metrics = [
  "Monthly Recurring Revenue (MRR)",
  "Annual Recurring Revenue (ARR)",
  "Customer Lifetime Value (CLV)",
  "Customer Acquisition Cost (CAC)",
  "Net Revenue Retention (NRR)",
  "Churn Rate Analysis",
]

const footerLinks = {
  product: ["Features", "Pricing", "Integrations", "API", "Documentation"],
  company: ["About", "Blog", "Careers", "Press", "Partners"],
  resources: ["Community", "Contact", "DPA", "Status"],
  legal: ["Privacy", "Terms", "Security", "Compliance"],
}