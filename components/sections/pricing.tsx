'use client';

import ScrollReveal from '../ui/scroll-reveal';
import { IconCheck, IconX, IconStar } from '@tabler/icons-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    description: 'Essential ABA therapy services for getting started',
    price: '$149',
    period: 'per session',
    popular: false,
    features: [
      { text: 'Individual therapy sessions', included: true },
      { text: 'Basic progress reports', included: true },
      { text: 'Parent consultation (monthly)', included: true },
      { text: 'Home-based services', included: true },
      { text: 'Email support', included: true },
      { text: 'School collaboration', included: false },
      { text: 'Priority scheduling', included: false },
      { text: 'Advanced analytics', included: false },
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    name: 'Pro',
    description: 'Comprehensive care with enhanced support and features',
    price: '$199',
    period: 'per session',
    popular: true,
    ribbon: 'Most Popular',
    features: [
      { text: 'Everything in Basic', included: true },
      { text: 'Weekly progress reports', included: true },
      { text: 'Bi-weekly parent training', included: true },
      { text: 'School collaboration', included: true },
      { text: 'Priority scheduling', included: true },
      { text: 'Phone & email support', included: true },
      { text: 'Behavior intervention plans', included: true },
      { text: 'Advanced analytics', included: false },
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    name: 'Enterprise',
    description: 'Complete solution for comprehensive developmental support',
    price: 'Custom',
    period: 'contact us',
    popular: false,
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Daily progress tracking', included: true },
      { text: 'Unlimited parent training', included: true },
      { text: 'Multi-site coordination', included: true },
      { text: 'Dedicated care team', included: true },
      { text: '24/7 priority support', included: true },
      { text: 'Custom treatment protocols', included: true },
      { text: 'Advanced analytics dashboard', included: true },
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-image-section blur-light noise-overlay" style={{ '--bg-image': 'url(/images/tomas-petz-O8eo2BC1SOI-unsplash.jpg)' } as React.CSSProperties}>
      <style jsx>{`
        section::before {
          background-image: var(--bg-image);
        }
      `}</style>
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
          >
            <IconStar size={16} />
            <span>Transparent Pricing</span>
          </div>
          
          <h2 className="text-heading font-sans mb-6">
            Empower Wellness with The Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that best fits your family's needs. All plans include 
            our evidence-based ABA therapy delivered by certified professionals.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.1}>
              <div
                className={`relative h-full ${plan.popular ? 'lg:scale-105' : ''}`}
              >
                {plan.ribbon && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-primary to-wellness-coral text-white px-6 py-1 rounded-full text-sm font-medium shadow-md">
                      {plan.ribbon}
                    </div>
                  </div>
                )}
                
                <div className={`h-full p-8 rounded-3xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-wellness-peach/40 to-wellness-coral/20 border-2 border-primary/20' 
                    : 'bg-white border-2 border-transparent'
                } shadow-lg hover:shadow-xl`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-sans mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <IconCheck size={14} className="text-success-foreground" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                            <IconX size={14} className="text-muted-foreground" />
                          </div>
                        )}
                        <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link href={plan.ctaLink}>
                    <button
                      className={`w-full py-3 rounded-full font-medium cursor-pointer ${
                        plan.popular
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg'
                          : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="text-center mt-16">
          <p className="text-muted-foreground mb-2">
            All plans are covered by most insurance providers
          </p>
          <Link href="/insurance" className="text-primary hover:underline font-medium">
            Learn about insurance coverage →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}