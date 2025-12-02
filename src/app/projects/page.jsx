import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import heroImage from '@/images/education/take-off.jpeg'
import campusImage from '@/images/training/pilot.jpg'
import labImage from '@/images/training/pilot-2.jpg'
import outreachImage from '@/images/training/pilot-4.jpg'
import pilotSixImage from '@/images/training/pilot-6.jpg'
import cockpitImage from '@/images/training/cockpit.jpg'
import simulatorImage from '@/images/training/simulator.jpeg'
import laeImage from '@/images/solutions/LAE.jpeg'

export const metadata = {
  title: 'Projects - TTA Aviation',
}

const initiativeTracks = [
  {
    title: 'Simulator Projects',
    description:
      'Our simulator projects cover the full journey from 3D design and prototyping to installation and training support, delivering practical flight training devices for schools, academies and industry clients across the region.',
    bullets: [
      'From cockpit concept to training-ready device',
      '3D design, prototyping, and installation services',
      'Training support for schools, academies and industry clients across the region',
    ],
    image: simulatorImage,
    link: '/contact?topic=projects',
  },
  {
    title: 'LAE Projects',
    description:
      'TTA\'s LAE projects focus on UAV, eVTOL and low-altitude operations, using simulation, training and consulting to help partners move from concept on paper to safe, scalable real-world deployment.',
    bullets: [
      'Building the future low-altitude ecosystem',
      'UAV, eVTOL and low-altitude operations expertise',
      'From concept to safe, scalable real-world deployment',
    ],
    image: laeImage,
    link: '/contact?topic=projects',
  },
]

const relatedCapabilities = [
  {
    title: 'Simulator & Training Ecosystems',
    description: 'Full-flight, FTD, and classroom trainers that slot directly into each project scope.',
    image: cockpitImage,
    href: '/simulators',
  },
  {
    title: 'Operations & Talent Services',
    description: 'Instructor pipelines, maintenance crews, and marketing launch teams stationed across Asia.',
    image: pilotSixImage,
    href: '/education',
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-white text-gray-900">
      <Header enableColorTransition={true} />

      <main>
        {/* Hero Section - Airbus style */}
        <section className="relative h-screen min-h-[600px] overflow-hidden">
          <Image
            src={heroImage}
            alt="Aviation Projects Studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-24 lg:pb-32">
              <h1 className="max-w-3xl text-4xl font-light text-white sm:text-5xl lg:text-6xl">
                Our Projects
              </h1>
              <p className="mt-6 max-w-4xl text-lg text-white/90 lg:text-xl">
                At TTA, we turn aviation and low-altitude ideas into real, working solutions – from early concepts to operating platforms.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-100 bg-white py-16">
          <div className="container mx-auto grid gap-10 px-6 lg:[grid-template-columns:minmax(0,3fr)_minmax(0,1fr)]">
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Description</p>
                <p className="text-lg leading-relaxed text-gray-600">
                  We combine capital advisory, technical design, and training content inside one build squad so project owners get
                  a single accountable team from feasibility through activation. Our multi-city footprint keeps procurement and
                  certification aligned with Hong Kong, Mainland, and ASEAN requirements.
                </p>
              </div>

              <div className="space-y-12">
                {initiativeTracks.map((track) => (
                  <Link
                    key={track.title}
                    href={track.link}
                    className="group flex gap-6 flex-col sm:flex-row sm:items-stretch sm:gap-10 lg:gap-14 transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                  >
                    <div className="relative w-56 overflow-hidden rounded-2xl bg-gray-100 sm:flex-shrink-0 sm:w-64 lg:w-72">
                      <Image
                        src={track.image}
                        alt={track.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 14rem"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">Highlight</p>
                      <h2 className="mt-2 text-2xl font-semibold text-gray-900">{track.title}</h2>
                      <p className="mt-3 text-gray-600">{track.description}</p>
                      <ul className="mt-4 space-y-2 text-sm text-gray-700">
                        {track.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span className="text-blue-600">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-500">
                        Discover more<span className="ml-2">→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="self-start rounded-3xl border border-gray-100 bg-slate-50 p-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Need more information?</p>
                <h3 className="text-2xl font-semibold text-gray-900">Connect with our project studio</h3>
                <p className="text-sm text-gray-600">Schedule a scoping call, align investor updates, or request a sample playbook.</p>
              </div>
              <div className="mt-6 space-y-4 text-sm text-gray-700">
                <p>P30, Telford Plaza Phase 1, Kowloon Bay</p>
                <a href="tel:+85269360374" className="block font-semibold text-blue-600">
                  +852 6936 0374
                </a>
                <a href="mailto:info@ttahk.com" className="block font-semibold text-blue-600">
                  info@ttahk.com
                </a>
              </div>
              <div className="mt-8 space-y-3">
                <Link
                  href="mailto:info@ttahk.com?subject=TTA%20Project%20Briefing"
                  className="inline-flex w-full items-center justify-center rounded-full border border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                >
                  Request project deck
                </Link>
                <Link
                  href="/contact?topic=projects"
                  className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500"
                >
                  Contact us
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Project Ecosystem</p>
                <h3 className="text-3xl font-bold text-gray-900">Related Capabilities</h3>
                <p className="mt-2 text-gray-600">Plug any of these services into your project roadmap to de-risk launch and growth.</p>
              </div>
              <Link href="/education#courses" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Explore all services →
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCapabilities.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                >
                  <div className="overflow-hidden rounded-3xl">
                    <Image src={item.image} alt={item.title} className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="mt-2 flex-1 text-sm text-gray-600">{item.description}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-500">
                      Learn more<span className="ml-2">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
