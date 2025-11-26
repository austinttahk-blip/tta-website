import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Solutions } from '@/components/Solutions'
import { JoinUs } from '@/components/JoinUs'
import { RecentEvents } from '@/components/RecentEvents'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Solutions />

        <JoinUs />

        <RecentEvents />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
