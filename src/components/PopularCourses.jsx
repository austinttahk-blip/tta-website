import Link from 'next/link'
import Image from 'next/image'
import adpImage from '@/images/courses/ADP.jpeg'
import icaoImage from '@/images/courses/ICAO.jpg'
import afpImage from '@/images/courses/AFP.jpeg'
import engineImage from '@/images/courses/engine.jpeg'

export function PopularCourses() {
  const featuredCourse = {
    title: 'Aviation Discovery Programme (ADP)',
    description:
      'An engaging introductory course designed for young learners aged 8–12 who are curious about how airplanes fly and how the aviation world works.',
    href: '/education/youth-aviation?tab=adp',
    image: adpImage,
    category: { title: 'Youth Aviation', href: '#' },
  }

  const courses = [
    {
      id: 1,
      title: 'Aviation Fundamental Programme (AFP)',
      href: '/education/youth-aviation?tab=afp',
      description:
        'Designed for secondary-level students who wish to gain a deeper understanding of aircraft operations and aviation systems.',
      image: afpImage,
      category: { title: 'Youth Aviation', href: '#' },
    },
    {
      id: 2,
      title: 'Aviation English Training (ICAO)',
      href: '/education/aviation-english',
      description:
        'Professional aviation communication skills training designed to meet ICAO Doc 9835 standards for aspiring pilots and aviation professionals.',
      image: icaoImage,
      category: { title: 'Language Training', href: '#' },
    },
    {
      id: 3,
      title: 'Build Your Own Engine Workshop',
      href: '/education/workshop',
      description:
        'Hands-on workshop where students discover how engines create power and build a working engine model guided by aviation instructors.',
      image: engineImage,
      category: { title: 'Workshop', href: '#' },
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-left lg:mx-0">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Popular Courses</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Discover our most popular aviation training programs designed for learners of all levels.</p>
        </div>
        <div className="mx-auto mt-12 lg:mx-0">
          <Link
            href={featuredCourse.href}
            className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden border border-slate-200 text-white shadow-2xl transition-all duration-300 hover:shadow-3xl cursor-pointer"
          >
            <Image
              src={featuredCourse.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-900/10 transition duration-300 group-hover:bg-slate-950/80" />
            <div className="relative z-10 flex flex-1 flex-col justify-end gap-6 p-8 sm:p-12">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase text-slate-900">
                <span className="inline-flex items-center rounded-full border border-slate-900/10 bg-white px-4 py-1 text-xs font-semibold uppercase text-slate-900 shadow-sm">
                  {featuredCourse.category.title}
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  {featuredCourse.title}
                </h3>
                <p className="text-base text-white/85 sm:text-lg">{featuredCourse.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white transition group-hover:text-emerald-300">
                  Learn more
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={course.href}
              className="group relative flex h-[24rem] flex-col justify-between overflow-hidden border border-slate-200 text-white shadow-2xl transition-all duration-300 hover:shadow-3xl cursor-pointer"
            >
              <Image
                src={course.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/10 transition duration-300 group-hover:bg-slate-950/80" />
              <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-6">
                <span className="inline-flex w-fit items-center rounded-full border border-slate-900/10 bg-white px-4 py-1 text-xs font-semibold uppercase text-slate-900 shadow-sm">
                  {course.category.title}
                </span>
                <h3 className="text-2xl font-semibold leading-tight">{course.title}</h3>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/90 transition group-hover:text-emerald-300">
                  Learn more
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
