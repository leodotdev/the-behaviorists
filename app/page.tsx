"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Shield,
  CheckCircle,
  Instagram,
  Facebook,
} from "lucide-react";

// Fluent UI Emoji - Flat style
import IconFSmilingFaceWithSmilingEyes from "react-fluentui-emoji/lib/flat/icons/IconFSmilingFaceWithSmilingEyes";
import IconFHouseWithGarden from "react-fluentui-emoji/lib/flat/icons/IconFHouseWithGarden";
import IconFBooks from "react-fluentui-emoji/lib/flat/icons/IconFBooks";
import IconFHospital from "react-fluentui-emoji/lib/flat/icons/IconFHospital";
import IconFPeopleHugging from "react-fluentui-emoji/lib/flat/icons/IconFPeopleHugging";
import IconFBustsInSilhouette from "react-fluentui-emoji/lib/flat/icons/IconFBustsInSilhouette";
import IconFSparkles from "react-fluentui-emoji/lib/flat/icons/IconFSparkles";
import IconFGlowingStar from "react-fluentui-emoji/lib/flat/icons/IconFGlowingStar";
import IconFToilet from "react-fluentui-emoji/lib/flat/icons/IconFToilet";
import IconFGreenSalad from "react-fluentui-emoji/lib/flat/icons/IconFGreenSalad";
import IconFPencil from "react-fluentui-emoji/lib/flat/icons/IconFPencil";
import IconFHandshake from "react-fluentui-emoji/lib/flat/icons/IconFHandshake";
import IconFLeftSpeechBubble from "react-fluentui-emoji/lib/flat/icons/IconFLeftSpeechBubble";
import IconFBullseye from "react-fluentui-emoji/lib/flat/icons/IconFBullseye";
import IconFOrangeHeart from "react-fluentui-emoji/lib/flat/icons/IconFOrangeHeart";
import IconFBlueHeart from "react-fluentui-emoji/lib/flat/icons/IconFBlueHeart";
import IconFDizzy from "react-fluentui-emoji/lib/flat/icons/IconFDizzy";
import IconFAlarmClock from "react-fluentui-emoji/lib/flat/icons/IconFAlarmClock";
import IconFBrain from "react-fluentui-emoji/lib/flat/icons/IconFBrain";
import IconFGrinningFaceWithSmilingEyes from "react-fluentui-emoji/lib/flat/icons/IconFGrinningFaceWithSmilingEyes";

// Decorative blobs like Headspace
const DecorativeBlob = ({
  icon,
  color,
  size = "w-16 h-16",
  iconSize = 32,
  className = "",
}: {
  icon: React.ReactNode;
  color: string;
  size?: string;
  iconSize?: number;
  className?: string;
}) => (
  <div className={`blob ${size} ${color} ${className}`}>
    {icon}
  </div>
);

