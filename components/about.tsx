"use client"

import Image from "next/image"
import { Quote, Smile, Heart, Star } from "lucide-react"

const tier3Sponsors = [
  {
    name: "The Pink Cactus",
    logo: "/logos/sponsors/pink-cactus.jpg",
    url: "https://www.thepinkcactusknox.com/",
    alt: "The Pink Cactus bar and restaurant logo - Knoxville comedy festival sponsor",
  },
  {
    name: "Knox Box Karaoke",
    logo: "/logos/sponsors/knox-box.jpg",
    url: "https://www.thepinkcactusknox.com/",
    alt: "Knox Box Karaoke logo - Knoxville entertainment sponsor",
  },
  {
    name: "All Star Parties & Events",
    logo: "/logos/sponsors/all-star.jpg",
    url: "https://www.allstarparties.com/",
    alt: "All Star Parties and Events logo - Knoxville event planning sponsor",
  },
]

const tier1Sponsors = [
  {
    name: "Frog Juice Boocherie",
    logo: "/logos/sponsors/boocherie.jpg",
    url: "https://www.frogjuicekombucha.com/the-boocherie",
    alt: "Frog Juice Boocherie kombucha logo - local Knoxville beverage sponsor",
  },
  {
    name: "Young Healing Arts Massage",
    logo: "/logos/sponsors/young-healing.jpg",
    url: "https://www.instagram.com/young_healing_knoxville/",
    alt: "Young Healing Arts Massage logo - Knoxville wellness sponsor",
  },
  {
    name: "Knox and Go",
    logo: "/logos/sponsors/knox-go.jpg",
    url: "https://www.instagram.com/knoxandgo/",
    alt: "Knox and Go logo - Knoxville local business sponsor",
  },
  {
    name: "The Mowalition Lawn Care",
    logo: "/logos/sponsors/mowalition.jpg",
    url: "https://www.facebook.com/themowalitionknoxville/",
    alt: "H&H Lawn Service The Mowalition logo - Knoxville lawn care sponsor",
  },
]

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Quote className="absolute top-16 left-[8%] w-12 h-12 text-primary/10 rotate-180 animate-float-slow" />
        <Quote className="absolute bottom-20 right-[10%] w-10 h-10 text-accent/15 animate-float" />
        <Smile className="absolute top-1/3 right-[5%] w-8 h-8 text-chart-3/20 animate-wiggle" />
        <Heart className="absolute top-12 left-[12%] w-7 h-7 text-chart-2/20 animate-float fill-chart-2/20" />
        <Star className="absolute bottom-16 right-[15%] w-6 h-6 text-accent/20 animate-float-delay fill-accent/20" />
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

        {/* Sponsor Logos Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-xl font-semibold text-foreground mb-10">
            Thanks to our Festival Sponsors
          </h3>

          {/* Tier 3 Sponsors - Featured */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-10">
            {tier3Sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                title={`Visit ${sponsor.name} (opens in new tab)`}
              >
                <div className="bg-card rounded-xl p-4 border border-border shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2 group-hover:border-primary/30">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.alt}
                    width={160}
                    height={160}
                    className="object-contain w-32 h-32 md:w-40 md:h-40 opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Tier 1 Sponsors */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {tier1Sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                title={`Visit ${sponsor.name} (opens in new tab)`}
              >
                <div className="bg-card rounded-lg p-3 border border-border shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 group-hover:border-primary/30">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.alt}
                    width={120}
                    height={120}
                    className="object-contain w-20 h-20 md:w-24 md:h-24 opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
