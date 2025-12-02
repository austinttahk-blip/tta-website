import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import heroImage from '@/images/training/simulator.jpeg'
import cockpitImage from '@/images/training/cockpit.jpg'
import pilotImage from '@/images/training/pilot.jpg'
import pilotTwoImage from '@/images/training/pilot-2.jpg'
import pilotThreeImage from '@/images/training/pilot-3.jpg'
import pilotFourImage from '@/images/training/pilot-4.jpg'
import pilotFiveImage from '@/images/training/pilot-5.jpg'
import pilotSixImage from '@/images/training/pilot-6.jpg'
import standardSolutionImage from '@/images/solutions/standard-solution.jpeg'
import customSolutionImage from '@/images/solutions/custom-solution.jpeg'
import educationSolutionImage from '@/images/solutions/education_solution.jpeg'
import trainingSolutionsImage from '@/images/solutions/training_solutions.jpeg'
import lifecycleServicesImage from '@/images/solutions/lifecycle_services.jpeg'

export const metadata = {
  title: 'Flight Simulators - TTA Aviation',
}

// Airbus A220-style product sections
const simulatorFamilies = [
  {
    name: 'Standard Solutions',
    title: 'TTA Standard Simulator Solutions',
    subtitle: 'Turnkey training simulators for education',
    description: [
      'TTA provides ready-to-install simulators for DA40, C172, DA42 and A320, engineered in Hong Kong specifically for education, ab-initio and cadet preparation.',
      'High-fidelity visuals, solid flight models and integrated instructor stations give schools, academies and clubs a reliable platform for procedural, skills and scenario-based training.',
    ],
    ctaText: 'Discover Standard Solutions',
    ctaLink: '/simulators/standard-solutions',
    image: standardSolutionImage,
    stats: [
      { value: '4', label: 'Aircraft Types', icon: 'aircraft' },
      { value: '3', label: 'Training Stages', icon: 'certificate' },
      { value: '1', label: 'Turnkey System', icon: 'display' },
    ],
  },
  {
    name: 'Custom Solutions',
    title: 'TTA Custom Simulator Solutions',
    subtitle: 'Built around your aircraft, your procedures, your space.',
    description: [
      'TTA Custom Simulator Solutions are co-designed with your team, delivering bespoke cockpits, layouts and features that match your fleet, training syllabus and physical constraints – from concept mock-ups to full training and R&D platforms.',
    ],
    ctaText: 'Discover Custom Solutions',
    ctaLink: '/simulators/custom-solutions',
    image: customSolutionImage,
    stats: [
      { value: '3', label: 'Design Phases', icon: 'certificate' },
      { value: '2', label: 'Core Applications', icon: 'display' },
      { value: '1', label: 'Dedicated Project Team', icon: 'mission' },
    ],
  },
]

const relatedEquipment = [
  {
    title: 'Simulator education solutions',
    description: 'Compact systems for classrooms and pre-briefing suites with detachable controls.',
    image: educationSolutionImage,
    href: '/education',
  },
  {
    title: 'Flight Training Devices',
    description: 'Fixed-base solutions for ab-initio syllabi and IR refreshers.',
    image: trainingSolutionsImage,
    href: '/education',
  },
  {
    title: 'Lifecycle Services',
    description: 'Installation, calibration, and preventative maintenance coverage across Asia.',
    image: lifecycleServicesImage,
    href: '/projects',
  },
]

// Icon component for stats
function StatIcon({ type }) {
  const icons = {
    certificate: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    display: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    motion: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    aircraft: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    night: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
    mission: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  }
  return icons[type] || null
}

