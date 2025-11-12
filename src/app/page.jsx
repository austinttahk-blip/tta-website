import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Solutions } from '@/components/Solutions'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <main>
        <Solutions />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
