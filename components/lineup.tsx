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
      image: "/images/lep.jpg",
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
      imagePosition: "center",
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
            Festival schedule coming soon. Here&apos;s what you can expect.
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

        {/* Good Cop / Rad Cop Headliner Section */}
        <div className="mt-8 pt-8 relative border-t border-primary/20">
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          
          {/* Background glow effect */}
          <div className="absolute -inset-8 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 rounded-3xl blur-2xl pointer-events-none" />

          <div className="text-center mb-12 animate-slide-up relative z-10">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/40" />
              <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary/15 to-chart-2/15 rounded-full text-sm uppercase tracking-wider text-primary font-semibold border border-primary/30 backdrop-blur-sm">
                Fest Headliner
              </span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Good Cop / Rad Cop
            </h2>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent/60" />
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <div className="w-2 h-2 rounded-full bg-chart-2/60" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              High-energy comedy duo from Atlanta bringing fast banter and barn-burning performances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Images */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/40 via-chart-2/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="relative rounded-2xl overflow-hidden bg-card">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gcrc-kInLqSLLkZEbxZeeKgYwfdasYzPo0R.jpg"
                    alt="Good Cop / Rad Cop headshot with Dave Hannah and Ryan Darling against purple background"
                    width={600}
                    height={500}
                    className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-chart-2/40 via-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="relative rounded-2xl overflow-hidden bg-card">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gcrc2-biyf4fBs0kLo8zrRrXLcvvJ98NWkpB.jpg"
                    alt="Good Cop / Rad Cop performing live on stage with guitar engaging the crowd"
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-chart-2/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Bio and Details */}
            <div className="space-y-6">


              <div className="space-y-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent p-6 border-l-4 border-primary/60">
                <h3 className="text-sm uppercase tracking-wider text-primary font-semibold">
                  Featured In
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 ring-1 ring-primary/40 ring-offset-2 ring-offset-transparent" />
                    <span>Netflix&apos;s Star Search (2026)</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 ring-1 ring-primary/40 ring-offset-2 ring-offset-transparent" />
                    <span>Netflix is a Joke Comedy Festival</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 ring-1 ring-primary/40 ring-offset-2 ring-offset-transparent" />
                    <span>Moontower Comedy Festival</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 ring-1 ring-primary/40 ring-offset-2 ring-offset-transparent" />
                    <span>On tour with the Dropkick Murphys</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent p-6 border-l-4 border-primary/60">
                <h3 className="text-sm uppercase tracking-wider text-primary font-semibold">
                  Collaborations
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 ring-1 ring-primary/40 ring-offset-2 ring-offset-transparent" />
                    <span>Bobcat Goldthwait</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 ring-1 ring-primary/40 ring-offset-2 ring-offset-transparent" />
                    <span>Felipe Esparza</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 ring-1 ring-primary/40 ring-offset-2 ring-offset-transparent" />
                    <span>Roy Wood Jr.</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 ring-1 ring-primary/40 ring-offset-2 ring-offset-transparent" />
                    <span>Trae Crowder</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 ring-1 ring-primary/40 ring-offset-2 ring-offset-transparent" />
                    <span>Eddie Pepitone</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
