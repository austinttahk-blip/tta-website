import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Contact Us - TTA Aviation',
  description: 'Contact TTA Aviation for education programmes, operations, and business development',
}

export default function ContactUsPage() {
  return (
    <div className="bg-white text-gray-900">
      <Header enableColorTransition={false} />

      <main>
        <section id="contact" className="scroll-mt-24 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <h1 className="text-4xl font-light text-slate-900 sm:text-5xl mb-8">
              Contact Us
            </h1>
            <div className="mt-6 h-1 w-12 bg-blue-600 mb-12"></div>

            <div className="space-y-12">
              {/* General Enquiries - First Section */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                  General Enquiries
                </h2>
                <p className="text-slate-700 text-lg">
                  <a href="mailto:info@ttahk.com" className="text-blue-600 hover:text-blue-800">info@ttahk.com</a> | <a href="tel:+85269360374" className="text-blue-600 hover:text-blue-800">+852 6936 0374</a>
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-200"></div>

              {/* Education Programmes & School Partnerships */}
              <div id="education" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                  Education Programmes & School Partnerships
                </h2>
                <p className="text-slate-600 mb-6">
                  For school-based programmes, curriculum collaboration, trial classes and student visits.
                </p>
                <div className="space-y-2">
                  <p className="text-slate-900">
                    <strong>Max Togher</strong> – Education Programme Manager
                  </p>
                  <p className="text-slate-700">
                    Email: <a href="mailto:max.ttahk@gmail.com" className="text-blue-600 hover:text-blue-800">max.ttahk@gmail.com</a>
                  </p>
                  <p className="text-slate-700">
                    Tel / WhatsApp: <a href="tel:+85257124527" className="text-blue-600 hover:text-blue-800">+852 5712 4527</a>
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-200"></div>

              {/* Operations & Training Centre */}
              <div id="operations" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                  Operations & Training Centre
                </h2>
                <p className="text-slate-600 mb-6">
                  For simulator bookings, centre operations, technical arrangements and scheduling.
                </p>
                <div className="space-y-2">
                  <p className="text-slate-900">
                    <strong>David Lai</strong> – Operations Manager
                  </p>
                  <p className="text-slate-700">
                    Email: <a href="mailto:david.lai@ttahk.com" className="text-blue-600 hover:text-blue-800">david.lai@ttahk.com</a>
                  </p>
                  <p className="text-slate-700">
                    Tel / WhatsApp: <a href="tel:+85293036593" className="text-blue-600 hover:text-blue-800">+852 6936 0374</a>
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-200"></div>

              {/* Business Development & Strategic Partnerships */}
              <div id="business" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                  Business Development & Strategic Partnerships
                </h2>
                <p className="text-slate-600 mb-6">
                  For collaboration opportunities, corporate training, LAE / simulator projects and sponsorship.
                </p>
                <div className="space-y-2">
                  <p className="text-slate-900">
                    <strong>Austin Wong</strong> – Business Development Manager
                  </p>
                  <p className="text-slate-700">
                    Email: <a href="mailto:info@ttahk.com" className="text-blue-600 hover:text-blue-800">info@ttahk.com</a>
                  </p>
                  <p className="text-slate-700">
                    Tel / WhatsApp: <a href="tel:+85296849366" className="text-blue-600 hover:text-blue-800">+852 9684 9366</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
