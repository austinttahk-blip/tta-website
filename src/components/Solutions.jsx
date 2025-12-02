'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import simulatorsImage from '@/images/solutions/simulators.jpeg'
import educationImage from '@/images/solutions/education.jpeg'
import laeImage from '@/images/solutions/LAE.jpeg'
import talentImage from '@/images/solutions/talent.jpeg'

const missionTracks = [
  {
    title: 'Simulator Solutions',
    eyebrow: 'Flight Simulator Lab',
    description:
      'Designing and building smart, cost-effective flight simulators and training systems that turn concepts into realistic, high-impact training environments.',
    highlights: ['Full-stack builds', 'XR + mixed reality labs', 'Operator integration'],
    link: '/simulators',
    image: simulatorsImage,
  },
  {
    title: 'Education & Training Solutions',
    eyebrow: 'Talent Acceleration',
    description:
      'Creating aviation-themed programmes and curricula that move learners from basic understanding to industry-ready knowledge and skills.',
    highlights: ['ICAO English', 'STEM makerspaces', 'Foundation flight schools'],
    link: '/education',
    image: educationImage,
  },
  {
    title: 'Low-Altitude Economy (LAE) & R&D Solutions',
    eyebrow: 'Future LAE Ecosystem',
    description:
      'Transforming aviation and LAE ideas into tested, workable models through simulation, prototyping and project support.',
    highlights: ['Flight science squads', 'Test range digital twins', 'Concept incubation'],
    link: '/projects/lae-projects',
    image: laeImage,
  },
  {
    title: 'Talent Pathway & Advisory Solutions',
    eyebrow: 'Industry Linkage',
    description:
      'Building clear pathways and strategies that connect people, schools and organisations to real aviation and low-altitude career and business opportunities.',
    highlights: ['Career bridge labs', 'Operator partnerships', 'Advisory councils'],
    link: '/education/professional-training',
    image: talentImage,
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
            Our Mission
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            From education to operational reality, we turn aviation and LAE ideas from paper into working solutions
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
        backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.3) 0%, rgba(2,6,23,0.85) 75%), url(${mission.image.src})`,
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
            className={`mt-2 font-semibold leading-tight ${
              isActive ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            }`}
          >
            {mission.title}
          </h3>

          {/* Expandable content - uses CSS grid for smooth height animation */}
          <div
            className={`grid transition-all duration-500 ease-out ${
              isActive ? 'mt-4 grid-rows-[1fr]' : 'grid-rows-[0fr]'
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

              {/* CTA - Visual element only, card handles navigation */}
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white/90 transition-colors group-hover:text-white">
                Explore more
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
