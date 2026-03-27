"use client"

import { MapPin, Star } from "lucide-react"

export function Venue() {
  return (
    <section id="venue" className="py-12 md:py-20 px-4 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <MapPin className="absolute top-12 right-[12%] w-8 h-8 text-primary/15 animate-float" />
        <Star className="absolute bottom-16 left-[8%] w-6 h-6 text-accent/20 animate-float-delay fill-accent/20" />
        <div className="absolute top-1/2 left-[3%] w-16 h-16 rounded-full border-2 border-chart-3/15 animate-float-slow" />
        <div className="absolute bottom-[20%] right-[6%] w-12 h-12 rounded-lg bg-primary/5 rotate-12 animate-wiggle" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                The Venue
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Central Cinema
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Knoxville&apos;s coolest independent cinema and event space. Great seats, great sound, and an atmosphere made for laughing. Plus, they&apos;ve got beer.
            </p>
            
            <p className="text-foreground font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              1205 N Central St, Knoxville, TN
            </p>
          </div>

          {/* Venue image/logo placeholder */}
          <div className="bg-gradient-to-br from-secondary to-muted rounded-2xl h-72 flex items-center justify-center border border-border shadow-lg overflow-hidden group transition-transform hover:scale-[1.02]">
            <div className="text-center p-8">
              <div className="w-28 h-28 bg-card rounded-xl mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-border shadow-inner">
                <span className="text-xs text-muted-foreground text-center px-2">Venue Logo</span>
              </div>
              <span className="text-muted-foreground text-sm font-medium">Central Cinema</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
