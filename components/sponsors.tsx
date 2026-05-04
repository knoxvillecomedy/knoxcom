"use client"

import { Heart, Star } from "lucide-react"

const tier3Sponsors = [
  {
    name: "Best Bagels and Deli",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/best%20bagels-Y9tcWHT7dKDh0XPjxxmjws2fRY5x1z.jpg",
    url: "#",
    alt: "Best Bagels and Deli logo - Knoxville food sponsor",
  },
  {
    name: "The Bath Lab",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20bath%20lab-0cXMjMsBRrN2zGhpBvKihiujrJru70.jpg",
    url: "#",
    alt: "The Bath Lab logo - Knoxville wellness sponsor",
  },
  {
    name: "Nick Dwyer Arborist Tree Care",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nick%20dwyer%20tree%20care-FmbKg673Klo2cgLMb56ZPNgAvPj0lx.jpg",
    url: "#",
    alt: "Nick Dwyer Arborist Tree Care logo - Knoxville landscaping sponsor",
  },
]

const tier1Sponsors = [
  {
    name: "Serendipity Hair Studio",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Serendipity%20hair%20studio-NqzmUSceo2IcFsUOSHgeWIHGIDqagq.jpg",
    url: "#",
    alt: "Serendipity Hair Studio logo - Knoxville salon sponsor",
  },
  {
    name: "Aaron Cody Campbell Photography",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaron%20cody%20campbell-mJcCa8uB2YpxY6K1ZOSGUs5mJxG0AM.jpg",
    url: "#",
    alt: "Aaron Cody Campbell Photography logo - Knoxville photography sponsor",
  },
  {
    name: "Pink Pony Parlor Tattoo Studio",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pink%20pony%20parlor-0DWu2Fm8sSmM25ycQTzz9bBfU4Yf2i.jpg",
    url: "#",
    alt: "Pink Pony Parlor Tattoo Studio logo - Knoxville tattoo sponsor",
  },
  {
    name: "Amy Herrmann Realtor",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amy%20herrmann%20realtor-tJJflX22bV2op66PYReRH4SPnOuAjs.jpg",
    url: "#",
    alt: "Amy Herrmann Realtor logo - Knoxville real estate sponsor",
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

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Thank You to Our Sponsors
        </h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          The Hoot in The Holler wouldn&apos;t be possible without the generous support of our sponsors. We&apos;re grateful to every business that believes in bringing more laughs to Knoxville.
        </p>

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
              <div className="bg-card rounded-xl p-4 border border-border shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-2 group-hover:border-primary/30 flex items-center justify-center min-h-40">
                <img
                  src={sponsor.logo}
                  alt={sponsor.alt}
                  className="object-contain w-32 h-32 md:w-40 md:h-40 opacity-95 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Tier 1 Sponsors */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12">
          {tier1Sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              title={`Visit ${sponsor.name} (opens in new tab)`}
            >
              <div className="bg-card rounded-lg p-3 border border-border shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 group-hover:border-primary/30 flex items-center justify-center min-h-28">
                <img
                  src={sponsor.logo}
                  alt={sponsor.alt}
                  className="object-contain w-20 h-20 md:w-24 md:h-24 opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Sponsor list full notice */}
        <div className="bg-card rounded-xl p-6 border border-border inline-block">
          <p className="text-foreground font-semibold text-lg">
            Our sponsor list is full for this year&apos;s festival!
          </p>
        </div>
      </div>
    </section>
  )
}
