"use client"

import { Button } from "@/components/ui/button"
import { Star, Sparkles, Laugh } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary pt-16 pb-12">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent animate-pulse-soft blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary animate-pulse-soft blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-chart-2 animate-pulse-soft blur-3xl" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        <Star className="absolute top-[15%] left-[10%] w-8 h-8 text-accent animate-float fill-accent" />
        <Star className="absolute top-[25%] right-[15%] w-6 h-6 text-chart-3 animate-float-delay fill-chart-3" />
        <Star className="absolute bottom-[30%] left-[20%] w-5 h-5 text-chart-4 animate-float-slow fill-chart-4" />
        
        {/* Sparkles */}
        <Sparkles className="absolute top-[35%] right-[10%] w-10 h-10 text-accent animate-wiggle" />
        <Sparkles className="absolute bottom-[25%] right-[25%] w-7 h-7 text-chart-3 animate-float" />
        
        {/* Laugh icons */}
        <Laugh className="absolute top-[20%] left-[30%] w-9 h-9 text-chart-4/70 animate-float-delay" />
        <Laugh className="absolute bottom-[35%] left-[8%] w-7 h-7 text-chart-2/60 animate-float-slow" />
        
        {/* Abstract shapes */}
        <div className="absolute top-[10%] right-[30%] w-16 h-16 rounded-full border-4 border-accent/40 animate-float" />
        <div className="absolute bottom-[20%] left-[35%] w-12 h-12 rounded-lg border-4 border-chart-3/40 rotate-12 animate-float-delay" />
        <div className="absolute top-[60%] right-[8%] w-10 h-10 rounded-full bg-chart-4/30 animate-float-slow" />
        <div className="absolute bottom-[40%] right-[40%] w-8 h-8 rounded-sm bg-accent/25 rotate-45 animate-wiggle" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
        <p className="text-primary-foreground/80 text-sm md:text-base uppercase tracking-widest mb-4 font-medium">
          July 17-18, 2026 &bull; Central Cinema, Knoxville
        </p>
        
        <h1 
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-primary-foreground mb-6 leading-none tracking-tight"
          style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.3), 6px 6px 0 rgba(0,0,0,0.15)" }}
        >
          <span className="block">The Hoot</span>
          <span className="block text-accent italic" style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.4), 6px 6px 0 rgba(0,0,0,0.2)" }}>in The Holler</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto text-pretty font-sans">
          Two nights of laughs, local comics, and good vibes. Knoxville&apos;s comedy scene is about to get loud.
        </p>
        
        <Button 
          size="lg" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6 h-auto font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          asChild
        >
          <a href="#fundraiser-show">
            Support The Fest
          </a>
        </Button>
      </div>
    </section>
  )
}
