'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export function StandardSolutionShowcase({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const showcaseItems = items.slice(0, 3)
  const totalItems = showcaseItems.length
  const progressRef = useRef(0)

  useEffect(() => {
    if (totalItems === 0) return

    const interval = setInterval(() => {
      progressRef.current += 1
      if (progressRef.current >= 100) {
        progressRef.current = 0
        setActiveIndex((current) => (current + 1) % totalItems)
      }
      setProgress(progressRef.current)
    }, 70)

    return () => clearInterval(interval)
  }, [totalItems])

  if (totalItems === 0) return null

  const leadItem = showcaseItems[activeIndex]

  const handleCardClick = (index) => {
    setActiveIndex(index)
    progressRef.current = 0
    setProgress(0)
  }

  return (
    <section className="bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-auto lg:min-h-[500px]">
            <Image
              src={leadItem.image}
              alt={leadItem.title}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute bottom-4 left-4 rounded bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-800 backdrop-blur-sm">
              {leadItem.title}
            </div>
          </div>

          {/* Right: Content & Card List */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">A modern design</h2>
            <div className="mt-2 h-1 w-12 bg-blue-600" />

            <div className="mt-10 space-y-4">
              {showcaseItems.map((item, index) => {
                const isActive = index === activeIndex
                const metricsSummary =
                  item.metrics?.length > 0 ? item.metrics.map((metric) => `${metric.label}: ${metric.value}`).join(' · ') : ''
                const extendedDescription = metricsSummary ? `${item.description} — ${metricsSummary}` : item.description
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => handleCardClick(index)}
                    className="group flex w-full items-center gap-5 rounded-2xl px-5 py-4 text-left transition-colors"
                  >
                    <div className="relative h-30 w-1 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className={`absolute inset-x-0 top-0 rounded-full bg-slate-900 transition-[height,opacity] duration-75 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ height: `${isActive ? progress : 0}%` }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className={`text-lg font-semibold ${isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-600'}`}>
                          {item.title}
                        </h3>
                        {item.timeline ? (
                          <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${isActive ? 'text-slate-600' : 'text-slate-400'}`}>
                            {item.timeline}
                          </span>
                        ) : null}
                      </div>
                      <p className={`mt-1 text-base leading-relaxed md:text-lg ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>
                        {extendedDescription}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
