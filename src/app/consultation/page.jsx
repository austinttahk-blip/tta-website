import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CallToAction } from '@/components/CallToAction'

export default function ConsultationPage() {
  return (
    <div>
      <Header enableColorTransition={false} />

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:pt-4 lg:pr-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-blue-600">Expert Consultation</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Aviation Consulting Services
                </p>
                <p className="mt-6 text-lg/8 text-gray-700">
                  Expert consulting services for aviation professionals, organizations, and regulatory bodies in Hong Kong.
                  From compliance guidance to strategic planning, we provide comprehensive support for your aviation needs.
                </p>
                <div className="mt-8">
                  <a
                    href="#services"
                    className="inline-flex rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Learn More
                  </a>
                </div>
                <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-700">
                  <blockquote className="text-base/7">
                    <p>
                      "TTA's aviation consulting services have been instrumental in helping us navigate complex regulatory requirements and optimize our training programs. Their expertise and professionalism are unmatched in the industry."
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4 text-sm/6">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      className="size-6 flex-none rounded-full"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">Sarah Chen</span> –{' '}
                      <span className="text-gray-600">Chief Pilot, Hong Kong Airlines</span>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <img
              alt="Aviation consulting services"
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2432&h=1442&q=80"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0"
            />
          </div>
        </div>
      </div>

      <main className="bg-white px-6 py-32 lg:px-8">

        <section className="py-20 bg-slate-50" id="services">
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
                    <a href="/youth-aviation" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Learn More <span aria-hidden="true">→</span>
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
                    <a href="/aviation-english" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Learn More <span aria-hidden="true">→</span>
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
                    <a href="/flight-training" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Learn More <span aria-hidden="true">→</span>
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
                    <a href="/simulator-training" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Learn More <span aria-hidden="true">→</span>
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
                    <a href="/simulator-solutions" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Learn More <span aria-hidden="true">→</span>
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
                    <a href="/professional-training" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Learn More <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Section */}
      <CallToAction
        title="Ready to get expert aviation consultation? Start with TTA today."
      />
      <Footer />
    </div>
  )
}
