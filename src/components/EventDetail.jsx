import { format } from "date-fns";
import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

// Event data - shared with UpcomingEvents component
const events = [
  {
    id: 1,
    title: 'Advanced Flight Simulator Training Workshop',
    slug: 'advanced-flight-simulator-training-workshop',
    description: 'Join our expert instructors for an intensive workshop on advanced flight simulation techniques. Learn the latest procedures and safety protocols in a state-of-the-art simulator environment.',
    date: "2025-12-15",
    location: 'TTA Aviation Training Center, Kowloon Bay',
    category: 'Training',
    time: '9:00 AM - 5:00 PM',
    thumbnail: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    content: `
## Event Overview

This comprehensive workshop is designed for aspiring pilots and aviation professionals who want to master advanced flight simulation techniques. Our experienced instructors will guide you through hands-on training sessions covering the latest cockpit procedures, emergency protocols, and real-world flight scenarios.

## What You'll Learn

The workshop focuses on practical skills that are essential for modern aviation training. Participants will learn to operate advanced flight simulators, understand complex navigation systems, and practice emergency response procedures in a controlled environment.

## Training Details

Throughout the workshop, you'll work with industry-standard simulation equipment that mirrors the systems found in commercial and military aircraft. Our instructors provide personalized guidance, helping you build the technical skills and decision-making abilities required for successful aviation careers.

## Schedule

- **Morning Session**: Basic simulator operations and navigation systems
- **Afternoon Session**: Emergency procedures and advanced scenarios
- **Hands-on Practice**: Real-time simulation exercises

This hands-on approach ensures that you gain confidence and competence in handling various flight situations before transitioning to real aircraft.
    `,
  },
  {
    id: 2,
    title: 'Aviation English Proficiency Course',
    slug: 'aviation-english-proficiency-course',
    description: 'Enhance your aviation communication skills with our comprehensive English proficiency course designed specifically for pilots and aviation professionals.',
    date: "2026-01-08",
    location: 'TTA Aviation Training Center, Kowloon Bay',
    category: 'Language',
    time: '9:00 AM - 5:00 PM',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
    content: `
## Course Description

Our Aviation English Proficiency Course is specifically designed to meet the communication requirements of international aviation standards. This course focuses on developing the specialized language skills needed for clear, precise, and effective communication in aviation environments.

## Learning Objectives

The program covers essential aviation terminology, phraseology, and communication protocols used in air traffic control, cockpit communications, and ground operations. You'll learn to communicate effectively in various aviation scenarios, including normal operations, emergency situations, and weather-related communications.

## Course Content

- Aviation terminology and phraseology
- Air traffic control communications
- Emergency situation protocols
- Weather-related communication procedures
- Cockpit crew coordination

## Methodology

Through interactive lessons and practical exercises, you'll develop the confidence to communicate professionally in English within the aviation industry. The course includes listening comprehension training with authentic aviation recordings and speaking practice with native English speakers who understand aviation contexts.
    `,
  },
  {
    id: 3,
    title: 'Youth Aviation Discovery Day',
    slug: 'youth-aviation-discovery-day',
    description: 'An exciting day of aviation discovery for young aspiring pilots. Experience hands-on activities, meet real pilots, and explore the world of aviation careers.',
    date: "2026-02-20",
    location: 'TTA Aviation Training Center, Kowloon Bay',
    category: 'Youth',
    time: '10:00 AM - 4:00 PM',
    thumbnail: 'https://images.unsplash.com/photo-1719716136369-59ecf938a911?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: `
## Event Overview

Youth Aviation Discovery Day is an exciting opportunity for young people interested in aviation to explore the fascinating world of flight. This full-day event combines educational activities, hands-on experiences, and interactions with aviation professionals to inspire the next generation of pilots, engineers, and aviation specialists.

## Activities Include

Participants will have the chance to experience flight simulation, learn about aircraft systems, and understand the various career paths available in aviation. Our experienced pilots and aviation experts will share their knowledge and experiences, providing valuable insights into what it takes to succeed in the aviation industry.

## Program Highlights

- Flight simulator experiences
- Aircraft systems demonstrations
- Career guidance sessions
- Meet and greet with aviation professionals
- Interactive workshops and presentations

## Learning Outcomes

The event includes interactive workshops, aircraft demonstrations, and opportunities to ask questions about aviation careers. Whether your child dreams of becoming a pilot, aircraft mechanic, air traffic controller, or aviation engineer, this discovery day will help them understand the exciting possibilities that await in the world of aviation.
    `,
  },
]

export default function EventDetail({ eventId }) {
  // Find the event by slug
  const event = events.find(e => e.slug === eventId)

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The event you're looking for doesn't exist.</p>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 md:px-8 pt-20 pb-10">
      {/* Breadcrumb */}
      <Link
        href="/"
        className="inline-flex items-center gap-x-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8"
      >
        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        Back to Home
      </Link>

      <img
        src={event.thumbnail}
        alt={event.title}
        className="h-60 w-full rounded-3xl object-cover md:h-[30rem]"
        height={720}
        width={1024}
      />

      <h2 className="mt-6 mb-2 text-2xl font-bold tracking-tight text-black">
        {event.title}
      </h2>

      <div className="flex items-center">
        <img
          src="https://assets.aceternity.com/manu.png"
          alt="TTA Aviation"
          className="h-5 w-5 rounded-full"
          height={20}
          width={20}
        />
        <p className="pl-2 text-sm text-neutral-600">
          TTA Aviation
        </p>
        <div className="mx-2 h-1 w-1 rounded-full bg-neutral-200" />
        <p className="pl-1 text-sm text-neutral-600">
          {format(new Date(event.date), "LLLL d, yyyy")}
        </p>
      </div>

      <div className="prose prose-base mt-10 sm:mt-20">
        <ReactMarkdown>{event.content}</ReactMarkdown>
      </div>
    </div>
  )
}
