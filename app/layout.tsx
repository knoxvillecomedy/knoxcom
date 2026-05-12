import type { Metadata } from 'next'
import { Geist, Geist_Mono, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: '--font-display',
  weight: ['400', '700', '900']
});

export const metadata: Metadata = {
  title: 'The Hoot in The Holler | Knoxville Comedy Festival | July 17-18, 2026',
  description: 'Knoxville Comedy Festival 2026 - Live stand-up comedy at Central Cinema in Happy Holler. Two nights of laughs with local & national comedians. Get festival passes now!',
  generator: 'v0.app',
  metadataBase: new URL('https://knoxvillecomedy.com'),
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'The Hoot in The Holler | Knoxville Comedy Festival',
    description: 'Knoxville Comedy Festival 2026 - Two nights of stand-up comedy, specialty shows, and surprise guests at Central Cinema. July 17-18, 2026.',
    url: 'https://knoxvillecomedy.com',
    siteName: 'The Hoot in The Holler',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/central-live.jpg',
        width: 1200,
        height: 630,
        alt: 'Live comedy show at Central Cinema Knoxville',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hoot in The Holler | Knoxville Comedy Festival',
    description: 'Knoxville Comedy Festival 2026 at Central Cinema. July 17-18, 2026.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://knoxvillecomedy.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Knoxville Comedy',
              url: 'https://knoxvillecomedy.com',
              logo: 'https://knoxvillecomedy.com/logos/knoxville-comedy-logo.jpg',
              description: 'Knoxville Comedy is an independent comedy production company building a thriving comedy scene in East Tennessee.',
              sameAs: [
                'https://www.instagram.com/knoxvillecomedy',
              ],
              founder: {
                '@type': 'Person',
                name: 'Knoxville Comedy Team',
              },
              location: {
                '@type': 'City',
                name: 'Knoxville',
                areaServed: 'East Tennessee',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
