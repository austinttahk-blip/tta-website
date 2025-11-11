'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

export default function SimulatorSolutionsPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Image Banner */}
      <div className="relative w-full h-[60vh] min-h-[400px] bg-gray-900">
        <img
          src="https://picsum.photos/seed/simulator-solutions/1920/800"
          alt="Simulator Solutions"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-[85rem] mx-auto">
            <p className="text-sm font-medium text-gray-200 mb-3">Published in Manufacturing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
              Simulator Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Professional flight simulators designed and manufactured by TTA for aviation education, research, and training institutions worldwide.
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
                The TTA Simulator Solutions Division specialises in the design and manufacturing of professional flight simulators for aviation education, research, and training. Each simulator is developed and assembled by TTA's in-house engineering and aviation team, ensuring precise handling characteristics, cockpit realism, and long-term reliability. Our simulators are trusted by educational institutions, universities, and flight schools both in Hong Kong and overseas.
              </p>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex gap-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'overview'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  What We Provide
                </button>
                <button
                  onClick={() => setActiveTab('why-choose')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'why-choose'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Why Choose Us
                </button>
                <button
                  onClick={() => setActiveTab('consultation')}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'consultation'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Custom Development
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[600px]">
              {activeTab === 'overview' ? (
                /* What We Provide */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>Professional Solutions</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      What We Provide
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      TTA manufactures and supplies a wide range of simulator systems, from entry-level training models to advanced full-motion cockpit environments. All systems are built to deliver realistic operational experiences, suitable for both educational and professional use.
                    </p>

                    {/* Solutions Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Solutions Include */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Solutions Include</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Fixed-base simulators (Cessna 172, Diamond DA40)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Full-motion simulators for advanced training</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Custom-built educational simulator systems</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>VR-based aviation training equipment</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Consultation, installation, and instructor familiarisation</span>
                          </li>
                        </ul>
                      </div>

                      {/* Applications */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Applications</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>STEM education and outreach programs</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>University aviation research facilities</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Flight school training preparation</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Professional pilot skill maintenance</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Aviation technology demonstrations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeTab === 'why-choose' ? (
                /* Why Choose Us */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>Quality & Expertise</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Why Choose Us
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      At TTA, we don't resell — we build. Our simulators are fully designed and manufactured by our own aviation and engineering teams, giving clients confidence in quality, performance, and after-sales support.
                    </p>

                    {/* Why Choose Us Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Local Manufacturing */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Locally Designed & Manufactured</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Built in Hong Kong with professional aviation engineering standards</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>In-house aviation and engineering expertise</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Precise handling characteristics and cockpit realism</span>
                          </li>
                        </ul>
                      </div>

                      {/* Trusted Partnerships */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Trusted by Institutions</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Partnered with universities and schools across Hong Kong</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Integrated into STEM and aviation education programs</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Global reach with overseas flight school partnerships</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Additional Benefits */}
                    <div className="bg-gray-50 rounded-xl p-6 my-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Benefits</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Scalable simulator options from entry-level to full-motion systems</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>End-to-end consultation from concept to aftercare</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span>Long-term reliability and comprehensive support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                /* Custom Development & Consultation */
                <div>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>End-to-End Service</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Custom Development & Consultation
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      Our team provides complete end-to-end consultation for organisations looking to establish or upgrade aviation training facilities.
                    </p>

                    {/* Services Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      {/* Services Include */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Services Include</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Needs analysis and facility planning</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Design and fabrication of cockpit and control systems</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Hardware and software integration</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Instructor station setup and technical support</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span>Post-installation maintenance and updates</span>
                          </li>
                        </ul>
                      </div>

                      {/* Process */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Our Process</h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start gap-3">
                            <div className="shrink-0 size-5 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center justify-center mt-0.5">
                              1
                            </div>
                            <span>Initial consultation and requirements assessment</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="shrink-0 size-5 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center justify-center mt-0.5">
                              2
                            </div>
                            <span>Custom design and engineering specifications</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="shrink-0 size-5 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center justify-center mt-0.5">
                              3
                            </div>
                            <span>In-house manufacturing and quality testing</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="shrink-0 size-5 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center justify-center mt-0.5">
                              4
                            </div>
                            <span>On-site installation and instructor training</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="shrink-0 size-5 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center justify-center mt-0.5">
                              5
                            </div>
                            <span>Ongoing support and system maintenance</span>
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
            <div className="sticky top-8 space-y-5">

              {/* Request Consultation Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Request Consultation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Learn more about our simulator products and partnership opportunities.
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
