import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CallToAction } from '@/components/CallToAction'

export default function ConsultationPage() {
  return (
    <div>
      <Header enableColorTransition={false} />

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:pt-4 lg:pr-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-blue-600">Expert Consultation</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Aviation Consulting Services
                </p>
                <p className="mt-6 text-lg/8 text-gray-700">
                  Expert consulting services for aviation professionals, organizations, and regulatory bodies in Hong Kong.
                  From compliance guidance to strategic planning, we provide comprehensive support for your aviation needs.
                </p>
                <div className="mt-8">
                  <a
                    href="#services"
                    className="inline-flex rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Learn More
                  </a>
                </div>
                <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-700">
                  <blockquote className="text-base/7">
                    <p>
                      "TTA's aviation consulting services have been instrumental in helping us navigate complex regulatory requirements and optimize our training programs. Their expertise and professionalism are unmatched in the industry."
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4 text-sm/6">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      width={24}
                      height={24}
                      className="size-6 flex-none rounded-full"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">Sarah Chen</span> –{' '}
                      <span className="text-gray-600">Chief Pilot, Hong Kong Airlines</span>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <Image
              alt="Aviation consulting services"
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2432&h=1442&q=80"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0"
            />
          </div>
        </div>
      </div>

      <main className="bg-white px-6 py-32 lg:px-8">

      </main>

      {/* CTA Section */}
      <CallToAction
        title="Ready to get expert aviation consultation? Start with TTA today."
      />
      <Footer />
    </div>
  )
}
