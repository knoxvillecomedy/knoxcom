import Image from "next/image"
import { Play, Heart } from "lucide-react"

const sponsors = [
  { name: "The Pink Cactus", logo: "/logos/sponsors/pink-cactus.jpg", url: "https://www.thepinkcactusknox.com/", alt: "The Pink Cactus bar and restaurant logo - Knoxville comedy festival sponsor" },
  { name: "Knox Box Karaoke", logo: "/logos/sponsors/knox-box.jpg", url: "https://www.thepinkcactusknox.com/", alt: "Knox Box Karaoke logo - Knoxville entertainment sponsor" },
  { name: "All Star Parties & Events", logo: "/logos/sponsors/all-star.jpg", url: "https://www.allstarparties.com/", alt: "All Star Parties and Events logo - Knoxville event planning sponsor" },
  { name: "Serendipity Hair Studio", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Serendipity%20hair%20studio-NqzmUSceo2IcFsUOSHgeWIHGIDqagq.jpg", url: "https://serendipityhairstudio.glossgenius.com/", alt: "Serendipity Hair Studio logo - Knoxville hair salon sponsor" },
  { name: "Best Bagels and Deli", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/best%20bagels-Y9tcWHT7dKDh0XPjxxmjws2fRY5x1z.jpg", url: "https://www.facebook.com/BestBagelsandDeli/photos", alt: "Best Bagels and Deli logo - Knoxville bagel shop sponsor" },
  { name: "Pink Pony Parlor Tattoo Studio", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ppp-PcAeWLgaGvpHfZdqBp1nqNmeg8nbOD.jpg", url: "https://www.instagram.com/pinkponyparlor/", alt: "Pink Pony Parlor Tattoo Studio logo - Knoxville sponsor" },
  { name: "Nick Dwyer Arborist Tree Care", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nick%20dwyer%20tree%20care-FmbKg673Klo2cgLMb56ZPNgAvPj0lx.jpg", url: "https://nickdwyertreecare.com/", alt: "Nick Dwyer Arborist Tree Care logo - Knoxville tree service sponsor" },
  { name: "The Bath Lab", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20bath%20lab-0cXMjMsBRrN2zGhpBvKihiujrJru70.jpg", url: "https://www.thebathlab.net/", alt: "The Bath Lab logo - Knoxville bath products sponsor" },
  { name: "Frog Juice Boocherie", logo: "/logos/sponsors/boocherie.jpg", url: "https://www.frogjuicekombucha.com/the-boocherie", alt: "Frog Juice Boocherie kombucha logo - local Knoxville beverage sponsor" },
  { name: "Young Healing Arts Massage", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yha-Q1hcOp7BqtEIuapVkXG0O2eerbrLIM.jpg", url: "https://www.instagram.com/young_healing_knoxville/", alt: "Young Healing Arts Massage logo - Knoxville wellness sponsor" },
  { name: "Knox and Go", logo: "/logos/sponsors/knox-go.jpg", url: "https://www.instagram.com/knoxandgo/", alt: "Knox and Go logo - Knoxville local business sponsor" },
  { name: "The Mowalition Lawn Care", logo: "/logos/sponsors/mowalition.jpg", url: "https://www.facebook.com/themowalitionknoxville/", alt: "H&H Lawn Service The Mowalition logo - Knoxville lawn care sponsor" },
  { name: "Amy Herrmann Realtor", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amy%20herrmann%20realtor-tJJflX22bV2op66PYReRH4SPnOuAjs.jpg", url: "https://findahomewithamy.com/", alt: "Amy Herrmann Realtor logo - Knoxville real estate sponsor" },
  { name: "Aaron Cody Campbell Photography", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaron%20cody%20campbell-mJcCa8uB2YpxY6K1ZOSGUs5mJxG0AM.jpg", url: "https://www.facebook.com/nasnut67", alt: "Aaron Cody Campbell Photography logo - Knoxville sponsor" },
]

export function Recap() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="relative bg-primary pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-56 h-56 rounded-full bg-accent animate-pulse-soft blur-3xl" />
          <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-chart-2 animate-pulse-soft blur-3xl" style={{ animationDelay: "1s" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-primary-foreground/80 text-sm md:text-base uppercase tracking-widest mb-4 font-medium">
            July 17–18, 2026 &bull; Central Cinema
          </p>
          <h1
            className="font-display text-5xl md:text-7xl font-black text-primary-foreground mb-6 leading-none tracking-tight"
            style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.3), 6px 6px 0 rgba(0,0,0,0.15)" }}
          >
            The 2026 <span className="text-accent italic">Hoot</span> Recap
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty font-medium">
            Two nights, a packed house, and a whole lot of laughs. Here&apos;s a look back at Knoxville&apos;s
            inaugural comedy festival.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/*
            ==================================================================
            RECAP VIDEO — paste your embed below.
            Replace the placeholder <div> with your video iframe, e.g.:
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="The Hoot 2026 Recap"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            ==================================================================
          */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-xl bg-muted">
            <Image
              src="/images/central-live.jpg"
              alt="Live comedy show at Central Cinema during The Hoot in The Holler 2026"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-foreground/30">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-background/90 text-primary shadow-lg">
                <Play className="w-7 h-7 fill-primary translate-x-0.5" />
              </span>
              <p className="text-background font-semibold text-sm md:text-base drop-shadow">
                Recap video coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-12 md:pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            <p>
              The first-ever Hoot in The Holler brought Knoxville&apos;s comedy community together for two unforgettable
              nights at Central Cinema in the Happy Holler Historic District. Local and regional comedians took the
              stage for standup sets, specialty shows, and a few surprises along the way.
            </p>
            <p className="text-foreground font-medium">
              Thank you to everyone who showed up, laughed loud, and helped make the very first Hoot a night to
              remember. This is just the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* Photo highlights */}
      <section className="pb-12 md:pb-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: "/images/audience.jpg", alt: "Audience laughing at The Hoot in The Holler 2026" },
            { src: "/images/central-live.jpg", alt: "Comedian performing live at Central Cinema" },
            { src: "/images/riffstomper.jpg", alt: "Performance at The Hoot in The Holler 2026" },
            { src: "/images/saxton.jpg", alt: "Comedian on stage at The Hoot 2026" },
            { src: "/images/lep.jpg", alt: "Live comedy moment at The Hoot 2026" },
          ].map((img, i) => (
            <div
              key={img.src}
              className={`relative aspect-square rounded-xl overflow-hidden border border-border ${
                i === 0 ? "col-span-2 md:col-span-1 aspect-video md:aspect-square" : ""
              }`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Sponsor thank-you */}
      <section className="py-12 md:py-20 px-4 bg-secondary/40 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Thank You to Our Sponsors</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            The Hoot in The Holler 2026 was made possible by these incredible local businesses.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                title={`Visit ${sponsor.name} (opens in new tab)`}
              >
                <div className="bg-card border border-border rounded-lg p-3 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-primary/30">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.alt}
                    width={112}
                    height={112}
                    className="object-contain w-20 h-20 md:w-24 md:h-24 opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-10 text-muted-foreground text-sm">
            <Heart className="w-4 h-4 fill-accent text-accent" />
            <span>See you at the next one</span>
            <Heart className="w-4 h-4 fill-accent text-accent" />
          </div>
        </div>
      </section>
    </div>
  )
}
