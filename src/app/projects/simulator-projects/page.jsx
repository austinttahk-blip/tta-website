import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTASection } from '@/components/CTASection'
import heroImage from '@/images/solutions/education_solution.jpeg'
import cockpitImage from '@/images/training/cockpit.jpg'
import pilotImage from '@/images/training/pilot.jpg'
import installationImage from '@/images/training/pilot-2.jpg'

export const metadata = {
  title: 'Simulator Projects - TTA Aviation',
  description: 'End-to-end flight simulation projects from first 3D sketch to training-ready infrastructure.',
}

export default function SimulatorProjectsPage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Header enableColorTransition={true} />

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
          <Image
            src={heroImage}
            alt="Simulator Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl">
                <h1 className="text-5xl font-light text-white sm:text-6xl lg:text-7xl tracking-wide">
                  Simulator Projects
                </h1>
                <p className="mt-6 text-xl text-white/90 lg:text-2xl font-light">
                  End-to-end flight simulation projects from first 3D sketch to training-ready infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
              <div>
                <h2 className="text-3xl font-light text-slate-900 sm:text-4xl">
                  Comprehensive <br/> Simulator Solutions
                </h2>
                <div className="mt-6 h-1 w-12 bg-blue-600"></div>
              </div>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Our simulator projects cover the full journey from 3D design and prototyping to installation and training support, delivering practical flight training devices for schools, academies and industry clients across the region.
                </p>
                <p>
                  We understand that effective flight training requires more than just hardware. It demands a seamless integration of realistic controls, accurate flight models and immersive visuals. TTA provides end-to-end solutions that ensure your training devices are not only robust, but also true pedagogical tools that enhance pilot competency.
                </p>
                <p className="font-semibold text-slate-900">
                  TTA is your partner in building the next generation of flight training infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section 1: Image Left, Text Right */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={cockpitImage}
                  alt="Plane Simulators"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">Simulator Type</p>
                <h3 className="mt-2 text-3xl font-light text-slate-900 sm:text-4xl">
                  Plane Simulators
                </h3>
                <div className="mt-6 h-1 w-12 bg-blue-600"></div>
                <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Full and partial cockpit simulators for general aviation and airline-style aircraft (e.g. C172, DA40/42, A320), built for ab-initio, cadet preparation and procedural training in schools, academies and clubs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section 2: Text Left, Image Right */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
              <div className="order-2 lg:order-1">
                <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">Simulator Type</p>
                <h3 className="mt-2 text-3xl font-light text-slate-900 sm:text-4xl">
                  eVTOL Simulators
                </h3>
                <div className="mt-6 h-1 w-12 bg-blue-600"></div>
                <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Concept and training simulators for eVTOL and urban air mobility, used to explore routes, vertiport operations, procedures and crew training models before real-world deployment.
                  </p>
                </div>
              </div>
              <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-lg shadow-xl lg:order-2">
                <Image
                  src={installationImage}
                  alt="eVTOL Simulators"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section 3: Image Left, Text Right */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={pilotImage}
                  alt="UAV Simulators"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">Simulator Type</p>
                <h3 className="mt-2 text-3xl font-light text-slate-900 sm:text-4xl">
                  UAV Simulators
                </h3>
                <div className="mt-6 h-1 w-12 bg-blue-600"></div>
                <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Ground-control and mission simulators for UAV operations, supporting homing / return-to-home logic, mission rehearsal and remote-pilot training for future low-altitude economy use cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          emailSubject="TTA Simulator Project Inquiry"
          emailText="Request project briefing"
          eyebrow="Get started"
          title="Discuss your simulator project"
          description="Share your training requirements, aircraft types, and project timeline. Our team will design a simulator solution that meets your needs."
        />

      </main>

      <Footer />
    </div>
  )
}
