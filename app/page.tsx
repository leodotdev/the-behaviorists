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
  Settings,
  Minus,
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
import IconFMegaphone from "react-fluentui-emoji/lib/flat/icons/IconFMegaphone";
import IconFRocket from "react-fluentui-emoji/lib/flat/icons/IconFRocket";
import IconFGraduationCap from "react-fluentui-emoji/lib/flat/icons/IconFGraduationCap";
import IconFLightBulb from "react-fluentui-emoji/lib/flat/icons/IconFLightBulb";
import IconFBackpack from "react-fluentui-emoji/lib/flat/icons/IconFBackpack";
import IconFClappingHandsDefault from "react-fluentui-emoji/lib/flat/icons/IconFClappingHandsDefault";
import IconFSeedling from "react-fluentui-emoji/lib/flat/icons/IconFSeedling";
import IconFPuzzlePiece from "react-fluentui-emoji/lib/flat/icons/IconFPuzzlePiece";
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
}) => <div className={`blob ${size} ${color} ${className}`}>{icon}</div>;

// Category button like Headspace
const CategoryButton = ({
  label,
  icon,
  color = "bg-[#F9F6F4]",
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  color?: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center justify-between gap-4 px-6 py-4 border border-gray-200 rounded-4xl hover:border-gray-400 transition-all group bg-white"
  >
    <span className="font-semibold">{label}</span>
    <div className="flex items-center gap-2">
      <div
        className={`w-10 h-10 ${color} rounded-full flex items-center justify-center`}
      >
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
  darkBg = false,
}: {
  bgColor: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  children?: React.ReactNode;
  darkBg?: boolean;
}) => (
  <div
    className={`${bgColor} rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[400px] flex flex-col`}
  >
    <div className="flex-1 flex flex-col gap-4">
      <h3 className={`font-bold text-xl md:text-2xl ${darkBg ? "text-white" : "text-foreground"}`}>{title}</h3>
      <p className={`text-base md:text-lg font-normal max-w-md ${darkBg ? "text-white/90" : "text-foreground/80"}`}>
        {description}
      </p>
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

// Config Panel Component
const ConfigPanel = ({
  config,
  setConfig,
}: {
  config: {
    borderRadius: number;
    colorScheme: "default" | "warm" | "dark";
    font: "stack" | "bricolage";
    showAnimations: boolean;
    showDecorations: boolean;
    compactMode: boolean;
    darkFeatureCards: boolean;
  };
  setConfig: React.Dispatch<React.SetStateAction<typeof config>>;
}) => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${
        minimized ? "w-12 h-12" : "w-80"
      }`}
    >
      {minimized ? (
        <button
          onClick={() => setMinimized(false)}
          className="w-full h-full flex items-center justify-center hover:bg-gray-50 rounded-2xl"
        >
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      ) : (
        <>
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-gray-500" />
              <span className="font-semibold text-sm">Design Config</span>
            </div>
            <button
              onClick={() => setMinimized(true)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Minus className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <div className="p-4 space-y-5 max-h-[70vh] overflow-y-auto">
            {/* Border Radius Slider */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-700">
                Border Radius: {config.borderRadius}px
              </label>
              <input
                type="range"
                min="0"
                max="48"
                value={config.borderRadius}
                onChange={(e) =>
                  setConfig((c) => ({
                    ...c,
                    borderRadius: parseInt(e.target.value),
                  }))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF7E1D]"
              />
            </div>

            {/* Color Scheme Radio */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-700">
                Color Scheme
              </label>
              <div className="flex flex-col gap-2">
                {(
                  [
                    { key: "default", label: "Light", color: "bg-[#FF7E1D]" },
                    { key: "warm", label: "Warm", color: "bg-[#E1894B]" },
                    { key: "dark", label: "Dark", color: "bg-[#393938]" },
                  ] as const
                ).map(({ key, label, color }) => (
                  <label
                    key={key}
                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer border transition-all ${
                      config.colorScheme === key
                        ? "border-[#FF7E1D] bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="colorScheme"
                      value={key}
                      checked={config.colorScheme === key}
                      onChange={(e) =>
                        setConfig((c) => ({
                          ...c,
                          colorScheme: e.target.value as typeof key,
                        }))
                      }
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-full ${color}`} />
                    <span className="text-xs">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Font Toggle */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-gray-700">
                Font Family
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(["stack", "bricolage"] as const).map((font) => (
                  <label
                    key={font}
                    className={`flex items-center justify-center p-2 rounded-lg cursor-pointer border transition-all text-xs ${
                      config.font === font
                        ? "border-[#FF7E1D] bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    style={{
                      fontFamily:
                        font === "bricolage"
                          ? "var(--font-bricolage)"
                          : '"Stack Sans Headline"',
                    }}
                  >
                    <input
                      type="radio"
                      name="font"
                      value={font}
                      checked={config.font === font}
                      onChange={(e) =>
                        setConfig((c) => ({
                          ...c,
                          font: e.target.value as typeof font,
                        }))
                      }
                      className="sr-only"
                    />
                    <span>{font === "stack" ? "Stack Sans" : "Bricolage"}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-3">
              <label className="text-xs font-medium text-gray-700">
                Options
              </label>
              {[
                {
                  key: "showAnimations",
                  label: "Animations",
                },
                {
                  key: "showDecorations",
                  label: "Decorative Elements",
                },
                {
                  key: "compactMode",
                  label: "Compact Spacing",
                },
                {
                  key: "darkFeatureCards",
                  label: "Dark Card Text",
                },
              ].map(({ key, label }) => (
                <label
                  key={key}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <span className="text-xs text-gray-600">{label}</span>
                  <div
                    className={`relative w-10 h-5 rounded-full transition-colors ${
                      config[key as keyof typeof config]
                        ? "bg-[#FF7E1D]"
                        : "bg-gray-300"
                    }`}
                    onClick={() =>
                      setConfig((c) => ({
                        ...c,
                        [key]: !c[key as keyof typeof c],
                      }))
                    }
                  >
                    <div
                      className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                        config[key as keyof typeof config]
                          ? "translate-x-5"
                          : "translate-x-0.5"
                      }`}
                    />
                  </div>
                </label>
              ))}
            </div>

            {/* Reset Button */}
            <button
              onClick={() =>
                setConfig({
                  borderRadius: 24,
                  colorScheme: "default",
                  font: "stack",
                  showAnimations: true,
                  showDecorations: true,
                  compactMode: false,
                  darkFeatureCards: true,
                })
              }
              className="w-full py-2 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Content data
