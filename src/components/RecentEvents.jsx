import Link from 'next/link'

export function RecentEvents() {
  const featuredEvent = {
    title: 'Future Flight Innovation Expo',
    description:
      'A full-day showcase connecting simulator labs, LAE partners, and educators to pilot the next generation of air mobility programmes.',
    href: '/events/future-flight-innovation-expo',
    imageUrl:
      'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=2300&q=80',
    date: 'Dec 1, 2025',
    datetime: '2025-12-01',
  }

  const events = [
    {
      id: 1,
      title: 'Advanced Flight Simulator Training Workshop',
      href: '/events/advanced-flight-simulator-training-workshop',
      description:
        'Join our expert instructors for an intensive workshop on advanced flight simulation techniques. Learn the latest procedures and safety protocols in a state-of-the-art simulator environment.',
      imageUrl:
        'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      date: 'Dec 15, 2025',
      datetime: '2025-12-15',
      category: { title: 'Training', href: '#' },
    },
    {
      id: 2,
      title: 'Aviation English Proficiency Course',
      href: '/events/aviation-english-proficiency-course',
      description:
        'Enhance your aviation communication skills with our comprehensive English proficiency course designed specifically for pilots and aviation professionals.',
      imageUrl:
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
      date: 'Jan 8, 2026',
      datetime: '2026-01-08',
      category: { title: 'Language', href: '#' },
    },
    {
      id: 3,
      title: 'Youth Aviation Discovery Day',
      href: '/events/youth-aviation-discovery-day',
      description:
        'An exciting day of aviation discovery for young aspiring pilots. Experience hands-on activities, meet real pilots, and explore the world of aviation careers.',
      date: 'Feb 20, 2026',
      datetime: '2026-02-20',
      category: { title: 'Youth', href: '#' },
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-left lg:mx-0">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Recent Events</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Stay updated with our latest training programs and aviation events.</p>
        </div>
        <div className="mx-auto mt-12 lg:mx-0">
          <Link
            href={featuredEvent.href}
            className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden border border-slate-200 text-white shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.01] cursor-pointer"
          >
            <img
              src={featuredEvent.imageUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-900/10 transition duration-300 group-hover:bg-slate-950/80" />
            <time
              dateTime={featuredEvent.datetime}
              className="absolute left-0 top-0 m-6 text-xs font-semibold uppercase tracking-[0.3em] text-gray-200"
            >
              {featuredEvent.date}
            </time>
            <div className="relative z-10 flex flex-1 flex-col justify-end gap-6 p-8 sm:p-12">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase text-slate-900">
                <span className="inline-flex items-center rounded-full border border-slate-900/10 bg-white px-4 py-1 text-xs font-semibold uppercase text-slate-900 shadow-sm">
                  Featured
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  {featuredEvent.title}
                </h3>
                <p className="text-base text-white/85 sm:text-lg">{featuredEvent.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white transition group-hover:text-emerald-300">
                  Reserve your seat
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {events.map((event) => (
            <Link
              key={event.id}
              href={event.href}
              className="group relative flex h-[24rem] flex-col justify-between overflow-hidden border border-slate-200 text-white shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] cursor-pointer"
            >
              <img
                src={event.imageUrl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/10 transition duration-300 group-hover:bg-slate-950/80" />
              <time
                dateTime={event.datetime}
                className="absolute left-0 top-0 m-4 text-xs font-semibold uppercase tracking-[0.3em] text-gray-200"
              >
                {event.date}
              </time>
              <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-6">
                <span className="inline-flex w-fit items-center rounded-full border border-slate-900/10 bg-white px-4 py-1 text-xs font-semibold uppercase text-slate-900 shadow-sm">
                  {event.category.title}
                </span>
                <h3 className="text-2xl font-semibold leading-tight">{event.title}</h3>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/90 transition group-hover:text-emerald-300">
                  Explore event
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
