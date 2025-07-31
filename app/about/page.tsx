import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IconHeart, IconBrain, IconChartLine, IconUsers, IconAward, IconCalendar, IconTarget, IconHandshake } from '@tabler/icons-react';

const milestones = [
  {
    year: '2017',
    title: 'Founded with Purpose',
    description: 'The Behaviorists was established with a mission to provide exceptional ABA therapy services to families in South Florida.',
  },
  {
    year: '2019',
    title: 'Expanded Services',
    description: 'Opened our second location in Doral to better serve families across Miami-Dade County.',
  },
  {
    year: '2021',
    title: 'Community Impact',
    description: 'Reached over 500 families with comprehensive ABA therapy services and parent training programs.',
  },
  {
    year: '2023',
    title: 'Excellence Recognition',
    description: 'Received accreditation and recognition for our evidence-based practices and exceptional client outcomes.',
  },
];

const leadership = [
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Clinical Director, BCBA-D',
    bio: 'With over 15 years of experience in ABA therapy, Dr. Rodriguez leads our clinical team with passion and expertise.',
  },
  {
    name: 'Carlos Martinez',
    role: 'Executive Director',
    bio: 'Carlos brings 20 years of healthcare administration experience to ensure smooth operations and quality care.',
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Training Director, BCBA-D',
    bio: 'Dr. Chen oversees our professional development programs and ensures our team stays current with best practices.',
  },
];

const coreValues = [
  {
    icon: IconHeart,
    title: 'Compassion',
    description: 'We approach every family with empathy, understanding, and genuine care for their journey.',
  },
  {
    icon: IconBrain,
    title: 'Excellence',
    description: 'We maintain the highest standards in our therapy services and continuously improve our practices.',
  },
  {
    icon: IconHandshake,
    title: 'Collaboration',
    description: 'We work closely with families, schools, and healthcare providers for comprehensive care.',
  },
  {
    icon: IconTarget,
    title: 'Results-Driven',
    description: 'We focus on measurable outcomes and celebrate every milestone achieved.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pastel-lavender/30 to-pastel-blue/30">
          <div className="container">
            <ScrollReveal className="text-center">
              <h1 className="text-5xl md:text-6xl font-sans font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Since 2017, The Behaviorists has been dedicated to transforming lives through 
                compassionate, evidence-based ABA therapy. Learn about our journey, our team, 
                and our commitment to the families we serve.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollReveal>
                <div className="bg-pastel-blue/20 rounded-3xl p-8">
                  <h2 className="text-3xl font-sans font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground">
                    To provide exceptional Applied Behavior Analysis services that empower 
                    children with autism and related disorders to reach their full potential, 
                    while supporting and educating their families throughout the journey.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <div className="bg-pastel-green/20 rounded-3xl p-8">
                  <h2 className="text-3xl font-sans font-bold mb-4">Our Vision</h2>
                  <p className="text-lg text-muted-foreground">
                    To be the leading provider of ABA therapy in South Florida, recognized 
                    for our innovative approaches, compassionate care, and life-changing 
                    outcomes for the children and families we serve.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gradient-to-b from-pastel-peach/20 to-transparent">
          <div className="container">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape how we serve our community.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm mb-4">
                      <value.icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-sans font-bold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A timeline of growth, impact, and dedication to our community.
              </p>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={milestone.year} delay={index * 0.1}>
                  <div className="relative flex gap-8 mb-12">
                    {/* Timeline line */}
                    {index < milestones.length - 1 && (
                      <div className="absolute left-[60px] top-[60px] w-0.5 h-full bg-gradient-to-b from-border to-transparent" />
                    )}
                    
                    {/* Year */}
                    <div className="flex-shrink-0 w-[120px]">
                      <div className="bg-primary text-primary-foreground rounded-2xl px-4 py-2 text-center font-bold">
                        {milestone.year}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-sans font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gradient-to-b from-pastel-lavender/20 to-transparent">
          <div className="container">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
                Meet Our Leadership
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our experienced team is dedicated to providing the highest quality care.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leadership.map((leader, index) => (
                <ScrollReveal key={leader.name} delay={index * 0.1}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-pastel-blue to-pastel-lavender rounded-full mx-auto mb-6 flex items-center justify-center">
                      <IconUsers size={40} className="text-white" />
                    </div>
                    <h3 className="text-xl font-sans font-bold mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {leader.role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {leader.bio}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
                  Why Families Choose The Behaviorists
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <IconAward size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Board-Certified Professionals</h3>
                      <p className="text-muted-foreground text-sm">
                        Our team consists of BCBAs and RBTs committed to excellence.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconChartLine size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Data-Driven Results</h3>
                      <p className="text-muted-foreground text-sm">
                        We track progress meticulously to ensure meaningful outcomes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconCalendar size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                      <p className="text-muted-foreground text-sm">
                        We work around your family's schedule and needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconHeart size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Family-Centered Approach</h3>
                      <p className="text-muted-foreground text-sm">
                        We involve and empower families throughout the therapy process.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-pastel-pink to-pastel-peach rounded-3xl aspect-square flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl font-sans font-bold text-white mb-2">500+</div>
                      <p className="text-white/80 text-xl">Families Served</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue/30 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-green/30 rounded-full blur-xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-pastel-yellow/20 to-transparent">
          <div className="container">
            <ScrollReveal className="text-center">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">
                Ready to Join Our Family?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the difference that compassionate, evidence-based care can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/getting-started"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium cursor-pointer"
                >
                  Get Started Today
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-medium cursor-pointer"
                >
                  Contact Us
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