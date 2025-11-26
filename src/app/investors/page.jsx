import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const investorHighlights = [
  {
    title: 'Aviation infrastructure',
    description:
      'Capital partnerships for simulator labs, mobile experiences, and permanent aviation campuses serving schools and operators.',
  },
  {
    title: 'Talent & education',
    description:
      'Scale immersive education pathways with measurable STEM and career outcomes across Hong Kong and Greater Bay Area.',
  },
  {
    title: 'R&D and innovation',
    description:
      'Fuel low-altitude economy research, digital twin tooling, and sustainability programs alongside universities and industry.',
  },
]

const transparencyItems = [
  'Quarterly impact dashboards with learner and partner data.',
  'Blended finance structures aligned with ESG goals.',
  'Operator co-invest opportunities with clearly defined governance.',
  'Dedicated squad for due diligence, operations, and compliance.',
]

export const metadata = {
  title: 'Investors - TTA',
  description: 'Partner with TTA to accelerate aviation innovation and education.',
}

export default function InvestorsPage() {
  return (
    <div className="bg-white">
      <Header enableColorTransition={false} />

      <main>
        <section className="bg-blue-950 py-24 text-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
              Investor relations
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              We connect purpose-driven capital with the next generation of aviation infrastructure.
            </h1>
            <p className="mt-6 max-w-3xl text-base text-blue-100 sm:text-lg">
              TTA funds experiential education, simulator manufacturing, and research labs that keep Asia Pacific&apos;s
              aviation talent pipeline resilient. We co-invest alongside operators, universities, and civic partners.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:info@ttahk.com?subject=Investor%20Relations"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-blue-950 transition hover:bg-blue-100"
              >
                Contact our IR desk
              </a>
              <a
                href="/projects"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
              >
                View recent projects
              </a>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {investorHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Focus</p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-4 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Reporting</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Built-in transparency for every capital stack.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Investors receive the same real-time dashboards that guide our internal teams, so you can see utilization,
              outcomes, and runway at a glance.
            </p>
            <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
              {transparencyItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                    ✓
                  </span>
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-xl md:px-12">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                    Co-invest invitations
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight">
                    Join upcoming simulator manufacturing rounds and education campus builds.
                  </h3>
                  <p className="mt-4 text-base text-blue-100">
                    TTA syndicates select builds with investors who value real assets plus measurable education impact.
                    Share your thesis and our team will align you with the next roadmap milestone.
                  </p>
                </div>
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-blue-50"
                >
                  Download project brief
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
