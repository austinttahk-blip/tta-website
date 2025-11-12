'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function FlightSimulatorTrainingPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState('trial')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && (tab === 'trial' || tab === 'cessna' || tab === 'diamond-fixed' || tab === 'diamond-motion' || tab === 'airbus')) {
      setActiveTab(tab)
    }
  }, [searchParams])

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Image Banner */}
      <div className="relative w-full h-[60vh] min-h-[400px] bg-gray-900">
        <Image
          src="https://picsum.photos/seed/flight-simulator/1920/800"
          alt="Flight Simulator Training"
          width={1920}
          height={800}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-[85rem] mx-auto">
            <p className="text-sm font-medium text-gray-200 mb-3">Published in Flight Training</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
              Flight Simulator Training
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
              Realistic and professional flight training experiences using advanced simulators equipped with Garmin G1000 glass cockpits.
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
                The TTA Flight Simulator Training Programme offers realistic and professional flight training experiences using Cessna 172 and Diamond DA40 simulators, both equipped with Garmin G1000 glass cockpits. All sessions are conducted in person and guided by real pilots with aviation experience, ensuring authentic procedures, control handling, and discipline throughout the lesson.
              </p>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex gap-8 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('trial')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === 'trial'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Trial Flight
                </button>
                <button
                  onClick={() => setActiveTab('cessna')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === 'cessna'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Cessna 172 Simulator
                </button>
                <button
                  onClick={() => setActiveTab('diamond-fixed')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === 'diamond-fixed'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Diamond DA40 Fixed-Base
                </button>
                <button
                  onClick={() => setActiveTab('diamond-motion')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === 'diamond-motion'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Diamond DA40 Full-Motion
                </button>
                <button
                  onClick={() => setActiveTab('airbus')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === 'airbus'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Airbus A320 Simulator
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[600px]">
              {activeTab === 'trial' ? (
                /* Trial Flight Experience */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>Introductory Experience</span>
                      <span>•</span>
                      <span>1 Hour</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Trial Flight Experience
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      The Trial Flight Experience is a promotional introductory session designed for first-time flyers. Participants take control of a Cessna 172 fixed-base simulator, performing basic manoeuvres under the guidance of an instructor.
                    </p>


                    {/* Course Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Session Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Session Details</h4>
                        <dl className="space-y-3 text-sm">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Format</dt>
                            <dd className="font-medium text-gray-900">In-person trial session</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Duration</dt>
                            <dd className="font-medium text-gray-900">1 hour total</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Briefing</dt>
                            <dd className="font-medium text-gray-900">15 minutes</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Simulator Time</dt>
                            <dd className="font-medium text-gray-900">45 minutes</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Participants</dt>
                            <dd className="font-medium text-gray-900">1 per session</dd>
                          </div>
                          <div className="flex justify-between py-3 mt-2">
                            <dt className="text-gray-900 font-semibold">Fee</dt>
                            <dd className="font-bold text-gray-900 text-lg">HKD 399</dd>
                          </div>
                          <p className="text-xs text-gray-500">Promotional Rate</p>
                        </dl>
                      </div>

                    </div>
                  </div>
                </div>
              ) : activeTab === 'cessna' ? (
                /* Cessna 172 Simulator */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>Fixed-Base Simulator</span>
                      <span>•</span>
                      <span>Garmin G1000 Cockpit</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Fixed-Base Cessna 172 Simulator
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      Experience the handling and cockpit layout of one of the world&apos;s most popular training aircraft. This fixed-base simulator features a full Garmin G1000 cockpit and dual controls, providing an authentic environment for both beginners and enthusiasts.
                    </p>


                    {/* Course Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Session Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Session Details</h4>
                        <dl className="space-y-3 text-sm">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Format</dt>
                            <dd className="font-medium text-gray-900">In-person simulator training</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Duration</dt>
                            <dd className="font-medium text-gray-900">1 hour (including briefing)</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Aircraft Type</dt>
                            <dd className="font-medium text-gray-900">Cessna 172</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Participants</dt>
                            <dd className="font-medium text-gray-900">1 per session</dd>
                          </div>
                          <div className="flex justify-between py-3 mt-2">
                            <dt className="text-gray-900 font-semibold">Fee</dt>
                            <dd className="font-bold text-gray-900 text-lg">HKD 799</dd>
                          </div>
                        </dl>
                      </div>

                    </div>
                  </div>
                </div>
              ) : activeTab === 'diamond-fixed' ? (
                /* Diamond DA40 Fixed-Base Simulator */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>Fixed-Base Simulator</span>
                      <span>•</span>
                      <span>Modern High-Performance</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Fixed-Base Diamond DA40 Simulator
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      Train on a modern, high-performance aircraft simulator equipped with a G1000 cockpit. Ideal for students transitioning to glass-cockpit environments or seeking to enhance flight precision.
                    </p>


                    {/* Course Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Session Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Session Details</h4>
                        <dl className="space-y-3 text-sm">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Format</dt>
                            <dd className="font-medium text-gray-900">In-person simulator training</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Duration</dt>
                            <dd className="font-medium text-gray-900">1 hour (including briefing)</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Aircraft Type</dt>
                            <dd className="font-medium text-gray-900">Diamond DA40</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Participants</dt>
                            <dd className="font-medium text-gray-900">1 per session</dd>
                          </div>
                          <div className="flex justify-between py-3 mt-2">
                            <dt className="text-gray-900 font-semibold">Fee</dt>
                            <dd className="font-bold text-gray-900 text-lg">HKD 799</dd>
                          </div>
                        </dl>
                      </div>

                    </div>
                  </div>
                </div>
              ) : activeTab === 'diamond-motion' ? (
                /* Diamond DA40 Full-Motion Simulator */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>Full-Motion Simulator</span>
                      <span>•</span>
                      <span>Six-Axis Motion Platform</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Full-Motion Diamond DA40 Simulator
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      A fully immersive six-axis motion platform that recreates the true sensation of flight. Perfect for advanced flight exercises, including crosswind landings, emergency procedures, and realistic manoeuvres.
                    </p>


                    {/* Course Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Session Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Session Details</h4>
                        <dl className="space-y-3 text-sm">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Format</dt>
                            <dd className="font-medium text-gray-900">In-person simulator training</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Duration</dt>
                            <dd className="font-medium text-gray-900">1 hour (including briefing)</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Aircraft Type</dt>
                            <dd className="font-medium text-gray-900">Diamond DA40</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Motion Platform</dt>
                            <dd className="font-medium text-gray-900">Six-axis</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Participants</dt>
                            <dd className="font-medium text-gray-900">1 per session</dd>
                          </div>
                          <div className="flex justify-between py-3 mt-2">
                            <dt className="text-gray-900 font-semibold">Fee</dt>
                            <dd className="font-bold text-gray-900 text-lg">HKD 899</dd>
                          </div>
                        </dl>
                      </div>

                    </div>
                  </div>
                </div>
              ) : (
                /* Airbus A320 Advanced Jet Simulator */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>Commercial Jet Simulator</span>
                      <span>•</span>
                      <span>Full-Scale Cockpit</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Airbus A320 Advanced Jet Simulator
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      Operate a full-scale airline cockpit and experience the procedures of commercial jet operations. Students are guided through complete flight phases — from start-up and taxi to climb, cruise, and landing.
                    </p>


                    {/* Course Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Session Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Session Details</h4>
                        <dl className="space-y-3 text-sm">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Format</dt>
                            <dd className="font-medium text-gray-900">In-person simulator training</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Duration</dt>
                            <dd className="font-medium text-gray-900">1 hour (including briefing)</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Aircraft Type</dt>
                            <dd className="font-medium text-gray-900">Airbus A320</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Cockpit</dt>
                            <dd className="font-medium text-gray-900">Full-scale</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                            <dt className="text-gray-500">Participants</dt>
                            <dd className="font-medium text-gray-900">1 per session</dd>
                          </div>
                          <div className="flex justify-between py-3 mt-2">
                            <dt className="text-gray-900 font-semibold">Fee</dt>
                            <dd className="font-bold text-gray-900 text-lg">HKD 899</dd>
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

              {/* Book Trial Flight Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Trial Flight</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Experience authentic flight simulation with our introductory session.
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
