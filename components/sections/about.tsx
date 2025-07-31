'use client';

import Image from 'next/image';
import ScrollReveal from '../ui/scroll-reveal';
import { IconHeart, IconBrain, IconChartLine, IconUsers } from '@tabler/icons-react';

const values = [
  {
    icon: IconHeart,
    title: 'Family-Centered',
    description: 'We believe families are essential partners in the therapeutic process.',
  },
  {
    icon: IconBrain,
    title: 'Evidence-Based',
    description: 'All interventions are grounded in scientific research and best practices.',
  },
  {
    icon: IconChartLine,
    title: 'Data-Driven',
    description: 'Continuous monitoring ensures measurable progress toward goals.',
  },
  {
    icon: IconUsers,
    title: 'Client Autonomy',
    description: 'Fostering independence and self-advocacy in every child we serve.',
  },
];

export default function About() {
  return (
    <section className="py-32 relative overflow-hidden bg-image-section blur-heavy noise-overlay" style={{ '--bg-image': 'url(/images/la-rel-easter-KuCGlBXjH_o-unsplash.jpg)' } as React.CSSProperties}>
      <style jsx>{`
        section::before {
          background-image: var(--bg-image);
        }
      `}</style>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-display mb-6">
                Dedicated to Making a Difference
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Since 2017, The Behaviorists has been committed to providing exceptional 
                ABA therapy services throughout South Florida. Our board-certified team 
                combines expertise with compassion to help children reach their full potential.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className={`p-2.5 rounded-lg ${
                        index % 2 === 0 ? 'bg-primary/10' : 'bg-secondary/10'
                      }`}>
                        <value.icon size={20} className={
                          index % 2 === 0 ? 'text-primary' : 'text-secondary'
                        } />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-0.jpg"
                    alt="Our team working with children"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-4">
                  <div className="relative h-60 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/about-1.jpg"
                      alt="Therapy session in progress"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-wellness-mint to-wellness-sage rounded-2xl p-6 text-white">
                    <div className="text-4xl font-bold mb-2">7+</div>
                    <div className="text-lg">Years of Excellence</div>
                    <div className="text-sm opacity-90 mt-2">Transforming lives since 2017</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-wellness-peach/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-wellness-lavender/20 rounded-full blur-2xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}