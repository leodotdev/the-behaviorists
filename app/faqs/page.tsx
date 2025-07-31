'use client';

import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IconChevronDown, IconQuestionMark } from '@tabler/icons-react';
import { useState } from 'react';

const faqCategories = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'What is ABA therapy?',
        answer: 'Applied Behavior Analysis (ABA) is an evidence-based therapy that focuses on improving specific behaviors and skills while reducing problematic behaviors. It uses positive reinforcement and data-driven techniques to help children with autism and related disorders develop communication, social, and life skills.',
      },
      {
        question: 'How do I know if my child needs ABA therapy?',
        answer: 'ABA therapy may benefit children who struggle with communication, social interactions, repetitive behaviors, or daily living skills. If your child has been diagnosed with autism or shows developmental delays, consult with your pediatrician about whether ABA therapy could help.',
      },
      {
        question: 'What ages do you serve?',
        answer: 'We provide ABA therapy services for children from early intervention (as young as 18 months) through adolescence. Our programs are tailored to meet the developmental needs of each age group.',
      },
      {
        question: 'How long does the intake process take?',
        answer: 'The typical intake process takes 2-4 weeks from initial contact to beginning services. This includes insurance verification, assessment scheduling, and treatment plan development.',
      },
    ],
  },
  {
    category: 'Services & Treatment',
    questions: [
      {
        question: 'What types of ABA services do you offer?',
        answer: 'We offer comprehensive ABA services including home-based therapy, school-based support, and clinic-based programs. Each setting provides unique benefits, and we work with families to determine the best approach for their child.',
      },
      {
        question: 'How many hours of therapy will my child receive?',
        answer: 'Therapy hours are individualized based on your child\'s assessment results and insurance authorization. Typically, children receive between 10-40 hours per week, depending on their needs and goals.',
      },
      {
        question: 'What happens during a typical therapy session?',
        answer: 'Sessions include structured activities targeting specific goals, play-based learning, skill practice, and data collection. Therapists use positive reinforcement to encourage desired behaviors and teach new skills in a fun, engaging way.',
      },
      {
        question: 'How often are treatment plans updated?',
        answer: 'Treatment plans are reviewed and updated every 6 months or as needed based on your child\'s progress. We continuously monitor data to ensure interventions remain effective and adjust strategies accordingly.',
      },
    ],
  },
  {
    category: 'Insurance & Payment',
    questions: [
      {
        question: 'Do you accept my insurance?',
        answer: 'We accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Florida Blue, Humana, United Healthcare, Medicaid, and others. Contact us to verify your specific coverage.',
      },
      {
        question: 'What if I don\'t have insurance coverage?',
        answer: 'We offer competitive private pay rates and flexible payment plans to ensure ABA therapy remains accessible. Our team can discuss options that work within your budget.',
      },
      {
        question: 'What are typical out-of-pocket costs?',
        answer: 'Costs vary based on your insurance plan\'s deductible, copays, and out-of-pocket maximums. We provide a clear breakdown of expected costs after verifying your benefits.',
      },
      {
        question: 'How do you handle insurance authorization?',
        answer: 'Our insurance team handles all authorization requests, renewals, and appeals. We submit necessary documentation and work directly with insurance companies to secure coverage.',
      },
    ],
  },
  {
    category: 'Parent Involvement',
    questions: [
      {
        question: 'How involved are parents in the therapy process?',
        answer: 'Parent involvement is crucial for success. We provide parent training sessions, regular progress updates, and strategies to reinforce skills at home. The level of direct involvement can be tailored to each family\'s preferences and availability.',
      },
      {
        question: 'Can I observe therapy sessions?',
        answer: 'Yes! We encourage parents to observe sessions and learn techniques they can use at home. Your child\'s BCBA can schedule observation times and answer any questions you have.',
      },
      {
        question: 'How do you communicate progress?',
        answer: 'We provide regular progress reports, monthly team meetings, and maintain open communication through phone, email, or our parent portal. You\'ll always know how your child is progressing toward their goals.',
      },
      {
        question: 'What training do you provide for parents?',
        answer: 'We offer comprehensive parent training covering behavior management strategies, communication techniques, and ways to generalize skills across settings. Training can be one-on-one or in group settings.',
      },
    ],
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary/50 cursor-pointer"
      >
        <h3 className="font-sans font-bold text-lg pr-4">{question}</h3>
        <div
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
        >
          <IconChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
        </div>
      </button>
      
      {isOpen && (
        <div className="overflow-hidden">
          <div className="px-6 pb-4 text-muted-foreground">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pastel-peach/30 to-pastel-lavender/30">
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="inline-flex p-4 bg-white rounded-full shadow-sm mb-6">
                <IconQuestionMark size={40} className="text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-sans font-bold mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about ABA therapy, our services, and 
                what to expect when working with The Behaviorists.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={category.category} className="mb-16">
                  <ScrollReveal delay={categoryIndex * 0.1}>
                    <h2 className="text-2xl md:text-3xl font-sans font-bold mb-8 text-center">
                      {category.category}
                    </h2>
                  </ScrollReveal>
                  
                  <div className="space-y-4">
                    {category.questions.map((item, index) => {
                      const itemId = `${categoryIndex}-${index}`;
                      return (
                        <ScrollReveal key={itemId} delay={index * 0.05}>
                          <FAQItem
                            question={item.question}
                            answer={item.answer}
                            isOpen={openItems.includes(itemId)}
                            onToggle={() => toggleItem(itemId)}
                          />
                        </ScrollReveal>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-20 bg-gradient-to-b from-pastel-blue/20 to-transparent">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team is here to provide personalized answers and guide you through 
                  the process of getting started with ABA therapy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:786-860-5161"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 cursor-pointer"
                  >
                    Call Us: 786-860-5161
                  </a>
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-medium hover:bg-secondary cursor-pointer"
                  >
                    Send a Message
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}