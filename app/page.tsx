import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Lineup } from "@/components/lineup"
import { Venue } from "@/components/venue"
import { Tickets } from "@/components/tickets"
import { Organizers } from "@/components/organizers"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'The Hoot in The Holler',
  description: "Knoxville's inaugural comedy festival featuring stand-up comedy, specialty shows, and surprise guests at Central Cinema.",
  startDate: '2026-07-18T19:00:00-04:00',
  endDate: '2026-07-19T23:00:00-04:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Central Cinema',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1205 N Central St',
      addressLocality: 'Knoxville',
      addressRegion: 'TN',
      postalCode: '37917',
      addressCountry: 'US',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Knoxville Comedy',
    url: 'https://knoxvillecomedy.com',
  },
  performer: {
    '@type': 'PerformingGroup',
    name: 'Local and Regional Comedians',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://knoxvillecomedy.com/#tickets',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
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
      <About />
      <Lineup />
      <Venue />
      <Tickets />
      <Organizers />
      <Newsletter />
      <Footer />
    </main>
  )
}
