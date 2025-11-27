import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import heroImage from '@/images/training/pilot-3.jpg'
import campusImage from '@/images/training/pilot.jpg'
import labImage from '@/images/training/pilot-2.jpg'
import outreachImage from '@/images/training/pilot-4.jpg'
import pilotSixImage from '@/images/training/pilot-6.jpg'
import cockpitImage from '@/images/training/cockpit.jpg'

export const metadata = {
  title: 'Projects - TTA Aviation',
}

const initiativeTracks = [
  {
    title: 'Aviation Innovation Campuses',
    description:
      'Integrated STEM hubs with XR galleries, avionics benches, and flexible hangar studios delivered from concept design through commissioning.',
    bullets: [
      'Academic partnerships with turnkey accreditation support',
      'Digital twin and data backbones for research programs',
      'Operations manuals plus instructor onboarding squads',
    ],
    image: campusImage,
    link: '/contact?topic=projects',
  },
  {
    title: 'Experience & Investor Platforms',
    description:
      'Pop-up simulators, investor demo suites, and mobile outreach fleets that activate new markets while capturing partner data.',
    bullets: [
      'Modular enclosures for malls, museums, and events',
      'Integrated ticketing, CRM, and sponsor analytics',
      'Flight ops, safety, and maintenance playbooks included',
    ],
    image: outreachImage,
    link: '/investors',
  },
]

const relatedCapabilities = [
  {
    title: 'Lifecycle Program Management',
    description: 'Governance, reporting, and capital planning dashboards that keep stakeholders aligned.',
    image: labImage,
    href: '/investors',
  },
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
        <section className="relative isolate overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-900/60 to-slate-900" />
          <div className="container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-12 lg:items-center">
            <div className="relative z-10 space-y-6 lg:col-span-5">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blue-200">Flagship Delivery</p>
                <h1 className="text-4xl font-bold text-white sm:text-5xl">Aviation Projects Studio</h1>
                <p className="mt-4 text-lg text-slate-200">
                  TTA architects and builds aviation campuses, experiential labs, and investor showcases end-to-end. We pair
                  program management with flight operations expertise so concepts launch on time and stay calibrated.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact?topic=projects"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400"
                >
                  Start a project
                </Link>
                <Link
                  href="/investors"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:text-white"
                >
                  Meet our investors
                </Link>
              </div>
            </div>
            <div className="relative z-10 lg:col-span-7">
              <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:h-96">
                <Image src={heroImage} alt="TTA project buildout" className="size-full object-cover" priority />
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
                  We combine capital advisory, technical design, and training content inside one build squad so project owners get
                  a single accountable team from feasibility through activation. Our multi-city footprint keeps procurement and
                  certification aligned with Hong Kong, Mainland, and ASEAN requirements.
                </p>
              </div>

              <div className="space-y-12">
                {initiativeTracks.map((track) => (
                  <article key={track.title} className="flex gap-6 flex-col sm:flex-row sm:items-stretch sm:gap-10 lg:gap-14">
                    <div className="relative w-56 overflow-hidden rounded-2xl bg-gray-100 sm:flex-shrink-0 sm:w-64 lg:w-72">
                      <Image
                        src={track.image}
                        alt={track.title}
                        fill
                        className="object-cover"
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
                      <Link
                        href={track.link}
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
          <div className="container mx-auto px-6">
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
