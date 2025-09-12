"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Activity, ArrowLeft, MapPin, Phone, Clock, Star, User, Navigation, Search, Calendar } from "lucide-react"
import Link from "next/link"

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      clinic: "Heart Care Center",
      address: "123 Medical Plaza, Suite 200",
      distance: "0.7 miles",
      rating: 4.9,
      experience: "15 years",
      phone: "(555) 123-4567",
      availability: "Available Today",
      nextSlot: "2:30 PM",
      languages: ["English", "Spanish"],
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Pediatrics",
      clinic: "Children's Health Clinic",
      address: "456 Family Avenue, Building A",
      distance: "1.2 miles",
      rating: 4.8,
      experience: "12 years",
      phone: "(555) 234-5678",
      availability: "Available Tomorrow",
      nextSlot: "10:00 AM",
      languages: ["English", "Mandarin"],
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Dermatology",
      clinic: "Skin Health Institute",
      address: "789 Wellness Street, Floor 3",
      distance: "1.8 miles",
      rating: 4.7,
      experience: "10 years",
      phone: "(555) 345-6789",
      availability: "Available This Week",
      nextSlot: "Thu 11:15 AM",
      languages: ["English", "Spanish", "Portuguese"],
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      clinic: "Bone & Joint Center",
      address: "321 Sports Medicine Blvd",
      distance: "2.1 miles",
      rating: 4.6,
      experience: "18 years",
      phone: "(555) 456-7890",
      availability: "Available Next Week",
      nextSlot: "Mon 9:00 AM",
      languages: ["English"],
    },
  ]

  const specialties = [
    "all",
    "Cardiology",
    "Pediatrics",
    "Dermatology",
    "Orthopedics",
    "Internal Medicine",
    "Neurology",
  ]

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.clinic.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSpecialty =
      selectedSpecialty === "all" || doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase()
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/10">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/human-health" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <Activity className="h-8 w-8 text-primary animate-pulse-gentle" />
            <span className="text-2xl font-bold text-foreground">Lifespan</span>
          </Link>

          <Badge variant="secondary">Doctor Finder</Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
            <User className="h-8 w-8 text-secondary" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-balance mb-2">
            Find <span className="text-secondary">Doctors</span>
          </h1>
          <p className="text-lg text-muted-foreground">Search for specialist doctors and book appointments</p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8 animate-fade-in">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search doctors by name, specialty, or clinic..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {specialties.map((specialty) => (
                    <Button
                      key={specialty}
                      variant={selectedSpecialty === specialty ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSpecialty(specialty)}
                      className="capitalize bg-transparent"
                    >
                      {specialty}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Doctors List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredDoctors.map((doctor, index) => (
            <Card key={index} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                        <p className="text-secondary font-medium mb-1">{doctor.specialty}</p>
                        <p className="text-sm text-muted-foreground mb-2">{doctor.clinic}</p>
                        <div className="flex items-center text-muted-foreground text-sm mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {doctor.address}
                        </div>
                      </div>
                      <Badge variant={doctor.availability.includes("Today") ? "default" : "secondary"}>
                        {doctor.availability}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{doctor.rating}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Navigation className="h-4 w-4 mr-1" />
                        {doctor.distance}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {doctor.experience} experience
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium mb-1">Next Available:</p>
                        <Badge variant="outline" className="text-xs">
                          {doctor.nextSlot}
                        </Badge>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-1">Languages:</p>
                        <div className="flex flex-wrap gap-1">
                          {doctor.languages.map((lang, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm" className="hover-lift bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      {doctor.phone}
                    </Button>
                    <Button size="sm" className="hover-lift bg-secondary text-secondary-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No doctors found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or specialty filter</p>
          </div>
        )}
      </main>
    </div>
  )
}
