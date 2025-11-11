import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function TrainingPage() {
  return (
    <div>
      <Header enableColorTransition={false}/>
      <main className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Professional Training
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive aviation training programs designed to prepare you for every aspect of your aviation career journey.
          </p>
        </div>

        <section className="py-20 bg-slate-50">
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
                    <a href="/training/flight-simulator-training" className="text-blue-600 text-sm font-medium hover:text-blue-700">
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
