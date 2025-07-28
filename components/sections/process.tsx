'use client';

import ScrollReveal from '../ui/scroll-reveal';
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
    <section className="py-24 bg-gradient-to-b from-pastel-green/20 to-transparent">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Getting Started is Easy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures your child receives the support they need 
            as quickly as possible.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.1}>
              <div className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
                )}
                
                <div className="text-center">
                  {/* Number */}
                  <div className="text-6xl font-serif font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex p-4 bg-white rounded-2xl shadow-md mb-4">
                    <step.icon size={32} className="text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-serif font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}