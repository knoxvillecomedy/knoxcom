import Link from "next/link"

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/recap", label: "2026 Recap" },
  { href: "/about", label: "About" },
]

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg font-semibold mb-2">Knoxville Comedy</p>
        <p className="text-background/70 text-sm mb-4">Live stand-up comedy shows • Knoxville, TN</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-background/70 text-sm hover:text-background transition-colors underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-background/50 text-xs">
          © 2026 Ivan Harper Photo | Knoxville Comedy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
