"use client";

import { useState } from 'react';
import Image from "next/image";
import Navigation from "@/components/layout/navigation";
import { IconLoader } from "@tabler/icons-react";

export default function GettingStartedPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setMessage({ type: 'success', text: 'Thank you! We\'ll be in touch soon.' });
      e.currentTarget.reset();
    } catch {
      setMessage({ type: 'error', text: 'Something went wrong. Please try calling us instead.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Full-Width Hero */}
        <div className="relative w-full h-[80vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ig-4.jpg"
              alt="Getting Started"
              fill
              className="object-cover"
              style={{ filter: 'brightness(0.65) saturate(1.15)' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="container pb-16 md:pb-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4">
                Getting Started
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-white/90">
                with The Behaviorists
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-[960px] mx-auto p-4 md:p-8 w-full">

          {/* Intro */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-lg font-semibold mb-3">We&apos;ll walk you through the process</div>
          </div>

          {/* Process Steps */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-1 row-span-1">
            <div className="text-2xl font-bold text-zinc-300 mb-2">01</div>
            <p className="text-base text-zinc-600">
              Call us or fill out the contact form below to briefly discuss your child&apos;s needs
            </p>
          </div>

          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-1 row-span-1">
            <div className="text-2xl font-bold text-zinc-300 mb-2">02</div>
            <p className="text-base text-zinc-600">
              We&apos;ll confirm the documentation requirements and initiate services with your insurance
            </p>
          </div>

          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-2xl font-bold text-zinc-300 mb-2">03</div>
            <p className="text-base text-zinc-600">
              During the assessment, we&apos;ll discuss the best treatment plan for your child, pick a location, and recommend hours
            </p>
          </div>

          {/* Insurance Section */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1 bg-lavender-100">
            <div className="text-lg md:text-xl font-semibold mb-3">Accepted Insurance Plans</div>
            <p className="text-base text-zinc-600 mb-4">
              If you are interested in using your health insurance to cover the cost of ABA therapy,
              we&apos;ll determine the documentation requirements set by your benefits plan. We&apos;ll work with
              you to submit all paperwork on your behalf.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Image
                src="/images/logo-aetna.png"
                alt="Aetna"
                width={60}
                height={20}
                className="h-8 w-auto object-contain"
              />
              <Image
                src="/images/logo-bcbs.png"
                alt="Blue Cross Blue Shield"
                width={60}
                height={60}
                className="h-8 w-auto object-contain"
              />
              <Image
                src="/images/logo-cigna.png"
                alt="Cigna"
                width={60}
                height={30}
                className="h-8 w-auto object-contain"
              />
              <Image
                src="/images/logo-medicaid.png"
                alt="Florida Medicaid"
                width={80}
                height={30}
                className="h-8 w-auto object-contain"
              />
              <Image
                src="/images/logo-tricare.png"
                alt="Tricare"
                width={60}
                height={30}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-pink-600">
              Don&apos;t see your plan on the list?<br />
              Contact us today to discuss affordable payment options.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-lg font-semibold mb-4">Call us or fill out the form and we will call you</div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="childName"
                placeholder="Child's Name"
                required
                className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none"
              />
              <input
                type="text"
                name="parentName"
                placeholder="Parent/Caregiver's Name"
                required
                className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none"
              />
              <input
                type="date"
                name="childDOB"
                placeholder="Child's Date of Birth"
                required
                className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none"
              />
              <input
                type="text"
                name="diagnosis"
                placeholder="Child's Diagnosis"
                className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none"
              />
              <input
                type="text"
                name="insurance"
                placeholder="Insurance Provider Name"
                className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none resize-none"
              />

              {message && (
                <div className={`p-4 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {message.text}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading && <IconLoader className="animate-spin" size={20} />}
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>

        </div>
      </main>
    </>
  );
}
