'use client';

import ScrollReveal from '../ui/scroll-reveal';
import { IconHome, IconSchool, IconBuildingHospital, IconHeartHandshake, IconBrain, IconUsers, IconSparkles, IconShieldCheck } from '@tabler/icons-react';
import Link from 'next/link';

const services = [
  {
    icon: IconHome,
    title: 'Home-Based Therapy',
    description: 'Comfortable, familiar environment where children can learn and grow naturally with family involvement.',
    features: ['Flexible scheduling', 'Parent training', 'Natural setting'],
    bgColor: 'bg-wellness-mint/30',
  },
  {
    icon: IconSchool,
    title: 'School-Based Support',
    description: 'Collaborative approach with educators to ensure consistent progress across all learning environments.',
    features: ['Teacher collaboration', 'Peer interaction', 'Academic support'],
    bgColor: 'bg-wellness-lavender/30',
  },
  {
    icon: IconBuildingHospital,
    title: 'Clinic-Based Services',
    description: 'Structured therapeutic environment with specialized resources and peer interaction opportunities.',
    features: ['Specialized equipment', 'Group sessions', 'Structured learning'],
    bgColor: 'bg-wellness-sage/30',
  },
];

const features = [
  {
    icon: IconHeartHandshake,
    title: 'Daily Skills Training',
    description: 'Build your children\'s ability early to let them achieve success on their own.',
  },
  {
    icon: IconBrain,
    title: 'Engagement Support',
    description: 'Help your children stay focused, attentive, and engaged in learning.',
  },
  {
    icon: IconUsers,
    title: 'Wellness Recovery',
    description: 'Track your recovery to good health, prevent relapses, and achieve wellness.',
  },
  {
    icon: IconShieldCheck,
    title: 'Reporting & Analytics',
    description: 'Get detailed progress reports and data-driven insights on development.',
  },
  {
    icon: IconSparkles,
    title: 'AI Wellness Insights Tools',
    description: 'Use cutting-edge technology to track progress and optimize treatment plans.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-image-section blur-light noise-overlay" style={{ '--bg-image': 'url(/images/patrick-fore-vHn0JnxFMP8-unsplash.jpg)' } as React.CSSProperties}>
      <style jsx>{`
        section::before {
          background-image: var(--bg-image);
        }
      `}</style>
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6"
          >
            <IconSparkles size={16} />
            <span>Comprehensive Care Solutions</span>
          </div>
          
          <h2 className="text-heading font-sans mb-6">
            Unlock Our Fantastic Features!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Embark on a lifelong journey where we address everything 
            from skills development to wellness recovery.
          </p>
        </ScrollReveal>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.05}>
              <div
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md h-full"
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  index === 0 ? 'bg-wellness-coral/20' :
                  index === 1 ? 'bg-wellness-mint/20' :
                  index === 2 ? 'bg-wellness-lavender/20' :
                  index === 3 ? 'bg-wellness-sage/20' :
                  'bg-wellness-peach/20'
                }`}>
                  <feature.icon size={24} className={
                    index === 0 ? 'text-wellness-coral' :
                    index === 1 ? 'text-secondary' :
                    index === 2 ? 'text-wellness-lavender' :
                    index === 3 ? 'text-wellness-sage' :
                    'text-accent'
                  } />
                </div>
                <h3 className="font-sans text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Service Types */}
        <ScrollReveal>
          <h3 className="text-2xl font-sans text-center mb-12">
            Service Delivery Options
          </h3>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div
                className="group relative h-full"
              >
                <div className="h-full p-8 rounded-3xl bg-white border-2 border-transparent hover:border-primary/20 shadow-sm hover:shadow-lg">
                  <div className={`inline-flex p-4 ${service.bgColor} rounded-2xl mb-6`}>
                    <service.icon size={32} className="text-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-sans mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to find the perfect approach for your child?
          </p>
          <Link href="/services">
            <button
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 inline-flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
            >
              Explore All Services
            </button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}