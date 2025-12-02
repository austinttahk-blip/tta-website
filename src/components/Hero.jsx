"use client";

import React, { useMemo } from "react";
import { motion } from "motion/react";

import { Button } from '@/components/Button'
export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Background />
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16 text-left lg:pt-32 flex-1 flex flex-col justify-end pb-[20vh]">
        <div className="relative">
          <div className="absolute inset-0 bg-black/40 blur-3xl rounded-full"></div>
          <h1 className="relative max-w-4xl font-display text-4xl font-medium tracking-tight text-white sm:text-7xl drop-shadow-lg">
          Start Small. {' '}
            <span className="relative whitespace-nowrap text-blue-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">Dream Big.</span>
            </span>{' '}
            Fly Far.
          </h1>
        </div>
        <p className="relative mt-6 max-w-2xl text-lg tracking-tight text-white drop-shadow-md">
          Talent Trek Ascend (TTA) – where dreams of flight begin and future professionals are made
        </p>
        <div className="relative mt-10 flex gap-x-6">
          <Button href="/education" color="blue">
            <span>
              Book a trial <span className="hidden lg:inline">class</span>
            </span>
          </Button>
          <Button
            href="#"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:text-white hover:bg-white/20"
          >
            <svg
              aria-hidden="true"
              className="h-3 w-3 flex-none fill-white group-active:fill-current"
            >
              <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
            </svg>
            <span className="ml-3">Watch video</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

const Background = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30"></div>
    </motion.div>
  );
};

export function ColourfulText({ text }) {
  const colors = useMemo(() => [
    "rgb(131, 179, 32)",
    "rgb(47, 195, 106)",
    "rgb(42, 169, 210)",
    "rgb(4, 112, 202)",
    "rgb(107, 10, 255)",
    "rgb(183, 0, 218)",
    "rgb(218, 0, 171)",
    "rgb(230, 64, 92)",
    "rgb(232, 98, 63)",
    "rgb(249, 129, 47)",
  ], []);

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [colors]);

  return (
    <span className="relative whitespace-nowrap">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{
            y: 0,
          }}
          animate={{
            color: currentColors[index % currentColors.length],
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className="inline-block whitespace-pre font-sans tracking-tight">
          {char}
        </motion.span>
      ))}
    </span>
  );
}
