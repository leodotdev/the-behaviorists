'use client';

import Link from 'next/link';
import ScrollReveal from '../ui/scroll-reveal';
import { IconArrowRight, IconPhone, IconLeaf } from '@tabler/icons-react';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="py-24 bg-image-section dark-overlay blur-light noise-overlay" style={{ '--bg-image': 'url(/images/vanessa-bucceri-gDiRwIYAMA8-unsplash.jpg)' } as React.CSSProperties}>
      <style jsx>{`
        section::before {
          background-image: var(--bg-image);
        }
      `}</style>
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual element */}
            <ScrollReveal>
              <div className="relative">
                <div
                  className="relative rounded-3xl overflow-hidden aspect-square"
                >
                  <Image
                    src="/images/ig-11.jpg"
                    alt="Happy child in therapy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-sans mb-2">Take control of</h3>
                    <h3 className="text-2xl font-sans mb-4">Wellness and Development</h3>
                    <p className="text-white/90">
                      Join hundreds of families on their journey to wellness
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={0.2}>
              <div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
                >
                  <IconLeaf size={16} />
                  <span>Start Your Journey</span>
                </div>
                
                <h2 className="text-heading font-sans mb-6">
                  Ready to Transform Your Child&apos;s Future?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Take the first step toward supporting your child&apos;s development. 
                  Our caring team is here to guide you through every step of the 
                  process with compassion and expertise.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Free initial consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-muted-foreground">Insurance verification assistance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-muted-foreground">Personalized treatment planning</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/getting-started">
                    <button
                      className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 inline-flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                    >
                      Get Started Today
                      <IconArrowRight 
                        size={20} 
                        className="group-hover:translate-x-1" 
                      />
                    </button>
                  </Link>
                  
                  <a
                    href="tel:786-860-5161"
                    className="px-8 py-4 bg-white text-foreground border-2 border-wellness-sand rounded-full font-medium hover:border-primary hover:text-primary inline-flex items-center gap-2 justify-center cursor-pointer"
                  >
                    <IconPhone size={20} />
                    <span>786-860-5161</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}