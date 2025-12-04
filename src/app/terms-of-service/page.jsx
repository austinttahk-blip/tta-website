import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service - TTA Aviation',
  description: 'Terms of Service for TTA Aviation',
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-white text-gray-900">
      <Header enableColorTransition={false} />

      <main>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <h1 className="text-4xl font-light text-slate-900 sm:text-5xl mb-8">
              Terms of Service
            </h1>
            <div className="mt-6 h-1 w-12 bg-blue-600 mb-12"></div>

            <div className="prose prose-lg max-w-none space-y-8 text-slate-700 leading-relaxed">
              <div>
                <p className="text-sm text-slate-500 mb-6">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the website and services of Talent Trek Ascend Limited ("TTA Aviation", "we", "us", or "our"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Description of Services</h2>
                <p className="mb-4">
                  TTA Aviation provides the following services:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Flight simulator solutions, including standard and custom simulator systems</li>
                  <li>Aviation education and training programs, including youth aviation, aviation English, flight training, and professional training</li>
                  <li>Low-altitude economy (LAE) project support, including UAV, eVTOL, and general aviation solutions</li>
                  <li>Talent pathway and advisory services</li>
                  <li>Related consulting and technical support services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. User Eligibility</h2>
                <p>
                  You must be at least 18 years old to use our services or have the consent of a parent or guardian if you are under 18. By using our services, you represent and warrant that you meet these eligibility requirements and have the legal capacity to enter into these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Use of Services</h2>
                <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others, including intellectual property rights</li>
                  <li>Transmit any harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>Use our services for any commercial purpose without our prior written consent</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Intellectual Property Rights</h2>
                <p className="mb-4">
                  All content, materials, designs, logos, trademarks, and intellectual property on our website and in our services are owned by TTA Aviation or our licensors. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Reproduce, distribute, or create derivative works from our content without permission</li>
                  <li>Use our trademarks, logos, or brand names without our prior written consent</li>
                  <li>Remove any copyright or proprietary notices from our materials</li>
                </ul>
                <p>
                  You retain ownership of any content you submit to us, but by submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content in connection with our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Registration and Account Security</h2>
                <p className="mb-4">
                  If you create an account with us, you are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Promptly notifying us of any unauthorized use of your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Payment Terms</h2>
                <p>
                  For paid services, payment terms will be specified in separate agreements or invoices. All fees are non-refundable unless otherwise stated in writing. We reserve the right to change our pricing at any time, with notice to existing customers where applicable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Disclaimers</h2>
                <p className="mb-4">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Our services will be uninterrupted, secure, or error-free</li>
                  <li>Any defects or errors will be corrected</li>
                  <li>Our services will meet your specific requirements</li>
                  <li>The results obtained from using our services will be accurate or reliable</li>
                </ul>
                <p>
                  Simulator training and education services are for educational and training purposes. They do not replace actual flight training or certification requirements as mandated by aviation authorities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, TTA Aviation shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services. Our total liability shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">10. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless TTA Aviation and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of our services, violation of these Terms of Service, or infringement of any rights of another party.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">11. Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice, for any reason including, but not limited to, breach of these Terms of Service. Upon termination, your right to use our services will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">12. Governing Law and Dispute Resolution</h2>
                <p className="mb-4">
                  These Terms of Service shall be governed by and construed in accordance with the laws of Hong Kong Special Administrative Region. Any disputes arising out of or relating to these terms or our services shall be subject to the exclusive jurisdiction of the courts of Hong Kong.
                </p>
                <p>
                  If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">13. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. We will notify you of any material changes by posting the updated terms on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">14. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="border-t border-slate-200 pt-6 mt-6">
                  <p className="mb-2"><strong>Talent Trek Ascend Limited</strong></p>
                  <p className="mb-2">Rm 07, RCC2.0E, Building 5W, Science Park, Hong Kong</p>
                  <p className="mb-2">
                    Email: <a href="mailto:info@ttahk.com" className="text-blue-600 hover:text-blue-800">info@ttahk.com</a>
                  </p>
                  <p>
                    Phone: <a href="tel:+85269360374" className="text-blue-600 hover:text-blue-800">+852 6936 0374</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
