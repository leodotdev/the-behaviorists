"use client";

import Image from "next/image";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconStar,
  IconUsers,
  IconBrain,
  IconHeart,
  IconHome,
  IconChartLine,
  IconShieldCheck,
  IconX,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";

export default function Home() {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [autoplayPaused] = useState(false);
  const [reviewsAutoplayPaused] = useState(false);

  const reviews = [
    {
      name: "Sarah J.",
      role: "Parent",
      source: "Google",
      rating: 5,
      text: "The Behaviorists has been a blessing for our family. Our son has made incredible progress.",
    },
    {
      name: "RBT",
      role: "Registered Behavior Technician",
      source: "Indeed",
      location: "Miami, FL",
      rating: 5,
      text: "The behaviorist offers great training to make sure we&apos;re doing our best. We work together with BCBAs. The Behaviorist also cares about our growth, giving us chances to learn more and move up. The best part is seeing how our work makes a real difference in the kids&apos; lives.",
    },
    {
      name: "Registered Behavior Technician",
      role: "RBT",
      source: "Indeed",
      location: "Doral",
      rating: 5,
      text: "This is my first ABA job and I can easily say I&apos;d never leave. The team is extremely supportive and always at arms reach when needed. I can easily contact my boss without an issue. I feel comfortable talking to them and their extremely flexible and understanding. Love this place so much.",
    },
    {
      name: "Crystal Upegui",
      role: "",
      source: "Google",
      rating: 5,
      text: 'All I can say is "amazing"! This company has been such a help and support through our daughters ADHD process and I will never be able to thank them enough. Our BCBA Camille and her RBT Martha are so dedicated and special with our daughter.',
    },
    {
      name: "Rbt",
      role: "",
      source: "Indeed",
      location: "Miami, FL",
      rating: 5,
      text: "Ayudan a los que comienzan en todos los sentidos, muy atentos.",
    },
    {
      name: "Behavior Analyst",
      role: "",
      source: "Indeed",
      location: "Miami, FL",
      rating: 5,
      text: "It has been my first experience as an Analyst and I can not be any happier with the location, supervisor and experience I have had working and providing services for Lacosta Therapy.",
    },
    {
      name: "Luca Patino",
      role: "Local Guide",
      source: "Google",
      rating: 5,
      text: "I have been working with this agency for about 9 months now and I can honestly say I am extremely happy with this entire team and company. The owner Lisette is very patient, professional and helpful. Marlenne her assistant is a sweetheart.",
    },
    {
      name: "Behavior Analyst",
      role: "",
      source: "Indeed",
      location: "Miami, FL",
      rating: 5,
      text: "every day is amazing. the kids and the environment is amazing. supervior is extremely brilliant and is welcoming of questions and lovingly gives answers.",
    },
  ];

  const slides = [
    {
      image: "/images/ig-0.jpg",
      title: "It&apos;s not just about behavior.",
      filter: "contrast(1.1) brightness(1.05)",
    },
    {
      image: "/images/ig-3.jpg",
      title: "Building independence together.",
      filter: "sepia(0.1) contrast(1.1) saturate(1.2)",
    },
    {
      image: "/images/ig-5.jpg",
      title: "Family-centered approach.",
      filter: "contrast(1.15) saturate(1.1) brightness(1.02)",
    },
    {
      image: "/images/ig-7.jpg",
      title: "Evidence-based therapy.",
      filter: "contrast(1.2) saturate(0.9) brightness(1.05)",
    },
    {
      image: "/images/ig-11.jpg",
      title: "Transforming lives daily.",
      filter: "contrast(1.1) saturate(1.15) brightness(0.98)",
    },
  ];
  const slideDuration = 5000; // 5 seconds per slide

  useEffect(() => {
    if (!autoplayPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, slideDuration);

      return () => clearInterval(timer);
    }
  }, [slides.length, autoplayPaused]);

  useEffect(() => {
    if (!reviewsAutoplayPaused) {
      const timer = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, slideDuration);

      return () => clearInterval(timer);
    }
  }, [reviews.length, reviewsAutoplayPaused]);

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Sticky Header */}
        <header className="sticky top-0 bg-white/80 backdrop-blur-md z-30">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-lg md:text-xl font-semibold">
                The Behaviorists
              </h1>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="text-sm md:text-base bg-zinc-900 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-zinc-800 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-3xl mx-auto p-4 md:p-8 w-full">
          {/* Hero Carousel */}
          <div
            className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1 bg-zinc-900 text-white h-[50vh] min-h-[300px] text-left cursor-grab active:cursor-grabbing"
            style={{ touchAction: "pan-y" }}
          >
            {/* Background Images */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute inset-0 z-0"
                style={{
                  pointerEvents: "none",
                  opacity: currentSlide === index ? 1 : 0,
                  transition: "opacity 1s",
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  style={{ filter: slide.filter }}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              </div>
            ))}

            {/* Progress Indicators */}
            <div className="absolute top-8 left-8 right-8 flex gap-1 z-20">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                >
                  <div
                    className="h-full bg-white"
                    style={{
                      width: currentSlide === index ? "100%" : "0%",
                      transition:
                        currentSlide === index
                          ? `width ${slideDuration / 1000}s linear`
                          : "none",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Content - positioned bottom left */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10 flex flex-col gap-2">
              <h1
                key={currentSlide}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white"
              >
                {slides[currentSlide].title}
              </h1>
              <p className="text-base text-white/90 max-w-xl">
                Evidence-based ABA therapy for children with autism and
                developmental disabilities in South Florida.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <div className="text-2xl md:text-3xl font-bold mb-1">500+</div>
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              Families Served
            </div>
          </div>

          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <div className="text-2xl md:text-3xl font-bold mb-1">98%</div>
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              Satisfaction Rate
            </div>
          </div>

          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <div className="text-2xl md:text-3xl font-bold mb-1">7+</div>
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              Years Experience
            </div>
          </div>

          {/* About */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            <div className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
              About Us
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Founded in 2017, we&apos;re one of the few BHCOE agencies in
              Florida, providing personalized ABA therapy with a focus on
              independence and family involvement.
            </p>
          </div>

          {/* Image Box */}
          <div
            className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1 bg-cover bg-center bg-no-repeat text-white p-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/50 before:via-transparent before:to-transparent"
            style={{
              backgroundImage: "url(/images/ig-0.jpg)",
              transformStyle: "preserve-3d",
            }}
          />

          {/* Services */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <IconHome size={24} className="mb-3 text-zinc-700" />
            <div className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
              Home-Based
            </div>
            <p className="text-base text-zinc-600">
              Therapy in familiar environments
            </p>
          </div>

          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <IconBrain size={24} className="mb-3 text-zinc-700" />
            <div className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
              School Support
            </div>
            <p className="text-base text-zinc-600">
              Collaborative educational approach
            </p>
          </div>

          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <IconUsers size={24} className="mb-3 text-zinc-700" />
            <div className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
              Clinic-Based
            </div>
            <p className="text-base text-zinc-600">
              Structured therapeutic setting
            </p>
          </div>

          {/* Process Header */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-full row-span-1 bg-teal-100">
            <div className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
              We&apos;ll walk you through the process
            </div>
          </div>

          {/* Process Steps - Full Width Container */}
          <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
            <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col">
              <div className="text-2xl font-bold text-zinc-300 mb-2">01</div>
              <p className="text-base text-zinc-600">
                Call us or fill out the contact form below to briefly discuss
                your child&apos;s needs
              </p>
            </div>

            <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col">
              <div className="text-2xl font-bold text-zinc-300 mb-2">02</div>
              <p className="text-base text-zinc-600">
                We&apos;ll confirm the documentation requirements and initiate
                services with your insurance
              </p>
            </div>

            <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col">
              <div className="text-2xl font-bold text-zinc-300 mb-2">03</div>
              <p className="text-base text-zinc-600">
                During the assessment, we&apos;ll discuss the best treatment
                plan for your child, pick a location, and recommend hours
              </p>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1">
            {/* Progress Indicators */}
            <div className="absolute top-8 left-8 right-8 flex gap-1 z-20">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-0.5 bg-zinc-300 rounded-full overflow-hidden"
                >
                  <div
                    className="h-full bg-zinc-600"
                    style={{
                      width: currentReview === index ? "100%" : "0%",
                      transition:
                        currentReview === index
                          ? `width ${slideDuration / 1000}s linear`
                          : "none",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Review Content */}
            <div className="pt-6">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <IconStar
                    key={i}
                    size={24}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div key={currentReview}>
                <p className="text-base text-zinc-600 leading-relaxed italic mb-3 line-clamp-4">
                  &quot;{reviews[currentReview].text}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-zinc-500">
                    - {reviews[currentReview].name}
                    {reviews[currentReview].role &&
                      `, ${reviews[currentReview].role}`}
                  </p>
                  <p className="text-sm text-zinc-400">
                    {reviews[currentReview].source}
                    {reviews[currentReview].location &&
                      ` • ${reviews[currentReview].location}`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1 bg-cover bg-center bg-no-repeat text-white p-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/50 before:via-transparent before:to-transparent"
            style={{
              backgroundImage: "url(/images/ig-5.jpg)",
              transformStyle: "preserve-3d",
            }}
          />

          {/* Values */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <IconHeart size={24} className="mb-2 text-zinc-700" />
            <div className="font-medium text-sm">Family-Centered</div>
          </div>

          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <IconChartLine size={24} className="mb-2 text-zinc-700" />
            <div className="font-medium text-sm">Data-Driven</div>
          </div>

          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <IconShieldCheck size={24} className="mb-2 text-zinc-700" />
            <div className="font-medium text-sm">Evidence-Based</div>
          </div>

          {/* Services Heading */}
          <div className="col-span-full py-8">
            <h2 className="text-3xl font-bold">Services</h2>
          </div>

          {/* Services Heading */}
          <div className="col-span-full py-8">
            <h2 className="text-3xl font-bold">Getting Started</h2>
          </div>

          {/* Understanding ABA */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-2 md:col-span-1 row-span-1 bg-lavender-100">
            <div className="text-lg md:text-xl font-semibold mb-1 md:mb-2 mb-3">
              Understanding Applied Behavior Analysis
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              Applied Behavior Analysis, or ABA therapy, is a therapy based on
              the science of behavior and learning. We practice skills that the
              child has not achieved yet and implement interventions to reduce
              problem behavior. Our goal is for our clients to be independent!
            </p>
          </div>

          {/* ABA Improvements */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-2 md:col-span-1 row-span-1 bg-lavender-200">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm md:text-base text-zinc-700">
                  Improve attention, focus, social skills and academics
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm md:text-base text-zinc-700">
                  Increase language and communication skills
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm md:text-base text-zinc-700">
                  Foster independence and increase self-esteem
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm md:text-base text-zinc-700">
                  Decrease dangerous and inappropriate behavior
                </span>
              </li>
            </ul>
          </div>

          {/* ABA Can Help With - Single Box */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col gap-3 col-span-1 md:col-span-2 row-span-1">
            <h3 className="text-lg md:text-xl font-semibold">
              ABA can help with
            </h3>

            <ul className="list-disc list-inside space-y-2 text-base text-zinc-700">
              <li className="flex items-center gap-2">
                <span className="text-xl">🧻</span>
                <span>Toilet Training</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">🍝</span>
                <span>Picky Eating</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">✏️</span>
                <span>School Shadowing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">👥</span>
                <span>Social Skills</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">😊</span>
                <span>Behavior Reduction</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">💬</span>
                <span>Augmentative/Alternative Communication Training</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">👨‍👩‍👧</span>
                <span>Caregiver Training</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">💭</span>
                <span>Functional Communication Training</span>
              </li>
            </ul>
          </div>

          {/* Insurance */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1 bg-teal-100">
            <div className="text-lg md:text-xl font-semibold mb-1 md:mb-2 mb-3">
              Accepted Insurance Plans
            </div>
            <p className="text-base text-zinc-600 leading-relaxed mb-4">
              If you are interested in using your health insurance to cover the
              cost of ABA therapy, we&apos;ll determine the documentation
              requirements set by your benefits plan. We&apos;ll work with you
              to submit all paperwork on your behalf.
            </p>
            <div className="flex flex-wrap items-center gap-4">
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
            <p className="text-sm mt-4 text-pink-600">
              Don&apos;t see your plan on the list?
              <br />
              Contact us today to discuss affordable payment options.
            </p>
          </div>

          {/* Image */}
          <div
            className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1 bg-cover bg-center bg-no-repeat text-white p-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/50 before:via-transparent before:to-transparent"
            style={{
              backgroundImage: "url(/images/ig-11.jpg)",
              transformStyle: "preserve-3d",
            }}
          />

          {/* Contact CTA */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <IconPhone size={24} className="mb-2 text-zinc-700" />
            <div className="text-sm font-medium">Call Now</div>
            <p className="text-sm text-zinc-600">786-860-5161</p>
          </div>

          {/* Email */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <IconMail size={24} className="mb-2 text-zinc-700" />
            <div className="text-sm font-medium">Email Us</div>
            <p className="text-sm text-zinc-600">info@behaviorists.com</p>
          </div>

          {/* Location */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 row-span-1">
            <IconMapPin size={24} className="mb-2 text-zinc-700" />
            <div className="text-sm font-medium">South Florida</div>
            <p className="text-sm text-zinc-600">Multiple locations</p>
          </div>

          {/* Footer */}
          <div className="bg-zinc-100 rounded-lg md:rounded-xl p-4 md:p-8 overflow-hidden relative min-h-[120px] flex flex-col col-span-1 md:col-span-2 row-span-1 bg-zinc-900 text-white">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <Image
                  src="/logo-rainbow-mark.avif"
                  alt="The Behaviorists Logo"
                  width={72}
                  height={72}
                  className="opacity-80 mb-4"
                />
                <p className="text-xs sm:text-sm mb-1">
                  © {new Date().getFullYear()} The Behaviorists
                </p>
                <p className="text-xs text-zinc-400">
                  BHCOE Accredited • Licensed & Insured
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-400">
                  <button
                    onClick={() => setIsPrivacyOpen(true)}
                    className="hover:text-zinc-300 transition-colors"
                  >
                    Privacy Policy
                  </button>
                  {" • "}
                  <button
                    onClick={() => setIsTermsOpen(true)}
                    className="hover:text-zinc-300 transition-colors"
                  >
                    Terms of Service
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal/Drawer */}
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Modal on Desktop, Drawer on Mobile */}
            <div className="fixed inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center z-50">
              <div className="bg-white rounded-t-2xl md:rounded-2xl w-full md:max-w-xl md:mx-auto max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="p-6 md:p-8">
                  {/* Handle bar - mobile only */}
                  <div className="w-12 h-1 bg-zinc-200 rounded-full mx-auto mb-6 md:hidden" />

                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-semibold">Get Started</h2>
                    <button
                      onClick={() => setIsDrawerOpen(false)}
                      className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
                    >
                      <IconX size={20} className="text-zinc-500" />
                    </button>
                  </div>

                  {/* Call Section */}
                  <div className="mb-8 p-4 bg-zinc-50 rounded-xl">
                    <p className="text-sm text-zinc-600 mb-3">
                      Need immediate assistance?
                    </p>
                    <a
                      href="tel:786-860-5161"
                      className="flex items-center justify-center gap-3 bg-zinc-900 text-white rounded-full py-3 px-6 font-medium hover:bg-zinc-800 transition-colors"
                    >
                      <IconPhone size={20} />
                      <span>(786) 860-5161</span>
                    </a>
                  </div>

                  {/* Form */}
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">
                          Child&apos;s Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">
                          Parent/Caregiver&apos;s Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">
                          Child&apos;s Date of Birth
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">
                          Child&apos;s Diagnosis
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1">
                        Insurance Provider
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-1">
                        Therapy Schedule & Location Preference
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-zinc-900 text-white rounded-full py-3 font-medium hover:bg-zinc-800 transition-colors"
                      >
                        Submit
                      </button>
                      <p className="text-center text-sm text-zinc-500 mt-3">
                        We&apos;ll call you within 24 hours
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Privacy Policy Modal */}
        {isPrivacyOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsPrivacyOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-100">
                  <h2 className="text-xl font-semibold">Privacy Policy</h2>
                  <button
                    onClick={() => setIsPrivacyOpen(false)}
                    className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
                  >
                    <IconX size={20} className="text-zinc-500" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(85vh-5rem)]">
                  <div className="prose prose-zinc max-w-none">
                    <p className="text-sm text-zinc-500 mb-6">
                      Last Updated: 03/26/2025
                    </p>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        1. Introduction
                      </h3>
                      <p className="text-zinc-600 leading-relaxed">
                        Welcome to The Behaviorists (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot;
                        &quot;us&quot;). We are committed to protecting your privacy. This
                        Privacy Policy explains how we collect, use, disclose,
                        and safeguard your information when you visit our
                        website hello@the-behaviorists.com.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        2. Information We Collect
                      </h3>
                      <p className="text-zinc-600 mb-3">
                        We may collect the following types of information:
                      </p>
                      <ul className="space-y-2 text-zinc-600">
                        <li>
                          <strong>Personal Information:</strong> Name, email
                          address, phone number, mailing address, and any other
                          information you voluntarily provide.
                        </li>
                        <li>
                          <strong>Health Information:</strong> If applicable, we
                          may collect health-related information to provide
                          Applied Behavior Analysis (ABA) services, subject to
                          HIPAA regulations.
                        </li>
                        <li>
                          <strong>Automatically Collected Information:</strong>{" "}
                          IP address, browser type, operating system, and
                          browsing behavior on our website.
                        </li>
                        <li>
                          <strong>Cookies and Tracking Technologies:</strong> We
                          use cookies to enhance user experience and analyze
                          website traffic.
                        </li>
                      </ul>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        3. How We Use Your Information
                      </h3>
                      <p className="text-zinc-600 mb-3">
                        We may use your information for the following purposes:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600">
                        <li>
                          To provide ABA services and respond to inquiries.
                        </li>
                        <li>
                          To schedule appointments and communicate with clients.
                        </li>
                        <li>
                          To improve our website functionality and user
                          experience.
                        </li>
                        <li>
                          To comply with legal obligations and protect our
                          rights.
                        </li>
                      </ul>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        4. How We Share Your Information
                      </h3>
                      <p className="text-zinc-600 mb-3">
                        We do not sell or rent your personal information. We may
                        share your information:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600">
                        <li>
                          With service providers assisting us in website
                          maintenance and operations.
                        </li>
                        <li>With legal authorities if required by law.</li>
                        <li>
                          With third parties in connection with a business
                          transaction, such as a merger or acquisition.
                        </li>
                      </ul>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        5. Data Security
                      </h3>
                      <p className="text-zinc-600">
                        We implement reasonable security measures to protect
                        your personal information. However, no data transmission
                        over the internet is completely secure, and we cannot
                        guarantee absolute security.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        6. Your Rights and Choices
                      </h3>
                      <p className="text-zinc-600 mb-3">
                        Depending on your location, you may have the following
                        rights:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600 mb-3">
                        <li>
                          Access, correct, or delete your personal information.
                        </li>
                        <li>Opt-out of certain communications.</li>
                        <li>
                          Restrict processing of your personal information.
                        </li>
                      </ul>
                      <p className="text-zinc-600">
                        To exercise these rights, contact us at
                        hello@the-behaviorists.com.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        7. Third-Party Links
                      </h3>
                      <p className="text-zinc-600">
                        Our website may contain links to third-party websites.
                        We are not responsible for their privacy practices.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        8. Children&apos;s Privacy
                      </h3>
                      <p className="text-zinc-600">
                        We do not knowingly collect personal information from
                        children under 13 without parental consent.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        9. Changes to This Privacy Policy
                      </h3>
                      <p className="text-zinc-600">
                        We may update this Privacy Policy periodically. We will
                        notify you of significant changes by updating the
                        effective date.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        10. Contact Us
                      </h3>
                      <p className="text-zinc-600 mb-3">
                        If you have any questions, contact us at:
                      </p>
                      <div className="bg-zinc-50 p-4 rounded-lg">
                        <p className="font-semibold text-zinc-700">
                          The Behaviorists
                        </p>
                        <p className="text-zinc-600">
                          657 South Drive Suite 403,
                          <br />
                          Miami Springs, FL 33166
                        </p>
                        <p className="text-zinc-600 mt-2">
                          <a
                            href="mailto:hello@the-behaviorists.com"
                            className="text-zinc-900 hover:underline"
                          >
                            hello@the-behaviorists.com
                          </a>
                          <br />
                          <a
                            href="tel:786-860-5161"
                            className="text-zinc-900 hover:underline"
                          >
                            786-860-5161
                          </a>
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Terms and Conditions Modal */}
        {isTermsOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsTermsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-100">
                  <h2 className="text-xl font-semibold">
                    Terms and Conditions
                  </h2>
                  <button
                    onClick={() => setIsTermsOpen(false)}
                    className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
                  >
                    <IconX size={20} className="text-zinc-500" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(85vh-5rem)]">
                  <div className="prose prose-zinc max-w-none">
                    <p className="text-sm text-zinc-500 mb-6">
                      Last Updated: 03/26/2025
                    </p>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        1. Introduction
                      </h3>
                      <p className="text-zinc-600 leading-relaxed">
                        Welcome to The Behaviorists (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot;
                        &quot;us&quot;). By accessing or using our website
                        the-behaviorists.com, you agree to comply with and be
                        bound by these Terms and Conditions. If you do not
                        agree, please do not use our website.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        2. Use of the Website
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600">
                        <li>
                          You must be at least 18 years old or have
                          parental/guardian consent to use this website.
                        </li>
                        <li>
                          You agree to use our website for lawful purposes only.
                        </li>
                        <li>
                          You may not attempt to interfere with the security or
                          functionality of our website.
                        </li>
                      </ul>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        3. Services
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600">
                        <li>
                          Our website provides information about Applied
                          Behavior Analysis (ABA) services.
                        </li>
                        <li>
                          We reserve the right to modify, suspend, or
                          discontinue any part of our services at any time
                          without notice.
                        </li>
                      </ul>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        4. Intellectual Property
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600">
                        <li>
                          All content on our website, including text, graphics,
                          logos, and images, is owned by or licensed to The
                          Behaviorists and is protected by copyright and
                          trademark laws.
                        </li>
                        <li>
                          You may not reproduce, distribute, or modify our
                          content without our written permission.
                        </li>
                      </ul>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        5. Limitation of Liability
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-600">
                        <li>
                          We strive to provide accurate information but do not
                          guarantee that all content on our website is
                          error-free.
                        </li>
                        <li>
                          The Behaviorists is not liable for any damages arising
                          from the use or inability to use our website.
                        </li>
                      </ul>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        6. Privacy Policy
                      </h3>
                      <p className="text-zinc-600">
                        Your use of our website is also governed by our Privacy
                        Policy, which you can review{" "}
                        <button
                          onClick={() => {
                            setIsTermsOpen(false);
                            setTimeout(() => setIsPrivacyOpen(true), 300);
                          }}
                          className="text-zinc-900 hover:underline font-medium"
                        >
                          HERE
                        </button>
                        .
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        7. Third-Party Links
                      </h3>
                      <p className="text-zinc-600">
                        Our website may contain links to third-party websites.
                        We are not responsible for the content or practices of
                        these websites.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        8. Termination
                      </h3>
                      <p className="text-zinc-600">
                        We reserve the right to terminate or restrict your
                        access to our website if you violate these Terms and
                        Conditions.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        9. Governing Law
                      </h3>
                      <p className="text-zinc-600">
                        These Terms and Conditions are governed by the laws of
                        the state of Florida.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        10. Changes to These Terms
                      </h3>
                      <p className="text-zinc-600">
                        We may update these Terms and Conditions periodically.
                        Continued use of our website after changes indicates
                        your acceptance of the revised terms.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        11. Contact Us
                      </h3>
                      <p className="text-zinc-600 mb-3">
                        If you have any questions, contact us at:
                      </p>
                      <div className="bg-zinc-50 p-4 rounded-lg">
                        <p className="font-semibold text-zinc-700">
                          The Behaviorists
                        </p>
                        <p className="text-zinc-600">
                          657 South Drive, Suite 403,
                          <br />
                          Miami Springs, FL 33166
                        </p>
                        <p className="text-zinc-600 mt-2">
                          <a
                            href="mailto:hello@the-behaviorists.com"
                            className="text-zinc-900 hover:underline"
                          >
                            hello@the-behaviorists.com
                          </a>
                          <br />
                          <a
                            href="tel:786-860-5161"
                            className="text-zinc-900 hover:underline"
                          >
                            786-860-5161
                          </a>
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
