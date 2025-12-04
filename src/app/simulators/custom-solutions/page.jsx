import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StandardSolutionShowcase } from '@/components/StandardSolutionShowcase'
import { CTASection } from '@/components/CTASection'
import heroImage from '@/images/training/simulator.jpeg'
import cockpitImage from '@/images/training/cockpit.jpg'
import pilotFiveImage from '@/images/training/pilot-5.jpg'
import pilotImage from '@/images/training/pilot.jpg'
import pilotThreeImage from '@/images/training/pilot-3.jpg'
import A350Image from '@/images/solutions/A350.jpeg'
import C919Image from '@/images/solutions/C919.jpeg'
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
    title: 'Concept & Design',
    description: 'Training needs analysis, cockpit and room layout, 3D models and specifications.',
    image: cockpitImage,
  },
  {
    title: 'Build & Integration',
    description: 'Hardware fabrication, assembly and software integration, including controls, visuals and instructor tools.',
    image: pilotThreeImage,
  },
  {
    title: 'Commissioning & Handover',
    description: 'On-site installation, testing, optimisation and initial operator / instructor training.',
    image: pilotFiveImage,
  },
]

const productSections = [
  {
    name: 'a350',
    title: 'A350 Simulator',
    subtitle: 'Under Development',
    description: [
      'Our A350 simulator project is a next-generation widebody flight deck environment designed for procedure training, airline-style operations and advanced education and R&D. It aims to give students, instructors and partners access to a realistic long-haul cockpit for flows, checklists, abnormal handling and systems familiarisation, optimised for education and concept work rather than formal type rating.',
    ],
    ctaText: 'Explore custom builds',
    ctaLink: '/simulators',
    image: A350Image,
    features: [
      'Widebody long-haul cockpit',
      'Procedure & SOP training',
      'Advanced education & R&D',
    ],
  },
  {
    name: 'c919',
    title: 'C919 Simulator',
    subtitle: 'Under Development',
    description: [
      'The C919 simulator project focuses on a modern narrow-body flight deck tailored for procedure practice, line-operation scenarios and future R&D related to emerging fleets in the region. Built around accurate cockpit geometry and representative systems logic, it is intended as a platform for familiarisation, training concept development and regional / low-altitude integration studies.',
    ],
    ctaText: 'See mission kits',
    ctaLink: '/projects',
    image: C919Image,
    features: [
      'Narrow-body regional cockpit',
      'Line ops & abnormal scenarios',
      'Familiarisation & concept testing',
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
                <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">Designed for your aircraft, your procedures, your space.</h1>
              </div>
              <div className="max-w-4xl">
                <p className="text-base text-slate-100">
                  TTA Custom Simulator Solutions are developed in close collaboration with your team, creating bespoke cockpits, layouts and functions that reflect your fleet, training syllabus and operational environment – from early concept and mock-ups through to full training and R&D platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <StandardSolutionShowcase items={solutionHighlights} />

        {productSections.map((section, index) => (
          <section key={section.name} className="bg-white pt-1">
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
                <ul className="mt-10 flex flex-col gap-4">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="h-2 w-2 flex-none text-gray-400 mt-2 animate-pulse" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                      <span className="text-base font-medium text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
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

