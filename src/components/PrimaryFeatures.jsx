"use client";

import React, { useEffect, useId, useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { useOutsideClick } from "@/hooks/use-outside-click";

export function PrimaryFeatures() {

  const [active, setActive] = useState(null);

  const id = useId();

  const ref = useRef(null);

  useEffect(() => {

    function onKeyDown(event) {

      if (event.key === "Escape") {

        setActive(false);

      }

    }

    if (active && typeof active === "object") {

      document.body.style.overflow = "hidden";

    } else {

      document.body.style.overflow = "auto";

    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);

  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (

    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">

          Our Aviation Courses

          </h2>

        <AnimatePresence>

          {active && typeof active === "object" && (

            <motion.div

              initial={{ opacity: 0 }}

              animate={{ opacity: 1 }}

              exit={{ opacity: 0 }}

              className="fixed inset-0 bg-black/20 h-full w-full z-10" />

          )}

        </AnimatePresence>

        <AnimatePresence>

          {active && typeof active === "object" ? (

            <div className="fixed inset-0 grid place-items-center z-[100]">

              <motion.button

                key={`button-${active.title}-${id}`}

                layout

                initial={{

                  opacity: 0,

                }}

                animate={{

                  opacity: 1,

                }}

                exit={{

                  opacity: 0,

                  transition: {

                    duration: 0.05,

                  },

                }}

                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"

                onClick={() => setActive(null)}>

                <CloseIcon />

              </motion.button>

              <motion.div

                layoutId={`card-${active.title}-${id}`}

                ref={ref}

                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">

                <motion.div layoutId={`image-${active.title}-${id}`}>

                  <img

                    width={200}

                    height={200}

                    src={active.src}

                    alt={active.title}

                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />

                </motion.div>

                <div>

                  <div className="flex justify-between items-start p-4">

                    <div className="">

                      <motion.h3

                        layoutId={`title-${active.title}-${id}`}

                        className="font-medium text-neutral-700 dark:text-neutral-200 text-base">

                        {active.title}

                      </motion.h3>

                      <motion.p

                        layoutId={`description-${active.description}-${id}`}

                        className="text-neutral-600 dark:text-neutral-400 text-base">

                        {active.description}

                      </motion.p>

                    </div>

                    <motion.a

                      layout

                      initial={{ opacity: 0 }}

                      animate={{ opacity: 1 }}

                      exit={{ opacity: 0 }}

                      href={active.ctaLink}

                      target="_blank"

                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">

                      {active.ctaText}

                    </motion.a>

                  </div>

                  <div className="pt-4 relative px-4">

                    <motion.div

                      layout

                      initial={{ opacity: 0 }}

                      animate={{ opacity: 1 }}

                      exit={{ opacity: 0 }}

                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">

                      {typeof active.content === "function"

                        ? active.content()

                        : active.content}

                    </motion.div>

                  </div>

                </div>

              </motion.div>

            </div>

          ) : null}

        </AnimatePresence>

        <ul

          className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6">

          {cards.map((card, index) => (

            <motion.div

              layoutId={`card-${card.title}-${id}`}

              key={card.title}

              onClick={() => setActive(card)}

              className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-neutral-200 dark:border-neutral-700">

              <div className="flex gap-4 flex-col w-full">

                <motion.div layoutId={`image-${card.title}-${id}`}>

                  <img

                    width={100}

                    height={100}

                    src={card.src}

                    alt={card.title}

                    className="h-48 w-full rounded-lg object-cover object-top" />

                </motion.div>

                <div className="flex justify-center items-center flex-col">

                  <motion.h3

                    layoutId={`title-${card.title}-${id}`}

                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">

                    {card.title}

                  </motion.h3>

                  <motion.p

                    layoutId={`description-${card.description}-${id}`}

                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-sm">

                    {card.description}

                  </motion.p>

                </div>

              </div>

            </motion.div>

          ))}

        </ul>

                    </div>

    </section>

  );

}

export const CloseIcon = () => {

  return (

    <motion.svg

      initial={{

        opacity: 0,

      }}

      animate={{

        opacity: 1,

      }}

      exit={{

        opacity: 0,

        transition: {

          duration: 0.05,

        },

      }}

      xmlns="http://www.w3.org/2000/svg"

      width="24"

      height="24"

      viewBox="0 0 24 24"

      fill="none"

      stroke="currentColor"

      strokeWidth="2"

      strokeLinecap="round"

      strokeLinejoin="round"

      className="h-4 w-4 text-black">

      <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      <path d="M18 6l-12 12" />

      <path d="M6 6l12 12" />

    </motion.svg>

  );

};

const cards = [

  {

    description: "Inspiring the next generation of aviators",

    title: "YOUTH AVIATION",

    src: "https://picsum.photos/400/300?random=1",

    ctaText: "Book Now",

    ctaLink: "/register",

    content: () => {

      return (

        <p>Inspiring the next generation of aviators through comprehensive youth programs including the Aviation Discovery Programme for ages 8-14, Aviation Fundamental Programme with 10 structured lessons covering flight controls, meteorology, instruments, and accident investigation, plus engaging Weekend Workshops featuring hands-on activities like building engines, aircraft models, navigation training, and pilot experience days.

        </p>

      );

    },

  },

  {

    description: "Required for every aviation career",

    title: "AVIATION ENGLISH",

    src: "https://picsum.photos/400/300?random=2",

    ctaText: "Book Now",

    ctaLink: "/register",

    content: () => {

      return (

        <p>Essential language training for all aviation professionals following ICAO Doc 9835 standards. Our programs include Foundation level (10 hours) covering basic aviation communication and phraseology, and Advanced level (18 hours) with 3 hours of personal tutoring to achieve ICAO Level 4-6 proficiency. Perfect preparation for pilots, air traffic controllers, and flight operations personnel.

        </p>

      );

    },

  },

  {

    description: "Your pathway from first flight to professional pilot",

    title: "FLIGHT TRAINING",

    src: "https://picsum.photos/400/300?random=3",

    ctaText: "Book Now",

    ctaLink: "/register",

    content: () => {

      return (

        <p>Complete flight training pathway partnered with schools in China, Malaysia, and Australia. From trial flight experiences to full professional licenses including Sports Pilot Licence (SPL), Recreational Pilot Licence (RPL), Private Pilot Licence (PPL), and Commercial Pilot Licence (CPL). TTA handles everything from consultation to placement.

        </p>

      );

    },

  },

  {

    description: "Experience flight training with real pilots",

    title: "SIMULATOR TRAINING",

    src: "https://picsum.photos/400/300?random=4",

    ctaText: "Book Now",

    ctaLink: "/register",

    content: () => {

      return (

        <p>Professional flight simulation training in Hong Kong's most realistic simulators. Experience trial flights, fixed-base simulators, full-motion simulators, and VR full-motion systems. Learn from experienced pilots in a safe, controlled environment perfect for building skills and confidence.

        </p>

      );

    },

  },

  {

    description: "Custom-built flight simulators by TTA",

    title: "SIMULATOR SOLUTIONS",

    src: "https://picsum.photos/400/300?random=5",

    ctaText: "Book Now",

    ctaLink: "/register",

    content: () => {

      return (

        <p>Locally designed and manufactured flight simulators in Hong Kong. Offering fixed-base systems, full-motion simulators, VR full-motion technology, custom design and engineering services, plus complete purchase and installation support. Built by aviation experts for aviation professionals.

        </p>

      );

    },

  },

  {

    description: "Prepare for your aviation future",

    title: "CAREER DEVELOPMENT",

    src: "https://picsum.photos/400/300?random=6",

    ctaText: "Book Now",

    ctaLink: "/register",

    content: () => {

      return (

        <p>Comprehensive career support including personal consultations, airline interview preparation, simulator assessment training, aviation aptitude testing, and specialized coaching. Whether you're transitioning to aviation or advancing your career, our experts provide the guidance and preparation you need to succeed.

        </p>

      );

    },

  },

];
