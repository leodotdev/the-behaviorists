'use client';

import { motion } from 'framer-motion';
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
    <section className="py-24 relative overflow-hidden">
      {/* Background shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-pastel-pink/20 rounded-full blur-3xl"
      />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Dedicated to Making a
                <span className="text-gradient"> Difference</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Since 2017, The Behaviorists has been committed to providing exceptional 
                ABA therapy services throughout South Florida. Our board-certified team 
                combines expertise with compassion to help children reach their full potential.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-2 bg-pastel-lavender/50 rounded-lg">
                        <value.icon size={24} className="text-accent-lavender" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Image placeholder */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative bg-gradient-to-br from-pastel-blue to-pastel-lavender rounded-3xl aspect-square flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <IconHeart size={64} className="mx-auto mb-4 text-white/80" />
                  <p className="text-white/80 font-serif text-xl">
                    Empowering children and families through compassionate care
                  </p>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-peach/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-green/30 rounded-full blur-xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}