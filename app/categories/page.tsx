"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, User, Heart, Wrench, ArrowRight, Home } from "lucide-react"
import Link from "next/link"

export default function CategoriesPage() {
  const categories = [
    {
      id: "human",
      title: "Human Health",
      description: "Comprehensive medical care, wellness programs, and health consultations",
      icon: User,
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: ["Medical Consultations", "Health Monitoring", "Wellness Programs", "Emergency Care"],
      image: "/medical-doctor-consultation-healthcare-professiona.jpg",
      href: "/human-health",
    },
    {
      id: "animals",
      title: "Animal Care",
      description: "Expert veterinary services and pet health management solutions",
      icon: Heart,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      features: ["Veterinary Care", "Pet Wellness", "Emergency Services", "Health Records"],
      image: "/veterinarian-with-pets-dogs-cats-animal-care.jpg",
      href: "/animal-care",
    },
    {
      id: "mechanics",
      title: "Automotive Health",
      description: "Professional vehicle maintenance and automotive diagnostic services",
      icon: Wrench,
      color: "text-accent",
      bgColor: "bg-accent/10",
      features: ["Vehicle Diagnostics", "Maintenance Plans", "Repair Services", "Health Reports"],
      image: "/car-mechanic-automotive-repair-garage-professional.jpg",
      href: "/automotive-care",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-primary animate-pulse-gentle" />
            <span className="text-2xl font-bold text-foreground">Lifespan</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="outline" className="hover-lift bg-transparent">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="secondary" className="mb-4">
            Choose Your Service Category
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance mb-4">
            Select Your <span className="text-primary">Health Service</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Choose from our comprehensive range of health services designed for humans, animals, and vehicles.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.id}
                className={`hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl ${category.bgColor} border-2 hover:border-primary/50 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => (window.location.href = category.href)}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Category Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Key Services
                    </h4>
                    <ul className="space-y-1">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className={`w-2 h-2 rounded-full ${category.color.replace("text-", "bg-")} mr-2`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Button
                    className={`w-full hover-lift ${category.color.replace("text-", "bg-")} text-white`}
                    onClick={(e) => {
                      e.stopPropagation()
                      window.location.href = category.href
                    }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
              <p className="text-muted-foreground mb-6">
                Our AI assistant can help you determine the best service category for your specific needs.
              </p>
              <Button size="lg" className="hover-lift">
                Chat with AI Assistant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
