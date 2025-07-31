import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IconShieldCheck, IconFileDescription, IconPhone, IconClipboardList, IconCircleCheck, IconAlertCircle, IconClock, IconHeartHandshake } from '@tabler/icons-react';

const acceptedInsurance = [
  'Aetna',
  'Blue Cross Blue Shield',
  'Cigna',
  'Florida Blue',
  'Humana',
  'United Healthcare',
  'Medicaid',
  'Tricare',
  'Beacon Health',
  'Optum',
  'Magellan Health',
  'Sunshine Health',
];

const coverageDetails = [
  {
    icon: IconClipboardList,
    title: 'Assessment & Evaluation',
    description: 'Initial comprehensive assessments to determine therapy needs and create treatment plans.',
  },
  {
    icon: IconHeartHandshake,
    title: 'Direct Therapy Services',
    description: 'One-on-one ABA therapy sessions with trained behavior technicians and analysts.',
  },
  {
    icon: IconFileDescription,
    title: 'Parent Training',
    description: 'Essential training for parents and caregivers to support therapy goals at home.',
  },
  {
    icon: IconClock,
    title: 'Ongoing Support',
    description: 'Regular progress monitoring, plan adjustments, and coordination with other providers.',
  },
];

const process = [
  {
    step: '1',
    title: 'Initial Verification',
    description: 'We verify your insurance coverage and benefits during your first call.',
  },
  {
    step: '2',
    title: 'Authorization Request',
    description: 'We submit all necessary documentation to obtain pre-authorization for services.',
  },
  {
    step: '3',
    title: 'Coverage Confirmation',
    description: 'Once approved, we explain your coverage details including copays and deductibles.',
  },
  {
    step: '4',
    title: 'Direct Billing',
    description: 'We bill your insurance directly, minimizing paperwork and out-of-pocket expenses.',
  },
];

const faqs = [
  {
    question: 'What if my insurance isn\'t listed?',
    answer: 'We regularly add new insurance providers. Contact us to verify if we accept your plan or to discuss private pay options.',
  },
  {
    question: 'How many therapy hours are typically covered?',
    answer: 'Coverage varies by plan, but most insurance providers cover 10-40 hours per week based on medical necessity.',
  },
  {
    question: 'What are typical out-of-pocket costs?',
    answer: 'Costs depend on your specific plan\'s deductible, copays, and out-of-pocket maximums. We\'ll explain your benefits clearly.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment options for any out-of-pocket expenses to ensure therapy remains accessible.',
  },
];

export default function InsurancePage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pastel-green/30 to-pastel-blue/30">
          <div className="container">
            <ScrollReveal className="text-center">
              <h1 className="text-5xl md:text-6xl font-sans font-bold mb-6">
                Insurance <span className="text-gradient">Coverage</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We work with most major insurance providers to ensure ABA therapy is 
                accessible and affordable for your family. Our team handles the insurance 
                process so you can focus on your child's progress.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Accepted Insurance */}
        <section className="py-20">
          <div className="container">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
                Accepted Insurance Providers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're in-network with major insurance companies serving South Florida.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {acceptedInsurance.map((provider, index) => (
                    <div
                      key={provider}
                      className="bg-white rounded-xl p-4 text-center shadow-sm border border-border"
                    >
                      <IconShieldCheck size={24} className="mx-auto mb-2 text-success-foreground" />
                      <p className="font-medium">{provider}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-info/20 border border-info-border rounded-2xl">
                  <div className="flex items-start gap-3">
                    <IconAlertCircle size={24} className="text-info-foreground flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Don't see your insurance?</p>
                      <p className="text-sm text-muted-foreground">
                        This list is not exhaustive. Please contact us to verify coverage with your specific plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="py-20 bg-gradient-to-b from-pastel-lavender/20 to-transparent">
          <div className="container">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
                What's Typically Covered
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Most insurance plans cover comprehensive ABA therapy services.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coverageDetails.map((detail, index) => (
                <ScrollReveal key={detail.title} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm mb-4">
                      <detail.icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-sans font-bold mb-2">
                      {detail.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {detail.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Process */}
        <section className="py-20">
          <div className="container">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
                Our Insurance Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We handle the complexities so you don't have to.
              </p>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {process.map((item, index) => (
                  <ScrollReveal key={item.step} delay={index * 0.1}>
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-sans font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {index < process.length - 1 && (
                      <div className="ml-6 w-0.5 h-8 bg-gradient-to-b from-border to-transparent" />
                    )}
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-b from-pastel-peach/20 to-transparent">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
                  We Make Insurance Simple
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our dedicated insurance team works tirelessly to maximize your benefits 
                  and minimize your stress. Here's what we handle for you:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <IconCircleCheck size={20} className="text-success-foreground flex-shrink-0 mt-0.5" />
                    <span>Verification of benefits and coverage limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCircleCheck size={20} className="text-success-foreground flex-shrink-0 mt-0.5" />
                    <span>Prior authorization requests and renewals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCircleCheck size={20} className="text-success-foreground flex-shrink-0 mt-0.5" />
                    <span>Direct billing to insurance providers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCircleCheck size={20} className="text-success-foreground flex-shrink-0 mt-0.5" />
                    <span>Appeals for denied claims when necessary</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconCircleCheck size={20} className="text-success-foreground flex-shrink-0 mt-0.5" />
                    <span>Clear explanation of your financial responsibility</span>
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-gradient-to-br from-pastel-blue to-pastel-green rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-sans font-bold mb-4">
                    No Insurance? No Problem!
                  </h3>
                  <p className="mb-6 text-white/90">
                    We offer competitive private pay rates and flexible payment plans 
                    to ensure every child has access to quality ABA therapy.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-medium cursor-pointer"
                  >
                    <IconPhone size={20} />
                    <span>Discuss Options</span>
                  </a>
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
                Insurance FAQs
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about insurance coverage for ABA therapy
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
        <section className="py-20 bg-gradient-to-b from-pastel-yellow/20 to-transparent">
          <div className="container">
            <ScrollReveal className="text-center">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
                Let Us Verify Your Coverage
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our insurance specialists are ready to help you understand your benefits 
                and get started with services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:786-860-5161"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium cursor-pointer"
                >
                  <IconPhone size={20} />
                  <span>Call: 786-860-5161</span>
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-medium cursor-pointer"
                >
                  Submit Insurance Info
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