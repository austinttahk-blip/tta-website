import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTASection } from '@/components/CTASection'
import heroImage from '@/images/training/simulator.jpeg'
import pilotTwoImage from '@/images/training/pilot-2.jpg'
import aboutusImage1 from '@/images/training/aboutus-1.jpeg'
import aboutusImage2 from '@/images/training/aboutus-2.jpeg'
import A320Image from '@/images/solutions/A320.jpeg'
import gallery1Image from '@/images/gallery/gallery-1.jpeg'
import gallery2Image from '@/images/gallery/gallery-2.jpeg'
import gallery3Image from '@/images/gallery/gallery-3.jpeg'
import gallery4Image from '@/images/gallery/gallery-4.jpeg'

export const metadata = {
  title: 'TTA Standard Flight Simulator Solutions',
  description:
    'A detail-rich view of the TTA Standard Simulator portfolio, inspired by flagship OEM programme pages and built for training leaders who need depth.',
}

const galleryImages = [gallery1Image, gallery2Image, gallery3Image, gallery4Image, aboutusImage1, aboutusImage2]

const productSections = [
  {
    name: 'c172',
    title: 'C172 Flight Simulator',
    subtitle: '',
    description: [
      'Our C172 simulator is the core single-engine trainer for basic handling, circuits and navigation, ideal for PPL-style and school programmes. It gives students a familiar, forgiving platform to build solid flying fundamentals before moving on to more complex types.',
    ],
    ctaText: 'Explore flagship builds',
    ctaLink: '/simulators',
    video: '/videos/C172.mp4',
    features: [
      'G1000 glass cockpit',
      'Circuits & nav exercises',
      'School & club friendly',
    ],
  },
  {
    name: 'da40-da42',
    title: 'DA40 / DA42 Flight Simulator',
    subtitle: '',
    description: [
      'The DA40/42 simulator provides a full glass-cockpit environment for IFR and multi-engine progression, bridging the gap between basic SEP training and more advanced commercial pathways. It is designed for serious procedure practice while remaining accessible for training organisations and academies.',
    ],
    ctaText: 'See mission-ready kits',
    ctaLink: '/projects',
    video: '/videos/DA40.mp4',
    features: [
      'Full G1000 suite',
      'Single & multi-engine modes',
      'IFR & procedures focus',
    ],
  },
  {
    name: 'a320',
    title: 'A320 Flight Simulator',
    subtitle: '',
    description: [
      'Our A320 simulator introduces students to a modern airline-style cockpit, supporting procedural training, crew coordination and airline-style operations. It is built for flows, checklists and scenario-based sessions that mirror real airline environments at an educational, non-certified level.',
    ],
    ctaText: 'Explore training systems',
    ctaLink: '/education',
    image: A320Image,
    features: [
      'Airline-style flight deck',
      'Procedure & SOP training',
      'Crew coordination & scenarios',
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
          <div className="relative z-10 mx-auto flex min-h-[60vh] w-full max-w-7xl items-end px-6 pb-16">
            <div className="w-full space-y-4">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">Standard Solutions</p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">Training simulators for education</h1>
              </div>
              <div className="max-w-4xl">
                <p className="mt-4 text-base text-slate-100">
                  High-fidelity visuals, solid flight models and integrated instructor stations give schools, academies and clubs a reliable platform for procedural, skills and scenario-based training.
                </p>
              </div>
            </div>
          </div>
        </section>

        {productSections.map((section, index) => (
          <section key={section.name} className="bg-white">
            <div className="grid gap-y-10 lg:grid-cols-12 lg:items-stretch lg:gap-0">
              <div className={`relative min-h-[420px] lg:col-span-7 lg:min-h-[640px] ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                {section.image ? (
                  <Image src={section.image} alt={section.name} fill className="object-cover" />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={section.video} type="video/mp4" />
                  </video>
                )}
              </div>
              <div
                className={`flex flex-col justify-center px-6 py-16 lg:col-span-5 lg:min-h-[640px] lg:px-16 xl:px-24 ${
                  index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Standard Solutions</p>
                  <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-[42px] lg:leading-tight">
                    {section.title}
                    {section.subtitle && (
                      <>
                        <br />
                        <span className="text-slate-500">{section.subtitle}</span>
                      </>
                    )}
                  </h2>
                  <div className="mt-4 h-1 w-12 bg-slate-900" />
                  <div className="mt-8 space-y-6">
                    {section.description.map((paragraph, i) => (
                      <p key={i} className="text-base leading-relaxed text-slate-600 lg:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <ul className="mt-10 grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-8">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="h-2 w-2 flex-none text-gray-400 mt-2" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
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

        <CTASection
          eyebrow="Get started"
          title="Line up your delivery slot"
          description="Share your fleet mix, regulatory pathway, and preferred motion options. Our programme managers will lock the right baseline configuration and guide you to factory acceptance."
        />
      </main>

      <Footer />
    </div>
  )
}
