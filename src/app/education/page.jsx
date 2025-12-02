import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

// Import course images
import youthAviationImage from '@/images/courses/youth_aviation.jpeg'
import aviationEnglishImage from '@/images/courses/aviation_english.jpeg'
import workshopImage from '@/images/courses/workshop.jpeg'
import flightTrainingImage from '@/images/courses/flight_training.jpg'
import simulatorTrainingImage from '@/images/courses/simulator_training.jpeg'
import careerDevelopmentImage from '@/images/courses/career_development.jpeg'
// Import training images for hero section
import pilot2Image from '@/images/training/pilot-2.jpg'
import pilot4Image from '@/images/training/pilot-4.jpg'
import pilot6Image from '@/images/training/pilot-6.jpg'
import simulatorImage from '@/images/training/simulator.jpg'

// Course menu options
const courseMenus = {
  youthAviation: [
    { name: 'Aviation Discovery Programme (ADP)', description: 'Ages 8-12 • Beginner Level', href: '/education/youth-aviation?tab=adp' },
    { name: 'Aviation Fundamental Programme (AFP)', description: 'Secondary Students • Intermediate Level', href: '/education/youth-aviation?tab=afp' },
  ],
  aviationEnglish: [
    { name: 'Trial Class', description: 'Introductory Session • 1.5 Hours', href: '/education/aviation-english?tab=trial' },
    { name: '10-Hour Foundation', description: 'ICAO Level 4 • 10 Hours', href: '/education/aviation-english?tab=foundation' },
    { name: '18-Hour Intensive', description: 'ICAO Level 5+ • 18 Hours', href: '/education/aviation-english?tab=intensive' },
  ],
  workshop: [
    { name: 'Build Your Own Engine Workshop', description: 'Hands-on learning experiences', href: '/education/workshop' },
  ],
  flightTraining: [
    { name: 'Malaysia 🇲🇾', description: 'CAAM-Approved Training', href: '/education/flight-training?tab=malaysia' },
    { name: 'Australia 🇦🇺', description: 'CASA-Approved Training', href: '/education/flight-training?tab=australia' },
  ],
  simulatorTraining: [
    { name: 'Trial Flight', description: 'Introductory Experience • 1 Hour', href: '/education/flight-simulator-training?tab=trial' },
    { name: 'Cessna 172 Simulator', description: 'Fixed-Base • Garmin G1000', href: '/education/flight-simulator-training?tab=cessna' },
    { name: 'Diamond DA40 Fixed-Base', description: 'Modern High-Performance', href: '/education/flight-simulator-training?tab=diamond-fixed' },
    { name: 'Diamond DA40 Full-Motion', description: 'Six-Axis Motion Platform', href: '/education/flight-simulator-training?tab=diamond-motion' },
    { name: 'Airbus A320 Simulator', description: 'Commercial Jet • Full-Scale Cockpit', href: '/education/flight-simulator-training?tab=airbus' },
  ],
  careerDevelopment: [
    { name: 'Career Consultation', description: 'One-on-one guidance from real pilots', href: '/education/professional-training' },
    { name: 'Interview Preparation', description: 'Communication and technical practice', href: '/education/professional-training' },
    { name: 'CV & Application Review', description: 'Professional application support', href: '/education/professional-training' },
  ],
}

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
              {/* YOUTH AVIATION Card */}
              <div className="group relative rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-gray-300 border border-transparent hover:scale-[1.02] cursor-pointer hover:z-10 has-[.group\/menu:hover]:z-20">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={youthAviationImage}
                    alt="YOUTH AVIATION"
                    className="object-cover group-hover:scale-105 transition duration-300 w-full h-full"
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
                    <div className="relative z-10 group/menu">
                      <button className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>Courses</span>
                        <ChevronDownIcon aria-hidden="true" className="size-4" />
                      </button>
                      <div className="absolute left-0 z-50 mt-3 w-screen max-w-sm opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200">
                        <div className="rounded-2xl bg-white p-3 shadow-lg ring-1 ring-gray-900/5">
                          {courseMenus.youthAviation.map((item) => (
                            <Link key={item.name} href={item.href} className="relative block rounded-lg p-3 hover:bg-gray-50">
                              <span className="font-semibold text-gray-900 text-sm">
                                {item.name}
                              </span>
                              <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-blue-600 text-sm font-medium transition-colors group-hover:text-blue-700">
                      Learn More <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
                <Link href="/education/youth-aviation" className="absolute inset-0 z-0" aria-label="View Youth Aviation courses" />
              </div>

              {/* AVIATION ENGLISH Card */}
              <div className="group relative rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-gray-300 border border-transparent hover:scale-[1.02] cursor-pointer hover:z-10 has-[.group\/menu:hover]:z-20">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={aviationEnglishImage}
                    alt="AVIATION ENGLISH"
                    className="object-cover group-hover:scale-105 transition duration-300 w-full h-full"
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
                    <div className="relative z-10 group/menu">
                      <button className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>Courses</span>
                        <ChevronDownIcon aria-hidden="true" className="size-4" />
                      </button>
                      <div className="absolute left-0 z-50 mt-3 w-screen max-w-sm opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200">
                        <div className="rounded-2xl bg-white p-3 shadow-lg ring-1 ring-gray-900/5">
                          {courseMenus.aviationEnglish.map((item) => (
                            <Link key={item.name} href={item.href} className="relative block rounded-lg p-3 hover:bg-gray-50">
                              <span className="font-semibold text-gray-900 text-sm">
                                {item.name}
                              </span>
                              <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-blue-600 text-sm font-medium transition-colors group-hover:text-blue-700">
                      Learn More <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
                <Link href="/education/aviation-english" className="absolute inset-0 z-0" aria-label="View Aviation English courses" />
              </div>

              {/* WORKSHOP Card */}
              <div className="group relative rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-gray-300 border border-transparent hover:scale-[1.02] cursor-pointer hover:z-10 has-[.group\/menu:hover]:z-20">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={workshopImage}
                    alt="WORKSHOP"
                    className="object-cover group-hover:scale-105 transition duration-300 w-full h-full"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600">
                    WORKSHOP
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Interactive workshops and hands-on learning experiences for aviation enthusiasts
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="relative z-10 group/menu">
                      <button className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>Workshops</span>
                        <ChevronDownIcon aria-hidden="true" className="size-4" />
                      </button>
                      <div className="absolute left-0 z-50 mt-3 w-screen max-w-sm opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200">
                        <div className="rounded-2xl bg-white p-3 shadow-lg ring-1 ring-gray-900/5">
                          {courseMenus.workshop.map((item) => (
                            <Link key={item.name} href={item.href} className="relative block rounded-lg p-3 hover:bg-gray-50">
                              <span className="font-semibold text-gray-900 text-sm">
                                {item.name}
                              </span>
                              <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-blue-600 text-sm font-medium transition-colors group-hover:text-blue-700">
                      Learn More <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
                <Link href="/education/workshop" className="absolute inset-0 z-0" aria-label="View Workshop courses" />
              </div>

              {/* FLIGHT TRAINING Card */}
              <div className="group relative rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-gray-300 border border-transparent hover:scale-[1.02] cursor-pointer hover:z-10 has-[.group\/menu:hover]:z-20">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={flightTrainingImage}
                    alt="FLIGHT TRAINING"
                    className="object-cover group-hover:scale-105 transition duration-300 w-full h-full"
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
                    <div className="relative z-10 group/menu">
                      <button className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>Courses</span>
                        <ChevronDownIcon aria-hidden="true" className="size-4" />
                      </button>
                      <div className="absolute left-0 z-50 mt-3 w-screen max-w-sm opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200">
                        <div className="rounded-2xl bg-white p-3 shadow-lg ring-1 ring-gray-900/5">
                          {courseMenus.flightTraining.map((item) => (
                            <Link key={item.name} href={item.href} className="relative block rounded-lg p-3 hover:bg-gray-50">
                              <span className="font-semibold text-gray-900 text-sm">
                                {item.name}
                              </span>
                              <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-blue-600 text-sm font-medium transition-colors group-hover:text-blue-700">
                      Learn More <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
                <Link href="/education/flight-training" className="absolute inset-0 z-0" aria-label="View Flight Training courses" />
              </div>

              {/* SIMULATOR TRAINING Card */}
              <div className="group relative rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-gray-300 border border-transparent hover:scale-[1.02] cursor-pointer hover:z-10 has-[.group\/menu:hover]:z-20">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={simulatorTrainingImage}
                    alt="SIMULATOR TRAINING"
                    className="object-cover group-hover:scale-105 transition duration-300 w-full h-full"
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
                    <div className="relative z-10 group/menu">
                      <button className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>Courses</span>
                        <ChevronDownIcon aria-hidden="true" className="size-4" />
                      </button>
                      <div className="absolute left-0 z-50 mt-3 w-screen max-w-sm opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200">
                        <div className="rounded-2xl bg-white p-3 shadow-lg ring-1 ring-gray-900/5">
                          {courseMenus.simulatorTraining.map((item) => (
                            <Link key={item.name} href={item.href} className="relative block rounded-lg p-3 hover:bg-gray-50">
                              <span className="font-semibold text-gray-900 text-sm">
                                {item.name}
                              </span>
                              <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-blue-600 text-sm font-medium transition-colors group-hover:text-blue-700">
                      Learn More <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
                <Link href="/education/flight-simulator-training" className="absolute inset-0 z-0" aria-label="View Simulator Training courses" />
              </div>

              {/* CAREER DEVELOPMENT Card */}
              <div className="group relative rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-gray-300 border border-transparent hover:scale-[1.02] cursor-pointer hover:z-10 has-[.group\/menu:hover]:z-20">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={careerDevelopmentImage}
                    alt="CAREER DEVELOPMENT"
                    className="object-cover group-hover:scale-105 transition duration-300 w-full h-full"
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
                    <div className="relative z-10 group/menu">
                      <button className="inline-flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>Services</span>
                        <ChevronDownIcon aria-hidden="true" className="size-4" />
                      </button>
                      <div className="absolute left-0 z-50 mt-3 w-screen max-w-sm opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200">
                        <div className="rounded-2xl bg-white p-3 shadow-lg ring-1 ring-gray-900/5">
                          {courseMenus.careerDevelopment.map((item) => (
                            <Link key={item.name} href={item.href} className="relative block rounded-lg p-3 hover:bg-gray-50">
                              <span className="font-semibold text-gray-900 text-sm">
                                {item.name}
                              </span>
                              <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-blue-600 text-sm font-medium transition-colors group-hover:text-blue-700">
                      Learn More <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
                <Link href="/education/professional-training" className="absolute inset-0 z-0" aria-label="View Career Development services" />
              </div>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  )
}
