'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function WorkshopPage() {
  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Image Banner */}
      <div className="relative w-full h-[60vh] min-h-[400px] bg-gray-900">
        <Image
          src="https://picsum.photos/seed/workshop/1920/800"
          alt="Aviation Workshops"
          width={1920}
          height={800}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-[85rem] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
              Aviation Workshop
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
              Explore aviation from every angle. Through hands-on workshops in engineering, piloting, and air traffic control, we spark passion, build confidence, and turn the dream of flight into tangible skills.
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
              href="/education" 
              className="inline-flex items-center gap-x-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8"
            >
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Education
            </Link>

            {/* Program Overview */}
            <div className="mb-12">
              <p className="text-lg text-gray-600 leading-relaxed">
                Explore aviation from every angle. Through hands-on workshops in engineering, piloting, and air traffic control, we spark passion, build confidence, and turn the dream of flight into tangible skills.
              </p>
            </div>

            {/* Build Your Own Engine Workshop */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Build Your Own Engine Workshop</h2>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Workshop Highlights</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Discovery How Engines Create Power</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Build a Working Engine Model</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Guided by Aviation Instructors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Boost STEM Thinking & Creativity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Format Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Workshop Details</h2>
              
              <div className="grid sm:grid-cols-2 gap-6 my-8">
                {/* Format Details */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Session Details</h4>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Duration</dt>
                      <dd className="font-medium text-gray-900">2.5 hours</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Age Group</dt>
                      <dd className="font-medium text-gray-900">8+</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Instructor</dt>
                      <dd className="font-medium text-gray-900">Aviation Instructors</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Location</dt>
                      <dd className="font-medium text-gray-900">TTA Campus</dd>
                    </div>
                    <div className="flex justify-between py-3 mt-2">
                      <dt className="text-gray-900 font-semibold">Lesson Fee</dt>
                      <dd className="font-bold text-gray-900 text-lg">HKD 899</dd>
                    </div>
                  </dl>
                </div>

                {/* What You'll Learn */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">What You'll Experience</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Hands-on engine building experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Understanding of engine mechanics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>STEM skills development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Creative problem-solving activities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Our Workshop</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Hands-on learning with practical applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Expert guidance from aviation instructors</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Interactive and engaging learning environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Develops STEM thinking and creativity</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Sidebar - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-16 space-y-5">
              
              {/* Book Workshop Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book a Workshop</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Join our Build Your Own Engine Workshop and discover how engines create power.
                </p>
                <a
                  href="https://forms.gle/t7jpaauNfc8LqkgM8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 px-4 bg-blue-600 text-white text-center text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </a>
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
