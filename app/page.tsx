import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Knoxville Comedy',
  url: 'https://knoxvillecomedy.com',
  description:
    'Knoxville Comedy is your home for tickets to live, independent stand-up comedy shows in Knoxville, Tennessee.',
  publisher: {
    '@type': 'EntertainmentBusiness',
    name: 'Knoxville Comedy',
    url: 'https://knoxvillecomedy.com',
    logo: 'https://knoxvillecomedy.com/logos/knoxville-comedy.png',
    areaServed: {
      '@type': 'City',
      name: 'Knoxville',
    },
  },
  sameAs: ['https://www.instagram.com/knoxvillecomedy'],
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
