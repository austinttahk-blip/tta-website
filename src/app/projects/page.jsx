import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const caseStudies = [
  {
    title: 'STEM AirLab Campus',
    summary:
      'Designed and delivered a modular aviation makerspace that integrates simulator pods, avionics benches, and STEM curriculum for secondary schools.',
    stats: ['12-week delivery', '4 simulator bays', 'HKSTP partnership'],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80',
  },
  {
    title: 'City Pop-Up Flight Experience',
    summary:
      'Turnkey mobile experience that brings fixed-base cockpits into malls and civic venues to activate aviation outreach programs.',
    stats: ['20k+ visitors', 'Multi-city roadshow', 'Immersive curriculum'],
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80',
  },
  {
    title: 'University Research Hangar',
    summary:
      'Co-developed an applied research lab featuring flight science instrumentation, XR training rigs, and data backbones for low-altitude economy R&D.',
    stats: ['Integrated XR lab', 'Digital twin workflows', 'Joint faculty team'],
    image:
      'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=2200&q=80',
  },
]

const deliveryPillars = [
  {
    title: 'Discovery & Co-design',
    description:
      'We host deep-dive strategy sprints with your stakeholders to map goals, talent outcomes, and infrastructure requirements before the first drawing.',
  },
  {
    title: 'Build & Integrate',
    description:
      'Engineering, procurement, fabrication, software, and curriculum integration are handled by our in-house pilots and builders for end-to-end accountability.',
  },
  {
    title: 'Activate & Scale',
    description:
      'We deploy instructor onboarding, maintenance playbooks, and investor updates so your aviation project can scale beyond launch week.',
  },
]

export const metadata = {
  title: 'Projects - TTA',
  description: 'Flagship aviation projects delivered by TTA across Asia Pacific.',
}

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <Header enableColorTransition={false} />

      <main>
        <section className="relative isolate overflow-hidden bg-slate-950 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 text-slate-100">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Flagship Projects
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              We build aviation experiences that bring learning, industry, and investors together.
            </h1>
            <p className="mt-6 max-w-3xl text-base text-slate-200 sm:text-lg">
              From STEM campuses and simulator labs to fully fledged research hangars, every TTA project
              blends human-centered design with real-world operational discipline.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/investors"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-blue-50"
              >
                Meet our investors
              </a>
              <a
                href="/education"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
              >
                Explore education
              </a>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Case studies</p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Recent builds that turned aviation ideas into real infrastructure.
                </h2>
              </div>
              <p className="max-w-xl text-base text-slate-600">
                Each engagement includes feasibility, procurement, installation, and activation support so partners
                inherit a living ecosystem instead of a static showcase.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {caseStudies.map((project) => (
                <article
                  key={project.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className="h-56 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h3 className="text-2xl font-semibold text-slate-900">{project.title}</h3>
                    <p className="text-sm text-slate-600">{project.summary}</p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.stats.map((stat) => (
                        <span
                          key={stat}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Delivery pillars</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                A proven, end-to-end build process.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Every discipline—engineering, training, creative, finance—sits on one squad so there is a single thread of
                accountability across discovery, build, and activation.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {deliveryPillars.map((pillar, index) => (
                <div key={pillar.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
