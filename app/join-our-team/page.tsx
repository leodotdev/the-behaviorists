import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IconHeart, IconTrophy, IconUsers, IconSparkles, IconBriefcase, IconGrowth, IconCalendarEvent, IconShieldCheck } from '@tabler/icons-react';

const benefits = [
  {
    icon: IconHeart,
    title: 'Comprehensive Health Benefits',
    description: 'Medical, dental, and vision coverage for you and your family',
  },
  {
    icon: IconCalendarEvent,
    title: 'Work-Life Balance',
    description: 'Flexible scheduling and generous PTO to maintain healthy boundaries',
  },
  {
    icon: IconGrowth,
    title: 'Professional Development',
    description: 'Continuing education support and career advancement opportunities',
  },
  {
    icon: IconTrophy,
    title: 'Competitive Compensation',
    description: 'Industry-leading salaries with performance-based bonuses',
  },
];

const positions = [
  {
    title: 'Board Certified Behavior Analyst (BCBA)',
    type: 'Full-time',
    location: 'South Florida',
    requirements: [
      'Active BCBA certification',
      'Experience with autism and related disorders',
      'Strong assessment and treatment planning skills',
      'Excellent communication abilities',
    ],
  },
  {
    title: 'Registered Behavior Technician (RBT)',
    type: 'Full-time / Part-time',
    location: 'Multiple Locations',
    requirements: [
      'RBT certification (or willingness to obtain)',
      'High school diploma or equivalent',
      'Passion for working with children',
      'Reliable transportation',
    ],
  },
  {
    title: 'BCaBA - Assistant Behavior Analyst',
    type: 'Full-time',
    location: 'Doral / Miami Springs',
    requirements: [
      'Active BCaBA certification',
      'Experience in ABA therapy',
      'Strong data collection and analysis skills',
      'Team collaboration abilities',
    ],
  },
];

const values = [
  'Client-centered approach',
  'Evidence-based practices',
  'Continuous learning',
  'Team collaboration',
  'Family involvement',
  'Professional integrity',
];

export default function JoinOurTeamPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pastel-lavender/30 to-pastel-pink/30">
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                <IconSparkles size={16} className="text-accent-lavender" />
                <span>Join Our Team</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Make a <span className="text-gradient">Difference</span> Every Day
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join a passionate team dedicated to transforming lives through 
                evidence-based ABA therapy. We're looking for compassionate professionals 
                who share our commitment to excellence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20">
          <div className="container">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Why Choose The Behaviorists?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We invest in our team members because we know that happy, supported 
                professionals provide the best care for our clients.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={benefit.title} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-pastel-peach/50 rounded-2xl mb-4">
                      <benefit.icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our Culture */}
        <section className="py-20 bg-gradient-to-b from-pastel-blue/20 to-transparent">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  A Culture of Growth and Support
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  At The Behaviorists, we foster an environment where every team member 
                  can thrive professionally and personally. Our collaborative approach 
                  ensures you're never alone in your journey.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-green rounded-full" />
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-pastel-green to-pastel-blue rounded-3xl aspect-square flex items-center justify-center">
                    <div className="text-center p-8">
                      <IconUsers size={80} className="mx-auto mb-4 text-white/80" />
                      <p className="text-white/80 font-serif text-2xl">
                        Join a team that values your contribution
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-lavender/30 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-peach/30 rounded-full blur-xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="container">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Current Opportunities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're always looking for talented individuals to join our growing team.
              </p>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto space-y-6">
              {positions.map((position, index) => (
                <ScrollReveal key={position.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-serif font-bold mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="px-3 py-1 bg-pastel-blue/50 rounded-full">
                            {position.type}
                          </span>
                          <span className="px-3 py-1 bg-pastel-green/50 rounded-full">
                            {position.location}
                          </span>
                        </div>
                      </div>
                      <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all">
                        Apply Now
                      </button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <IconShieldCheck size={16} className="text-accent-green flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="py-20 bg-gradient-to-b from-pastel-lavender/20 to-transparent">
          <div className="container">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-pastel-pink to-pastel-lavender rounded-3xl p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
                  Ready to Start Your Journey With Us?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Take the first step toward a rewarding career where you can make 
                  a real difference in children\'s lives every day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:careers@thebehaviorists.com"
                    className="px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-white/90 transition-all"
                  >
                    Submit Your Application
                  </a>
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 rounded-full font-medium hover:bg-white/30 transition-all"
                  >
                    Contact HR
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