import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata = {
  title: 'Flight Simulators - TTA Aviation',
}

export default function SimulatorsPage() {
  return (
    <div>
      <Header enableColorTransition={false} />

      <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
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
                  href="/simulators/simulator-training"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Training
                </a>
                <a href="#courses" className="text-sm/6 font-semibold text-gray-900">
                  View Courses <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              alt="Flight Simulator Cockpit"
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>

      <main className="bg-white px-6 py-32 lg:px-8">
        <section className="py-20 bg-slate-50" id="courses">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Our Aviation Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 hover:border-gray-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="YOUTH AVIATION"
                    className="object-cover group-hover:scale-105 transition duration-200 rounded-xl w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600">
                    YOUTH AVIATION
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Inspiring the next generation of aviators through comprehensive youth programs
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                      <span className="text-sm text-gray-700">TTA Team</span>
                    </div>
                    <a href="/training/youth-aviation" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 hover:border-gray-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="AVIATION ENGLISH"
                    className="object-cover group-hover:scale-105 transition duration-200 rounded-xl w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600">
                    AVIATION ENGLISH
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Essential language training for all aviation professionals following ICAO standards
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                      <span className="text-sm text-gray-700">TTA Team</span>
                    </div>
                    <a href="/training/aviation-english" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 hover:border-gray-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="FLIGHT TRAINING"
                    className="object-cover group-hover:scale-105 transition duration-200 rounded-xl w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600">
                    FLIGHT TRAINING
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Complete flight training pathway from first flight to professional pilot license
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                      <span className="text-sm text-gray-700">TTA Team</span>
                    </div>
                    <a href="/training/flight-training" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 hover:border-gray-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3308&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="SIMULATOR TRAINING"
                    className="object-cover group-hover:scale-105 transition duration-200 rounded-xl w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600">
                    SIMULATOR TRAINING
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Professional flight simulation training in Hong Kong&apos;s most realistic simulators
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                      <span className="text-sm text-gray-700">TTA Team</span>
                    </div>
                    <a href="/simulators/simulator-training" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 hover:border-gray-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="SIMULATOR SOLUTIONS"
                    className="object-cover group-hover:scale-105 transition duration-200 rounded-xl w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600">
                    SIMULATOR SOLUTIONS
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Custom-built flight simulators designed and manufactured in Hong Kong
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                      <span className="text-sm text-gray-700">TTA Team</span>
                    </div>
                    <a href="/training/simulator-solutions" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 hover:border-gray-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="CAREER DEVELOPMENT"
                    className="object-cover group-hover:scale-105 transition duration-200 rounded-xl w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600">
                    CAREER DEVELOPMENT
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Comprehensive career support including interview preparation and aptitude testing
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-gray-400"></div>
                      <span className="text-sm text-gray-700">TTA Team</span>
                    </div>
                    <a href="/training/professional-training" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Learn More →
                    </a>
                  </div>
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


