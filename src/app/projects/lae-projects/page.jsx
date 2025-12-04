import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTASection } from '@/components/CTASection'
import heroImage from '@/images/solutions/LAE.jpeg'
import infrastructureImage from '@/images/education/runway.jpeg'
import uavImage from '@/images/solutions/uav.jpg'
import uavSystemsImage from '@/images/solutions/uav_system.jpeg'

export const metadata = {
  title: 'LAE Projects - TTA Aviation',
  description: 'Building the future low-altitude ecosystem.',
}
export default function LaeProjectsPage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Header enableColorTransition={true} />

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
          <Image
            src={uavSystemsImage}
            alt="LAE Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl">
                <h1 className="text-5xl font-light text-white sm:text-6xl lg:text-7xl tracking-wide">
                  LAE Projects
                </h1>
                <p className="mt-6 text-xl text-white/90 lg:text-2xl font-light">
                  Building the future low-altitude ecosystem
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
                  Low-Altitude <br /> Economy Solutions
                </h2>
                <div className="mt-6 h-1 w-12 bg-blue-600"></div>
              </div>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  TTA's LAE projects develop practical UAV, eVTOL and low-altitude operation solutions, using simulation, training and advisory support to move partners from concept on paper to safe, scalable deployment.
                </p>
                <p>
                  As the low-altitude economy emerges, TTA helps project owners define routes, vertiports, procedures and talent pipelines that meet real aviation standards while fitting local city and regional needs. By integrating technical design, training frameworks and operational concepts into one coordinated project stream, TTA turns LAE ideas into implementable, future-ready air mobility projects.
                </p>
                <p className="font-semibold text-slate-900">
                  We are architecting the skylanes of tomorrow, today.
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
                  src={infrastructureImage}
                  alt="General Aviation & Traditional Airspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">Project Type</p>
                <h3 className="mt-2 text-3xl font-light text-slate-900 sm:text-4xl">
                  General Aviation & Traditional Airspace
                </h3>
                <div className="mt-6 h-1 w-12 bg-blue-600"></div>
                <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    TTA supports general aviation and traditional airspace projects by linking flight training, simulator environments and operational concepts. Work in this area includes the design of GA training centres, simulator-based procedure training, and foundational air mobility projects that connect today's conventional aircraft operations with tomorrow's low-altitude ecosystem.
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
                <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">Project Type</p>
                <h3 className="mt-2 text-3xl font-light text-slate-900 sm:text-4xl">
                  UAV Systems & Homing Technology
                </h3>
                <div className="mt-6 h-1 w-12 bg-blue-600"></div>
                <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    TTA's UAV projects focus on developing smart homing and return systems that keep drone operations safe, predictable and scalable. This includes route and return-to-home logic, contingency profiles, and integration with ground control and training simulators, enabling operators to test and validate UAV behaviour in realistic scenarios before live deployment.
                  </p>
                </div>
              </div>
              <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-lg shadow-xl lg:order-2">
                <Image
                  src={uavImage}
                  alt="UAV Systems & Homing Technology"
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
                  src={heroImage}
                  alt="eVTOL & Urban Air Mobility"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">Project Type</p>
                <h3 className="mt-2 text-3xl font-light text-slate-900 sm:text-4xl">
                  eVTOL & Urban Air Mobility
                </h3>
                <div className="mt-6 h-1 w-12 bg-blue-600"></div>
                <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    In the eVTOL and urban air mobility space, TTA works on route concepts, vertiport layouts, procedures and training frameworks supported by simulation. These projects aim to turn early eVTOL ideas into implementable concepts, with clear thinking around infrastructure, operator training and integration into existing city and regional airspace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          emailSubject="TTA LAE Project Inquiry"
          emailText="Request project briefing"
          eyebrow="Get started"
          title="Discuss your LAE project"
          description="Share your low-altitude economy vision, operational requirements, and project goals. Our team will help turn your concept into a practical, scalable solution."
        />

      </main>

      <Footer />
    </div>
  )
}

