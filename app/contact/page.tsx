"use client";

import { useState } from 'react';
import Image from "next/image";
import Navigation from "@/components/layout/navigation";
import { IconPhone, IconPrinter, IconClock, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconLoader } from "@tabler/icons-react";

export default function ContactPage() {
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
              src="/images/ig-5.jpg"
              alt="Contact Us"
              fill
              className="object-cover"
              style={{ filter: 'brightness(0.7) saturate(1.1)' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="container pb-16 md:pb-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4">
                Contact Us
              </h1>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-[960px] mx-auto p-4 md:p-8 w-full">

          {/* Call */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <IconPhone size={28} className="mb-3 text-zinc-700" />
            <div className="text-lg font-semibold mb-1">Call</div>
            <a href="tel:786-860-5161" className="text-base text-zinc-600 hover:text-zinc-900">
              (786) 860-5161
            </a>
          </div>

          {/* Fax */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <IconPrinter size={28} className="mb-3 text-zinc-700" />
            <div className="text-lg font-semibold mb-1">Fax</div>
            <div className="text-base text-zinc-600">(855) 710-7707</div>
          </div>

          {/* Office Hours */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1 bg-teal-50">
            <IconClock size={28} className="mb-3 text-zinc-700" />
            <div className="text-lg font-semibold mb-1">Office Hours</div>
            <div className="text-base text-zinc-600">Monday - Friday: 9:00am - 5:00pm</div>
          </div>

          {/* Social Links */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-lg font-semibold mb-4">Follow Us</div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/thebehaviorists"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg hover:bg-zinc-50 transition-colors"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={24} className="text-[#1877F2]" />
              </a>
              <a
                href="https://www.instagram.com/thebehaviorists"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg hover:bg-zinc-50 transition-colors"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={24} className="text-[#E4405F]" />
              </a>
              <a
                href="https://www.linkedin.com/company/thebehaviorists"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg hover:bg-zinc-50 transition-colors"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={24} className="text-[#0A66C2]" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-lg font-semibold mb-4">Send Us a Message</div>
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
