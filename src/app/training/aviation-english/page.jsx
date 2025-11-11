'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

export default function AviationEnglishPage() {
  const [activeTab, setActiveTab] = useState('trial')

  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Image Banner */}
      <div className="relative w-full h-[60vh] min-h-[400px] bg-gray-900">
        <img 
          src="https://picsum.photos/seed/aviation-english/1920/800" 
          alt="Aviation English Training"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-[85rem] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
              Aviation English Training (ICAO)
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
              Professional aviation communication skills training designed to meet ICAO Doc 9835 standards for aspiring pilots and aviation professionals.
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
                The TTA Aviation English Training Series is designed for aspiring pilots, aviation students, and professionals who wish to enhance their aviation communication skills in accordance with ICAO Doc 9835 standards. This programme helps learners develop strong listening, speaking, and comprehension abilities needed for real-world flight communication and ICAO proficiency testing.
              </p>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex gap-8">
                <button
                  onClick={() => setActiveTab('trial')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'trial'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Trial Class
                </button>
                <button
                  onClick={() => setActiveTab('foundation')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'foundation'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  10-Hour Foundation
                </button>
                <button
                  onClick={() => setActiveTab('intensive')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'intensive'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  18-Hour Intensive
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[600px]">
              {activeTab === 'trial' ? (
                /* Trial Class */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>Introductory Session</span>
                      <span>•</span>
                      <span>1.5 Hours</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      ICAO English Trial Class
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      A 1.5-hour introductory session providing a practical overview of aviation English and the ICAO test format. Students experience listening and speaking activities based on authentic aviation recordings and real-world scenarios.
                    </p>

                    {/* Course Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Course Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Session Details</h4>
                        <dl className="space-y-3 text-sm">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Format</dt>
                            <dd className="font-medium text-gray-900">In-person</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Duration</dt>
                            <dd className="font-medium text-gray-900">1.5 hours</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Availability</dt>
                            <dd className="font-medium text-gray-900">By schedule</dd>
                          </div>
                          <div className="flex justify-between py-3 mt-2">
                            <dt className="text-gray-900 font-semibold">Fee</dt>
                            <dd className="font-bold text-gray-900 text-lg">HKD 199</dd>
                          </div>
                        </dl>
                      </div>

                      {/* What You'll Experience */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">What You'll Experience</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Overview of ICAO test format</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Listening activities with real aviation recordings</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Speaking practice based on real-world scenarios</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Introduction to aviation phraseology</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeTab === 'foundation' ? (
                /* 10-Hour Foundation Course */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>ICAO Level 4</span>
                      <span>•</span>
                      <span>10 Hours</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      ICAO English 10-Hour Foundation Course
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      A structured in-person course designed for aviation students and beginners preparing for ICAO Level 4 proficiency. Lessons build a solid foundation in operational communication, phraseology, and test familiarity used in international aviation.
                    </p>

                    {/* Course Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Course Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Course Details</h4>
                        <dl className="space-y-3 text-sm">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Format</dt>
                            <dd className="font-medium text-gray-900">In-person, small-group</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Duration</dt>
                            <dd className="font-medium text-gray-900">10 hours (5 × 2-hour lessons)</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Location</dt>
                            <dd className="font-medium text-gray-900">TTA Campus</dd>
                          </div>
                          <div className="flex justify-between py-3 mt-2">
                            <dt className="text-gray-900 font-semibold">Fee</dt>
                            <dd className="font-bold text-gray-900 text-lg">HKD 3,999</dd>
                          </div>
                        </dl>
                      </div>

                      {/* What You'll Learn */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">What You'll Learn</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Operational communication skills</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Standard aviation phraseology</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>ICAO test format and expectations</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Listening comprehension techniques</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* 18-Hour Intensive Course */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>ICAO Level 5+</span>
                      <span>•</span>
                      <span>18 Hours</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      ICAO English 18-Hour Intensive Course
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      A comprehensive in-person programme designed for students aiming to reach ICAO Level 5 or higher. Includes 3 hours of individual one-on-one tutoring for focused test preparation and communication enhancement.
                    </p>

                    {/* Course Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Course Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Course Details</h4>
                        <dl className="space-y-3 text-sm">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Format</dt>
                            <dd className="font-medium text-gray-900">In-person</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Duration</dt>
                            <dd className="font-medium text-gray-900">18 hours total</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">One-on-One</dt>
                            <dd className="font-medium text-gray-900">3 hours included</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Location</dt>
                            <dd className="font-medium text-gray-900">TTA Campus</dd>
                          </div>
                          <div className="flex justify-between py-3 mt-2">
                            <dt className="text-gray-900 font-semibold">Fee</dt>
                            <dd className="font-bold text-gray-900 text-lg">HKD 6,999</dd>
                          </div>
                        </dl>
                      </div>

                      {/* Programme Highlights */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Programme Highlights</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Advanced communication techniques</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Personalized one-on-one tutoring</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Intensive test preparation</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Targeted improvement strategies</span>
                          </li>
                        </ul>
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
                  Experience our ICAO English training with a 1.5-hour trial session.
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
                      <a href="mailto:info@tta.hk" className="text-blue-600 hover:text-blue-700 break-all">
                        info@tta.hk
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
