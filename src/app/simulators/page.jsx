import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import heroImage from '@/images/training/simulator.jpg'
import cockpitImage from '@/images/training/cockpit.jpg'
import pilotFourImage from '@/images/training/pilot-4.jpg'
import pilotFiveImage from '@/images/training/pilot-5.jpg'
import pilotSixImage from '@/images/training/pilot-6.jpg'

export const metadata = {
  title: 'Flight Simulators - TTA Aviation',
}

const highlightSystems = [
  {
    title: 'TTA XR Series Full-Flight Simulator',
    description:
      'A level-D capable simulator engineered in Hong Kong for airlines and academies that need full-envelope fidelity without compromise.',
    bullets: [
      'Tropos-style spherical visuals with weather, night and terrain realism',
      'Connected instructor station for live monitoring, debrief, and analytics',
      'Upset recovery, low-visibility, and emergency add-on modules',
    ],
    image: cockpitImage,
    link: '/projects',
  },
  {
    title: 'Advanced Rotary Simulator',
    description:
      'Custom helicopter environment with interchangeable avionics suites for offshore, EMS, and training missions.',
    bullets: [
      'High-fidelity cueing with dynamic control loading',
      'Mission rehearsal packages with sling, winch, and hoist profiles',
      'Glass cockpit integrations for AS350, H145, and similar fleets',
    ],
    image: pilotFiveImage,
    link: '/projects',
  },
]

const relatedEquipment = [
  {
    title: 'Simfinity XR Desktop Trainers',
    description: 'Compact systems for classrooms and pre-briefing suites with detachable controls.',
    image: pilotFourImage,
    href: '/education/flight-simulator-training',
  },
  {
    title: 'Flight Training Devices',
    description: 'Fixed-base solutions for ab-initio syllabi and IR refreshers.',
    image: heroImage,
    href: '/education',
  },
  {
    title: 'Lifecycle Services',
    description: 'Installation, calibration, and preventative maintenance coverage across Asia.',
    image: pilotSixImage,
    href: '/projects',
  },
]

export default function SimulatorsPage() {
  return (
    <div className="bg-white text-gray-900">
      <Header enableColorTransition={true} />

      <main>
        <section className="relative isolate overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-900/60 to-slate-900" />
          <div className="container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-12 lg:items-center">
            <div className="relative z-10 space-y-6 lg:col-span-5">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blue-200">Professional Simulation</p>
                <h1 className="text-4xl font-bold text-white sm:text-5xl">Full-Flight Simulators</h1>
                <p className="mt-4 text-lg text-slate-200">
                  TTA builds flight simulators from the ground up. We combine our in-house engineering team with airline experience to
                  deliver highly realistic training platforms for fixed-wing and rotary operators across Asia.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/education/flight-simulator-training"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400"
                >
                  Start Training
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:text-white"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
            <div className="relative z-10 lg:col-span-7">
              <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:h-96">
                <Image src={heroImage} alt="TTA full-flight simulator" className="size-full object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-100 bg-white py-16">
          <div className="container mx-auto grid gap-10 px-6 lg:[grid-template-columns:minmax(0,3fr)_minmax(0,1fr)]">
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Description</p>
                <p className="text-lg leading-relaxed text-gray-600">
                  We build simulators that mirror the CAE flagship layout—a clean, focused information column with highlighted aircraft
                  systems next to a call-to-action side card. Every TTA unit is shipped ready for installation, with performance
                  verification and recurrent support.
                </p>
              </div>

              <div className="space-y-12">
                {highlightSystems.map((system) => (
                  <article
                    key={system.title}
                    className="flex gap-6 flex-col sm:flex-row sm:items-stretch sm:gap-10 lg:gap-14"
                  >
                    <div className="relative w-56 overflow-hidden rounded-2xl bg-gray-100 sm:flex-shrink-0 sm:w-64 lg:w-72">
                      <Image
                        src={system.image}
                        alt={system.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 14rem"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">Highlight</p>
                      <h2 className="mt-2 text-2xl font-semibold text-gray-900">{system.title}</h2>
                      <p className="mt-3 text-gray-600">{system.description}</p>
                      <ul className="mt-4 space-y-2 text-sm text-gray-700">
                        {system.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span className="text-blue-600">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={system.link}
                        className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"
                      >
                        Discover more<span className="ml-2">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="self-start rounded-3xl border border-gray-100 bg-slate-50 p-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Need more information?</p>
                <h3 className="text-2xl font-semibold text-gray-900">Connect with our simulator team</h3>
                <p className="text-sm text-gray-600">
                  Request a brochure, talk through certification requirements, or line up an engineering workshop.
                </p>
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
                  href="mailto:info@ttahk.com?subject=TTA%20Simulator%20Brochure"
                  className="inline-flex w-full items-center justify-center rounded-full border border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
                >
                  Request brochure
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500"
                >
                  Contact us
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Other Training Equipment</p>
                <h3 className="text-3xl font-bold text-gray-900">Complementary Solutions</h3>
                <p className="mt-2 text-gray-600">Inspired by the CAE carousel, explore the rest of our training ecosystem.</p>
              </div>
              <Link href="/education#courses" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Browse all equipment →
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedEquipment.map((item) => (
                <article key={item.title} className="flex flex-col rounded-3xl bg-white shadow-sm">
                  <div className="overflow-hidden rounded-3xl">
                    <Image src={item.image} alt={item.title} className="h-60 w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="mt-2 flex-1 text-sm text-gray-600">{item.description}</p>
                    <Link href={item.href} className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500">
                      Learn more<span className="ml-2">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
