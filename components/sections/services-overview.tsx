'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../ui/scroll-reveal';
import { IconHome, IconSchool, IconBuildingHospital, IconSparkles } from '@tabler/icons-react';

const services = [
  {
    icon: IconHome,
    title: 'Home-Based Therapy',
    description: 'Comfortable, familiar environment where children can learn and grow naturally with family involvement.',
    color: 'pastel-blue',
    accentColor: 'accent-blue',
  },
  {
    icon: IconSchool,
    title: 'School-Based Support',
    description: 'Collaborative approach with educators to ensure consistent progress across all learning environments.',
    color: 'pastel-green',
    accentColor: 'accent-green',
  },
  {
    icon: IconBuildingHospital,
    title: 'Clinic-Based Services',
    description: 'Structured therapeutic environment with specialized resources and peer interaction opportunities.',
    color: 'pastel-lavender',
    accentColor: 'accent-lavender',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-pastel-yellow/20 to-transparent" />
      
      <div className="container relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-peach/50 rounded-full text-sm font-medium mb-4">
            <IconSparkles size={16} className="text-accent-peach" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Comprehensive ABA Therapy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide specialized behavioral analysis services tailored to each child\'s 
            unique needs, delivered in the setting that works best for your family.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`relative h-full p-8 rounded-3xl bg-${service.color}/30 border border-${service.color} overflow-hidden group`}
              >
                {/* Icon background */}
                <motion.div
                  className={`absolute -top-10 -right-10 w-32 h-32 bg-${service.accentColor}/20 rounded-full blur-2xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 bg-${service.accentColor}/20 rounded-2xl mb-6`}>
                    <service.icon size={32} className={`text-${service.accentColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
          >
            Learn More About Our Services
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
}