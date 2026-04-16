"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mic, Star, Sparkles, CircleDot } from "lucide-react"
import Image from "next/image"

export function Lineup() {
  const features = [
    {
      icon: Mic,
      title: "Stand-Up Comedy",
      description: "From sharp one-liners to storytelling sets, experience the art form that started it all.",
      image: "/images/amber.jpg",
      imagePosition: "top",
      alt: "Stand-up comedian performing at Knoxville comedy show"
    },
    {
      icon: Star,
      title: "Specialty Shows",
      description: "Original formats born right here in Knoxville: competitive comedy game shows and high-energy improv.",
      image: "/images/saxton.jpg",
      imagePosition: "top",
      alt: "Local comedian at Knoxville specialty comedy show"
    },
    {
      icon: Sparkles,
      title: "Surprise Guests",
      description: "You never know who might drop in. Stay tuned for lineup announcements.",
      image: "/images/riffstomper.jpg",
      imagePosition: "top",
      alt: "Audience laughing at live comedy event in Knoxville Tennessee"
    }
  ]

  return (
    <section id="experience" className="py-12 md:py-20 px-4 bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <CircleDot className="absolute top-12 right-[10%] w-8 h-8 text-primary/20 animate-float" />
        <CircleDot className="absolute bottom-20 left-[15%] w-6 h-6 text-accent/30 animate-float-delay" />
        <div className="absolute top-1/2 right-[5%] w-24 h-24 rounded-full border-2 border-primary/10 animate-float-slow" />
        <div className="absolute bottom-[10%] left-[8%] w-16 h-16 rounded-lg border-2 border-chart-3/15 rotate-12 animate-wiggle" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            The Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full lineup coming soon. Here&apos;s what you can expect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-chart-2/20 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: `center ${feature.imagePosition}` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              
              <CardContent className="pt-6 pb-6 px-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
