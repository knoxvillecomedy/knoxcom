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
  title: 'Live Comedy in Knoxville | Stand-Up Show Tickets | Knoxville Comedy',
  description:
    'Find tickets to live comedy in Knoxville, TN. Knoxville Comedy is your home for independent stand-up shows, lineups, and events across East Tennessee. Get tickets and text updates.',
  generator: 'v0.app',
  metadataBase: new URL('https://knoxvillecomedy.com'),
  keywords: [
    'live comedy Knoxville',
    'Knoxville comedy shows',
    'comedy tickets Knoxville',
    'stand-up comedy Knoxville TN',
    'things to do in Knoxville',
    'Knoxville comedy events',
    'independent comedy Knoxville',
  ],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Live Comedy in Knoxville | Stand-Up Show Tickets',
    description:
      'Your home for tickets to the best independent stand-up comedy shows in Knoxville, TN. See upcoming lineups and get text updates on new shows.',
    url: 'https://knoxvillecomedy.com',
    siteName: 'Knoxville Comedy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/central-live.jpg',
        width: 1200,
        height: 630,
        alt: 'Live stand-up comedy show in Knoxville, Tennessee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Comedy in Knoxville | Stand-Up Show Tickets',
    description:
      'Tickets to independent stand-up comedy shows in Knoxville, TN. See upcoming lineups and get text updates.',
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
        <meta name="google-site-verification" content="D13B5z9BduNLuuGZHSKfcX5YDNiBsidW2VgWwNbkAt0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EntertainmentBusiness',
              name: 'Knoxville Comedy',
              url: 'https://knoxvillecomedy.com',
              logo: 'https://knoxvillecomedy.com/logos/knoxville-comedy.png',
              image: 'https://knoxvillecomedy.com/logos/knoxville-comedy.png',
              description:
                'Knoxville Comedy is your home for tickets to live, independent stand-up comedy shows in Knoxville, Tennessee. Discover upcoming lineups and events across East Tennessee.',
              slogan: 'Live comedy in Knoxville',
              sameAs: ['https://www.instagram.com/knoxvillecomedy'],
              areaServed: {
                '@type': 'City',
                name: 'Knoxville',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Knoxville',
                addressRegion: 'TN',
                addressCountry: 'US',
              },
              knowsAbout: [
                'Live comedy',
                'Stand-up comedy',
                'Comedy shows',
                'Comedy tickets',
              ],
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
