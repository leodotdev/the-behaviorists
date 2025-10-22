"use client";

import { useState } from 'react';
import Image from "next/image";
import Navigation from "@/components/layout/navigation";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconLoader } from "@tabler/icons-react";

export default function JoinOurTeamPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/join-team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setMessage({ type: 'success', text: 'Thank you for your application! We\'ll review it and be in touch soon.' });
      e.currentTarget.reset();
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try emailing your application to hello@the-behaviorists.com' });
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
              src="/images/ig-6.jpg"
              alt="Join Our Team"
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
                Join Our Team
              </h1>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-[960px] mx-auto p-4 md:p-8 w-full">

          {/* Mission */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <p className="text-base text-zinc-600 mb-3">
              We are always accepting applications from talented professionals who are truly committed to making a difference for our clients.
            </p>
            <p className="text-base font-semibold text-zinc-900">
              If you're interested in working with an ethical and supportive organization, apply today!
            </p>
          </div>

          {/* Application Form */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-lg font-semibold mb-4">Application Form</div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Legal First Name"
                  required
                  className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Legal Last Name"
                  required
                  className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none"
              />

              <select
                name="position"
                required
                className="w-full px-4 py-3 bg-white rounded-lg border border-zinc-200 focus:border-zinc-400 focus:outline-none"
              >
                <option value="">Select the position you are applying to</option>
                <option value="Registered Behavior Technician">Registered Behavior Technician</option>
                <option value="BCaBA">BCaBA</option>
                <option value="BCBA">BCBA</option>
                <option value="Administrative Support">Administrative Support</option>
              </select>

              <div className="bg-white p-4 rounded-lg border border-zinc-200">
                <p className="mb-3 text-sm font-medium">Do you have active credentials with the Behavior Analyst Certification Board?</p>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="credentials"
                      value="Yes"
                      required
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Yes</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="credentials"
                      value="Not at this time"
                      required
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Not at this time</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="credentials"
                      value="N/A: I am applying for an administrative role"
                      required
                      className="w-4 h-4"
                    />
                    <span className="text-sm">N/A: I am applying for an administrative role</span>
                  </label>
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Tell us about yourself and why you want to join our team"
                rows={5}
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
                {loading ? 'Sending Application...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-lg font-semibold mb-4">Connect With Us</div>
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

        </div>
      </main>
    </>
  );
}
