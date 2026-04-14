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
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to The Hoot
        </Link>
        
        <div className="flex justify-center mb-12">
          <Image
            src="/logos/knoxville-comedy.png"
            alt="Knoxville Comedy"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-display text-center">
          About Knoxville Comedy
        </h1>
        
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We love comedy, and we love Knoxville — well, except I-40 during rush hour!
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            This project was founded by local comedy producers who have been part of Knoxville&apos;s growing independent comedy scene since the closing of Side Splitters Comedy Club in 2014.
          </p>
          
          <p className="text-lg text-foreground font-medium mb-4">
            Our mission is to build a thriving future for comedy in East Tennessee:
          </p>
          
          <ol className="text-lg text-muted-foreground leading-relaxed mb-8 list-decimal list-inside space-y-2">
            <li>Build ongoing relationships with audiences, local business owners, and event producers</li>
            <li>Provide quality stage time for local comedians pursuing a career in entertainment</li>
            <li>Bring more national and regional touring comedians to East Tennessee</li>
            <li>Establish an independent comedy club in Knoxville</li>
          </ol>

          <div className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">Our Partners</h2>
            <div className="flex flex-wrap gap-8 items-center justify-center">
              <a
                href="https://instagram.com/tinystagecomedy"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity animate-link-hover"
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
                className="block hover:opacity-80 transition-opacity animate-link-hover"
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
              <a
                href="https://www.instagram.com/ivanharperphoto/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity animate-link-hover"
                title="Visit Ivan Harper Photo (opens in new tab)"
              >
                <Image
                  src="/logos/knoxville-comedy.png"
                  alt="Ivan Harper Photo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
