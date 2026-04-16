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
      {/* Aggressive geometric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large diagonal stripes */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[200px] bg-foreground/[0.03] rotate-[-35deg]" />
        <div className="absolute top-20 -left-20 w-[500px] h-[120px] bg-foreground/[0.05] rotate-[-35deg]" />
        <div className="absolute -bottom-20 -right-40 w-[600px] h-[180px] bg-foreground/[0.04] rotate-[-35deg]" />
        <div className="absolute bottom-40 -right-20 w-[400px] h-[100px] bg-foreground/[0.06] rotate-[-35deg]" />
        
        {/* Large filled hexagons */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-foreground/[0.06] rotate-12" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-foreground/[0.04] -rotate-6" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        <div className="absolute bottom-10 -left-16 w-64 h-64 bg-foreground/[0.05] rotate-[25deg]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        <div className="absolute -bottom-20 right-20 w-72 h-72 bg-foreground/[0.03] rotate-[45deg]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        
        {/* Outlined hexagons for depth */}
        <div className="absolute top-20 left-[15%] w-40 h-40 border-[3px] border-foreground/10 rotate-[15deg]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        <div className="absolute top-[55%] right-[10%] w-32 h-32 border-[2px] border-foreground/8 rotate-[-20deg]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        
        {/* Bold geometric lines */}
        <div className="absolute top-28 left-[5%] w-40 h-[4px] bg-foreground/10 rotate-[50deg]" />
        <div className="absolute top-48 right-[8%] w-32 h-[3px] bg-foreground/12 -rotate-[25deg]" />
        <div className="absolute bottom-1/3 left-[3%] w-28 h-[4px] bg-foreground/8 rotate-[70deg]" />
        <div className="absolute bottom-48 right-[5%] w-36 h-[3px] bg-foreground/10 rotate-[40deg]" />
        <div className="absolute top-[40%] left-[2%] w-24 h-[3px] bg-foreground/8 rotate-[-15deg]" />
        
        {/* Scattered squares and diamonds */}
        <div className="absolute top-24 right-[22%] w-8 h-8 bg-foreground/15 rotate-45" />
        <div className="absolute top-[45%] left-[6%] w-6 h-6 bg-foreground/12 rotate-45" />
        <div className="absolute bottom-[30%] right-[15%] w-10 h-10 border-[3px] border-foreground/15 rotate-45" />
        <div className="absolute top-[65%] left-[12%] w-7 h-7 border-[2px] border-foreground/10 rotate-12" />
        <div className="absolute top-16 left-[40%] w-5 h-5 bg-foreground/10 rotate-45" />
        <div className="absolute bottom-24 left-[35%] w-6 h-6 bg-foreground/8 rotate-[30deg]" />
        
        {/* Crown-inspired triangles - larger and bolder */}
        <div className="absolute top-12 left-[20%] w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[20px] border-b-foreground/12" />
        <div className="absolute bottom-20 right-[22%] w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-foreground/10" />
        <div className="absolute top-[50%] right-[3%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-foreground/12" />
        <div className="absolute top-[30%] left-[4%] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[18px] border-b-foreground/8" />
        
        {/* Dot grid pattern in corner */}
        <div className="absolute bottom-16 left-8 grid grid-cols-4 gap-3">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-foreground/10" />
          ))}
        </div>
        <div className="absolute top-32 right-12 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground/8" />
          ))}
        </div>
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
            src="/logos/knoxville-comedy.jpg"
            alt="Knoxville Comedy"
            width={260}
            height={260}
            className="object-contain"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          About Knoxville Comedy
        </h1>
        
        {/* Body content - consistent card style */}
        <div className="space-y-6 font-sans">
          {/* Intro & History */}
          <div className="bg-foreground text-background rounded-xl p-6">
            <p className="text-lg leading-relaxed text-center mb-4">
              We love comedy, and we love Knoxville — well, except I-40 eastbound, between 2 and 6pm...
            </p>
            <p className="text-base text-background/80 leading-relaxed text-center">
              This project was founded by local comedy producers who have been part of Knoxville&apos;s growing independent comedy scene since the closing of Side Splitters Comedy Club in 2014.
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-5">
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
                  <span className="w-6 h-6 rounded bg-foreground text-background text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-lg font-bold text-foreground mb-6 text-center">Our Partners</h2>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <a
              href="https://instagram.com/tinystagecomedy"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-all hover:-translate-y-1"
              title="Visit Tiny Stage Comedy (opens in new tab)"
            >
              <Image
                src="/logos/tiny-stage-comedy.jpg"
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
                src="/logos/yellow-door-media.jpg"
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
