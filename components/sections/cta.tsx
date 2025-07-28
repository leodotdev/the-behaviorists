'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollReveal from '../ui/scroll-reveal';
import { IconArrowRight, IconPhone } from '@tabler/icons-react';

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-br from-pastel-blue via-pastel-lavender to-pastel-pink p-12 md:p-16 rounded-3xl overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Take the first step toward supporting your child\'s development. 
                Our caring team is here to guide you through every step of the process.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/getting-started">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-white text-primary rounded-full font-medium text-lg hover:bg-white/90 transition-all flex items-center gap-2 justify-center"
                  >
                    Get Started Today
                    <IconArrowRight 
                      size={20} 
                      className="group-hover:translate-x-1 transition-transform" 
                    />
                  </motion.button>
                </Link>
                
                <motion.a
                  href="tel:786-860-5161"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 rounded-full font-medium text-lg hover:bg-white/30 transition-all flex items-center gap-2 justify-center"
                >
                  <IconPhone size={20} />
                  <span>Call 786-860-5161</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}