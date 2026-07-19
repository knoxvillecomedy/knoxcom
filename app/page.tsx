import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { HomeContent, homeFaqs } from "@/components/home-content"
import { Footer } from "@/components/footer"

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://knoxvillecomedy.com/#website',
  name: 'Knoxville Comedy',
  url: 'https://knoxvillecomedy.com',
  description:
    'Your year-round home for tickets to live, independent stand-up comedy shows in Knoxville, Tennessee.',
  publisher: { '@id': 'https://knoxvillecomedy.com/#organization' },
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteLd, faqLd]) }}
      />
      <Navigation />
      <Hero />
      <HomeContent />
      <Footer />
    </main>
  )
}
