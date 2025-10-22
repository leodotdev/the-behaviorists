"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/navigation";
import { IconCircleCheck } from "@tabler/icons-react";

const abaServices = [
  { name: 'Toilet Training', emoji: '🧻' },
  { name: 'Picky Eating', emoji: '🍝' },
  { name: 'School Shadowing', emoji: '✏️' },
  { name: 'Social Skills', emoji: '👥' },
  { name: 'Behavior Reduction', emoji: '😊' },
  { name: 'Augmentative/Alternative Communication Training', emoji: '💬' },
  { name: 'Caregiver Training', emoji: '👨‍👩‍👧' },
  { name: 'Functional Communication Training', emoji: '💭' },
];

const benefits = [
  'Improve attention, focus, social skills and academics',
  'Increase language and communication skills',
  'Foster independence and increase self-esteem',
  'Decrease dangerous and inappropriate behavior',
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Full-Width Hero */}
        <div className="relative w-full h-[80vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ig-3.jpg"
              alt="Services"
              fill
              className="object-cover"
              style={{ filter: 'brightness(0.7) saturate(1.2)' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="container pb-16 md:pb-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4">
                Services by The Behaviorists
              </h1>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-[960px] mx-auto p-4 md:p-8 w-full">

          {/* Understanding ABA */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-lg md:text-xl font-semibold mb-3">
              Understanding Applied Behavior Analysis
            </div>
            <div className="space-y-3 text-base text-zinc-600">
              <p>Applied Behavior Analysis, or ABA therapy, is a therapy based on the science of behavior and learning.</p>
              <p>We practice skills that the child has not achieved yet and implement interventions to reduce problem behavior.</p>
              <p className="font-semibold text-zinc-900">Our goal is for our clients to be independent!</p>
            </div>
          </div>

          {/* How ABA Can Help */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1 bg-blue-50">
            <div className="text-lg md:text-xl font-semibold mb-4">How ABA Can Help</div>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <IconCircleCheck size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-zinc-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ABA Can Help With Header */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-full row-span-1 bg-lavender-100">
            <div className="text-lg md:text-xl font-semibold">ABA Can Help With</div>
          </div>

          {/* ABA Services Grid */}
          {abaServices.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1"
            >
              <span className="text-2xl mb-2">{service.emoji}</span>
              <div className="text-sm md:text-base font-medium text-zinc-700">{service.name}</div>
            </div>
          ))}

          {/* CTA */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1 bg-teal-50">
            <div className="text-lg md:text-xl font-semibold mb-3">Ready to get started?</div>
            <p className="text-base text-zinc-600 mb-4">
              Contact us today to learn how we can help your child thrive.
            </p>
            <Link
              href="/getting-started"
              className="inline-block bg-zinc-900 text-white px-6 py-3 rounded-full hover:bg-zinc-800 transition-colors text-center"
            >
              Click here to learn how
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
