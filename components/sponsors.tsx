"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Handshake, Heart, Star } from "lucide-react"

const sponsors = [
  {
    name: "Tiny Stage Comedy",
    logo: "/logos/tiny-stage-comedy.png",
    url: "https://tinystagecomedy.com",
  },
  {
    name: "Yellow Door Media",
    logo: "/logos/yellow-door-media.png",
    url: "https://yellowdoormedia.com",
  },
  {
    name: "Central Cinema",
    logo: "/logos/central-cinema.png",
    url: "https://centralcinemaknox.com",
  },
]

export function Sponsors() {
  return (
    <section id="sponsors" className="py-12 md:py-20 px-4 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-12 left-[8%] w-7 h-7 text-chart-2/20 animate-float fill-chart-2/20" />
        <Star className="absolute bottom-16 right-[10%] w-6 h-6 text-accent/20 animate-float-delay fill-accent/20" />
        <div className="absolute top-1/3 right-[5%] w-16 h-16 rounded-full border-2 border-primary/10 animate-float-slow" />
        <div className="absolute bottom-[20%] left-[6%] w-10 h-10 rounded-lg bg-chart-3/10 rotate-6 animate-wiggle" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Our Partners
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          The Hoot in The Holler is made possible by these amazing partners. Click a logo to learn more about them.
        </p>

        {/* Sponsor logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-10">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-6 flex items-center justify-center border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
              title={`Visit ${sponsor.name} (opens in new tab)`}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={160}
                height={80}
                className="object-contain max-h-20 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Want to get your business in front of Knoxville&apos;s most fun-loving crowd?
        </p>

        <Button 
          variant="outline" 
          size="lg"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-5 h-auto font-semibold transition-all hover:scale-105"
        >
          <Handshake className="w-5 h-5 mr-2" />
          Become a Sponsor
        </Button>
      </div>
    </section>
  )
}
