"use client";

import Image from "next/image";
import Navigation from "@/components/layout/navigation";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Full-Width Hero */}
        <div className="relative w-full h-[80vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ig-1.jpg"
              alt="Privacy Policy"
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
                Privacy Policy
              </h1>
              <p className="text-lg sm:text-xl text-white/80">
                Last Updated: 03/26/2025
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-[960px] mx-auto p-4 md:p-8 w-full">

          {/* Introduction */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-lg font-semibold mb-3">1. Introduction</div>
            <p className="text-base text-zinc-600">
              Welcome to The Behaviorists (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us&quot;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website hello@the-behaviorists.com.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-lg font-semibold mb-3">2. Information We Collect</div>
            <ul className="text-sm text-zinc-600 space-y-2 list-disc pl-5">
              <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and any other information you voluntarily provide.</li>
              <li><strong>Health Information:</strong> If applicable, we may collect health-related information to provide Applied Behavior Analysis (ABA) services, subject to HIPAA regulations.</li>
              <li><strong>Automatically Collected Information:</strong> IP address, browser type, operating system, and browsing behavior on our website.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance user experience and analyze website traffic.</li>
            </ul>
          </div>

          {/* How We Use */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <div className="text-lg font-semibold mb-3">3. How We Use Your Information</div>
            <ul className="text-sm text-zinc-600 space-y-2 list-disc pl-5">
              <li>To provide ABA services and respond to inquiries</li>
              <li>To schedule appointments and communicate with clients</li>
              <li>To improve our website functionality</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          {/* How We Share */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <div className="text-lg font-semibold mb-3">4. How We Share</div>
            <p className="text-sm text-zinc-600 mb-2">We do not sell or rent your personal information. We may share your information:</p>
            <ul className="text-sm text-zinc-600 space-y-1 list-disc pl-5">
              <li>With service providers</li>
              <li>With legal authorities if required</li>
              <li>In business transactions</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <div className="text-lg font-semibold mb-3">5. Data Security</div>
            <p className="text-sm text-zinc-600">
              We implement reasonable security measures to protect your personal information. However, no data transmission over the internet is completely secure.
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <div className="text-lg font-semibold mb-3">6. Your Rights</div>
            <p className="text-sm text-zinc-600 mb-2">You may have the following rights:</p>
            <ul className="text-sm text-zinc-600 space-y-1 list-disc pl-5">
              <li>Access, correct, or delete your information</li>
              <li>Opt-out of communications</li>
              <li>Restrict processing</li>
            </ul>
          </div>

          {/* Additional Sections */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="space-y-4 text-sm text-zinc-600">
              <div>
                <div className="font-semibold mb-1">7. Third-Party Links</div>
                <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
              </div>
              <div>
                <div className="font-semibold mb-1">8. Children&apos;s Privacy</div>
                <p>We do not knowingly collect personal information from children under 13 without parental consent.</p>
              </div>
              <div>
                <div className="font-semibold mb-1">9. Changes to This Privacy Policy</div>
                <p>We may update this Privacy Policy periodically. We will notify you of significant changes by updating the effective date.</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1 bg-teal-50">
            <div className="text-lg font-semibold mb-3">10. Contact Us</div>
            <p className="text-base text-zinc-600 mb-2">If you have any questions, contact us at:</p>
            <p className="text-base text-zinc-900 font-medium">The Behaviorists</p>
            <p className="text-base text-zinc-600">657 South Drive Suite 403, Miami Springs, FL 33166</p>
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
