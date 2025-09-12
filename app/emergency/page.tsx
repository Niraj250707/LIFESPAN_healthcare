"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Phone, MapPin, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EmergencyPage() {
  const emergencyContacts = [
    { service: "Medical Emergency", number: "911", description: "Life-threatening situations" },
    { service: "Poison Control", number: "1-800-222-1222", description: "Poisoning emergencies" },
    { service: "Animal Emergency", number: "1-800-VET-HELP", description: "Pet emergencies" },
    { service: "Roadside Assistance", number: "1-800-AAA-HELP", description: "Vehicle breakdowns" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-destructive/5 via-background to-destructive/10">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="outline" className="hover-lift bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-8 w-8 text-destructive animate-pulse" />
            <h1 className="text-3xl font-bold text-destructive">Emergency Services</h1>
          </div>
        </div>

        {/* Emergency Alert */}
        <Card className="border-destructive bg-destructive/5 mb-8 animate-fade-in">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <AlertTriangle className="h-12 w-12 text-destructive" />
              <div>
                <h2 className="text-xl font-bold text-destructive mb-2">
                  If this is a life-threatening emergency, call 911 immediately
                </h2>
                <p className="text-muted-foreground">
                  For non-emergency situations, use the contacts below or consult with our AI assistant.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {emergencyContacts.map((contact, index) => (
            <Card key={index} className="hover-lift animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>{contact.service}</span>
                </CardTitle>
                <CardDescription>{contact.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-lg font-bold hover-lift bg-transparent"
                  onClick={() => window.open(`tel:${contact.number}`)}
                >
                  {contact.number}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Find Nearest Hospital</h3>
              <Button variant="outline" className="w-full bg-transparent">
                Locate Now
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Nurse Hotline</h3>
              <Button variant="outline" className="w-full bg-transparent">
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Emergency Checklist</h3>
              <Button variant="outline" className="w-full bg-transparent">
                View Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
