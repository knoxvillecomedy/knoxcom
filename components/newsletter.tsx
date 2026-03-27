"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Sparkles, Star } from "lucide-react"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Marketing integration placeholder
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <section id="newsletter" className="py-12 md:py-20 px-4 bg-primary relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] w-32 h-32 rounded-full bg-accent/20 blur-2xl animate-pulse-soft" />
        <div className="absolute bottom-10 right-[15%] w-40 h-40 rounded-full bg-chart-2/15 blur-2xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        
        <Mail className="absolute top-16 right-[12%] w-8 h-8 text-primary-foreground/20 animate-float" />
        <Sparkles className="absolute bottom-20 left-[10%] w-7 h-7 text-accent/40 animate-wiggle" />
        <Star className="absolute top-1/3 left-[8%] w-6 h-6 text-primary-foreground/15 animate-float-delay fill-primary-foreground/15" />
        <div className="absolute bottom-[30%] right-[8%] w-12 h-12 rounded-full border-2 border-primary-foreground/10 animate-float-slow" />
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 animate-float">
          <Mail className="w-7 h-7 text-primary-foreground" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Stay in the Loop
        </h2>
        
        <p className="text-lg text-primary-foreground/80 mb-8">
          Be the first to know about lineup announcements, ticket drops, and festival updates.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12 focus:ring-accent focus:border-accent"
            required
          />
          <Button 
            type="submit"
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 px-8 transition-all hover:scale-105 shadow-lg"
          >
            Get Updates
          </Button>
        </form>

        <p className="text-sm text-primary-foreground/60 mt-4 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          No spam. Just laughs.
        </p>
      </div>
    </section>
  )
}
