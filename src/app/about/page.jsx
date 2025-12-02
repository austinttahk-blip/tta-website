import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'

// Import training images for hero section
import pilot3Image from '@/images/training/pilot-3.jpg'
import pilot5Image from '@/images/training/pilot-5.jpg'
import cockpitImage from '@/images/training/cockpit.jpg'
import pilot4Image from '@/images/training/pilot-4.jpg'
import pilot6Image from '@/images/training/pilot-6.jpg'
import ffsImage from '@/images/education/ffs.jpeg'


const milestones = [
  {
    title: 'Preparation for TTA and initial R&D for simulator',
    period: 'Early 2024',
    description: '',
  },
  {
    title: 'Company Founded',
    period: 'May 2024',
    description: '',
  },
  {
    title: 'Education center with Hong Kong Bluebell College',
    period: 'Sept 2024',
    description: '',
  },
  {
    title: 'R&D center in Hong Kong Science and Technology Park',
    period: 'July 2025',
    description: '',
  },
]

const values = [
  {
    name: 'Safety First',
    description:
      'We place safety at the centre of every lesson, simulator session and programme, building habits and judgement that match real-world aviation standards.',
  },
  {
    name: 'Excellence in Training',
    description:
      'We combine solid aviation knowledge, structured curricula and professional instructors to deliver clear, consistent and high-quality learning outcomes.',
  },
  {
    name: 'Innovation & Technology',
    description:
      'We use modern simulators, digital tools and new teaching methods to create immersive learning experiences that prepare students for tomorrow\'s aviation and LAE environment.',
  },
]


import Link from "next/link";
import React from "react";

export function SimpleFooterWithFourGrids() {
  const pages = [
    {
      title: "All Products",
      href: "#",
    },
    {
      title: "Studio",
      href: "#",
    },
    {
      title: "Clients",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
  ];

  const socials = [
    {
      title: "Facebook",
      href: "#",
    },
    {
      title: "Instagram",
      href: "#",
    },
    {
      title: "Twitter",
      href: "#",
    },
    {
      title: "LinkedIn",
      href: "#",
    },
  ];
  const legals = [
    {
      title: "Privacy Policy",
      href: "#",
    },
    {
      title: "Terms of Service",
      href: "#",
    },
    {
      title: "Cookie Policy",
      href: "#",
    },
  ];

  const signups = [
    {
      title: "Sign Up",
      href: "#",
    },
    {
      title: "Login",
      href: "#",
    },
    {
      title: "Forgot Password",
      href: "#",
    },
  ];
  return (
    <div
      className="relative w-full overflow-hidden border-t border-neutral-100 bg-white px-8 py-20">
      <div
        className="mx-auto flex max-w-7xl flex-col items-start justify-between text-sm text-neutral-500 sm:flex-row md:px-8">
        <div>
          <div className="mr-0 mb-4 md:mr-4 md:flex">
            <Logo />
          </div>

          <div className="mt-2 ml-2">
            &copy; copyright DevStudios 2024. All rights reserved.
          </div>
        </div>
        <div
          className="mt-10 grid grid-cols-2 items-start gap-10 sm:mt-0 md:mt-0 lg:grid-cols-4">
          <div className="flex w-full flex-col justify-center space-y-4">
            <p
              className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors">
              Pages
            </p>
            <ul
              className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors ">
              {pages.map((page, idx) => (
                <li key={"pages" + idx} className="list-none">
                  <Link
                    className="hover:text-text-neutral-800 transition-colors"
                    href="/products">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <p
              className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors ">
              Socials
            </p>
            <ul
              className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors ">
              {socials.map((social, idx) => (
                <li key={"social" + idx} className="list-none">
                  <Link
                    className="hover:text-text-neutral-800 transition-colors"
                    href="/products">
                    {social.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <p
              className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors ">
              Legal
            </p>
            <ul
              className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors ">
              {legals.map((legal, idx) => (
                <li key={"legal" + idx} className="list-none">
                  <Link
                    className="hover:text-text-neutral-800 transition-colors"
                    href="/products">
                    {legal.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <p
              className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors ">
              Register
            </p>
            <ul
              className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors ">
              {signups.map((auth, idx) => (
                <li key={"auth" + idx} className="list-none">
                  <Link
                    className="hover:text-text-neutral-800 transition-colors"
                    href="/products">
                    {auth.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p
        className="inset-x-0 mt-20 bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-center text-5xl font-bold text-transparent md:text-9xl lg:text-[12rem] xl:text-[13rem]">
        DevStudio
      </p>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black">
      <Image
        src="https://assets.aceternity.com/logo-dark.svg"
        alt="logo"
        width={30}
        height={30} />
      <span className="font-medium text-black">DevStudio</span>
    </Link>
  );
};


export default function AboutPage() {
  return (
    <div className="bg-white">
      <Header enableColorTransition={false} />

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                    Pioneering Aviation Education in Hong Kong
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    TTA Aviation is a Hong Kong-based aviation education and simulation hub, dedicated to inspiring and developing the next generation of aviation and low-altitude professionals through practical training, modern simulators and experienced instructors.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                    <div className="relative">
                      <Image
                        alt=""
                        src={pilot3Image}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={352}
                        height={528}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        alt=""
                        src={pilot5Image}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={352}
                        height={528}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <Image
                        alt=""
                        src={cockpitImage}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={352}
                        height={528}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        alt=""
                        src={pilot4Image}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={352}
                        height={528}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <Image
                        alt=""
                        src={pilot6Image}
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={352}
                        height={528}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone timeline section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-7xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch">
              {/* Image - 50% width */}
              <div className="relative h-full min-h-[500px] overflow-hidden rounded-3xl bg-gray-100 shadow-2xl">
                <Image
                  alt="Full Flight Simulator"
                  src={ffsImage}
                  width={960}
                  height={1200}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-gray-900/10 ring-inset" />
              </div>
              
              {/* Timeline - 50% width */}
              <div className="flex h-full min-h-[500px] flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Milestone</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Our Roadmap
                </h2>
                <ol className="relative mt-10 border-s border-gray-200">
                  {milestones.map((item, index) => (
                    <li key={item.title} className={`ms-4 ${index < milestones.length - 1 ? 'mb-10' : ''}`}>
                      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300" />
                      <time className="text-sm font-normal leading-none text-gray-500">{item.period}</time>
                      <h3 className="my-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                      {item.description && (
                        <p className="text-base font-normal text-gray-600">{item.description}</p>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto my-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our Values</h2>
            <p className="mt-6 text-lg/8 text-gray-700">
              Guided by safety, excellence and innovation, we shape every TTA programme to build responsible, capable and future-ready aviation talent.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>



      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
