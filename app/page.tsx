"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Phone, User, Activity } from "lucide-react"

export default function HomePage() {
  const [isSignUp, setIsSignUp] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Redirect to category selection page
    window.location.href = "/categories"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 page-transition">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2 animate-slide-in-left">
            <Activity className="h-8 w-8 text-primary medical-icon-pulse" />
            <span className="text-2xl font-bold text-foreground">Lifespan</span>
          </div>

          {/* Emergency Service Button */}
          <Button
            variant="destructive"
            size="lg"
            className="emergency-pulse hover-lift ripple-effect animate-slide-in-right"
            onClick={() => (window.location.href = "/emergency")}
          >
            <AlertTriangle className="mr-2 h-5 w-5" />
            Emergency Service
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Welcome Content */}
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm animate-scale-in stagger-1">
                Comprehensive Health Solutions
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight animate-fade-in stagger-2">
                Your Health, <span className="text-primary text-shimmer">Our Priority</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl animate-fade-in stagger-3">
                Welcome to Lifespan - your comprehensive healthcare platform providing expert solutions for humans,
                animals, and automotive health needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <Card className="hover-lift card-hover animate-fade-in stagger-4">
                <CardContent className="p-4 text-center">
                  <User className="h-8 w-8 text-primary mx-auto mb-2 medical-icon-pulse" />
                  <h3 className="font-semibold">Human Health</h3>
                  <p className="text-sm text-muted-foreground">Medical care & wellness</p>
                </CardContent>
              </Card>

              <Card className="hover-lift card-hover animate-fade-in stagger-5">
                <CardContent className="p-4 text-center">
                  <Activity className="h-8 w-8 text-secondary mx-auto mb-2 medical-icon-breathe" />
                  <h3 className="font-semibold">Animal Care</h3>
                  <p className="text-sm text-muted-foreground">Veterinary services</p>
                </CardContent>
              </Card>

              <Card className="hover-lift card-hover animate-fade-in stagger-5">
                <CardContent className="p-4 text-center">
                  <Phone className="h-8 w-8 text-accent mx-auto mb-2 animate-float" />
                  <h3 className="font-semibold">Auto Health</h3>
                  <p className="text-sm text-muted-foreground">Vehicle maintenance</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="w-full max-w-md animate-slide-in-right">
            <Card className="hover-lift card-hover">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{isSignUp ? "Join Lifespan" : "Welcome Back"}</CardTitle>
                <CardDescription>
                  {isSignUp ? "Create your account to access our health services" : "Sign in to your Lifespan account"}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {isSignUp && (
                    <div className="space-y-2 animate-fade-in">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="focus-ring"
                        required
                      />
                    </div>
                  )}

                  <div className="space-y-2 animate-fade-in stagger-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="focus-ring"
                      required
                    />
                  </div>

                  <div className="space-y-2 animate-fade-in stagger-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="focus-ring"
                      required
                    />
                  </div>

                  {isSignUp && (
                    <div className="space-y-2 animate-fade-in stagger-3">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="focus-ring"
                        required
                      />
                    </div>
                  )}

                  <Button type="submit" className="w-full hover-lift ripple-effect animate-fade-in stagger-4">
                    {isSignUp ? "Create Account" : "Sign In"}
                  </Button>
                </form>

                <div className="mt-4 text-center animate-fade-in stagger-5">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-sm text-primary hover:underline transition-colors duration-200"
                  >
                    {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
