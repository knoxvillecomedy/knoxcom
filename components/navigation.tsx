"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#venue", label: "Venue" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#newsletter", label: "Newsletter" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <a 
            href="#" 
            className="font-display text-xl md:text-2xl font-bold text-primary-foreground block"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
          >
            The Hoot
          </a>
          <p className="text-primary-foreground/70 text-xs md:text-sm font-medium">
            July 17–18, 2026
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/15 transition-all text-sm font-medium px-3 py-1.5 rounded-md"
            >
              {link.label}
            </button>
          ))}
          <Button 
            size="sm" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            asChild
          >
            <a href="https://www.tixtree.com/e/hoot-in-the-holler-fundraiser-c3eb4c2ca88a" target="_blank" rel="noopener noreferrer">
              Tix Drop May 9th!
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-primary-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/15 transition-all text-lg font-medium text-left py-2 px-3 rounded-md"
            >
              {link.label}
            </button>
          ))}
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold mt-2"
            asChild
          >
            <a href="https://www.tixtree.com/e/hoot-in-the-holler-fundraiser-c3eb4c2ca88a" target="_blank" rel="noopener noreferrer">
              Fundraiser Tickets
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
