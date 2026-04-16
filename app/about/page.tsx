import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Knoxville Comedy",
  description: "Learn about Knoxville Comedy - bringing live comedy and laughter to Knoxville, Tennessee.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Black geometric decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large hexagons - matching KC logo shape */}
        <div className="absolute -top-20 -left-20 w-80 h-80 border-[3px] border-foreground/10 rotate-12" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        <div className="absolute top-1/4 -right-16 w-64 h-64 border-[2px] border-foreground/8 -rotate-6" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        <div className="absolute bottom-20 -left-10 w-48 h-48 border-[2px] border-foreground/10 rotate-45" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        <div className="absolute -bottom-10 right-10 w-56 h-56 border-[3px] border-foreground/6 rotate-[20deg]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        
        {/* Geometric lines and shapes */}
        <div className="absolute top-40 left-[10%] w-24 h-[2px] bg-foreground/10 rotate-45" />
        <div className="absolute top-60 right-[15%] w-32 h-[2px] bg-foreground/8 -rotate-12" />
        <div className="absolute bottom-1/3 left-[5%] w-20 h-[2px] bg-foreground/10 rotate-[30deg]" />
        <div className="absolute bottom-40 right-[8%] w-28 h-[2px] bg-foreground/8 rotate-[60deg]" />
        
        {/* Small geometric accents */}
        <div className="absolute top-32 right-[20%] w-4 h-4 bg-foreground/15 rotate-45" />
        <div className="absolute top-1/2 left-[8%] w-3 h-3 bg-foreground/12 rotate-45" />
        <div className="absolute bottom-1/4 right-[12%] w-5 h-5 border-2 border-foreground/15 rotate-45" />
        <div className="absolute top-[60%] left-[15%] w-4 h-4 border-2 border-foreground/10 rotate-12" />
        
        {/* Crown-inspired triangles (from KC logo) */}
        <div className="absolute top-20 left-[25%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-foreground/10" />
        <div className="absolute bottom-32 right-[25%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-foreground/8" />
        <div className="absolute top-[45%] right-[5%] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-foreground/12" />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-16 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to The Hoot
        </Link>
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logos/knoxville-comedy.png"
            alt="Knoxville Comedy"
            width={260}
            height={260}
            className="object-contain"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12 font-display text-center">
          About Knoxville Comedy
        </h1>
        
        {/* Body content - consistent card style */}
        <div className="space-y-6">
          {/* Intro */}
          <div className="bg-foreground text-background rounded-xl p-6 text-center">
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              We love comedy, and we love Knoxville — well, except I-40 during rush hour!
            </p>
          </div>
          
          {/* History */}
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              This project was founded by local comedy producers who have been part of Knoxville&apos;s growing independent comedy scene since the closing of Side Splitters Comedy Club in 2014.
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-5 text-sm">
              Building a thriving future for comedy in East Tennessee:
            </p>
            <div className="space-y-3">
              {[
                "Build ongoing relationships with audiences, local business owners, and event producers",
                "Provide quality stage time for local comedians pursuing a career in entertainment",
                "Bring more national and regional touring comedians to East Tennessee",
                "Establish an independent comedy club in Knoxville"
              ].map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded bg-foreground text-background text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-foreground text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6 text-center">Our Partners</h2>
          <div className="flex flex-wrap gap-8 items-center justify-center">
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
                width={100}
                height={100}
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
                width={120}
                height={100}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
