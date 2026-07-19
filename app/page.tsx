import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Knoxville Comedy',
  url: 'https://knoxvillecomedy.com',
  description:
    "Knoxville Comedy is an independent comedy production company building a thriving comedy scene in East Tennessee, and the team behind The Hoot in The Holler festival.",
  sameAs: ['https://www.instagram.com/knoxvillecomedy'],
  location: {
    '@type': 'City',
    name: 'Knoxville',
    areaServed: 'East Tennessee',
  },
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <Hero />
      <Footer />
    </main>
  )
}