export default function SimulatorsPage() {
  return (
    <div className="bg-white text-gray-900">
      <Header enableColorTransition={true} />

      <main>
        {/* Hero Section - Airbus style */}
        <section className="relative h-screen min-h-[600px] overflow-hidden">
          <Image
            src={heroImage}
            alt="TTA Full-Flight Simulators"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-24 lg:pb-32">
              <h1 className="max-w-3xl text-4xl font-light text-white sm:text-5xl lg:text-6xl">
                TTA Flight Simulators
              </h1>
              <p className="mt-6 max-w-4xl text-lg text-white/90 lg:text-xl">
                Discover TTA&apos;s professional flight simulator solutions, engineered in Hong Kong for airlines and training academies across Asia.
                Education-focused flight simulator solutions, engineered in Hong Kong for schools, academies and flying clubs realistic, reliable platforms for ab-initio and cadet training.              </p>
            </div>
          </div>
        </section>

        {/* Product Family Sections - Airbus A220 style */}
        {simulatorFamilies.map((family, index) => (
          <section key={family.name} className="bg-white">
            <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Image Section */}
              <div className={`relative min-h-[500px] lg:min-h-[700px] ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Image
                  src={family.image}
                  alt={family.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className={`flex flex-col justify-center px-6 py-16 lg:px-16 xl:px-24 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="max-w-xl">
                  {/* Eyebrow */}
                  <p className="text-lg font-semibold">
                    {family.title}
                  </p>
                  {/* Title with blue underline */}
                  <h2 className="mt-2 text-3xl font-normal text-[#00205B] sm:text-4xl lg:text-[42px] lg:leading-tight">
                    {family.subtitle}
                  </h2>
                  {/* Blue underline bar */}
                  <div className="mt-4 h-1 w-12 bg-[#00122e]" />

                  {/* Description paragraphs */}
                  <div className="mt-8 space-y-4">
                    {family.description.map((paragraph, i) => (
                      <p key={i} className="text-base leading-relaxed text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* CTA Button - Airbus style */}
                  <Link
                    href={family.ctaLink}
                    className="mt-8 inline-flex items-center justify-center rounded bg-[#00122e] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#000814]"
                  >
                    {family.ctaText}
                  </Link>
                </div>

                {/* Stats Cards - positioned at bottom */}
                <div className="mt-12 grid grid-cols-3 gap-4">
                  {family.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg bg-gray-50 p-4 text-center"
                    >
                      <div className="mb-3 flex justify-center text-[#00205B]">
                        <StatIcon type={stat.icon} />
                      </div>
                      <p className="text-2xl font-light text-gray-900 sm:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Feature Highlight 2 */}

        <section className="relative min-h-[60vh] overflow-hidden bg-slate-900">

          <Image

            src={pilotTwoImage}

            alt="Level-D Fidelity Training"

            fill

            className="object-cover opacity-40"

          />

          <div className="absolute inset-0 bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent" />

          <div className="relative flex min-h-[60vh] items-center justify-end">

            <div className="container mx-auto px-6 py-16">

              <div className="ml-auto max-w-2xl text-right">

                <h2 className="text-3xl font-light text-white sm:text-4xl lg:text-5xl">

                  Integrated Training Journey

                </h2>

                <p className="mt-6 text-lg leading-relaxed text-white/80">

                  From simulator design and custom builds to school programmes and talent pathways, TTA creates an integrated training journey that turns today&apos;s learners into tomorrow&apos;s aviation professionals.

                </p>

                <Link

                  href="/education/flight-simulator-training"

                  className="mt-8 inline-flex items-center gap-2 border-b border-white pb-1 text-sm font-medium text-white transition-colors hover:border-blue-300 hover:text-blue-300"

                >

                  Explore Training Standards

                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />

                  </svg>

                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* Related Equipment Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Training Ecosystem</p>
              <h3 className="text-3xl font-bold text-gray-900">Comprehensive Solutions</h3>
              <p className="mt-2 text-gray-600">Explore our comprehensive range of training solutions and equipment.</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedEquipment.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                >
                  <div className="relative h-60 w-full overflow-hidden rounded-3xl">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
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

        {/* Contact CTA Section */}
        <section className="bg-[#00122e] py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-light text-white sm:text-4xl">
                Connect with our simulator team
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Request a brochure, discuss certification requirements, or schedule an engineering workshop.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="mailto:info@ttahk.com?subject=TTA%20Simulator%20Brochure"
                  className="inline-flex items-center justify-center rounded border border-white px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#00122e]"
                >
                  Request brochure
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-white px-8 py-3 text-sm font-medium text-[#00205B] transition-colors hover:bg-gray-100"
                >
                  Contact us
                </Link>
              </div>
              <div className="mt-8 text-sm text-white/60">
                <p>P30, Telford Plaza Phase 1, Kowloon Bay</p>
                <p className="mt-1">
                  <a href="tel:+85269360374" className="hover:text-white">+852 6936 0374</a>
                  {' · '}
                  <a href="mailto:info@ttahk.com" className="hover:text-white">info@ttahk.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
