"use client"

import { useEffect } from "react"
import { Ticket, Sparkles, Star } from "lucide-react"

export function Tickets() {
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById("tixtree-script")) {
      return
    }

    // Create and append the script element to document body
    // Tixtree widget expects the script to be in the body, not inside a container
    const script = document.createElement("script")
    script.id = "tixtree-script"
    script.src = "https://www.tixtree.com/widgets/tixtree.js"
    script.setAttribute("data-type", "event")
    script.setAttribute("data-id", "hoot-in-the-holler-fundraiser-c3eb4c2ca88a")
    document.body.appendChild(script)

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.getElementById("tixtree-script")
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
      // Also remove any iframes created by tixtree
      const iframes = document.querySelectorAll('iframe[id^="tixtree"]')
      iframes.forEach(iframe => iframe.remove())
    }
  }, [])

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
          Fundraiser Show
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Join us at The Pink Cactus for a special fundraiser to help kickstart Knoxville&apos;s inaugural comedy festival.
        </p>

        {/* Tixtree widget - the script creates an iframe that renders here */}
        <div className="mb-8">
          <div 
            id="tixtree-wrapper" 
            className="w-full [&>iframe]:w-full [&>iframe]:border-0"
          />
        </div>

        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-accent" />
          Festival passes coming soon!
        </p>
      </div>
    </section>
  )
}
