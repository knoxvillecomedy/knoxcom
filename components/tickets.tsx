"use client"

import { Button } from "@/components/ui/button"
import { Ticket, Sparkles, Star } from "lucide-react"

export function Tickets() {
  return (
    <section id="tickets" className="py-12 md:py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Ticket className="absolute top-16 left-[10%] w-8 h-8 text-primary/15 rotate-12 animate-float" />
        <Sparkles className="absolute bottom-20 right-[12%] w-7 h-7 text-accent/20 animate-wiggle" />
        <Star className="absolute top-1/3 right-[8%] w-6 h-6 text-chart-3/20 animate-float-delay fill-chart-3/20" />
        <div className="absolute bottom-[25%] left-[5%] w-14 h-14 rounded-full border-2 border-primary/10 animate-float-slow" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-float">
          <Ticket className="w-8 h-8 text-primary" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Get Your Pass
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          One pass. Two nights. Unlimited laughs. Don&apos;t wait—limited seats available for the inaugural festival.
        </p>

        {/* Tixtree embed placeholder */}
        <div className="bg-gradient-to-br from-muted to-secondary rounded-2xl p-8 mb-8 border-2 border-dashed border-border shadow-inner">
          <p className="text-muted-foreground text-sm mb-4">
            Ticket widget coming soon
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 h-auto font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Buy Festival Pass
          </Button>
        </div>

        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-accent" />
          Early bird pricing available for a limited time.
        </p>
      </div>
    </section>
  )
}