// Category button like Headspace
const CategoryButton = ({
  label,
  icon,
  color = "bg-gray-100",
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  color?: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center justify-between gap-4 px-6 py-4 border border-gray-200 rounded-2xl hover:border-gray-400 transition-all group bg-white"
  >
    <span className="font-medium">{label}</span>
    <div className="flex items-center gap-2">
      <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
    </div>
  </button>
);

// Feature card like Headspace
const FeatureCard = ({
  bgColor,
  title,
  description,
  buttonText,
  buttonHref,
  children,
}: {
  bgColor: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  children?: React.ReactNode;
}) => (
  <div className={`${bgColor} rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[400px] flex flex-col`}>
    <div className="flex-1">
      <h3 className="font-semibold text-3xl md:text-4xl mb-4 text-foreground">{title}</h3>
      <p className="text-xl font-normal text-foreground/80 mb-6 max-w-md">{description}</p>
      <Link href={buttonHref}>
        <Button
          variant="outline"
          className="rounded-full border-0 bg-white/80 text-foreground hover:bg-white btn-headspace"
        >
          {buttonText}
        </Button>
      </Link>
    </div>
    {children}
  </div>
);

// Content data
const categoryButtons = [
  { label: "Home therapy", icon: <IconFHouseWithGarden size={24} />, color: "bg-amber-100" },
  { label: "School support", icon: <IconFBooks size={24} />, color: "bg-blue-100" },
  { label: "Clinic services", icon: <IconFHospital size={24} />, color: "bg-pink-100" },
  { label: "Parent training", icon: <IconFPeopleHugging size={24} />, color: "bg-purple-100" },
  { label: "Social skills", icon: <IconFBustsInSilhouette size={24} />, color: "bg-teal-100" },
  { label: "Get started", icon: <IconFSparkles size={24} />, color: "bg-yellow-100" },
];

const abaHelps = [
  { icon: <IconFToilet size={32} />, label: "Toilet Training", color: "bg-gray-100" },
  { icon: <IconFGreenSalad size={32} />, label: "Picky Eating", color: "bg-green-100" },
  { icon: <IconFPencil size={32} />, label: "School Shadowing", color: "bg-orange-100" },
  { icon: <IconFHandshake size={32} />, label: "Social Skills", color: "bg-amber-100" },
  { icon: <IconFGrinningFaceWithSmilingEyes size={32} />, label: "Behavior Support", color: "bg-yellow-100" },
  { icon: <IconFLeftSpeechBubble size={32} />, label: "Communication", color: "bg-blue-100" },
  { icon: <IconFPeopleHugging size={32} />, label: "Parent Training", color: "bg-purple-100" },
  { icon: <IconFBullseye size={32} />, label: "Independence", color: "bg-red-100" },
];

const testimonials = [
  {
    quote:
      "The Behaviorists has been a blessing for our family. Our son has made incredible progress with their support.",
    author: "Parent",
    topic: "working with their child",
  },
  {
    quote:
      'All I can say is "amazing"! This company has been such a help and support through our daughter\'s ADHD process.',
    author: "Crystal Upegui",
    topic: "ADHD support",
  },
  {
    quote:
      "I have been working with this agency for about 9 months now and I am extremely happy with this entire team.",
    author: "Luca Patino",
    topic: "ongoing therapy",
  },
];

const processSteps = [
  {
    icon: Phone,
    title: "Contact us",
    description: "Call or fill out the form to discuss your child's needs",
  },
  {
    icon: Shield,
    title: "Insurance check",
    description: "We confirm documentation and initiate services with your insurance",
  },
  {
    icon: CheckCircle,
    title: "Assessment",
    description: "We create the best treatment plan for your child",
  },
];

const faqs = [
  {
    question: "What is ABA therapy?",
    answer:
      "Applied Behavior Analysis (ABA) is a therapy based on the science of behavior and learning. We practice skills that the child has not achieved yet and implement interventions to reduce problem behavior. Our goal is for our clients to be independent!",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact us! In a brief phone interview we will determine your child's needs and go over basic documents required to initiate services. Once services have been approved, we'll conduct an in-person assessment to develop the best treatment plan for your child.",
  },
  {
    question: "What insurances do you accept?",
    answer:
      "We accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Florida Medicaid, and Tricare. We'll work with you to submit all paperwork on your behalf.",
  },
  {
    question: "Where do you provide services?",
    answer:
      "We provide services throughout South Florida including home-based therapy, school-based support, and clinic-based services. Our main location is in Miami Springs.",
  },
  {
    question: "What does ABA help with?",
    answer:
      "ABA can help with toilet training, picky eating, school shadowing, social skills, behavior reduction, communication training, caregiver training, and functional communication. We focus on building independence!",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner - Headspace style */}
      <div className="bg-[#00a86b] text-white py-2 text-center text-sm">
        <Link href="#contact" className="hover:underline">
          Free consultation available: Start your child&apos;s journey today →
        </Link>
      </div>

      {/* Navigation - Headspace style */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#f47d31] rounded-full flex items-center justify-center">
                <Image
                  src="/logo-rainbow-mark.avif"
                  alt="The Behaviorists"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="#services" className="text-sm hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-sm hover:text-primary transition-colors">
                About ABA
              </Link>
              <Link href="#process" className="text-sm hover:text-primary transition-colors">
                Getting Started
              </Link>
              <Link href="#faq" className="text-sm hover:text-primary transition-colors">
                Resources
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="#contact" className="hidden sm:block text-sm hover:text-primary">
                Contact
              </Link>
              <Button
                asChild
                className="rounded-full bg-[#3469d4] hover:bg-[#2a56b3] btn-headspace"
              >
                <a href="tel:786-860-5161">Call Now</a>
              </Button>

              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <Link href="#services" className="block text-lg" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="#about" className="block text-lg" onClick={() => setMobileMenuOpen(false)}>
                About ABA
              </Link>
              <Link href="#process" className="block text-lg" onClick={() => setMobileMenuOpen(false)}>
                Getting Started
              </Link>
              <Link href="#faq" className="block text-lg" onClick={() => setMobileMenuOpen(false)}>
                Resources
              </Link>
              <Button asChild className="w-full rounded-full bg-[#3469d4]">
                <a href="tel:786-860-5161">Call Now</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Headspace style with yellow/orange background */}
      <section className="bg-[#ffc933] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                It&apos;s not just about behavior.
              </h1>
              <p className="text-xl font-normal text-foreground/80 mb-8 max-w-lg leading-relaxed">
                Our mission is to provide individualized, research-based treatment while maintaining autonomy and independence as the priority.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#1c1c1c] hover:bg-[#333] text-white btn-headspace text-lg px-8"
              >
                <Link href="#contact">
                  Get started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <p className="text-sm text-foreground/60 mt-4">
                Free consultation • BHCOE Accredited • Insurance accepted
              </p>
            </div>

            {/* Hero illustration - Orange circle with character */}
            <div className="relative flex justify-center items-center">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-[#f47d31] rounded-full relative animate-scale-in flex items-center justify-center">
                {/* Cute face on orange circle */}
                <IconFSmilingFaceWithSmilingEyes size={120} />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float">
                  <IconFGlowingStar size={40} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#3469d4] rounded-2xl shadow-lg flex items-center justify-center text-white animate-float stagger-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-xs">Families</div>
                  </div>
                </div>
              </div>
              {/* Decorative stars */}
              <div className="absolute top-0 right-1/4 animate-bounce-gentle">
                <IconFSparkles size={28} />
              </div>
              <div className="absolute bottom-1/4 right-0 animate-bounce-gentle stagger-2">
                <IconFDizzy size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Buttons Section - Headspace style */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What kind of support are you looking for?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryButtons.map((cat, index) => (
              <CategoryButton key={index} label={cat.label} icon={cat.icon} color={cat.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Headspace style */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-semibold text-4xl md:text-5xl text-center mb-4">
            The therapy support for every moment
          </h2>
          <p className="text-center text-xl font-normal text-muted-foreground mb-12 max-w-2xl mx-auto">
            Evidence-based ABA therapy delivered with care in the setting that works best for your family.
          </p>

          {/* Feature tabs - Headspace style */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Home-based", "School-based", "Clinic-based"].map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFeature === index
                    ? "bg-[#1c1c1c] text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Feature cards carousel */}
          <div className="grid md:grid-cols-2 gap-6">
            {activeFeature === 0 && (
              <>
                <FeatureCard
                  bgColor="bg-[#ffc933]"
                  title="Comfortable learning at home"
                  description="Your child learns best in their natural environment. Our therapists come to you, working with your family to build skills that matter."
                  buttonText="Learn more"
                  buttonHref="#contact"
                >
                  <div className="absolute bottom-0 right-0 w-40 h-40">
                    <div className="w-32 h-32 bg-[#f47d31] rounded-full absolute bottom-4 right-4 flex items-center justify-center">
                      <IconFHouseWithGarden size={64} />
                    </div>
                  </div>
                </FeatureCard>
                <FeatureCard
                  bgColor="bg-[#f5c0c0]"
                  title="Flexible scheduling"
                  description="Sessions that fit your family's routine. Morning, afternoon, or evening - we work around your schedule."
                  buttonText="Get started"
                  buttonHref="#contact"
                >
                  <div className="absolute bottom-0 right-0 w-40 h-40">
                    <div className="w-32 h-32 bg-white/50 rounded-full absolute bottom-4 right-4 flex items-center justify-center">
                      <IconFAlarmClock size={64} />
                    </div>
                  </div>
                </FeatureCard>
              </>
            )}
            {activeFeature === 1 && (
              <>
                <FeatureCard
                  bgColor="bg-[#25b8a8]"
                  title="School collaboration"
                  description="We work directly with teachers and staff to ensure consistent progress across all learning environments."
                  buttonText="Learn more"
                  buttonHref="#contact"
                >
                  <div className="absolute bottom-0 right-0 w-40 h-40">
                    <div className="w-32 h-32 bg-white/30 rounded-full absolute bottom-4 right-4 flex items-center justify-center">
                      <IconFBooks size={64} />
                    </div>
                  </div>
                </FeatureCard>
                <FeatureCard
                  bgColor="bg-[#9b7ed9]"
                  title="Peer interaction"
                  description="Social skills develop naturally when your child learns alongside peers in the school setting."
                  buttonText="Get started"
                  buttonHref="#contact"
                >
                  <div className="absolute bottom-0 right-0 w-40 h-40">
                    <div className="w-32 h-32 bg-white/30 rounded-full absolute bottom-4 right-4 flex items-center justify-center">
                      <IconFBustsInSilhouette size={64} />
                    </div>
                  </div>
                </FeatureCard>
              </>
            )}
            {activeFeature === 2 && (
              <>
                <FeatureCard
                  bgColor="bg-[#3469d4]"
                  title="Specialized resources"
                  description="Our therapy center is equipped with everything needed to support your child's development."
                  buttonText="Learn more"
                  buttonHref="#contact"
                >
                  <div className="absolute bottom-0 right-0 w-40 h-40">
                    <div className="w-32 h-32 bg-white/20 rounded-full absolute bottom-4 right-4 flex items-center justify-center">
                      <IconFHospital size={64} />
                    </div>
                  </div>
                </FeatureCard>
                <FeatureCard
                  bgColor="bg-[#00a86b]"
                  title="Group sessions"
                  description="Practice social skills in a structured environment with guided peer interaction."
                  buttonText="Get started"
                  buttonHref="#contact"
                >
                  <div className="absolute bottom-0 right-0 w-40 h-40">
                    <div className="w-32 h-32 bg-white/30 rounded-full absolute bottom-4 right-4 flex items-center justify-center">
                      <IconFBullseye size={64} />
                    </div>
                  </div>
                </FeatureCard>
              </>
            )}
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeFeature === index ? "bg-[#1c1c1c] w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABA Helps Section - Headspace style grid */}
      <section id="about" className="py-16 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-semibold text-4xl md:text-5xl text-center mb-4">
            ABA can help with
          </h2>
          <p className="text-center text-xl font-normal text-muted-foreground mb-12 max-w-2xl mx-auto">
            Applied Behavior Analysis helps children build independence through evidence-based practices.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {abaHelps.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center card-hover cursor-pointer"
              >
                <div className="mb-3 flex justify-center">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center`}>
                    {item.icon}
                  </div>
                </div>
                <span className="font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Headspace style carousel */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-semibold text-4xl md:text-5xl mb-6">
              Meet our expert team
            </h2>
            <p className="text-xl font-normal text-muted-foreground max-w-2xl mx-auto">
              Board-certified professionals dedicated to helping your child reach their full potential.
            </p>
          </div>

          {/* Team carousel */}
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {[
              { name: "Dr. Maria Rodriguez", role: "Clinical Director, BCBA-D", color: "bg-[#ffc933]" },
              { name: "Carlos Martinez", role: "Executive Director", color: "bg-[#00a86b]" },
              { name: "Dr. Sarah Chen", role: "Training Director, BCBA-D", color: "bg-[#9b7ed9]" },
              { name: "Jessica Thompson", role: "Lead BCBA", color: "bg-[#f5c0c0]" },
              { name: "Michael Davis", role: "Senior RBT Supervisor", color: "bg-[#3469d4]" },
              { name: "Ana Garcia", role: "Family Support Coordinator", color: "bg-[#25b8a8]" },
            ].map((member, index) => (
              <div
                key={index}
                className={`${member.color} rounded-3xl p-6 min-w-[280px] snap-start flex flex-col`}
              >
                <div className="aspect-[3/4] rounded-2xl bg-white/20 mb-4 flex items-end justify-center overflow-hidden">
                  <div className="w-32 h-32 bg-white/30 rounded-full mb-4" />
                </div>
                <h3 className="font-semibold text-xl text-foreground">{member.name}</h3>
                <p className="text-foreground/70 text-sm">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f47d31]">7+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#3469d4]">500+</div>
              <div className="text-muted-foreground">Families Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#00a86b]">98%</div>
              <div className="text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Headspace style */}
      <section className="py-20 bg-white relative">
        {/* Floating decorative elements */}
        <DecorativeBlob icon={<IconFOrangeHeart size={32} />} color="bg-[#f5c0c0]" className="absolute top-20 left-10 animate-float hidden lg:flex" />
        <DecorativeBlob icon={<IconFBlueHeart size={32} />} color="bg-[#c0d4f5]" className="absolute top-40 right-20 animate-float stagger-2 hidden lg:flex" />
        <DecorativeBlob icon={<IconFGrinningFaceWithSmilingEyes size={32} />} color="bg-[#ffc933]" className="absolute bottom-20 left-1/4 animate-float stagger-3 hidden lg:flex" />
        <DecorativeBlob icon={<IconFSparkles size={32} />} color="bg-[#9b7ed9]" className="absolute bottom-40 right-1/4 animate-float stagger-4 hidden lg:flex" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-semibold text-4xl md:text-5xl text-center mb-16">
            Families are enjoying happier and healthier lives
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 rounded-2xl card-hover">
                <CardContent className="p-6">
                  <p className="text-xl font-normal mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{testimonial.author}</span>
                    <span> on {testimonial.topic}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Marquee - Headspace style */}
      <section className="py-16 bg-[#3469d4] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-semibold text-3xl md:text-4xl text-center mb-2">
            We accept most major insurance plans
          </h2>
          <p className="text-center text-white/80">
            We&apos;ll work with you to submit all paperwork on your behalf.
          </p>
        </div>

        {/* Logo marquee */}
        <div className="relative w-full">
          <div className="flex animate-marquee-fast">
            {[...Array(4)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center shrink-0 gap-16 px-8">
                <Image src="/images/logo-aetna.png" alt="Aetna" width={100} height={40} className="brightness-0 invert opacity-90 h-8 w-auto" />
                <Image src="/images/logo-bcbs.png" alt="BCBS" width={140} height={56} className="brightness-0 invert opacity-90 h-12 w-auto" />
                <Image src="/images/logo-cigna.png" alt="Cigna" width={120} height={48} className="brightness-0 invert opacity-90 h-11 w-auto" />
                <Image src="/images/logo-medicaid.png" alt="Medicaid" width={160} height={56} className="brightness-0 invert opacity-90 h-12 w-auto" />
                <Image src="/images/logo-tricare.png" alt="Tricare" width={120} height={48} className="brightness-0 invert opacity-90 h-10 w-auto" />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-white/60 mt-8 text-sm">
          Don&apos;t see your plan? Contact us to discuss affordable options.
        </p>
      </section>

      {/* Getting Started Section - Headspace style */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-semibold text-4xl md:text-5xl text-center mb-4">
            Getting started is easy
          </h2>
          <p className="text-center text-xl font-normal text-muted-foreground mb-16 max-w-2xl mx-auto">
            We&apos;ll walk you through the process. Starting therapy doesn&apos;t have to be overwhelming.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#ffc933] flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-xl font-normal text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Headspace style */}
      <section id="faq" className="py-20 bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-semibold text-4xl md:text-5xl text-center mb-12">
            Frequently asked questions
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xl text-muted-foreground font-normal pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section - Headspace style */}
      <section id="contact" className="py-20 bg-[#f47d31] relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#ffc933] rounded-full opacity-50" />
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#ffc933] rounded-full opacity-30" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl font-normal text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward helping your child reach their full potential. Contact us today for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-[#f47d31] hover:bg-white/90 btn-headspace text-lg px-8"
            >
              <a href="tel:786-860-5161">
                <Phone className="w-5 h-5 mr-2" />
                (786) 860-5161
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#1c1c1c] text-white hover:bg-[#333] btn-headspace text-lg px-8"
            >
              <a href="mailto:hello@the-behaviorists.com">
                <Mail className="w-5 h-5 mr-2" />
                Email us
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/80">
            <MapPin className="w-5 h-5" />
            <span>657 South Drive, Suite 403 • Miami Springs, FL 33166</span>
          </div>
        </div>
      </section>

      {/* Footer - Headspace style */}
      <footer className="py-16 bg-[#1c1c1c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#f47d31] rounded-full flex items-center justify-center">
                  <Image
                    src="/logo-rainbow-mark.avif"
                    alt="The Behaviorists"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <span className="font-semibold text-lg">The Behaviorists</span>
              </div>
              <p className="text-xl font-normal text-white/60 mb-6 max-w-sm">
                Providing exceptional ABA therapy services throughout South Florida since 2017.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/thebehaviorists/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/TheBehavioristsMiami/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/60">
                <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About ABA</Link></li>
                <li><Link href="#process" className="hover:text-white transition-colors">Getting Started</Link></li>
                <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:786-860-5161" className="hover:text-white transition-colors">(786) 860-5161</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@the-behaviorists.com" className="hover:text-white transition-colors">hello@the-behaviorists.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>657 South Drive, Suite 403<br />Miami Springs, FL 33166</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} The Behaviorists. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
