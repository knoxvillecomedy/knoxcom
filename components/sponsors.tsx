"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Handshake, Heart, Star, Copy, Check } from "lucide-react"

export function Sponsors() {
  const [showEmail, setShowEmail] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = "yellowdoormediatn@gmail.com"

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
          Thank You to Our Sponsors
        </h2>

        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          The Hoot in The Holler wouldn&apos;t be possible without the generous support of our sponsors. We&apos;re grateful to every business that believes in bringing more laughs to Knoxville.
        </p>

        {!showEmail ? (
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-5 h-auto font-semibold transition-all hover:scale-105"
            onClick={() => setShowEmail(true)}
          >
            <Handshake className="w-5 h-5 mr-2" />
            Become a Sponsor
          </Button>
        ) : (
          <div className="bg-card rounded-xl p-6 border border-border inline-block animate-slide-up">
            <p className="text-muted-foreground text-sm mb-3">
              Send us an email to discuss sponsorship opportunities:
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-foreground font-medium text-lg">{email}</span>
              <button
                onClick={handleCopy}
                className="p-2 rounded-md hover:bg-muted transition-colors"
                title={copied ? "Copied!" : "Click to copy"}
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
