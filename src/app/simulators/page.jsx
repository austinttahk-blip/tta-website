import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import {
  CheckIcon,
  WrenchScrewdriverIcon,
  BuildingLibraryIcon,
  GlobeAmericasIcon,
  PuzzlePieceIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline'

// Import simulator image
import simulatorImage from '@/images/training/simulator.jpg'

export const metadata = {
  title: 'Flight Simulators - TTA Aviation',
}

export default function SimulatorsPage() {
  return (
    <div>
      <Header enableColorTransition={false} />

      <div className="relative isolate overflow-hidden bg-linear-to-b from-blue-100/20">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-blue-600/10 ring-blue-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
              Flight Simulators
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Experience professional-grade flight simulation training in Hong Kong&apos;s most realistic simulators.
                From fixed-base systems to full-motion VR simulators, perfect for building aviation skills.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/education/flight-simulator-training"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Start Training
                </a>
                <a href="/education#courses" className="text-sm/6 font-semibold text-gray-900">
                  View Courses <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <Image
              alt="Flight Simulator Cockpit"
              src={simulatorImage}
              className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              width={800}
              height={667}
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>

      <main className="bg-white">

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-base font-semibold text-blue-600">Overview</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simulator Solutions</p>
            </div>
            <div className="mx-auto max-w-3xl text-lg/8 text-gray-600">
              <p>
                The TTA Simulator Solutions Division specialises in the design and manufacturing of professional flight simulators for aviation education, research, and training. Each simulator is developed and assembled by TTA's in-house engineering and aviation team, ensuring precise handling characteristics, cockpit realism, and long-term reliability.
              </p>
              <p className="mt-6">
                Our simulators are trusted by educational institutions, universities, and flight schools both in Hong Kong and overseas. Whether for academic instruction, outreach, or professional pilot training, TTA provides complete simulator development and installation services tailored to each client's needs.
              </p>
            </div>
                </div>
        </section>

        {/* What We Provide Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
              <div>
                <h2 className="text-base font-semibold text-blue-600">Solutions</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Provide</p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  TTA manufactures and supplies a wide range of simulator systems, from entry-level training models to advanced full-motion cockpit environments. All systems are built to deliver realistic operational experiences, suitable for both educational and professional use.
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Solutions Include:</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                    <CheckIcon className="size-6 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-600">Fixed-base simulators (Cessna 172, Diamond DA40, and similar types)</span>
                    </li>
                    <li className="flex items-start gap-3">
                    <CheckIcon className="size-6 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-600">Full-motion simulators for advanced flight training</span>
                    </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="size-6 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-600">Custom-built educational simulator systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="size-6 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-600">VR-based aviation training equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="size-6 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-600">Consultation, installation, and instructor familiarisation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-base font-semibold text-blue-600">Our Advantage</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Us</p>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                At TTA, we don't resell — we build. Our simulators are fully designed and manufactured by our own aviation and engineering teams, giving clients confidence in quality, performance, and after-sales support.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative">
                <dt>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600">
                    <WrenchScrewdriverIcon className="size-5 text-white" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-gray-900">Locally Designed & Manufactured</p>
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Built in Hong Kong with professional aviation engineering standards.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600">
                    <BuildingLibraryIcon className="size-5 text-white" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-gray-900">Trusted by Institutions</p>
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Partnered with universities and schools across Hong Kong to integrate simulators into STEM and aviation education.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600">
                    <GlobeAmericasIcon className="size-5 text-white" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-gray-900">Global Reach</p>
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  TTA simulators are used by overseas flight schools for training and demonstration.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600">
                    <PuzzlePieceIcon className="size-5 text-white" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-gray-900">Custom Solutions</p>
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  Scalable simulator options from entry-level trainers to full-motion systems.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600">
                    <ClipboardDocumentCheckIcon className="size-5 text-white" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-gray-900">End-to-End Consultation</p>
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  From concept and design to installation and aftercare.
                </dd>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

