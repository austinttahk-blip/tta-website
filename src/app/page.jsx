import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Solutions } from '@/components/Solutions'
import { UpcomingEvents } from '@/components/UpcomingEvents'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Solutions />

        <UpcomingEvents />

        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
