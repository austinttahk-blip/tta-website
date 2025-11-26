'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const missionTracks = [
  {
    title: 'Simulator Solutions',
    eyebrow: 'Flight Simulator Lab',
    description:
      'Design, build and integrate smart, cost-effective training simulators that mirror real-world cockpits and operations.',
    highlights: ['Full-stack builds', 'XR + mixed reality labs', 'Operator integration'],
    link: '/simulators',
    image:
      'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?auto=format&fit=crop&w=2200&q=80',
  },
  {
    title: 'Low-Altitude Economy R&D',
    eyebrow: 'Future LAE Ecosystem',
    description:
      'Prototype, test and validate UAV, eVTOL and low-altitude concepts with simulation-driven R&D workflows.',
    highlights: ['Flight science squads', 'Test range digital twins', 'Concept incubation'],
    link: '/lae-rnd',
    image:
      'https://images.unsplash.com/photo-1474224017046-182ece80b263?auto=format&fit=crop&w=2200&q=80',
  },
  {
    title: 'Education & Training',
    eyebrow: 'Talent Acceleration',
    description:
      'Deliver immersive aviation education from STEM to foundation training with pathways tailored to every learner.',
    highlights: ['ICAO English', 'STEM makerspaces', 'Foundation flight schools'],
    link: '/education',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=80',
  },
  {
    title: 'Talent Pathway & Advisory',
    eyebrow: 'Industry Linkage',
    description:
      'Connect students, schools and operators through advisory, mentorship and job-ready aviation talent pipelines.',
    highlights: ['Career bridge labs', 'Operator partnerships', 'Advisory councils'],
    link: '/talent-advisory',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2200&q=80',
  },
]

export function Solutions() {
  const [activeIndex, setActiveIndex] = useState(null)
  const router = useRouter()

  return (
    <section
      id="solutions"
      aria-label="Advanced aviation solutions and services"
      className="bg-white py-20"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-0">
        {/* Header - Left aligned */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Our mission
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            We craft end-to-end training ecosystems — simulators, education, research and talent
            pipelines — so every pilot, student and operator can thrive.
          </p>
        </div>

        {/* Mission cards - Mobile: stack, Desktop: accordion */}
        <div
          className="flex flex-col gap-4 md:h-[32rem] md:flex-row md:gap-0"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {missionTracks.map((mission, index) => {
            const isActive = activeIndex === index
            const hasHover = activeIndex !== null
            const stepNumber = String(index + 1).padStart(2, '0')

            return (
              <MissionCard
                key={mission.title}
                mission={mission}
                stepNumber={stepNumber}
                isActive={isActive}
                hasHover={hasHover}
                onHover={() => setActiveIndex(index)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setActiveIndex(null)
                  }
                }}
                onNavigate={() => router.push(mission.link)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MissionCard({ mission, stepNumber, isActive, hasHover, onHover, onBlur, onNavigate }) {
  // Desktop: dynamic flex basis for accordion effect
  const desktopBasis = hasHover ? (isActive ? '48%' : '17.333%') : '100%'

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onNavigate}
      onMouseEnter={onHover}
      onFocus={onHover}
      onBlur={onBlur}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onNavigate()
        }
      }}
      aria-expanded={isActive}
      className="relative isolate flex min-h-[14rem] cursor-pointer flex-col overflow-hidden rounded-xl text-white shadow-xl transition-all duration-500 ease-out md:h-full md:min-h-0 md:min-w-[14rem] md:rounded-none"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.3) 0%, rgba(2,6,23,0.85) 75%), url(${mission.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexBasis: desktopBasis,
      }}
    >
      <div className="flex h-full flex-col p-6 sm:p-8">
        {/* Badge - Static, no animation needed */}
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          {mission.eyebrow}
        </span>

        {/* Main content area */}
        <div className="mt-auto flex flex-col">
          {/* Step number */}
          <span className="text-sm uppercase tracking-[0.2em] text-white/60">
            {stepNumber}
          </span>

          {/* Title - grows on active */}
          <h3
            className={`mt-2 font-semibold leading-tight transition-all duration-300 ${
              isActive ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            }`}
          >
            {mission.title}
          </h3>

          {/* Expandable content - uses CSS grid for smooth height animation */}
          <div
            className={`grid transition-all duration-500 ease-out ${
              isActive ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                {mission.description}
              </p>

              {/* Highlights */}
              <div className="mt-4 flex flex-wrap gap-2">
                {mission.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs backdrop-blur sm:px-4 sm:text-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  onNavigate()
                }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/90 transition-colors hover:text-white"
              >
                Explore more
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
