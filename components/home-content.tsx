import { Ticket, MessageSquareText, Users, CalendarDays } from "lucide-react"

const highlights = [
  {
    icon: Ticket,
    title: "Tickets to local shows",
    body: "We're your home for tickets to independent stand-up comedy shows across Knoxville and East Tennessee — from intimate showcases to headliner nights.",
  },
  {
    icon: CalendarDays,
    title: "Year-round lineups",
    body: "The Hoot festival is just the beginning. We produce and promote live comedy all year long, so there's always a new show on the calendar.",
  },
  {
    icon: MessageSquareText,
    title: "Never miss a drop",
    body: "Sign up for text alerts to get first access to lineups, ticket drops, and flash promos before shows sell out.",
  },
  {
    icon: Users,
    title: "Built by local comics",
    body: "Run by Knoxville comedy producers building a thriving scene for local and touring comedians in the Scruffy City.",
  },
]

const faqs = [
  {
    question: "Where can I see live comedy in Knoxville?",
    answer:
      "Since the closing of Side Splitters Comedy Club in 2014, Knoxville's independent comedy scene has grown organically through the hard work of multiple local producers. Sign up for our text list or follow us on Instagram to see where the next show is happening.",
  },
  {
    question: "How do I get tickets to Knoxville comedy shows?",
    answer:
      "Tickets for our upcoming stand-up comedy shows are released right here on knoxvillecomedy.com. Join our text list to get notified the moment new shows and tickets go on sale.",
  },
  {
    question: "Is Knoxville Comedy only the Hoot festival?",
    answer:
      "No. The Hoot in The Holler is our annual comedy festival, but Knoxville Comedy runs live stand-up shows year-round. We're the ongoing destination for independent comedy in Knoxville, not just a once-a-year event.",
  },
  {
    question: "How can I stay updated on upcoming comedy shows in Knoxville?",
    answer:
      "The fastest way is to join our text marketing list at the top of this page. You can also follow @knoxvillecomedy on Instagram for lineup announcements, ticket drops, and behind-the-scenes updates.",
  },
]

export function HomeContent() {
  return (
    <>
      {/* What we do */}
      <section className="bg-background py-16 md:py-24 px-4" aria-labelledby="what-we-do-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Live comedy in Knoxville, TN
            </p>
            <h2
              id="what-we-do-heading"
              className="font-display text-3xl md:text-5xl font-black text-foreground mb-5 text-balance"
            >
              Your year-round home for Knoxville stand-up comedy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Knoxville Comedy is the destination for tickets to the best independent stand-up shows in
              East Tennessee. We produce and promote live comedy all year long — so whether you&apos;re
              looking for a laugh this weekend or planning your next night out, there&apos;s always a show
              worth seeing in the Scruffy City.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-16 md:py-24 px-4" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2
            id="faq-heading"
            className="font-display text-3xl md:text-4xl font-black text-foreground mb-10 text-center text-balance"
          >
            Knoxville comedy, answered
          </h2>
          <dl className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-card border border-border rounded-xl p-6">
                <dt className="text-lg font-bold text-foreground mb-2">{faq.question}</dt>
                <dd className="text-muted-foreground leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}

export const homeFaqs = faqs
