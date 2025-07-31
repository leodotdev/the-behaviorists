'use client';

import Link from 'next/link';
import ScrollReveal from '../ui/scroll-reveal';
import { IconChevronRight, IconBrain, IconRocket } from '@tabler/icons-react';

export default function Welcome() {
  return (
    <section className="py-24 bg-image-section blur-heavy noise-overlay" style={{ '--bg-image': 'url(/images/ana-klipper-t4B_JcUofvY-unsplash.jpg)' } as React.CSSProperties}>
      <style jsx>{`
        section::before {
          background-image: var(--bg-image);
        }
      `}</style>
      <div className="container">
        {/* Welcome Section */}
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-display font-sans mb-6">
            Welcome to The Behaviorists
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The Behaviorists is an Applied Behavior Analysis (ABA) company founded in 2017 that provides therapy services to children with autism spectrum disorder and other developmental disabilities throughout South Florida. Our services include in-home therapy, parent training, consultation, and social skills groups. We are currently one of the few BHCOE (Behavioral Health Center of Excellence) agencies in Florida, and proudly accept most major insurance providers, including Florida Medicaid.
          </p>
        </ScrollReveal>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* What is Behavior Analysis */}
          <ScrollReveal delay={0.1}>
            <div
              className="bg-white rounded-2xl p-8 shadow-sm border border-border"
            >
              <div className="inline-flex p-3 bg-section-peach/30 rounded-2xl mb-6">
                <IconBrain size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-sans font-semibold mb-4">
                What is Behavior Analysis?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Behavior analysis is an evidence-based approach focused on understanding and changing behavior. ABA therapy uses these principles to help children develop important skills and reduce challenging behaviors through positive reinforcement and systematic teaching methods.
              </p>
              <Link href="/services">
                <button className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-3 cursor-pointer">
                  <span>Learn More About Our Services</span>
                  <IconChevronRight size={20} className="group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </ScrollReveal>

          {/* How do I Get Started */}
          <ScrollReveal delay={0.2}>
            <div
              className="bg-white rounded-2xl p-8 shadow-sm border border-border"
            >
              <div className="inline-flex p-3 bg-section-mint/30 rounded-2xl mb-6">
                <IconRocket size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-sans font-semibold mb-4">
                How do I Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Getting started is simple! Contact us for a free consultation where we&apos;ll discuss your child&apos;s needs and answer any questions. We&apos;ll guide you through insurance verification and schedule an assessment to create a personalized treatment plan.
              </p>
              <Link href="/getting-started">
                <button className="group inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 cursor-pointer">
                  <span>Start Your Journey Today</span>
                  <IconChevronRight size={20} className="group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}