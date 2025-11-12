import { Highlight } from '@/components/ui/hero-highlight'

export function CallToAction({
  title = "Ready to elevate your flight training? Start with TTA today.",
  primaryButton = { text: "Request Consultation", href: "/consultation" },
  secondaryButton = { text: "View Our Courses", href: "/training#courses" },
  services = [
    "Needs analysis and facility planning",
    "Design and fabrication of cockpit and control systems",
    "Hardware and software integration",
    "Instructor station setup and technical support",
    "Post-installation maintenance and updates"
  ]
}) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 max-w-4xl leading-relaxed lg:leading-snug">
              {title.includes('flight training') ? (
                <>Ready to elevate your <Highlight className="text-black">flight training</Highlight>? Start with TTA today.</>
              ) : (
                title
              )}
            </h2>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href={primaryButton.href}
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {primaryButton.text}
              </a>
              <a href={secondaryButton.href} className="text-sm/6 font-semibold text-gray-900">
                {secondaryButton.text} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="space-y-5">
              {services.map((service, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-6 bg-blue-600 rounded-full shrink-0"></div>
                    <span className="text-lg text-gray-600">{service}</span>
                  </div>
                  {index < services.length - 1 && (
                    <div className="w-full border-t border-gray-200 mt-5"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}