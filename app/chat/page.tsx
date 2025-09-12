"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Activity, Send, ArrowLeft, User, Bot } from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  content: string
  sender: "user" | "doctor"
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm Dr. Lifespan, your AI health assistant. How can I help you today?",
      sender: "doctor",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const doctorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateDoctorResponse(inputMessage),
        sender: "doctor",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, doctorResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateDoctorResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("headache") || input.includes("head")) {
      return "For headaches, I recommend staying hydrated, getting adequate rest, and managing stress. If headaches persist or are severe, please consult with a healthcare professional. Would you like some specific relaxation techniques?"
    }

    if (input.includes("fever") || input.includes("temperature")) {
      return "Fever can be a sign your body is fighting an infection. Stay hydrated, rest, and monitor your temperature. If fever exceeds 103°F (39.4°C) or persists for more than 3 days, seek medical attention immediately."
    }

    if (input.includes("cough") || input.includes("cold")) {
      return "For cough and cold symptoms, try warm liquids, honey (for adults), and adequate rest. If symptoms worsen or persist beyond 10 days, or if you experience difficulty breathing, please consult a healthcare provider."
    }

    if (input.includes("emergency") || input.includes("urgent")) {
      return "If this is a medical emergency, please call 911 immediately or go to your nearest emergency room. For urgent but non-emergency situations, I can help guide you to appropriate care options."
    }

    if (input.includes("animal") || input.includes("pet")) {
      return "For pet health concerns, I recommend consulting with a licensed veterinarian. However, I can provide general pet care guidance. What specific concern do you have about your pet?"
    }

    if (input.includes("car") || input.includes("vehicle") || input.includes("auto")) {
      return "For automotive issues, I can help with basic diagnostics and maintenance advice. What specific problem are you experiencing with your vehicle? Is it making unusual sounds, showing warning lights, or having performance issues?"
    }

    return "Thank you for your question. I'm here to provide general health guidance and information. For specific medical concerns, always consult with a qualified healthcare professional. Could you provide more details about what you'd like to know?"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/categories" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <Activity className="h-8 w-8 text-primary animate-pulse-gentle" />
            <span className="text-2xl font-bold text-foreground">Lifespan</span>
          </Link>

          <Badge variant="secondary">AI Health Assistant</Badge>
        </div>
      </header>

      {/* Main Chat Interface */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <Card className="h-[calc(100vh-8rem)] flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="flex items-center space-x-4">
              {/* Doctor Avatar */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                  <img
                    src="/doctor-avatar-cartoon-medical-professional.jpg"
                    alt="Dr. Lifespan"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
              </div>
              <div>
                <CardTitle className="text-xl">Dr. Lifespan</CardTitle>
                <p className="text-sm text-muted-foreground">AI Health Assistant • Online</p>
              </div>
            </div>
          </CardHeader>

          {/* Messages Area */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground ml-4"
                      : "bg-muted text-muted-foreground mr-4"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === "doctor" && <Bot className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />}
                    {message.sender === "user" && (
                      <User className="h-4 w-4 mt-0.5 text-primary-foreground flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-muted text-muted-foreground rounded-lg p-3 mr-4">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-primary" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input Area */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Dr. Lifespan about your health concerns..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={!inputMessage.trim()} className="hover-lift">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              This AI assistant provides general information only. Always consult healthcare professionals for medical
              advice.
            </p>
          </div>
        </Card>
      </main>
    </div>
  )
}
