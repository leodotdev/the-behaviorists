'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IconArrowRight, IconStar } from '@tabler/icons-react';

export default function Hero() {
  const stats = [
    { value: '500+', label: 'Families Served' },
    { value: '98%', label: 'Parent Satisfaction' },
    { value: '7+', label: 'Years Experience' },
    { value: '5⭐', label: 'Average Rating' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 bg-image-section blur-light noise-overlay" style={{ '--bg-image': 'url(/images/sandy-millar-nuS2GDpCDoI-unsplash.jpg)' } as React.CSSProperties}>
      <style jsx>{`
        section::before {
          background-image: var(--bg-image);
        }
      `}</style>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              <IconStar size={16} />
              <span>South Florida&apos;s Premier ABA Provider</span>
            </div>

            <h1
              className="text-display font-sans mb-6 leading-tight"
            >
              It&apos;s not just about behavior.
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl"
            >
              Our mission is to provide individualized, research-based treatment to our clients, while maintaining autonomy and independence as the priority
            </p>

            <div
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/getting-started">
                <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 hover:shadow-lg cursor-pointer flex items-center gap-2">
                  Get Started
                  <IconArrowRight size={20} className="group-hover:translate-x-1" />
                </button>
              </Link>
              
              <Link href="/services">
                <button className="px-8 py-4 bg-white border-2 border-wellness-sand text-foreground rounded-full font-medium hover:border-primary hover:text-primary cursor-pointer">
                  View Services
                </button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ig-0.jpg"
                    alt="Child learning through play"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ig-3.jpg"
                    alt="Therapy session"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ig-5.jpg"
                    alt="Family engagement"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ig-7.jpg"
                    alt="Child development activities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Overlay card */}
            <div
              className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">5</div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold">0</div>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">0</div>
                  <div className="w-10 h-10 rounded-full bg-wellness-coral flex items-center justify-center text-white font-bold">+</div>
                </div>
                <div>
                  <p className="font-semibold">Families Transformed</p>
                  <p className="text-sm text-muted-foreground">Join our growing community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}