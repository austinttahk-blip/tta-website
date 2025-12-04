import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StandardSolutionShowcase } from '@/components/StandardSolutionShowcase'
import { CTASection } from '@/components/CTASection'
import heroImage from '@/images/training/simulator.jpeg'
import cockpitImage from '@/images/training/cockpit.jpg'
import pilotFiveImage from '@/images/training/pilot-5.jpg'
import pilotSixImage from '@/images/training/pilot-6.jpg'
import pilotImage from '@/images/training/pilot.jpg'
import pilotTwoImage from '@/images/training/pilot-2.jpg'
import pilotThreeImage from '@/images/training/pilot-3.jpg'
import gallery1Image from '@/images/gallery/gallery-1.jpeg'
import gallery2Image from '@/images/gallery/gallery-2.jpeg'
import gallery3Image from '@/images/gallery/gallery-3.jpeg'
import gallery4Image from '@/images/gallery/gallery-4.jpeg'

export const metadata = {
  title: 'TTA Custom Flight Simulator Solutions',
  description:
    'A detail-rich view of the TTA Custom Simulator portfolio, tailored to your fleet and mission requirements, built for training leaders who need precision.',
}

const galleryImages = [gallery4Image, gallery3Image, gallery2Image, gallery1Image, pilotImage, pilotThreeImage]

const solutionHighlights = [
  {
    title: 'Fleet-Matched FFS',
    category: 'Custom flight deck',
    timeline: '100% fleet match',
    description: 'Cockpit configurations that mirror your exact aircraft type, avionics suite, and operational procedures.',
    metrics: [
      { label: 'Fleet match', value: '100%' },
      { label: 'Deployment', value: 'Custom timeline' },
    ],
    image: cockpitImage,
  },
  {
    title: 'Mission-Specific Rotary',
    category: 'HEMS / SAR',
    timeline: 'Mission ready',
    description: 'Tailored helicopter simulators with dynamic control loading, hoist profiles, and NVG-ready interiors for specialized operations.',
    metrics: [
      { label: 'Mission kits', value: 'HEMS / SAR' },
      { label: 'Interior', value: 'NVG ready' },
    ],
    image: pilotThreeImage,
  },
  {
    title: 'Custom Avionics Suite',
    category: 'Integrated systems',
    timeline: 'Your configuration',
    description: 'Avionics packages configured to match your specific aircraft systems, EFB integration, and training requirements.',
    metrics: [
      { label: 'Avionics', value: 'Custom config' },
      { label: 'Integration', value: 'Fleet-specific' },
    ],
    image: pilotFiveImage,
  },
]

const productSections = [
  {
    name: 'fleet',
    title: 'Fleet-matched simulators',
    subtitle: 'tailored to your aircraft',
    description: [
      'Every detail of the cockpit, avionics, and visual systems adapted to your airline or rotary fleet so you can train the way you fly.',
      'Configurable environments that mirror your fleet—fixed-wing, rotary, or mission-specific—while keeping integrations turnkey.',
      'High-fidelity cueing with dynamic control loading, mission rehearsal packages with sling, winch, and hoist profiles for helicopter operations.',
    ],
    ctaText: 'Explore custom builds',
    ctaLink: '/simulators',
    image: cockpitImage,
    stats: [
      { value: '100%', label: 'Fleet match' },
      { value: 'NVG', label: 'Ready interior' },
      { value: 'Custom', label: 'Configuration' },
    ],
  },
  {
    name: 'mission',
    title: 'Mission-specific kits',
    subtitle: 'rotary + specialized ops',
    description: [
      'HEMS and SAR mission packs with hoists, sling loads, and NVG-ready domes tailored to your operational requirements.',
      'Cabin configurations and safety trainers designed to match your specific aircraft interior and emergency procedures.',
      'Analytics and telemetry layers customized to track the metrics that matter most to your training program.',
    ],
    ctaText: 'See mission kits',
    ctaLink: '/projects',
    image: pilotFiveImage,
    stats: [
      { value: 'HEMS', label: 'Mission kits' },
      { value: 'NVG', label: 'Calibrated' },
      { value: 'Custom', label: 'Profiles' },
    ],
  },
]

export default function CustomSolutionsPage() {
  return (
    <div className="bg-white text-slate-900">
      <Header enableColorTransition />

      <main>
        <section className="relative isolate min-h-[60vh] overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <Image src={heroImage} alt="Custom simulator hero" className="size-full object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-slate-950" />
          </div>
          <div className="relative z-10 mx-auto flex min-h-[60vh] w-full max-w-7xl items-end px-6 pb-16">
            <div className="w-full space-y-4">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">Custom Solutions</p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">Built around your aircraft, your procedures, your space.</h1>
              </div>
              <div className="max-w-4xl">
                <p className="text-base text-slate-100">
                  TTA Custom Simulator Solutions are co-designed with your team, delivering bespoke cockpits, layouts and features that match your fleet, training syllabus and physical constraints – from concept mock-ups to full training and R&D platforms.
                </p>
              </div>
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
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Custom Solutions</p>
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
                A strip of imagery showing custom cockpits, cabin mock-ups, and mission-specific configurations tailored to client requirements.
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

        <CTASection
          emailSubject="TTA Custom Simulator Consultation"
          emailText="Request consultation"
          eyebrow="Get started"
          title="Discuss your custom requirements"
          description="Share your fleet specifications, mission profiles, and training objectives. Our engineering team will design a simulator solution that perfectly matches your operational needs."
        />
      </main>

      <Footer />
    </div>
  )
}

