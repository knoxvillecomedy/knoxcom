'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show popup after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm animate-slide-up md:bottom-6 md:left-6 md:right-auto">
      <div className="bg-primary text-primary-foreground rounded-lg shadow-lg border border-primary/20 overflow-hidden">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 p-1 hover:bg-primary-foreground/10 rounded-md transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-4 pr-10">
          <div className="font-bold text-lg mb-2">
            50% OFF This Weekend!
          </div>
          <p className="text-sm opacity-95 mb-3">
            All festival passes are 50% off this weekend only.
          </p>
          
          {/* Promo code highlight */}
          <div className="bg-primary-foreground/15 rounded-md p-3 border border-primary-foreground/20">
            <div className="text-xs opacity-80 mb-1">Use code:</div>
            <div className="font-mono font-bold text-base tracking-wider">
              HOLLER
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              const ticketsSection = document.getElementById('tickets')
              ticketsSection?.scrollIntoView({ behavior: 'smooth' })
              setIsVisible(false)
            }}
            className="w-full mt-4 bg-primary-foreground text-primary font-semibold py-2 px-4 rounded-md hover:bg-primary-foreground/90 transition-colors text-sm"
          >
            Get Passes Now
          </button>
        </div>
      </div>
    </div>
  )
}
