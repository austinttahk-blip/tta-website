import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Solutions } from '@/components/Solutions'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Solutions />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
