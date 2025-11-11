"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { User } from "lucide-react";

export const CourseCard = ({ course }) => {
  return (
    <Link
      href={course.ctaLink}
      className="group rounded-2xl overflow-hidden hover:shadow-lg transition duration-200 hover:border-gray-300"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={course.src}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-200 rounded-xl"
        />
      </div>

      <div className="p-4">

        <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600">
          {course.title}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-gray-600" />
            <span className="text-sm text-gray-700">{course.author}</span>
          </div>
          <span className="text-blue-600 text-sm font-medium hover:text-blue-700">
            {course.ctaText} →
          </span>
        </div>
      </div>
    </Link>
  );
};

export const CourseCardGrid = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <CourseCard course={course} key={course.title + index} />
      ))}
    </div>
  );
};

export const aviationCourses = [
  {
    title: "YOUTH AVIATION",
    description: "Inspiring the next generation of aviators through comprehensive youth programs",
    src: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "TTA Team",
    ctaText: "Learn More",
    ctaLink: "/youth-aviation"
  },
  {
    title: "AVIATION ENGLISH",
    description: "Essential language training for all aviation professionals following ICAO standards",
    src: "https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "TTA Team",
    ctaText: "Learn More",
    ctaLink: "/aviation-english"
  },
  {
    title: "FLIGHT TRAINING",
    description: "Complete flight training pathway from first flight to professional pilot license",
    src: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "TTA Team",
    ctaText: "Learn More",
    ctaLink: "/flight-training"
  },
  {
    title: "SIMULATOR TRAINING",
    description: "Professional flight simulation training in Hong Kong's most realistic simulators",
    src: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3308&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "TTA Team",
    ctaText: "Learn More",
    ctaLink: "/simulator-training"
  },
  {
    title: "SIMULATOR SOLUTIONS",
    description: "Custom-built flight simulators designed and manufactured in Hong Kong",
    src: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "TTA Team",
    ctaText: "Learn More",
    ctaLink: "/simulator-solutions"
  },
  {
    title: "CAREER DEVELOPMENT",
    description: "Comprehensive career support including interview preparation and aptitude testing",
    src: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "TTA Team",
    ctaText: "Learn More",
    ctaLink: "/professional-training"
  }
];
