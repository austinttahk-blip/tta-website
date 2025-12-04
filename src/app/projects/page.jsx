import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import heroImage from '@/images/education/take-off.jpeg'
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
      'TTA delivers end-to-end simulator projects, covering the full journey from initial design and engineering through development, testing and final handover in one integrated workflow.',
    bullets: [
      'Consulting & Concept Design',
      'Development & Integration',
      'Commissioning & Training Support',
    ],
    image: simulatorImage,
    link: '/projects/simulator-projects',
  },
  {
    title: 'LAE Projects',
    description:
      'Integrated project support for UAV, eVTOL and general aviation concepts, from feasibility and simulation to pilot projects and training ecosystems.',
    bullets: [
      'UAV Solutions',
      'eVTOL Solutions',
      'General Aviation & Air Mobility',
    ],
    image: laeImage,
    link: '/projects/lae-projects',
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-800 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Request project deck
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=85269360374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#25d366] px-4 py-3 text-sm font-semibold text-[#25d366] hover:bg-[#25d366]/10 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  Contact via WhatsApp
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
