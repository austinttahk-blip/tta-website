import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StandardSolutionShowcase } from '@/components/StandardSolutionShowcase'
import heroImage from '@/images/training/simulator.jpg'
import cockpitImage from '@/images/training/cockpit.jpg'
import pilotFiveImage from '@/images/training/pilot-5.jpg'
import pilotSixImage from '@/images/training/pilot-6.jpg'
import pilotImage from '@/images/training/pilot.jpg'
import pilotTwoImage from '@/images/training/pilot-2.jpg'
import pilotThreeImage from '@/images/training/pilot-3.jpg'

export const metadata = {
  title: 'TTA Standard Flight Simulator Solutions',
  description:
    'A detail-rich view of the TTA Standard Simulator portfolio, inspired by flagship OEM programme pages and built for training leaders who need depth.',
}

const galleryImages = [heroImage, cockpitImage, pilotFiveImage, pilotSixImage, pilotImage, pilotThreeImage]

const solutionHighlights = [
  {
    title: 'FFS 220 Narrow-Body',
    category: 'Core flight deck',
    timeline: 'Airline ready',
    description: 'Plug-and-play single-aisle architecture with Level-D pathing and zero-surprise installation windows.',
    metrics: [
      { label: 'Visual dome', value: '210° x 60°' },
      { label: 'Deployment', value: '16-week install' },
    ],
    image: cockpitImage,
  },
  {
    title: 'FFS 330 Wide-Body',
    category: 'Long-haul mission',
    timeline: 'Fleet mirror',
    description: 'Cross-crew layout with analytics packs that track fatigue, ETOPS events, and abnormal training.',
    metrics: [
      { label: 'Crew seats', value: '2 + observers' },
      { label: 'Data spine', value: 'Live analytics' },
    ],
    image: pilotThreeImage,
  },
  {
    title: 'Mission H Rotor Suite',
    category: 'Rotary kit',
    timeline: 'NVG ready',
    description: 'Dynamic control loading and hoist profiles for SAR, EMS, and offshore ops without rewiring the stack.',
    metrics: [
      { label: 'Control loading', value: 'Dynamic electric' },
      { label: 'Mission packs', value: 'EMS / SAR' },
    ],
    image: pilotFiveImage,
  },
]

const productSections = [
  {
    name: 'core',
    title: 'Core flight decks',
    subtitle: 'airline-grade baseline',
    description: [
      'Level-D pathing with dual GNSS, integrated EFBs, and 210-degree domes tuned for Asia-Pacific met models.',
      'Pods arrive with motion, data, and instructor cabling pre-routed so installations stay inside sub-18-week windows.',
      'Instructor decks mirror the layout on /simulators but add telemetry for maintenance planners and dispatch leads.',
    ],
    ctaText: 'Explore flagship builds',
    ctaLink: '/simulators',
    image: cockpitImage,
    stats: [
      { value: '210°', label: 'Visual dome' },
      { value: '99.3%', label: 'Availability' },
      { value: 'Level-D', label: 'Qualification' },
    ],
  },
  {
    name: 'mission',
    title: 'Mission variants',
    subtitle: 'rotary + cabin kits',
    description: [
      'SAR and EMS packs blend hoists, sling loads, and NVG-ready domes tied into the same instructor/data spine.',
      'Cabin safety trainers bolt to the flight deck infrastructure so power + diagnostics remain unified.',
      'Analytics layers surface utilisation, fault codes, and maintenance prompts live for ops managers.',
    ],
    ctaText: 'See mission-ready kits',
    ctaLink: '/projects',
    image: pilotFiveImage,
    stats: [
      { value: '3', label: 'Mission packs' },
      { value: 'NVG', label: 'Calibrated' },
      { value: 'EMS', label: 'Ready' },
    ],
  },
]

export default function StandardSolutionsPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header enableColorTransition />

      <main>
        <section className="relative isolate min-h-[60vh] overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <Image src={heroImage} alt="Standard simulator hero" className="size-full object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-slate-950" />
          </div>
          <div className="relative z-10 mx-auto flex min-h-[60vh] w-full max-w-5xl items-end px-6 pb-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">Standard Solutions</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">Flight deck ecosystems ready for airline deployment</h1>
              <p className="mt-4 text-base text-slate-100">
                Full-flight simulators, rotorcraft suites, and instructor hubs engineered as a cohesive catalogue for crews who need reliable, repeatable
                training hours.
              </p>
            </div>
          </div>
        </section>

        <StandardSolutionShowcase items={solutionHighlights} />

        {productSections.map((section, index) => (
          <section key={section.name} className="bg-white">
            <div className="grid gap-y-10 lg:grid-cols-12 lg:items-stretch lg:gap-0">
              <div className={`relative min-h-[420px] lg:col-span-7 lg:min-h-[640px] ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <Image src={section.image} alt={section.name} fill className="object-cover" />
              </div>
              <div
                className={`flex flex-col justify-center px-6 py-16 lg:col-span-5 lg:px-16 xl:px-24 ${
                  index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Standard Solutions</p>
                  <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-[42px] lg:leading-tight">
                    {section.title}
                    <br />
                    <span className="text-slate-500">{section.subtitle}</span>
                  </h2>
                  <div className="mt-4 h-1 w-12 bg-slate-900" />
                  <div className="mt-8 space-y-4">
                    {section.description.map((paragraph, i) => (
                      <p key={i} className="text-base leading-relaxed text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={section.ctaLink}
                    className="mt-8 inline-flex items-center justify-center rounded bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
                  >
                    {section.ctaText}
                  </Link>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-4">
                  {section.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                      <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section id="gallery" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-6xl space-y-10 px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-200">Gallery</p>
                <h2 className="text-3xl font-bold">Visual tour</h2>
              </div>
              <p className="max-w-2xl text-base text-slate-200">
                A strip of imagery similar to Airbus’ media gallery, showing cockpits, cabin mock-ups, and mission kits.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-60 w-full overflow-hidden rounded-3xl border border-white/10">
                  <Image src={image} alt={`Gallery ${index + 1}`} fill className="object-cover" sizes="(min-width: 1024px) 20rem, 100vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">Get started</p>
            <h2 className="text-3xl font-bold">Line up your delivery slot</h2>
            <p className="text-base text-slate-200">
              Share your fleet mix, regulatory pathway, and preferred motion options. Our programme managers will lock the right baseline
              configuration and guide you to factory acceptance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="mailto:info@ttahk.com?subject=TTA%20Standard%20Simulator%20Catalogue"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400"
              >
                Request catalogue
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Schedule consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
