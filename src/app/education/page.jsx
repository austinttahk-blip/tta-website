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
// Import training image for hero section
import heroImage from '@/images/education/flight-view.jpeg'

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
    <div className="bg-white text-gray-900">
      <Header enableColorTransition={true} />

      <main>
        {/* Hero Section - Airbus style */}
        <section className="relative h-screen min-h-[600px] overflow-hidden">
          <Image
            src={heroImage}
            alt="Professional Training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-24 lg:pb-32">
              <h1 className="max-w-3xl text-4xl font-light text-white sm:text-5xl lg:text-6xl">
                Professional Training
              </h1>
              <p className="mt-6 max-w-4xl text-lg text-white/90 lg:text-xl">
                Comprehensive aviation training programs designed to prepare you for every aspect of your aviation career journey. From youth aviation programs to advanced simulator training, our courses provide the knowledge and skills needed for successful careers in aviation.
              </p>
            </div>
          </div>
        </section>

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
      </main>

      <Footer />
    </div>
  )
}
