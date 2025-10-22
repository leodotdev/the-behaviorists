"use client";

import Image from "next/image";
import Navigation from "@/components/layout/navigation";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Full-Width Hero */}
        <div className="relative w-full h-[80vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ig-2.jpg"
              alt="Terms and Conditions"
              fill
              className="object-cover"
              style={{ filter: 'brightness(0.65) saturate(1.1)' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="container pb-16 md:pb-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4">
                Terms and Conditions
              </h1>
              <p className="text-lg sm:text-xl text-white/80">
                Last Updated: 03/26/2025
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-[960px] mx-auto p-4 md:p-8 w-full">

          {/* Section 1 */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-lg font-semibold mb-3">1. Introduction</div>
            <p className="text-base text-zinc-600">
              Welcome to The Behaviorists ("Company," "we," "our," "us"). By accessing or using our website the-behaviorists.com, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-lg font-semibold mb-3">2. Use of the Website</div>
            <ul className="text-base text-zinc-600 space-y-2 list-disc pl-5">
              <li>You must be at least 18 years old or have parental/guardian consent to use this website.</li>
              <li>You agree to use our website for lawful purposes only.</li>
              <li>You may not attempt to interfere with the security or functionality of our website.</li>
            </ul>
          </div>

          {/* Services */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <div className="text-lg font-semibold mb-3">3. Services</div>
            <p className="text-sm text-zinc-600">
              Our website provides information about Applied Behavior Analysis (ABA) services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <div className="text-lg font-semibold mb-3">4. Intellectual Property</div>
            <p className="text-sm text-zinc-600">
              All content on our website is owned by or licensed to The Behaviorists and is protected by copyright and trademark laws.
            </p>
          </div>

          {/* Limitation */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <div className="text-lg font-semibold mb-3">5. Limitation of Liability</div>
            <p className="text-sm text-zinc-600">
              We strive to provide accurate information but do not guarantee that all content on our website is error-free. The Behaviorists is not liable for any damages arising from the use or inability to use our website.
            </p>
          </div>

          {/* Privacy */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <div className="text-lg font-semibold mb-3">6. Privacy Policy</div>
            <p className="text-sm text-zinc-600">
              Your use of our website is also governed by our Privacy Policy, which you can review{' '}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">HERE</a>.
            </p>
          </div>

          {/* Remaining Sections */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="space-y-4 text-sm text-zinc-600">
              <div>
                <div className="font-semibold mb-1">7. Third-Party Links</div>
                <p>Our website may contain links to third-party websites. We are not responsible for the content or practices of these websites.</p>
              </div>
              <div>
                <div className="font-semibold mb-1">8. Termination</div>
                <p>We reserve the right to terminate or restrict your access to our website if you violate these Terms and Conditions.</p>
              </div>
              <div>
                <div className="font-semibold mb-1">9. Governing Law</div>
                <p>These Terms and Conditions are governed by the laws of the state of Florida.</p>
              </div>
              <div>
                <div className="font-semibold mb-1">10. Changes to These Terms</div>
                <p>We may update these Terms and Conditions periodically. Continued use of our website after changes indicates your acceptance of the revised terms.</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1 bg-teal-50">
            <div className="text-lg font-semibold mb-3">11. Contact Us</div>
            <p className="text-base text-zinc-600 mb-2">If you have any questions, contact us at:</p>
            <p className="text-base text-zinc-900 font-medium">The Behaviorists</p>
            <p className="text-base text-zinc-600">657 South Drive, Suite 403, Miami Springs, FL 33166</p>
            <p className="text-base text-zinc-600">
              <a href="mailto:hello@the-behaviorists.com" className="text-blue-600 hover:underline">hello@the-behaviorists.com</a>
            </p>
            <p className="text-base text-zinc-600">
              <a href="tel:786-860-5161" className="text-blue-600 hover:underline">786-860-5161</a>
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
