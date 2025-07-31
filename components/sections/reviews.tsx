'use client';

import ScrollReveal from '../ui/scroll-reveal';
import { IconStar, IconBriefcase, IconUsers } from '@tabler/icons-react';

export default function Reviews() {
  return (
    <section className="py-24 bg-gradient-to-b from-section-sage/20 to-white">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-display font-sans mb-6">
            Trusted by Families & Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See what families and team members are saying about their experience with The Behaviorists
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Google Reviews */}
          <ScrollReveal delay={0.1}>
            <div
              className="bg-white rounded-2xl p-8 shadow-sm border border-border h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex p-3 bg-section-peach/30 rounded-2xl">
                  <IconUsers size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Google Reviews</h3>
                  <p className="text-muted-foreground">Family Testimonials</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-2xl font-bold">5.0</span>
              </div>

              <p className="text-muted-foreground mb-6">
                Based on 2 reviews from families we serve
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-section-mint/10 rounded-lg">
                  <p className="text-sm italic text-muted-foreground">
                    &quot;Exceptional service and care for our child. The team is professional, 
                    compassionate, and truly makes a difference.&quot;
                  </p>
                </div>
                <div className="p-4 bg-section-lavender/10 rounded-lg">
                  <p className="text-sm italic text-muted-foreground">
                    &quot;Highly recommend The Behaviorists. They&apos;ve helped our family 
                    tremendously with personalized support and guidance.&quot;
                  </p>
                </div>
              </div>

              <a 
                href="https://www.google.com/search?sca_esv=e948bafec9f39f8c&sxsrf=AE3TifM0eNSDQpO1wRU2sJTWmgj_9DzdSQ:1753793185684&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EzcWrbGp5tlW9Apiw7hVSNW-g-qEDW4cdbRud40vEl3aBrrqGwdQU9iwUCJmXmWrPDuNc5dMdnch5C1WcNzV4ZYs3Lz676IyRmt7z2-BWapWZMBkSQ%3D%3D&q=The+Behaviorists+Reviews&sa=X&ved=2ahUKEwjLlt7ejOKOAxUjVTABHUtfKgoQ0bkNegQIGxAE&biw=2352&bih=1187&dpr=2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:underline"
              >
                <span>Read all reviews on Google</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          {/* Indeed Reviews */}
          <ScrollReveal delay={0.2}>
            <div
              className="bg-white rounded-2xl p-8 shadow-sm border border-border h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex p-3 bg-section-mint/30 rounded-2xl">
                  <IconBriefcase size={32} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Indeed Reviews</h3>
                  <p className="text-muted-foreground">Employee Satisfaction</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Work/Life Balance</span>
                    <span className="font-semibold">5.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Compensation/Benefits</span>
                    <span className="font-semibold">5.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Job Security/Advancement</span>
                    <span className="font-semibold">5.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Management</span>
                    <span className="font-semibold">5.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-wellness-coral h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Culture</span>
                    <span className="font-semibold">5.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-wellness-sage h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Our team members rate us highly for professional growth and supportive work environment
                </p>
                <a 
                  href="https://www.indeed.com/cmp/The-Behaviorists"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <span>Read all reviews on Indeed</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}