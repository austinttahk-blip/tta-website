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
              Aviation Workshops
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
              Interactive workshops and hands-on learning experiences designed for aviation enthusiasts and professionals.
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
                The TTA Aviation Workshop Series offers interactive, hands-on learning experiences for aviation enthusiasts, students, and professionals. Our workshops are designed to provide practical knowledge and skills through engaging activities, expert-led sessions, and collaborative learning environments.
              </p>
            </div>

            {/* Workshop Focus */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Workshop Focus</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our workshops cover a wide range of aviation topics, providing participants with practical insights and hands-on experience:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Aviation fundamentals and principles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Flight planning and navigation basics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Aircraft systems and operations</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Weather interpretation and analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Aviation safety and emergency procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Career exploration and industry insights</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Format Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Workshop Format</h2>
              
              <div className="grid sm:grid-cols-2 gap-6 my-8">
                {/* Format Details */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Session Details</h4>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Type</dt>
                      <dd className="font-medium text-gray-900">Interactive workshops</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Instructor</dt>
                      <dd className="font-medium text-gray-900">Aviation professionals</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Duration</dt>
                      <dd className="font-medium text-gray-900">2-4 hours per session</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <dt className="text-gray-500">Location</dt>
                      <dd className="font-medium text-gray-900">TTA Campus</dd>
                    </div>
                    <div className="flex justify-between py-3 mt-2">
                      <dt className="text-gray-900 font-semibold">Fee</dt>
                      <dd className="font-medium text-gray-900">Available upon inquiry</dd>
                    </div>
                  </dl>
                </div>

                {/* Who It's For */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Who It's For</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Aviation enthusiasts and hobbyists</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Students exploring aviation careers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Professionals seeking continuing education</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Our Workshops</h3>
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
                  <span>Expert instruction from aviation professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Interactive and collaborative learning environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="shrink-0 size-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Networking opportunities with industry peers</span>
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
                  Join our interactive aviation workshops and enhance your knowledge.
                </p>
                <a 
                  href="https://api.whatsapp.com/send?phone=85269360374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#25d366] text-white text-center text-sm font-medium rounded-lg hover:bg-[#20ba5a] transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                  Contact via WhatsApp
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
