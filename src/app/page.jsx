import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Solutions } from '@/components/Solutions'
import { JoinUs } from '@/components/JoinUs'
import { PopularCourses } from '@/components/PopularCourses'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Solutions />

        <JoinUs />

        <PopularCourses />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
