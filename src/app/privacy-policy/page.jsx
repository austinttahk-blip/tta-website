import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - TTA Aviation',
  description: 'Privacy Policy for TTA Aviation',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-gray-900">
      <Header enableColorTransition={false} />

      <main>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <h1 className="text-4xl font-light text-slate-900 sm:text-5xl mb-8">
              Privacy Policy
            </h1>
            <div className="mt-6 h-1 w-12 bg-blue-600 mb-12"></div>

            <div className="prose prose-lg max-w-none space-y-8 text-slate-700 leading-relaxed">
              <div>
                <p className="text-sm text-slate-500 mb-6">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Introduction</h2>
                <p>
                  Talent Trek Ascend Limited ("TTA Aviation", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. This policy is prepared in accordance with the Personal Data (Privacy) Ordinance (Cap. 486) of the Laws of Hong Kong.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect the following types of personal data:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address when you contact us or request information</li>
                  <li><strong>Website Usage Data:</strong> IP address, browser type, device information, pages visited, time spent on pages, and referring website addresses</li>
                  <li><strong>Communication Records:</strong> Correspondence and communications with us via email, phone, or other channels</li>
                  <li><strong>Training and Education Records:</strong> Information related to courses, training programs, and educational services you enroll in or inquire about</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>To provide, operate, and maintain our services including flight simulators, education programs, and training solutions</li>
                  <li>To respond to your inquiries, requests, and provide customer support</li>
                  <li>To send you information about our services, events, and updates (with your consent where required)</li>
                  <li>To improve our website, services, and user experience</li>
                  <li>To comply with legal obligations and protect our legal rights</li>
                  <li>To prevent fraud and ensure security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Data Storage and Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and retained only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Your Rights</h2>
                <p className="mb-4">Under the Personal Data (Privacy) Ordinance, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Access:</strong> Request access to your personal data held by us</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal and contractual restrictions</li>
                  <li><strong>Objection:</strong> Object to certain processing activities</li>
                  <li><strong>Withdrawal of Consent:</strong> Withdraw your consent for data processing where applicable</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the contact information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Third-Party Services</h2>
                <p>
                  We may use third-party service providers to assist in operating our website and conducting our business. These third parties may have access to your personal data only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Data Retention</h2>
                <p>
                  We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When personal data is no longer needed, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than Hong Kong. We ensure that appropriate safeguards are in place to protect your personal data in accordance with this Privacy Policy and applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">10. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">12. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
