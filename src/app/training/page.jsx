import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CallToAction } from '@/components/CallToAction'

// Import training images
import pilotImage from '@/images/training/pilot.jpg'
import pilot2Image from '@/images/training/pilot-2.jpg'
import pilot3Image from '@/images/training/pilot-3.jpg'
import pilot4Image from '@/images/training/pilot-4.jpg'
import pilot5Image from '@/images/training/pilot-5.jpg'
import pilot6Image from '@/images/training/pilot-6.jpg'
import simulatorImage from '@/images/training/simulator.jpg'

export default function TrainingPage() {
  return (
    <div>
      <Header enableColorTransition={false}/>
      <div className="overflow-hidden bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Professional Training</h2>
              <p className="mt-6 text-xl/8 text-gray-700">
                Comprehensive aviation training programs designed to prepare you for every aspect of your aviation career journey.
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                From youth aviation programs to advanced simulator training, our courses provide the knowledge and skills needed for successful careers in aviation.
              </p>
              <div className="mt-10 flex">
                <a
                  href="#courses"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Explore Courses
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <Image
                  alt=""
                  src={simulatorImage}
                  className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                  width={800}
                  height={571}
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                  <Image
                    alt=""
                    src={pilot4Image}
                    className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    width={384}
                    height={288}
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <Image
                    alt=""
                    src={pilot2Image}
                    className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                    width={800}
                    height={571}
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <Image
                    alt=""
                    src={pilot6Image}
                    className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    width={384}
                    height={288}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <section id="courses" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Our Aviation Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 hover:border-gray-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={pilot3Image}
                    alt="YOUTH AVIATION"
                    className="object-cover group-hover:scale-105 transition duration-200 rounded-xl w-full h-full"
                    width={400}
                    height={300}
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
                      Learn More <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 hover:border-gray-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={pilot5Image}
                    alt="AVIATION ENGLISH"
                    className="object-cover group-hover:scale-105 transition duration-200 rounded-xl w-full h-full"
                    width={400}
                    height={300}
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
                      Learn More <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 hover:border-gray-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={pilotImage}
                    alt="FLIGHT TRAINING"
                    className="object-cover group-hover:scale-105 transition duration-200 rounded-xl w-full h-full"
                    width={400}
                    height={300}
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
                      Learn More <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 hover:border-gray-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={simulatorImage}
                    alt="SIMULATOR TRAINING"
                    className="object-cover group-hover:scale-105 transition duration-200 rounded-xl w-full h-full"
                    width={400}
                    height={300}
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
                      Learn More <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 hover:border-gray-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={pilot6Image}
                    alt="CAREER DEVELOPMENT"
                    className="object-cover group-hover:scale-105 transition duration-200 rounded-xl w-full h-full"
                    width={400}
                    height={300}
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
                      Learn More <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CallToAction />
      <Footer />
    </div>
  )
}
