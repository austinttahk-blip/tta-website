export function UpcomingEvents() {
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
      description: 'Enhance your aviation communication skills with our comprehensive English proficiency course designed specifically for pilots and aviation professionals.',
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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Upcoming Events</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Stay updated with our latest training programs and aviation events.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {events.map((event) => (
            <article key={event.id} className="flex flex-col items-start justify-between">
              {/* Image section - always present but may be empty */}
              <div className="relative w-full">
                {event.imageUrl ? (
                  <>
                    <img
                      alt=""
                      src={event.imageUrl}
                      className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                    />
                    <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10" />
                  </>
                ) : (
                  // Empty placeholder to maintain alignment
                  <div className="aspect-video w-full rounded-2xl bg-gray-100 sm:aspect-2/1 lg:aspect-3/2" />
                )}
              </div>
              <div className="flex max-w-xl grow flex-col justify-between">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={event.datetime} className="text-gray-500">
                    {event.date}
                  </time>
                  <a
                    href={event.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {event.category.title}
                  </a>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={event.href}>
                      <span className="absolute inset-0" />
                      {event.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{event.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
