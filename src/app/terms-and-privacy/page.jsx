import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service & Privacy Policy - TTA Aviation',
  description: 'Terms of Service and Privacy Policy for TTA Aviation',
}

export default function TermsAndPrivacyPage() {
  return (
    <div className="bg-white text-gray-900">
      <Header enableColorTransition={false} />

      <main>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <h1 className="text-4xl font-light text-slate-900 sm:text-5xl mb-8">
              Terms of Service & Privacy Policy
            </h1>
            <div className="mt-6 h-1 w-12 bg-blue-600 mb-12"></div>

            <div className="prose prose-lg max-w-none space-y-8 text-slate-700 leading-relaxed">
              <div>
                <p className="text-sm text-slate-500 mb-6">
                  Last updated: December 2025
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Introduction</h2>
                <p className="mb-4">
                  This website (the "Site") is operated by Talent Trek Ascend Limited ("TTA", "we", "us", "our").
                </p>
                <p className="mb-4">
                  By accessing or using the Site, you agree to these Terms of Service and Privacy Policy (collectively, the "Terms"). If you do not agree, please discontinue use of the Site.
                </p>
                <p className="mb-4">
                  These Terms apply to visitors, schools and institutions, students, parents and any other users of the Site.
                </p>
                <p className="mb-4">
                  <strong>Important:</strong> This page is for general information only and does not constitute legal, financial or professional advice. Our training programmes and simulators do not by themselves grant any licence, rating or certification.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Terms of Service</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.1 Use of the Site</h3>
                <p className="mb-4">
                  The Site is provided for information and enquiry purposes only.
                </p>
                <p className="mb-4">
                  You agree not to use the Site for any unlawful, fraudulent or disruptive purpose.
                </p>
                <p className="mb-4">
                  We may update, suspend or discontinue any part of the Site at any time without notice.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.2 Programme & Service Information</h3>
                <p className="mb-4">
                  Information about programmes, simulators and projects on the Site is general in nature and subject to change.
                </p>
                <p className="mb-4">
                  Entry requirements, fees, schedules and availability may be updated or withdrawn without prior notice.
                </p>
                <p className="mb-4">
                  Enrolment into any programme is subject to separate registration forms, enrolment terms and payment conditions which will be provided at the time of application.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.3 Non-certified Training Devices</h3>
                <p className="mb-4">
                  Unless explicitly stated, simulators and training devices described on this Site are intended for education, familiarisation and training support only.
                </p>
                <p className="mb-4">
                  They are not represented as flight simulation training devices certified by any authority and do not replace approved training required for licences, ratings or operational approvals.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.4 Intellectual Property</h3>
                <p className="mb-4">
                  All content on the Site, including text, images, graphics, logos, videos and designs, is owned by TTA or used with permission.
                </p>
                <p className="mb-4">
                  You may not reproduce, distribute, modify or use any content for commercial purposes without our prior written consent.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.5 Third-Party Links</h3>
                <p className="mb-4">
                  The Site may contain links to third-party websites or services. These are provided for convenience only and do not constitute endorsement.
                </p>
                <p className="mb-4">
                  We are not responsible for the content, security or privacy practices of any third-party sites.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.6 Disclaimers</h3>
                <p className="mb-4">
                  The Site is provided on an "as is" and "as available" basis.
                </p>
                <p className="mb-4">
                  While we aim to keep information accurate and up to date, we make no warranties or representations (express or implied) regarding completeness, reliability, fitness for a particular purpose or non-infringement.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.7 Limitation of Liability</h3>
                <p className="mb-4">
                  To the maximum extent permitted by applicable law, TTA and its directors, employees and agents will not be liable for any indirect, incidental, special or consequential loss arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>use of or inability to use the Site;</li>
                  <li>reliance on information provided on the Site; or</li>
                  <li>any errors, interruptions or security incidents relating to the Site.</li>
                </ul>
                <p className="mb-4">
                  Nothing in these Terms limits liability that cannot be excluded under applicable law.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2.8 Governing Law</h3>
                <p className="mb-4">
                  These Terms are governed by the laws of Hong Kong SAR. Any disputes relating to the Site or these Terms will be subject to the exclusive jurisdiction of the courts of Hong Kong.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Privacy Policy</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3.1 What We Collect</h3>
                <p className="mb-4">
                  We may collect the following categories of personal data when you use the Site or contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Contact details</strong> – name, email address, phone / WhatsApp number.</li>
                  <li><strong>Enquiry information</strong> – role (e.g. school, parent, student), organisation name, interests, preferred programmes or services.</li>
                  <li><strong>Application or booking details</strong> – selected courses, preferred dates, participant information as provided by you.</li>
                  <li><strong>Technical data</strong> – IP address, browser type, pages visited and similar analytics data collected via cookies or tracking tools.</li>
                </ul>
                <p className="mb-4">
                  We do not intentionally collect sensitive personal data (e.g. health, ID numbers) via the Site unless you choose to provide it in a form or message.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3.2 How We Use Your Information</h3>
                <p className="mb-4">
                  We may use your personal data for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>To respond to your enquiries and provide information about our programmes, simulators or projects.</li>
                  <li>To process registrations, bookings or consultation requests you submit.</li>
                  <li>To manage relationships with schools, institutions, partners and suppliers.</li>
                  <li>To improve our Site, services and communications.</li>
                  <li>To send you updates about relevant programmes or events, where permitted by law (you can opt out at any time).</li>
                  <li>To comply with legal or regulatory obligations.</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3.3 Sharing of Information</h3>
                <p className="mb-4">
                  We may share personal data with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Internal staff and instructors who need the information to deliver programmes or respond to your enquiry.</li>
                  <li>Service providers (e.g. IT, hosting, payment or communication tools) acting on our instructions.</li>
                  <li>Partner schools, training organisations or venues involved in the specific programme you have applied for, where necessary.</li>
                  <li>Regulators, authorities or legal advisers where required by law or to protect our rights.</li>
                </ul>
                <p className="mb-4">
                  We do not sell your personal data.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3.4 Data Retention</h3>
                <p className="mb-4">
                  We retain personal data only for as long as is reasonably necessary for the purposes described above, or as required by applicable law (for example, record-keeping, safety or accounting requirements).
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3.5 Cookies & Analytics</h3>
                <p className="mb-4">
                  The Site may use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>remember preferences and improve user experience;</li>
                  <li>measure traffic and usage patterns;</li>
                  <li>help us understand which content is most useful.</li>
                </ul>
                <p className="mb-4">
                  You can adjust your browser settings to block or delete cookies, though some features of the Site may not function properly.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3.6 Children & Young Persons</h3>
                <p className="mb-4">
                  Our programmes are often intended for school-age participants, but the Site and online forms are intended to be used by parents, guardians, schools and institutions on their behalf.
                </p>
                <p className="mb-4">
                  If you believe a child has provided us personal data directly without consent, please contact us and we will review and act appropriately.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3.7 Your Rights</h3>
                <p className="mb-4">
                  Depending on applicable laws, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>request access to the personal data we hold about you;</li>
                  <li>ask for corrections of inaccurate or incomplete data;</li>
                  <li>request deletion of your data in certain circumstances;</li>
                  <li>object to or restrict certain types of processing;</li>
                  <li>withdraw consent for marketing at any time.</li>
                </ul>
                <p className="mb-4">
                  To exercise these rights, please contact us using the details below.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3.8 Contact for Privacy Matters</h3>
                <p className="mb-4">
                  If you have any questions about these Terms or how we handle personal data, please contact:
                </p>
                <div className="border-t border-slate-200 pt-6 mt-6">
                  <p className="mb-2"><strong>Talent Trek Ascend Limited – Privacy Enquiries</strong></p>
                  <p className="mb-2">
                    Email: <a href="mailto:info@ttahk.com" className="text-blue-600 hover:text-blue-800">info@ttahk.com</a>
                  </p>
                  <p>
                    Tel / WhatsApp: <a href="tel:+85269360374" className="text-blue-600 hover:text-blue-800">+852 6936 0374</a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Changes to These Terms</h2>
                <p className="mb-4">
                  We may update these Terms from time to time to reflect changes in our services, legal requirements or operational needs.
                </p>
                <p className="mb-4">
                  The "Last updated" date at the top of this page will indicate when the latest changes took effect. Your continued use of the Site after any update will be taken as acceptance of the revised Terms.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
