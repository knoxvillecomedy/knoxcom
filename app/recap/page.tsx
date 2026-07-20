import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Recap } from "@/components/recap"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "2026 Hoot Recap | The Hoot in The Holler | Knoxville Comedy Festival",
  description:
    "Look back at The Hoot in The Holler 2026 - Knoxville's inaugural comedy festival at Central Cinema. Watch the recap and see the sponsors who made it possible.",
  alternates: {
    canonical: "https://knoxvillecomedy.com/recap",
  },
  openGraph: {
    title: "2026 Hoot Recap | The Hoot in The Holler",
    description:
      "Look back at Knoxville's inaugural comedy festival at Central Cinema. Watch the 2026 recap and meet our sponsors.",
    url: "https://knoxvillecomedy.com/recap",
    images: [
      {
        url: "/images/central-live.jpg",
        width: 1200,
        height: 630,
        alt: "Live comedy show at Central Cinema during The Hoot in The Holler 2026",
      },
    ],
  },
}

export default function RecapPage() {
  return (
    <main>
      <Navigation />
      <Recap />
      <Footer />
    </main>
  )
}
