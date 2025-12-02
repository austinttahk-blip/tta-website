import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import heroImage from '@/images/solutions/LAE.jpeg'
import simulationImage from '@/images/education/map2.jpeg'
import infrastructureImage from '@/images/education/runway.jpeg'
import operationsImage from '@/images/solutions/custom-solution.jpeg'

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
            src={heroImage}
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
                  Low-Altitude <br/> Economy Solutions
                </h2>
                <div className="mt-6 h-1 w-12 bg-blue-600"></div>
              </div>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  TTA’s LAE projects focus on UAV, eVTOL and low-altitude operations, using simulation, training and consulting to help partners move from concept on paper to safe, scalable real-world deployment.
                </p>
                <p>
                  As the low-altitude economy takes flight, the need for robust infrastructure, precise traffic management, and skilled operators becomes paramount. TTA leverages its deep aviation expertise to bridge the gap between traditional aerospace standards and the dynamic world of urban air mobility.
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
                  src={operationsImage}
                  alt="UAV & eVTOL Operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">Future Flight</p>
                <h3 className="mt-2 text-3xl font-light text-slate-900 sm:text-4xl">
                  UAV & eVTOL Operations
                </h3>
                <div className="mt-6 h-1 w-12 bg-blue-600"></div>
                <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    The integration of unmanned aerial vehicles and electric vertical takeoff and landing aircraft requires new operational paradigms. TTA works with manufacturers and operators to define standard operating procedures (SOPs) and safety management systems (SMS).
                  </p>
                  <p>
                    <strong>Operational readiness from day one.</strong> We help clients navigate the complexities of regulatory approval, ensuring that their fleets are ready for commercial service with safety as the foundation.
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
                <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">Digital Twin</p>
                <h3 className="mt-2 text-3xl font-light text-slate-900 sm:text-4xl">
                  Simulation & Analysis
                </h3>
                <div className="mt-6 h-1 w-12 bg-blue-600"></div>
                <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Before a single propeller spins, we simulate the environment. TTA uses advanced simulation technologies to create digital twins of flight corridors and urban environments. This allows us to stress-test operational concepts and identify potential risks in a risk-free virtual world.
                  </p>
                  <p>
                    <strong>Data-driven decision making.</strong> Our analysis informs infrastructure planning, noise mitigation strategies, and emergency response protocols, ensuring a harmonious integration with the community.
                  </p>
                </div>
              </div>
              <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-lg shadow-xl lg:order-2">
                <Image
                  src={simulationImage}
                  alt="Simulation & Analysis"
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
                  src={infrastructureImage}
                  alt="Consulting & Deployment"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">Strategic Growth</p>
                <h3 className="mt-2 text-3xl font-light text-slate-900 sm:text-4xl">
                  Consulting & Deployment
                </h3>
                <div className="mt-6 h-1 w-12 bg-blue-600"></div>
                <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    From feasibility studies to final deployment, TTA is your strategic partner. We advise governments, developers, and technology firms on the roadmap to a thriving low-altitude economy.
                  </p>
                  <p>
                    <strong>Scalable solutions for the real world.</strong> We don't just deliver reports; we help build the ecosystem. Our consulting services cover vertiport design, airspace management integration, and workforce training, enabling a safe and scalable rollout of low-altitude services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
