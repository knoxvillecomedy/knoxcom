import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms & Conditions | Knoxville Comedy",
  description:
    "Read the Knoxville Comedy Terms & Conditions governing use of our website, ticketing platform, and mobile messaging services.",
  alternates: {
    canonical: "https://knoxvillecomedy.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Knoxville Comedy",
    description:
      "Read the Knoxville Comedy Terms & Conditions governing use of our website, ticketing platform, and mobile messaging services.",
    url: "https://knoxvillecomedy.com/terms",
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

export default function TermsPage() {
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
                name: "Terms & Conditions",
                item: "https://knoxvillecomedy.com/terms",
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
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground text-sm text-center mb-2">Last updated: {lastUpdated}</p>
        <p className="text-muted-foreground text-sm text-center mb-12 max-w-md mx-auto text-balance">
          We may update these Terms from time to time. Changes will be posted on this page with an updated date.
        </p>

        <div className="space-y-6 font-sans text-foreground">
          <p className="text-lg leading-relaxed">
            Welcome to Knoxville Comedy. These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of our
            website, ticketing platform, and mobile messaging services. By using our site or purchasing a ticket, you
            agree to these Terms.
          </p>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">1. Our Role</h2>
            <p className="text-muted-foreground leading-relaxed">
              Knoxville Comedy acts strictly as a marketing partner and ticketing agent on behalf of third-party event
              producers, promoters, and venues. We do not own, operate, or manage the physical venues, nor do we produce
              the live events.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">2. Ticketing and Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Because we sell tickets on behalf of third-party producers, our refund policy is determined by those
              partners:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
              <li>
                <span className="font-semibold text-foreground">All Sales are Final:</span> Tickets are non-refundable
                and non-exchangeable unless a show is officially canceled.
              </li>
              <li>
                <span className="font-semibold text-foreground">Cancellations:</span> If an event is canceled by the
                producer or venue, we will issue a refund for the ticket price.
              </li>
              <li>
                <span className="font-semibold text-foreground">Event Changes:</span> Producers reserve the right to
                change lineups, dates, or times. Knoxville Comedy is not liable for these changes, and such changes do
                not automatically entitle you to a refund.
              </li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">3. Limitation of Liability for Live Events</h2>
            <p className="text-muted-foreground leading-relaxed">
              By purchasing a ticket through our platform, you acknowledge that Knoxville Comedy is not responsible for
              the conditions of the venue, the actions of the performers, or any incidents that occur at the physical
              event. You assume all risks associated with attending the live events, and any claims regarding the event
              itself must be directed to the event producer or venue.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">4. Mobile Messaging Terms (SMS)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              If you opt in to our SMS text messaging program, you agree to the following terms:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
              <li>
                <span className="font-semibold text-foreground">Program Description:</span> You will receive marketing
                and promotional text messages from Knoxville Comedy regarding upcoming shows, ticket alerts, and event
                updates on behalf of our production partners.
              </li>
              <li>
                <span className="font-semibold text-foreground">Message Frequency:</span> Message frequency varies.
              </li>
              <li>
                <span className="font-semibold text-foreground">Pricing:</span> Message and data rates may apply.
              </li>
              <li>
                <span className="font-semibold text-foreground">Opt-Out:</span> You may opt out of receiving text
                messages at any time by replying <span className="font-semibold text-foreground">STOP</span> to any
                message.
              </li>
              <li>
                <span className="font-semibold text-foreground">Support:</span> For help or assistance, reply{" "}
                <span className="font-semibold text-foreground">HELP</span> to any message or contact us at{" "}
                <a
                  href="mailto:hello@knoxvillecomedy.com"
                  className="font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                >
                  hello@knoxvillecomedy.com
                </a>
                .
              </li>
              <li>
                <span className="font-semibold text-foreground">Carrier Disclaimer:</span> Mobile carriers (such as
                AT&amp;T, T-Mobile, and Verizon) are not liable for delayed or undelivered messages.
              </li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, graphics, and logos, is the property of Knoxville Comedy or
              our event partners and is protected by copyright and intellectual property laws. You may not reproduce or
              use our content without our express written permission.
            </p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions regarding these Terms, please contact us at{" "}
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
