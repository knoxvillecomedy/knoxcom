"use client"

import { Quote, Smile } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Quote className="absolute top-16 left-[8%] w-12 h-12 text-primary/10 rotate-180 animate-float-slow" />
        <Quote className="absolute bottom-20 right-[10%] w-10 h-10 text-accent/15 animate-float" />
        <Smile className="absolute top-1/3 right-[5%] w-8 h-8 text-chart-3/20 animate-wiggle" />
        <div className="absolute bottom-[15%] left-[5%] w-20 h-20 rounded-full border-2 border-primary/10 animate-float-delay" />
        <div className="absolute top-[20%] right-[15%] w-6 h-6 rounded-full bg-accent/20 animate-float" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
          What&apos;s The Hoot?
        </h2>
        
        <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            The Hoot in The Holler is Knoxville&apos;s brand new comedy festival, bringing together the best local and regional talent for a weekend of non-stop laughs.
          </p>
          <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Whether you&apos;re a comedy regular or just looking for a good time, this inaugural event is your chance to be part of something special from the very beginning.
          </p>
          <p className="text-foreground font-medium animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Get in early. Laugh hard. Tell your friends you were there first.
          </p>
        </div>
      </div>
    </section>
  )
}