const categoryButtons = [
  {
    label: "Home therapy",
    icon: <IconFHouseWithGarden size={24} />,
    color: "bg-[#FAE269]/30",
  },
  {
    label: "School support",
    icon: <IconFBooks size={24} />,
    color: "bg-[#58A7FB]/20",
  },
  {
    label: "Clinic services",
    icon: <IconFHospital size={24} />,
    color: "bg-[#F2AFD3]/30",
  },
  {
    label: "Parent training",
    icon: <IconFPeopleHugging size={24} />,
    color: "bg-[#A273C6]/20",
  },
  {
    label: "Social skills",
    icon: <IconFBustsInSilhouette size={24} />,
    color: "bg-[#9CCFCC]/30",
  },
  {
    label: "Get started",
    icon: <IconFSparkles size={24} />,
    color: "bg-[#FFCE00]/20",
  },
];

const abaHelps = [
  {
    icon: <IconFToilet size={32} />,
    label: "Toilet Training",
    color: "bg-[#F9F7F2]",
  },
  {
    icon: <IconFGreenSalad size={32} />,
    label: "Picky Eating",
    color: "bg-[#71CB86]/20",
  },
  {
    icon: <IconFBackpack size={32} />,
    label: "School Shadowing",
    color: "bg-[#FFA441]/20",
  },
  {
    icon: <IconFClappingHandsDefault size={32} />,
    label: "Social Skills",
    color: "bg-[#FAE269]/30",
  },
  {
    icon: <IconFLightBulb size={32} />,
    label: "Behavior Support",
    color: "bg-[#FFCE00]/20",
  },
  {
    icon: <IconFMegaphone size={32} />,
    label: "Communication",
    color: "bg-[#58A7FB]/20",
  },
  {
    icon: <IconFGraduationCap size={32} />,
    label: "Parent Training",
    color: "bg-[#A273C6]/20",
  },
  {
    icon: <IconFRocket size={32} />,
    label: "Independence",
    color: "bg-[#F0949A]/30",
  },
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
    description:
      "We confirm documentation and initiate services with your insurance",
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
  const [config, setConfig] = useState({
    borderRadius: 24,
    colorScheme: "default" as "default" | "warm" | "dark",
    font: "stack" as "stack" | "bricolage",
    showAnimations: true,
    showDecorations: true,
    compactMode: false,
    darkFeatureCards: true,
  });

  // Apply config to CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--radius",
      `${config.borderRadius}px`
    );
  }, [config.borderRadius]);

  useEffect(() => {
    const fontValue =
      config.font === "bricolage"
        ? "var(--font-bricolage)"
        : '"Stack Sans Headline"';
    document.documentElement.style.setProperty("--active-font", fontValue);
  }, [config.font]);

  // Apply color scheme
  useEffect(() => {
    const root = document.documentElement;
    if (config.colorScheme === "dark") {
      root.style.setProperty("--background", "#1a1a1a");
      root.style.setProperty("--foreground", "#ffffff");
      root.style.setProperty("--muted", "#2a2a2a");
      root.style.setProperty("--muted-foreground", "#a0a0a0");
      root.style.setProperty("--card", "#242424");
      root.style.setProperty("--card-foreground", "#ffffff");
      root.style.setProperty("--border", "#333333");
    } else if (config.colorScheme === "warm") {
      root.style.setProperty("--background", "#FDF8F3");
      root.style.setProperty("--foreground", "#4A3728");
      root.style.setProperty("--muted", "#F5EDE4");
      root.style.setProperty("--muted-foreground", "#7D6B5D");
      root.style.setProperty("--card", "#FFFAF5");
      root.style.setProperty("--card-foreground", "#4A3728");
      root.style.setProperty("--border", "#E8DDD0");
      root.style.setProperty("--primary", "#E07B3C");
    } else {
      // Default/Light
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#393938");
      root.style.setProperty("--muted", "#F9F7F2");
      root.style.setProperty("--muted-foreground", "#5B6073");
      root.style.setProperty("--card", "#ffffff");
      root.style.setProperty("--card-foreground", "#393938");
      root.style.setProperty("--border", "#E9E7E2");
      root.style.setProperty("--primary", "#FF7E1D");
    }
  }, [config.colorScheme]);

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
      <div className="bg-[#49A35B] text-white py-2 text-center text-sm">
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
              <div className="w-10 h-10 bg-[#FF7E1D] rounded-full flex items-center justify-center">
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
              <Link
                href="#services"
                className="text-sm hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-sm hover:text-primary transition-colors"
              >
                About ABA
              </Link>
              <Link
                href="#process"
                className="text-sm hover:text-primary transition-colors"
              >
                Getting Started
              </Link>
              <Link
                href="#faq"
                className="text-sm hover:text-primary transition-colors"
              >
                Resources
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="hidden sm:block text-sm hover:text-primary"
              >
                Contact
              </Link>
              <Button
                asChild
                className="rounded-full bg-[#0C6FF9] hover:bg-[#0850FD] btn-headspace"
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
              <Link
                href="#services"
                className="block text-base md:text-lg font-normal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="block text-base md:text-lg font-normal"
                onClick={() => setMobileMenuOpen(false)}
              >
                About ABA
              </Link>
              <Link
                href="#process"
                className="block text-base md:text-lg font-normal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Getting Started
              </Link>
              <Link
                href="#faq"
                className="block text-base md:text-lg font-normal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Button asChild className="w-full rounded-full bg-[#0C6FF9]">
                <a href="tel:786-860-5161">Call Now</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Headspace style with mesh gradient background */}
      <section className="mesh-gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                It&apos;s not just about behavior.
              </h1>
              <p className="text-base md:text-lg font-normal text-foreground/80 max-w-lg leading-relaxed">
                Our mission is to provide individualized, research-based
                treatment while maintaining autonomy and independence as the
                priority.
              </p>
              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#393938] hover:bg-black text-white btn-headspace px-8 w-fit"
                >
                  <Link href="#contact" className="flex items-center gap-2">
                    Get started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-sm md:text-base font-normal text-foreground/60">
                  Free consultation • BHCOE Accredited • Insurance accepted
                </p>
              </div>
            </div>

            {/* Hero illustration - Orange circle with character */}
            <div className="relative flex justify-center items-center">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-[#FF7E1D] rounded-full relative animate-scale-in flex items-center justify-center">
                {/* Cute face on orange circle */}
                <IconFSmilingFaceWithSmilingEyes size={120} />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float">
                  <IconFGlowingStar size={40} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#0C6FF9] rounded-2xl shadow-lg flex items-center justify-center text-white animate-float stagger-2">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold">500+</div>
                    <div className="text-base md:text-lg font-normal">
                      Families
                    </div>
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
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            What kind of support are you looking for?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryButtons.map((cat, index) => (
              <CategoryButton
                key={index}
                label={cat.label}
                icon={cat.icon}
                color={cat.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Headspace style */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="font-bold text-3xl md:text-4xl">
              The therapy support for every moment
            </h2>
            <p className="text-base md:text-lg font-normal text-muted-foreground max-w-2xl mx-auto">
              Evidence-based ABA therapy delivered with care in the setting that
              works best for your family.
            </p>
          </div>

          {/* Feature tabs - Headspace style */}
          <div className="flex flex-wrap justify-center gap-3">
            {["Home-based", "School-based", "Clinic-based"].map(
              (tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeFeature === index
                      ? "bg-[#393938] text-white"
                      : "bg-[#F9F6F4] hover:bg-[#E9E7E2]"
                  }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>

          {/* Feature cards carousel */}
          <div className="grid md:grid-cols-2 gap-6">
            {activeFeature === 0 && (
              <>
                <FeatureCard
                  bgColor="bg-[#FFCE00]"
                  title="Comfortable learning at home"
                  description="Your child learns best in their natural environment. Our therapists come to you, working with your family to build skills that matter."
                  buttonText="Learn more"
                  buttonHref="#contact"
                >
                  <div className="absolute bottom-0 right-0 w-40 h-40">
                    <div className="w-32 h-32 bg-[#FF7E1D] rounded-full absolute bottom-4 right-4 flex items-center justify-center">
                      <IconFHouseWithGarden size={64} />
                    </div>
                  </div>
                </FeatureCard>
                <FeatureCard
                  bgColor="bg-[#EF89C4]"
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
                  bgColor="bg-[#72BFBA]"
                  title="School collaboration"
                  description="We work directly with teachers and staff to ensure consistent progress across all learning environments."
                  buttonText="Learn more"
                  buttonHref="#contact"
                  darkBg
                >
                  <div className="absolute bottom-0 right-0 w-40 h-40">
                    <div className="w-32 h-32 bg-white/30 rounded-full absolute bottom-4 right-4 flex items-center justify-center">
                      <IconFBooks size={64} />
                    </div>
                  </div>
                </FeatureCard>
                <FeatureCard
                  bgColor="bg-[#9B75C1]"
                  title="Peer interaction"
                  description="Social skills develop naturally when your child learns alongside peers in the school setting."
                  buttonText="Get started"
                  buttonHref="#contact"
                  darkBg
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
                  bgColor="bg-[#0C6FF9]"
                  title="Specialized resources"
                  description="Our therapy center is equipped with everything needed to support your child's development."
                  buttonText="Learn more"
                  buttonHref="#contact"
                  darkBg
                >
                  <div className="absolute bottom-0 right-0 w-40 h-40">
                    <div className="w-32 h-32 bg-white/20 rounded-full absolute bottom-4 right-4 flex items-center justify-center">
                      <IconFHospital size={64} />
                    </div>
                  </div>
                </FeatureCard>
                <FeatureCard
                  bgColor="bg-[#49A35B]"
                  title="Group sessions"
                  description="Practice social skills in a structured environment with guided peer interaction."
                  buttonText="Get started"
                  buttonHref="#contact"
                  darkBg
                >
                  <div className="absolute bottom-0 right-0 w-40 h-40">
                    <div className="w-32 h-32 bg-white/30 rounded-full absolute bottom-4 right-4 flex items-center justify-center">
                      <IconFPeopleHugging size={64} />
                    </div>
                  </div>
                </FeatureCard>
              </>
            )}
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeFeature === index ? "bg-[#393938] w-6" : "bg-[#D7D5D3]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABA Helps Section - Headspace style grid */}
      <section id="about" className="py-24 bg-[#F9F7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="font-bold text-3xl md:text-4xl">
              ABA can help with
            </h2>
            <p className="text-base md:text-lg font-normal text-muted-foreground max-w-2xl mx-auto">
              Applied Behavior Analysis helps children build independence
              through evidence-based practices.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {abaHelps.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-4xl p-6 text-center card-hover cursor-pointer flex flex-col items-center gap-3"
              >
                <div
                  className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center`}
                >
                  {item.icon}
                </div>
                <span className="font-normal text-base md:text-lg">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Headspace style carousel */}
      <section className="py-24 bg-white overflow-hidden flex flex-col gap-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="text-center flex flex-col gap-6">
            <h2 className="font-bold text-3xl md:text-4xl">
              Meet our expert team
            </h2>
            <p className="text-base md:text-lg font-normal text-muted-foreground max-w-2xl mx-auto">
              Board-certified professionals dedicated to helping your child
              reach their full potential.
            </p>
          </div>
        </div>

        {/* Team carousel - full bleed */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-4 sm:px-6 lg:px-8">
          {[
            {
              name: "Dr. Maria Rodriguez",
              role: "Clinical Director, BCBA-D",
              color: "bg-[#FFCE00]",
              image: "/images/team/maria.jpg",
            },
            {
              name: "Carlos Martinez",
              role: "Executive Director",
              color: "bg-[#49A35B]",
              image: "/images/team/carlos.jpg",
            },
            {
              name: "Dr. Sarah Chen",
              role: "Training Director, BCBA-D",
              color: "bg-[#9B75C1]",
              image: "/images/team/sarah.jpg",
            },
            {
              name: "Jessica Thompson",
              role: "Lead BCBA",
              color: "bg-[#EF89C4]",
              image: "/images/team/jessica.jpg",
            },
            {
              name: "Michael Davis",
              role: "Senior RBT Supervisor",
              color: "bg-[#0C6FF9]",
              image: "/images/team/michael.jpg",
            },
            {
              name: "Ana Garcia",
              role: "Family Support Coordinator",
              color: "bg-[#72BFBA]",
              image: "/images/team/ana.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className={`${member.color} rounded-4xl p-6 min-w-[280px] snap-start flex flex-col gap-4`}
            >
              <div className="aspect-[3/4] rounded overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={280}
                  height={373}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-xl md:text-2xl text-foreground">
                  {member.name}
                </h3>
                <p className="text-foreground/70 text-base md:text-lg font-normal">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FF7E1D]">
                7+
              </div>
              <div className="text-base md:text-lg font-normal text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#0C6FF9]">
                500+
              </div>
              <div className="text-base md:text-lg font-normal text-muted-foreground">
                Families Served
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#49A35B]">
                98%
              </div>
              <div className="text-base md:text-lg font-normal text-muted-foreground">
                Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Headspace style */}
      <section className="py-24 bg-white relative">
        {/* Floating decorative elements */}
        <DecorativeBlob
          icon={<IconFOrangeHeart size={32} />}
          color="bg-[#EF89C4]"
          className="absolute top-20 left-10 animate-float hidden lg:flex"
        />
        <DecorativeBlob
          icon={<IconFBlueHeart size={32} />}
          color="bg-[#58A7FB]"
          className="absolute top-40 right-20 animate-float stagger-2 hidden lg:flex"
        />
        <DecorativeBlob
          icon={<IconFGrinningFaceWithSmilingEyes size={32} />}
          color="bg-[#FFCE00]"
          className="absolute bottom-20 left-1/4 animate-float stagger-3 hidden lg:flex"
        />
        <DecorativeBlob
          icon={<IconFSparkles size={32} />}
          color="bg-[#9B75C1]"
          className="absolute bottom-40 right-1/4 animate-float stagger-4 hidden lg:flex"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          <h2 className="font-bold text-3xl md:text-4xl text-center">
            Families are enjoying happier and healthier lives
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border border-gray-200 rounded-2xl card-hover"
              >
                <CardContent className="p-6 flex flex-col gap-6">
                  <p className="text-base md:text-lg font-normal">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="text-base md:text-lg font-normal text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {testimonial.author}
                    </span>
                    <span> on {testimonial.topic}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Marquee - Headspace style */}
      <section className="py-24 bg-[#0C6FF9] text-white overflow-hidden flex flex-col gap-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
          <h2 className="font-bold text-3xl md:text-4xl text-center">
            We accept most major insurance plans
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-white/80">
            We&apos;ll work with you to submit all paperwork on your behalf.
          </p>
        </div>

        {/* Logo marquee */}
        <div className="relative w-full">
          <div className="flex animate-marquee-fast">
            {[...Array(4)].map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex items-center shrink-0 gap-16 px-8"
              >
                <Image
                  src="/images/logo-aetna.png"
                  alt="Aetna"
                  width={100}
                  height={40}
                  className="brightness-0 invert opacity-90 h-8 w-auto"
                />
                <Image
                  src="/images/logo-bcbs.png"
                  alt="BCBS"
                  width={140}
                  height={56}
                  className="brightness-0 invert opacity-90 h-12 w-auto"
                />
                <Image
                  src="/images/logo-cigna.png"
                  alt="Cigna"
                  width={120}
                  height={48}
                  className="brightness-0 invert opacity-90 h-11 w-auto"
                />
                <Image
                  src="/images/logo-medicaid.png"
                  alt="Medicaid"
                  width={160}
                  height={56}
                  className="brightness-0 invert opacity-90 h-12 w-auto"
                />
                <Image
                  src="/images/logo-tricare.png"
                  alt="Tricare"
                  width={120}
                  height={48}
                  className="brightness-0 invert opacity-90 h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-base md:text-lg font-normal text-white/60">
          Don&apos;t see your plan? Contact us to discuss affordable options.
        </p>
      </section>

      {/* Getting Started Section - Headspace style */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="font-bold text-3xl md:text-4xl">
              Getting started is easy
            </h2>
            <p className="text-base md:text-lg font-normal text-muted-foreground max-w-2xl mx-auto">
              We&apos;ll walk you through the process. Starting therapy
              doesn&apos;t have to be overwhelming.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center gap-6"
              >
                <div className="w-20 h-20 rounded-full bg-[#FFCE00] flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg font-normal text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Headspace style */}
      <section id="faq" className="py-24 bg-[#F9F7F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <h2 className="font-bold text-3xl md:text-4xl text-center">
            Frequently asked questions
          </h2>

          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-bold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground font-normal pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section - Headspace style */}
      <section
        id="contact"
        className="py-24 bg-[#FF7E1D] relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="text-base md:text-lg font-normal text-white/90 max-w-2xl mx-auto leading-relaxed">
              Take the first step toward helping your child reach their full
              potential. Contact us today for a free consultation.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-[#FF7E1D] hover:bg-white/90 btn-headspace px-8"
              >
                <a href="tel:786-860-5161" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (786) 860-5161
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#393938] text-white hover:bg-black btn-headspace px-8"
              >
                <a
                  href="mailto:hello@the-behaviorists.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email us
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/80">
              <MapPin className="w-5 h-5" />
              <span>657 South Drive, Suite 403 • Miami Springs, FL 33166</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Headspace style */}
      <footer className="py-24 bg-[#393938] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF7E1D] rounded-full flex items-center justify-center">
                  <Image
                    src="/logo-rainbow-mark.avif"
                    alt="The Behaviorists"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <span className="font-bold text-lg md:text-xl">
                  The Behaviorists
                </span>
              </div>
              <p className="text-base md:text-lg font-normal text-white/60 max-w-sm">
                Providing exceptional ABA therapy services throughout South
                Florida since 2017.
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

            <div className="flex flex-col gap-4">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="flex flex-col gap-2 text-white/60">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About ABA
                  </Link>
                </li>
                <li>
                  <Link
                    href="#process"
                    className="hover:text-white transition-colors"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-semibold">Contact</h4>
              <ul className="flex flex-col gap-2 text-white/60">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:786-860-5161"
                    className="hover:text-white transition-colors"
                  >
                    (786) 860-5161
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:hello@the-behaviorists.com"
                    className="hover:text-white transition-colors"
                  >
                    hello@the-behaviorists.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>
                    657 South Drive, Suite 403
                    <br />
                    Miami Springs, FL 33166
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} The Behaviorists. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Config Panel */}
      <ConfigPanel config={config} setConfig={setConfig} />
    </div>
  );
}
