import Link from 'next/link'

const audiences = [
  {
    title: 'For schools & institutions',
    href: '/training',
    action: 'Partner with us',
    icon: (
      <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'For parents & students',
    href: '/events',
    action: 'Explore journeys',
    icon: (
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
      </svg>
    ),
  },
  {
    title: 'For industry & partners',
    href: '/consultation',
    action: 'Connect now',
    icon: (
      <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export function JoinUs() {
  return (
    <section className="bg-slate-900 py-24 text-white" id="join-us">
      <div className="mx-auto w-full max-w-6xl space-y-12 px-6">
        <div className="space-y-6 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Join Us</p>
          <div className="flex items-start gap-4">
            <div className="mt-2 flex-shrink-0 text-white/80">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Take the first step – we&apos;ll build the journey together
            </h2>
          </div>
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
                className="group relative flex flex-1 min-w-[13rem] max-w-sm flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-6 py-8 text-left shadow-2xl transition-all duration-300 hover:border-white/35 hover:bg-white/10 hover:shadow-3xl hover:scale-[1.02] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {/* Watermark icon in background */}
                <div className="pointer-events-none absolute -right-8 -bottom-8 opacity-[0.12] group-hover:opacity-[0.18] transition-all duration-500">
                  <div className="h-48 w-48 text-white/40">
                    {audience.icon}
                  </div>
                </div>
                
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
