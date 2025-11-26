import Link from 'next/link'

const audiences = [
  {
    title: 'For schools & institutions',
    href: '/training',
    action: 'Partner with us',
  },
  {
    title: 'For parents & students',
    href: '/events',
    action: 'Explore journeys',
  },
  {
    title: 'For industry & partners',
    href: '/consultation',
    action: 'Connect now',
  },
]

export function JoinUs() {
  return (
    <section className="bg-slate-900 py-24 text-white" id="join-us">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-6">
        <div className="space-y-6 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Join Us</p>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Take the first step – we&apos;ll build the journey together
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-slate-100"
          >
            Contact us
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <div className="h-px bg-white/15" />
          <div className="flex flex-col gap-6 md:flex-row md:justify-end md:pl-28 lg:pl-40">
            {audiences.map((audience, index) => (
              <Link
                key={audience.title}
                href={audience.href}
                className="group relative flex flex-1 min-w-[13rem] max-w-sm flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-6 py-8 text-left shadow-2xl transition duration-300 hover:border-white/35 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <div className="relative z-10 flex flex-col gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold leading-tight">{audience.title}</h3>
                  </div>
                </div>
                <span className="relative z-10 mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition group-hover:text-white">
                  {audience.action}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/10 to-white/40 opacity-0 transition duration-500 group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>
          <div className="h-px bg-white/15" />
        </div>
      </div>
    </section>
  )
}
