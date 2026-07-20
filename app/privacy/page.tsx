import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Knoxville Comedy",
  description:
    "Read the Knoxville Comedy privacy policy to learn how we collect, use, and protect your personal information, including SMS/text message communications.",
  alternates: {
    canonical: "https://knoxvillecomedy.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Knoxville Comedy",
    description:
      "Read the Knoxville Comedy privacy policy to learn how we collect, use, and protect your personal information.",
    url: "https://knoxvillecomedy.com/privacy",
    images: [
      {
        url: "/logos/knoxville-comedy-logo.jpg",
        width: 260,
        height: 260,
        alt: "Knoxville Comedy logo - hexagon with crown and KC initials",
      },
    ],
  },
}

const lastUpdated = "July 19, 2026"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://knoxvillecomedy.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Privacy Policy",
                item: "https://knoxvillecomedy.com/privacy",
              },
            ],
          }),
        }}
      />

      {/* Aggressive geometric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[200px] bg-foreground/[0.03] rotate-[-35deg]" />
        <div className="absolute top-20 -left-20 w-[500px] h-[120px] bg-foreground/[0.05] rotate-[-35deg]" />
        <div className="absolute -bottom-20 -right-40 w-[600px] h-[180px] bg-foreground/[0.04] rotate-[-35deg]" />
        <div className="absolute bottom-40 -right-20 w-[400px] h-[100px] bg-foreground/[0.06] rotate-[-35deg]" />

        <div
          className="absolute -top-16 -left-16 w-72 h-72 bg-foreground/[0.06] rotate-12"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        />
        <div
          className="absolute top-1/3 -right-20 w-80 h-80 bg-foreground/[0.04] -rotate-6"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        />
        <div
          className="absolute bottom-10 -left-16 w-64 h-64 bg-foreground/[0.05] rotate-[25deg]"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        />

        <div
          className="absolute top-20 left-[15%] w-40 h-40 border-[3px] border-foreground/10 rotate-[15deg]"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        />
        <div
          className="absolute top-[55%] right-[10%] w-32 h-32 border-[2px] border-foreground/8 rotate-[-20deg]"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        />

        <div className="absolute top-28 left-[5%] w-40 h-[4px] bg-foreground/10 rotate-[50deg]" />
        <div className="absolute top-48 right-[8%] w-32 h-[3px] bg-foreground/12 -rotate-[25deg]" />
        <div className="absolute bottom-1/3 left-[3%] w-28 h-[4px] bg-foreground/8 rotate-[70deg]" />

        <div className="absolute top-24 right-[22%] w-8 h-8 bg-foreground/15 rotate-45" />
        <div className="absolute bottom-[30%] right-[15%] w-10 h-10 border-[3px] border-foreground/15 rotate-45" />
        <div className="absolute top-16 left-[40%] w-5 h-5 bg-foreground/10 rotate-45" />
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-28 pb-16 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm text-center mb-12">Last updated: {lastUpdated}</p>

        <div className="space-y-6 font-sans text-foreground">
          <p className="text-lg leading-relaxed">
            Knoxville Comedy (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This policy
            explains what information we collect, how we use it, and the choices you have when you visit our website or
            sign up for updates about our shows.
          </p>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We only collect information you choose to give us. This may include your name, email address, and phone
              number when you sign up for show announcements, purchase tickets, or contact us. We also collect basic,
              anonymous analytics about how visitors use our site.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use your information to send you show announcements and updates, process ticket orders, respond to your
              questions, and improve our website. We do not sell, rent, or trade your personal information to third
              parties.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">SMS / Text Messaging</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you opt in to text message updates, we will send you occasional messages about upcoming shows and
              events. Message and data rates may apply. You can opt out at any time by replying{" "}
              <span className="font-semibold text-foreground">STOP</span>, or reply{" "}
              <span className="font-semibold text-foreground">HELP</span> for assistance. Mobile opt-in information and
              consent are never shared with third parties for marketing purposes.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">Cookies &amp; Analytics</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our site may use cookies and similar technologies to understand how visitors interact with our pages. You
              can disable cookies in your browser settings, though some features may not work as intended.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">Your Choices</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can unsubscribe from email updates using the link in any message, and you can opt out of text messages
              by replying STOP. To request that we delete your information, just reach out to us using the contact
              details below.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this privacy policy or how we handle your information, contact us at{" "}
              <a
                href="mailto:hello@knoxvillecomedy.com"
                className="font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors"
              >
                hello@knoxvillecomedy.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
