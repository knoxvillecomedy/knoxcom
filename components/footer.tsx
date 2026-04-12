import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg font-semibold mb-2">
          The Hoot in The Holler
        </p>
        <p className="text-background/70 text-sm mb-4">
          July 18–19, 2026 • Central Cinema, Knoxville, TN
        </p>
        <div className="flex items-center justify-center gap-4 mb-4">
          <Link 
            href="/about" 
            className="text-background/70 text-sm hover:text-background transition-colors underline-offset-4 hover:underline"
          >
            About Knoxville Comedy
          </Link>
        </div>
        <p className="text-background/50 text-xs">
          © 2026 Ivan Harper Photo | Knoxville Comedy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
