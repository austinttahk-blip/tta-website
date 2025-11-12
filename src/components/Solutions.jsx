
const solutions = [
  {
    title: "Simulators",
    description: "Custom-built flight simulators designed and manufactured by TTA in Hong Kong.",
    link: "/simulators"
  },
  {
    title: "Training",
    description: "Expert guidance and career consultation for aspiring aviators.",
    link: "/training"
  },
  {
    title: "Consultation",
    description: "Comprehensive training programs meeting ICAO standards and industry requirements.",
    link: "/consultation"
  }
];

function SolutionCard({ solution }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <a href={solution.link} className="group w-full cursor-pointer overflow-hidden relative card h-[500px] rounded-md shadow-xl flex flex-col justify-end p-6 border border-transparent bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:absolute before:inset-0 before:opacity-0 before:z-0 hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:z-0 transition-all duration-500">
        <div className="text relative z-10">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {solution.title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-3">
            {solution.description}
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full py-2 px-4 text-sm font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white group-hover:bg-white/20 transition-all duration-200">
              Discover More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export function Solutions() {
  return (
    <section
      id="solutions"
      aria-label="Advanced aviation solutions and services"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Advanced Aviation Solutions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Professional-grade simulators, career development programs, and
            specialized training designed to prepare you for every aspect of aviation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
