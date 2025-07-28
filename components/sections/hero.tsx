'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconArrowRight, IconStar } from '@tabler/icons-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue via-background to-pastel-lavender opacity-50" />
      
      {/* Animated shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-lavender/20 rounded-full blur-3xl"
      />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-muted-foreground border border-border"
          >
            <IconStar size={16} className="text-accent-blue" />
            <span>Established 2017 • South Florida</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif font-bold leading-tight"
          >
            Empowering Children
            <br />
            <span className="text-gradient">Through ABA Therapy</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Specialized Applied Behavior Analysis services for children with autism 
            and related disorders. Supporting families across South Florida with 
            evidence-based, individualized treatment plans.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link href="/getting-started">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all flex items-center gap-2"
              >
                Get Started
                <IconArrowRight 
                  size={20} 
                  className="group-hover:translate-x-1 transition-transform" 
                />
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-medium text-lg hover:bg-secondary transition-all"
              >
                Our Services
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 pt-12 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-green rounded-full" />
              <span>Board-Certified Staff</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-blue rounded-full" />
              <span>Evidence-Based Practices</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-lavender rounded-full" />
              <span>Family-Centered Approach</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}