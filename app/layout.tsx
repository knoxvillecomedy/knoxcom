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
  title: 'The Hoot in The Holler | Comedy Festival | July 18-19, 2026',
  description: "Knoxville's inaugural comedy festival at Central Cinema. Two nights of local laughs, good vibes, and unforgettable fun. Get your festival pass now!",
  generator: 'v0.app',
  metadataBase: new URL('https://knoxvillecomedy.com'),
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'The Hoot in The Holler | Knoxville Comedy Festival',
    description: "Knoxville's inaugural comedy festival at Central Cinema. Two nights of stand-up comedy, specialty shows, and surprise guests. July 18-19, 2026.",
    url: 'https://knoxvillecomedy.com',
    siteName: 'The Hoot in The Holler',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Hoot in The Holler | Knoxville Comedy Festival',
    description: "Knoxville's inaugural comedy festival at Central Cinema. July 18-19, 2026.",
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
