"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/recap", label: "2026 Recap" },
  { href: "/about", label: "About" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
          aria-label="Knoxville Comedy home"
        >
          <span className="flex items-center justify-center rounded-lg bg-black p-1.5 shadow-md">
            <Image
              src="/logos/knoxville-comedy-header.png"
              alt="Knoxville Comedy logo"
              width={44}
              height={44}
              className="h-9 w-9 md:h-10 md:w-10 object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className="font-display text-lg md:text-xl font-bold text-primary-foreground"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
            >
              Knoxville Comedy
            </span>
            <span className="text-primary-foreground/70 text-[11px] md:text-xs font-medium uppercase tracking-wider">
              Live comedy tickets
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all text-sm font-medium px-3 py-1.5 rounded-md ${
                  isActive
                    ? "text-primary-foreground bg-primary-foreground/15"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/15"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
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
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-all text-lg font-medium text-left py-2 px-3 rounded-md ${
                  isActive
                    ? "text-primary-foreground bg-primary-foreground/15"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/15"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
