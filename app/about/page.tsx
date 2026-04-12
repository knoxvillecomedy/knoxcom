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
            Knoxville Comedy is dedicated to fostering and celebrating the local comedy scene in Knoxville, Tennessee. We believe that laughter brings communities together, and our mission is to create spaces where both performers and audiences can experience the joy of live comedy.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            From intimate open mics to large-scale festivals like The Hoot in The Holler, we work to showcase the incredible talent that calls East Tennessee home while bringing in voices from across the region.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Whether you&apos;re a seasoned comedy fan or new to the scene, we invite you to join us for a night of laughs. Because in Knoxville, we take our comedy seriously.
          </p>

          <div className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">Our Partners</h2>
            <div className="flex flex-wrap gap-8 items-center">
              <a
                href="https://tinystagecomedy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
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
                href="https://yellowdoormedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
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
      </div>
    </main>
  )
}
