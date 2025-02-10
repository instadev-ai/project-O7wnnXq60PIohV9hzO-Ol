import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LineChart, GithubIcon, Mail, Shield, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

export function SignupPage(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      {/* Logo and Back Link */}
      <div className="absolute left-8 top-8">
        <Link
          to="/"
          className="flex items-center text-gray-900 hover:text-gray-900/80 dark:text-white dark:hover:text-white/80"
        >
          <LineChart className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">MetricFlow</span>
        </Link>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>
            Get started with your free account today
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Social Signup Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company name</Label>
              <Input
                id="company"
                placeholder="Your company name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                required
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Must be at least 8 characters long
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-primary hover:underline"
                >
                  terms and conditions
                </Link>
              </label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">Create account</Button>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>

      {/* Trust Indicators */}
      <div className="mt-8 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center">
          <Shield className="mr-2 h-4 w-4" />
          Secure and encrypted
        </div>
        <div className="flex items-center">
          <Clock className="mr-2 h-4 w-4" />
          Free 14-day trial
        </div>
      </div>
    </div>
  )
}