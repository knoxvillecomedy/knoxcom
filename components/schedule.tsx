"use client"

import { CalendarDays, Clock, Sparkles } from "lucide-react"

export function Schedule() {
  return (
    <section id="schedule" className="py-12 md:py-20 px-4 bg-primary relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] w-32 h-32 rounded-full bg-accent/20 blur-2xl animate-pulse-soft" />
        <div className="absolute bottom-10 right-[15%] w-40 h-40 rounded-full bg-chart-2/15 blur-2xl animate-pulse-soft" style={{ animationDelay: "1s" }} />

        <Clock className="absolute top-16 right-[12%] w-8 h-8 text-primary-foreground/20 animate-float" />
        <Sparkles className="absolute bottom-20 left-[10%] w-7 h-7 text-accent/40 animate-wiggle" />
        <CalendarDays className="absolute top-1/3 left-[8%] w-6 h-6 text-primary-foreground/15 animate-float-delay" />
        <div className="absolute bottom-[30%] right-[8%] w-12 h-12 rounded-full border-2 border-primary-foreground/10 animate-float-slow" />
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 animate-float">
          <CalendarDays className="w-7 h-7 text-primary-foreground" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Schedule
        </h2>

        <p className="text-lg text-primary-foreground/80 mb-8">
          Two days of stand-up, specialty shows, and surprise guests. The full lineup and set times are coming soon.
        </p>

        {/* Schedule placeholder */}
        <div className="bg-primary-foreground/10 rounded-2xl p-8 border border-primary-foreground/20 shadow-inner">
          <p className="text-primary-foreground/70 text-sm mb-2">
            Detailed schedule coming soon
          </p>
          <p className="text-primary-foreground font-medium">
            July 17–18, 2026 · Central Cinema
          </p>
        </div>

        <p className="text-sm text-primary-foreground/60 mt-6 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          Check back for showtimes.
        </p>
      </div>
    </section>
  )
}
