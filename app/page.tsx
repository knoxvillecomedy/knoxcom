import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Lineup } from "@/components/lineup"
import { Tickets } from "@/components/tickets"
import { Sponsors } from "@/components/sponsors"
import { Organizers } from "@/components/organizers"
import { Venue } from "@/components/venue"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Lineup />
      <Venue />
      <Tickets />
      <Sponsors />
      <Organizers />
      <Newsletter />
      <Footer />
    </main>
  )
}
