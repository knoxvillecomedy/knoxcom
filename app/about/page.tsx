import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mic, Heart, Star, Sparkles } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Knoxville Comedy",
  description: "Learn about Knoxville Comedy - bringing live comedy and laughter to Knoxville, Tennessee.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[5%] w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-40 right-[10%] w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <Mic className="absolute top-32 right-[15%] w-8 h-8 text-primary/10 rotate-12" />
        <Star className="absolute top-1/3 left-[8%] w-6 h-6 text-accent/20 fill-accent/20" />
        <Heart className="absolute bottom-1/4 right-[12%] w-7 h-7 text-chart-2/15 fill-chart-2/15" />
        <Sparkles className="absolute bottom-1/3 left-[12%] w-5 h-5 text-primary/15" />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-16 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to The Hoot
        </Link>
        
        <div className="flex justify-center mb-10">
          <Image
            src="/logos/knoxville-comedy.png"
            alt="Knoxville Comedy"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10 font-display text-center">
          About Knoxville Comedy
        </h1>
        
        {/* Intro card */}
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm mb-8">
          <p className="text-xl text-foreground leading-relaxed text-center font-medium">
            We love comedy, and we love Knoxville — well, except I-40 during rush hour!
          </p>
        </div>
        
        {/* History section */}
        <div className="mb-10">
          <p className="text-lg text-muted-foreground leading-relaxed">
            This project was founded by local comedy producers who have been part of Knoxville&apos;s growing independent comedy scene since the closing of Side Splitters Comedy Club in 2014.
          </p>
        </div>
        
        {/* Mission section */}
        <div className="bg-secondary/50 rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-primary" />
            </span>
            Our Mission
          </h2>
          <p className="text-muted-foreground mb-5">
            Building a thriving future for comedy in East Tennessee:
          </p>
          <div className="space-y-4">
            {[
              "Build ongoing relationships with audiences, local business owners, and event producers",
              "Provide quality stage time for local comedians pursuing a career in entertainment",
              "Bring more national and regional touring comedians to East Tennessee",
              "Establish an independent comedy club in Knoxville"
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <p className="text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners section */}
        <div className="border-t border-border pt-10">
          <h2 className="text-xl font-semibold text-foreground mb-8 text-center">Our Partners</h2>
          <div className="flex flex-wrap gap-10 items-center justify-center">
            <a
              href="https://instagram.com/tinystagecomedy"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-all hover:-translate-y-1"
              title="Visit Tiny Stage Comedy (opens in new tab)"
            >
              <Image
                src="/logos/tiny-stage-comedy.png"
                alt="Tiny Stage Comedy"
                width={110}
                height={110}
                className="object-contain"
              />
            </a>
            <a
              href="https://instagram.com/yellowdoormediatn"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-all hover:-translate-y-1"
              title="Visit Yellow Door Media (opens in new tab)"
            >
              <Image
                src="/logos/yellow-door-media.png"
                alt="Yellow Door Media"
                width={130}
                height={110}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
