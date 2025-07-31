import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IconPhone, IconClipboard, IconUsers, IconRocket, IconArrowRight, IconFileDescription, IconShieldCheck, IconCalendar } from '@tabler/icons-react';

const steps = [
  {
    icon: IconPhone,
    title: 'Initial Phone Interview',
    description: 'We start with a brief phone conversation to understand your child&apos;s needs and answer your questions.',
    details: [
      'Discussion of your child&apos;s current needs',
      'Overview of our services and approach',
      'Insurance verification process',
      'Scheduling preferences',
    ],
  },
  {
    icon: IconFileDescription,
    title: 'Documentation & Approval',
    description: 'We guide you through the necessary paperwork and work with your insurance for service approval.',
    details: [
      'Medical referral or prescription',
      'Insurance authorization',
      'Intake forms completion',
      'Service agreement review',
    ],
  },
  {
    icon: IconUsers,
    title: 'Comprehensive Assessment',
    description: 'Our board-certified professionals conduct an in-depth evaluation to create a personalized treatment plan.',
    details: [
      'Developmental assessment',
      'Behavioral observations',
      'Family interview and goals',
      'Customized treatment planning',
    ],
  },
  {
    icon: IconRocket,
    title: 'Begin Therapy Services',
    description: 'Start evidence-based ABA therapy with ongoing support and regular progress updates.',
    details: [
      'Matched with qualified therapists',
      'Regular therapy sessions begin',
      'Parent training and involvement',
      'Continuous progress monitoring',
    ],
  },
];

const faqs = [
  {
    question: 'How long does the intake process take?',
    answer: 'The typical intake process takes 2-4 weeks from initial contact to beginning services, depending on insurance approval and assessment scheduling.',
  },
  {
    question: 'What insurance do you accept?',
    answer: 'We work with most major insurance providers in Florida. Our intake team will verify your coverage during the initial phone interview.',
  },
  {
    question: 'What ages do you serve?',
    answer: 'We provide ABA therapy services for children from early intervention through adolescence, tailoring our approach to each developmental stage.',
  },
  {
    question: 'How many hours of therapy will my child receive?',
    answer: 'Therapy hours are determined based on the assessment results and insurance authorization, typically ranging from 10-40 hours per week.',
  },
];

export default function GettingStartedPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pastel-green/30 to-pastel-blue/30">
          <div className="container">
            <ScrollReveal className="text-center">
              <h1 className="text-5xl md:text-6xl font-sans font-bold mb-6">
                Getting Started is <span className="text-gradient">Simple</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                We&apos;ve streamlined our intake process to get your child the support they need 
                as quickly as possible. Our caring team guides you through every step.
              </p>
              <a
                href="tel:786-860-5161"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium cursor-pointer"
              >
                <IconPhone size={20} />
                <span>Start with a Phone Call: 786-860-5161</span>
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="container">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
                Your Journey With Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From first contact to ongoing therapy, we&apos;re with you every step of the way.
              </p>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <ScrollReveal key={step.title} delay={index * 0.1}>
                  <div className="relative">
                    {/* Connection line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-10 top-24 w-0.5 h-full bg-gradient-to-b from-border to-transparent" />
                    )}

                    <div className="flex gap-6 mb-16">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                          <step.icon size={32} className="text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-sans font-bold mb-3">
                          Step {index + 1}: {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <IconArrowRight size={16} className="text-accent-green flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-20 bg-gradient-to-b from-pastel-lavender/20 to-transparent">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <IconClipboard size={32} className="text-primary" />
                    <h2 className="text-3xl font-sans font-bold">What You&apos;ll Need</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-8">
                    To expedite the intake process, please have the following documents ready:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-sans font-bold text-lg mb-3">Required Documents</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <IconShieldCheck size={20} className="text-accent-green flex-shrink-0" />
                          <div>
                            <p className="font-medium">Insurance Card</p>
                            <p className="text-sm text-muted-foreground">Front and back copies</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <IconFileDescription size={20} className="text-accent-green flex-shrink-0" />
                          <div>
                            <p className="font-medium">Medical Referral</p>
                            <p className="text-sm text-muted-foreground">From pediatrician or specialist</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-sans font-bold text-lg mb-3">Helpful Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <IconFileDescription size={20} className="text-accent-blue flex-shrink-0" />
                          <div>
                            <p className="font-medium">Previous Evaluations</p>
                            <p className="text-sm text-muted-foreground">Any recent assessments</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <IconCalendar size={20} className="text-accent-blue flex-shrink-0" />
                          <div>
                            <p className="font-medium">Schedule Preferences</p>
                            <p className="text-sm text-muted-foreground">Available days and times</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="container">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about getting started with our services
              </p>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                    <h3 className="font-sans font-bold text-lg mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-pastel-peach/20 to-transparent">
          <div className="container">
            <ScrollReveal className="text-center">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
                Ready to Take the First Step?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our intake team is standing by to answer your questions and guide you 
                through the process. Call us today to begin your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:786-860-5161"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium cursor-pointer"
                >
                  <IconPhone size={20} />
                  <span>Call Now: 786-860-5161</span>
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-medium cursor-pointer"
                >
                  Contact Form
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}