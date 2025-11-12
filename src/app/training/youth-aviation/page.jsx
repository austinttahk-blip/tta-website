'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function YouthAviationContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState('adp')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && (tab === 'adp' || tab === 'afp')) {
      setActiveTab(tab)
    }
  }, [searchParams])

  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Image Banner */}
      <div className="relative w-full h-[60vh] min-h-[400px] bg-gray-900">
        <Image
          src="https://picsum.photos/seed/aviation-youth/1920/800"
          alt="Youth Aviation Programs"
          width={1920}
          height={800}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-[85rem] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
              Youth Aviation Programs
          </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Inspiring young minds through hands-on aviation education designed for students aged 8–12 and secondary-level learners.
          </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto py-10 lg:py-14">
        <div className="grid lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-10">
          
          {/* Left Content - Main Area */}
          <div className="lg:col-span-3">
            
            {/* Breadcrumb */}
            <Link 
              href="/simulators" 
              className="inline-flex items-center gap-x-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8"
            >
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Simulators
            </Link>

            {/* Program Overview */}
            <div className="mb-12">
              <p className="text-lg text-gray-600 leading-relaxed">
                Our Youth Aviation Programs provide an authentic introduction to the world of aviation. All sessions are conducted by qualified instructors, including real pilots and professional English-speaking aviation trainers, ensuring students receive an inspiring and educational experience.
              </p>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex gap-8">
                <button
                  onClick={() => setActiveTab('adp')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'adp'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Aviation Discovery Programme (ADP)
                </button>
                <button
                  onClick={() => setActiveTab('afp')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'afp'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Aviation Fundamental Programme (AFP)
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[600px]">
              {activeTab === 'adp' ? (
                /* Aviation Discovery Programme (ADP) */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>Ages 8-12</span>
                      <span>•</span>
                      <span>Beginner Level</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Aviation Discovery Programme (ADP)
            </h2>
                  </div>

                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    The Aviation Discovery Programme (ADP) is an engaging introductory course designed for young learners aged 8–12 who are curious about how airplanes fly and how the aviation world works.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Through hands-on activities, teamwork, and simulator experiences, students learn to think like real pilots and engineers — developing curiosity, logic, and confidence along the way. This programme is part of TTA&apos;s Youth Aviation Series, providing a fun, practical first step into the world of flight.
                  </p>

                  {/* What Students Learn */}
                  <div className="bg-gray-50 rounded-xl p-6 my-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What Students Will Learn</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Fundamentals of how airplanes fly</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Hands-on experiments and activities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Flight simulator experience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Teamwork and problem-solving skills</span>
                      </li>
                    </ul>
                  </div>

                  {/* Course Info Grid */}
                  <div className="grid sm:grid-cols-2 gap-6 my-8">
                    {/* Course Details */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Course Details</h4>
                      <dl className="space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Duration</dt>
                          <dd className="font-medium text-gray-900">10 lessons</dd>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Lesson Length</dt>
                          <dd className="font-medium text-gray-900">1.5 hours</dd>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Total Hours</dt>
                          <dd className="font-medium text-gray-900">15 hours</dd>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Group Size</dt>
                          <dd className="font-medium text-gray-900">Up to 20</dd>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Language</dt>
                          <dd className="font-medium text-gray-900">English</dd>
                        </div>
                        <div className="flex justify-between py-3 mt-2">
                          <dt className="text-gray-900 font-semibold">Tuition Fee</dt>
                          <dd className="font-bold text-gray-900 text-lg">HKD 3,750</dd>
                        </div>
                        <p className="text-xs text-gray-500">Includes materials & certificate</p>
                      </dl>
                    </div>

                    {/* Trial Class */}
              <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Trial Class</h4>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Experience the course before enrolling. This session offers a fun introduction to aviation through experiments and simulator experience.
                      </p>
                      <dl className="space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Duration</dt>
                          <dd className="font-medium text-gray-900">1.5 hours</dd>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Availability</dt>
                          <dd className="font-medium text-gray-900">By schedule</dd>
                        </div>
                        <div className="flex justify-between py-3 mt-2">
                          <dt className="text-gray-900 font-semibold">Trial Fee</dt>
                          <dd className="font-bold text-gray-900 text-lg">HKD 199</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              ) : (
                /* Aviation Fundamental Programme (AFP) */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>Secondary Students</span>
                      <span>•</span>
                      <span>Intermediate Level</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Aviation Fundamental Programme (AFP)
                    </h2>
                  </div>

                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    The Aviation Fundamental Programme (AFP) is designed for secondary-level students who wish to gain a deeper understanding of aircraft operations and aviation systems.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    This structured 10-lesson course builds on foundational concepts from ADP and introduces topics such as flight dynamics, mass & balance, meteorology, and aircraft instrumentation. All sessions are conducted by real pilots and professional aviation instructors, providing authentic knowledge, practical demonstrations, and mentorship for students who aspire to become future pilots, engineers, or aviation professionals.
                  </p>

                  {/* Course Topics */}
                  <div className="bg-gray-50 rounded-xl p-6 my-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Topics</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Flight dynamics and aerodynamics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Mass & balance calculations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Aviation meteorology</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Aircraft instrumentation</span>
                      </li>
                    </ul>
                  </div>

                  {/* Course Info Grid */}
                  <div className="grid sm:grid-cols-2 gap-6 my-8">
                    {/* Course Details */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Course Details</h4>
                      <dl className="space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Duration</dt>
                          <dd className="font-medium text-gray-900">10 lessons</dd>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Lesson Length</dt>
                          <dd className="font-medium text-gray-900">1.5 hours</dd>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Total Hours</dt>
                          <dd className="font-medium text-gray-900">15 hours</dd>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Group Size</dt>
                          <dd className="font-medium text-gray-900">Up to 20</dd>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Language</dt>
                          <dd className="font-medium text-gray-900">English</dd>
                        </div>
                        <div className="flex justify-between py-3 mt-2">
                          <dt className="text-gray-900 font-semibold">Tuition Fee</dt>
                          <dd className="font-bold text-gray-900 text-lg">HKD 3,750</dd>
                        </div>
                        <p className="text-xs text-gray-500">Includes materials & certificate</p>
                      </dl>
                    </div>

                    {/* Trial Class */}
              <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Trial Class</h4>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Explore before enrolling with an introduction to aviation theory and flight simulation.
                      </p>
                      <dl className="space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Duration</dt>
                          <dd className="font-medium text-gray-900">1.5 hours</dd>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <dt className="text-gray-500">Availability</dt>
                          <dd className="font-medium text-gray-900">By schedule</dd>
                        </div>
                        <div className="flex justify-between py-3 mt-2">
                          <dt className="text-gray-900 font-semibold">Trial Fee</dt>
                          <dd className="font-bold text-gray-900 text-lg">HKD 199</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>

          {/* Right Sidebar - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-16 space-y-5">
              
              {/* Book Trial Class Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book a Trial Class</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Experience our aviation programs firsthand with a 1.5-hour trial session.
                </p>
                <Link 
                  href="/consultation"
                  className="block w-full py-2.5 px-4 bg-blue-600 text-white text-center text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </Link>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl p-3">
                <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <dt className="text-gray-500 font-medium">Location</dt>
                    <dd className="font-medium text-gray-900 text-right">P30, Telford Plaza Phase 1, Kowloon Bay</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <dt className="text-gray-500 font-medium">Phone</dt>
                    <dd className="font-medium text-gray-900">
                      <a href="tel:+85269360374" className="text-blue-600 hover:text-blue-700">
                        +852 6936 0374
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-gray-500 font-medium">Email</dt>
                    <dd className="font-medium text-gray-900">
                      <a href="mailto:info@ttahk.com" className="text-blue-600 hover:text-blue-700 break-all">
                        info@ttahk.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function YouthAviationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <YouthAviationContent />
    </Suspense>
  )
}