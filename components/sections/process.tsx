'use client';

import ScrollReveal from '../ui/scroll-reveal';
import Image from 'next/image';
import { IconPhone, IconClipboardCheck, IconUsers, IconRocket } from '@tabler/icons-react';

const steps = [
  {
    icon: IconPhone,
    title: 'Initial Contact',
    description: 'Brief phone interview to understand your child\'s needs and discuss documentation requirements.',
    number: '01',
  },
  {
    icon: IconClipboardCheck,
    title: 'Service Approval',
    description: 'Review and approval of services based on assessment and insurance verification.',
    number: '02',
  },
  {
    icon: IconUsers,
    title: 'In-Person Assessment',
    description: 'Comprehensive evaluation to develop a customized treatment plan for your child.',
    number: '03',
  },
  {
    icon: IconRocket,
    title: 'Begin Services',
    description: 'Start evidence-based ABA therapy with ongoing progress monitoring and family support.',
    number: '04',
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-image-section blur-heavy noise-overlay" style={{ '--bg-image': 'url(/images/ryan-wallace-azA1hLbjBBo-unsplash.jpg)' } as React.CSSProperties}>
      <style jsx>{`
        section::before {
          background-image: var(--bg-image);
        }
      `}</style>
      <div className="container">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-display mb-6">
            Getting Started is Simple
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures your child receives the support they need 
            as quickly as possible.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.1}>
              <div 
                className="relative text-center"
              >
                {/* Connection line - desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-[1px] bg-gradient-to-r from-border via-border to-transparent" />
                )}
                
                {/* Number */}
                <div className="text-6xl font-sans font-black text-primary/10 mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div 
                  className="inline-flex p-4 bg-white rounded-2xl shadow-sm mb-6"
                >
                  <step.icon size={28} className="text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Image showcase */}
        <ScrollReveal delay={0.5}>
          <div className="mt-20 relative rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/images/ig-4.jpg"
                  alt="Initial consultation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Consultation</p>
                  <p className="text-sm opacity-90">Understanding your needs</p>
                </div>
              </div>
              <div className="relative h-64 md:h-80">
                <Image
                  src="/images/ig-6.jpg"
                  alt="Assessment process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Assessment</p>
                  <p className="text-sm opacity-90">Personalized evaluation</p>
                </div>
              </div>
              <div className="relative h-64 md:h-80">
                <Image
                  src="/images/ig-8.jpg"
                  alt="Therapy begins"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Therapy Begins</p>
                  <p className="text-sm opacity-90">Your journey starts</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}