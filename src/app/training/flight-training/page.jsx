'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function FlightTrainingContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState('malaysia')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && (tab === 'malaysia' || tab === 'australia')) {
      setActiveTab(tab)
    }
  }, [searchParams])

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Image Banner */}
      <div className="relative w-full h-[60vh] min-h-[400px] bg-gray-900">
        <Image
          src="https://picsum.photos/seed/flight-training/1920/800"
          alt="Flight Training"
          width={1920}
          height={800}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-[85rem] mx-auto">
            <p className="text-sm font-medium text-gray-200 mb-3">Published in Flight Training</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
              Flight Training (Malaysia & Australia)
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Real flight training experience with our partner flight schools in Malaysia and Australia, flying Cessna 172 aircraft in professional airspace environments.
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
              href="/training"
              className="inline-flex items-center gap-x-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8"
            >
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Training
            </Link>

            {/* Program Overview */}
            <div className="mb-12">
              <p className="text-lg text-gray-600 leading-relaxed">
                The TTA Flight Training Programme provides aspiring pilots with the opportunity to complete genuine flight training with our partner flight schools in Malaysia and Australia. Students train in Cessna 172 aircraft under the professional supervision of qualified instructors, gaining hands-on flying experience in real-world airspace environments. All programmes are conducted in person and follow the official standards set by the Civil Aviation Authority of Malaysia (CAAM) and the Civil Aviation Safety Authority (CASA) in Australia.
              </p>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex gap-8">
                <button
                  onClick={() => setActiveTab('malaysia')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'malaysia'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Malaysia 🇲🇾
                </button>
                <button
                  onClick={() => setActiveTab('australia')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'australia'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Australia 🇦🇺
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[600px]">
              {activeTab === 'malaysia' ? (
                /* Malaysia */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>CAAM-Approved Training</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Malaysia Flight Training
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      Malaysia offers an excellent year-round training environment with ideal weather and professional flight instructors. TTA partners with CAAM-approved flight schools that provide internationally recognised flight instruction and certification pathways.
                    </p>

                    {/* Training Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Training Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Training Details</h4>
                        <dl className="space-y-3 text-sm">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Format</dt>
                            <dd className="font-medium text-gray-900">In-person, on-site flight training</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Aircraft Type</dt>
                            <dd className="font-medium text-gray-900">Cessna 172 single-engine trainer</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Certification</dt>
                            <dd className="font-medium text-gray-900">CAAM Standards</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Weather</dt>
                            <dd className="font-medium text-gray-900">Year-round ideal conditions</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Language</dt>
                            <dd className="font-medium text-gray-900">English</dd>
                          </div>
                        </dl>
                      </div>

                      {/* Programmes Offered */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Programmes Offered</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Discovery Flight (Introductory Lesson)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Pilot Lesson (Structured Training)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Private Pilot Licence (PPL) Pathway</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Programme Highlights */}
                    <div className="bg-gray-50 rounded-xl p-6 my-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Programme Highlights</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Authentic in-person flight training with professional instructors</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Internationally recognised CAAM standards</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Scenic flight environments with consistent weather conditions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Comprehensive ground briefing and post-flight debriefing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Customised training pathways from discovery flight to PPL completion</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                /* Australia */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>CASA-Approved Training</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Australia Flight Training
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      Australia remains one of the world's leading destinations for pilot training, offering structured flight education under CASA regulations. Students receive professional ground briefing and hands-on instruction in a safe, controlled airspace environment.
                    </p>

                    {/* Training Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Training Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Training Details</h4>
                        <dl className="space-y-3 text-sm">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Format</dt>
                            <dd className="font-medium text-gray-900">In-person, on-site flight training</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Aircraft Type</dt>
                            <dd className="font-medium text-gray-900">Cessna 172 single-engine trainer</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Certification</dt>
                            <dd className="font-medium text-gray-900">CASA Standards</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Environment</dt>
                            <dd className="font-medium text-gray-900">Safe, controlled airspace</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Language</dt>
                            <dd className="font-medium text-gray-900">English</dd>
                          </div>
                        </dl>
                      </div>

                      {/* Programmes Offered */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Programmes Offered</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Discovery Flight</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Pilot Experience Lesson</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Private Pilot Licence (PPL) Pathway</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Programme Highlights */}
                    <div className="bg-gray-50 rounded-xl p-6 my-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Programme Highlights</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Authentic in-person flight training with professional instructors</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Internationally recognised CASA standards</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Professional ground briefing and hands-on instruction</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Safe, controlled airspace environment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Structured flight education pathways</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-16 space-y-5">

              {/* Book Training Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Flight Training</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Start your pilot journey with professional flight training in Malaysia or Australia.
                </p>
                <Link
                  href="/consultation"
                  className="block w-full py-2.5 px-4 bg-blue-600 text-white text-center text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Us
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

export default function FlightTrainingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FlightTrainingContent />
    </Suspense>
  )
}
