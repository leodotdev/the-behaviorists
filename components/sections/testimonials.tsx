'use client';

import Image from 'next/image';
import ScrollReveal from '../ui/scroll-reveal';
import { IconStar, IconQuote } from '@tabler/icons-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Parent',
    image: '/images/ig-1.jpg',
    content: 'The Behaviorists has been a blessing for our family. Our son has made incredible progress in just 6 months. The therapists are patient, knowledgeable, and truly care about our child\'s success.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Parent',
    image: '/images/ig-2.jpg',
    content: 'The home-based therapy has been perfect for our daughter. She\'s more comfortable learning in familiar surroundings, and we\'ve learned so much about how to support her development.',
    rating: 5,
  },
  {
    name: 'Maria Rodriguez',
    role: 'Parent',
    image: '/images/ig-4.jpg',
    content: 'Professional, compassionate, and results-driven. The team at The Behaviorists goes above and beyond. Our child is now thriving in school thanks to their support.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-image-section blur-heavy noise-overlay" style={{ '--bg-image': 'url(/images/jeshoots-com-LKREcvZeoJQ-unsplash.jpg)' } as React.CSSProperties}>
      <style jsx>{`
        section::before {
          background-image: var(--bg-image);
        }
      `}</style>
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            <IconQuote size={16} />
            <span>What Families Say</span>
          </div>
          
          <h2 className="text-heading font-sans mb-6">
            Success Stories From Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from the families who have experienced the transformative 
            power of our evidence-based ABA therapy.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.1}>
              <div
                className="bg-white rounded-3xl p-8 shadow-lg h-full flex flex-col"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IconStar key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 mb-8">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Image Gallery */}
        <ScrollReveal delay={0.4} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[6, 8, 9, 10].map((num) => (
              <div
                key={num}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={`/images/ig-${num}.jpg`}
                  alt="Therapy moments"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}