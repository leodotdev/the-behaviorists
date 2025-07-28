import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IconHome, IconSchool, IconBuildingHospital, IconCheckCircle, IconSparkles } from '@tabler/icons-react';

const serviceDetails = [
  {
    id: 'home',
    icon: IconHome,
    title: 'Home-Based ABA Therapy',
    description: 'Our home-based services bring evidence-based therapy directly to your family\'s natural environment.',
    features: [
      'Comfortable, familiar setting for your child',
      'Direct parent training and involvement',
      'Generalization of skills in daily routines',
      'Flexible scheduling to fit family needs',
      'Natural environment teaching opportunities',
    ],
    bgColor: 'pastel-blue',
  },
  {
    id: 'school',
    icon: IconSchool,
    title: 'School-Based Support',
    description: 'We collaborate with educational teams to ensure consistent support across all learning environments.',
    features: [
      'Direct collaboration with teachers and staff',
      'Classroom behavior management strategies',
      'Social skills development with peers',
      'Academic support and accommodations',
      'IEP meeting participation and advocacy',
    ],
    bgColor: 'pastel-green',
  },
  {
    id: 'clinic',
    icon: IconBuildingHospital,
    title: 'Clinic-Based Services',
    description: 'Our clinic provides a structured therapeutic environment with specialized resources and equipment.',
    features: [
      'State-of-the-art therapy facilities',
      'Peer interaction opportunities',
      'Structured learning environment',
      'Access to specialized resources',
      'Group therapy sessions available',
    ],
    bgColor: 'pastel-lavender',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pastel-peach/30 to-pastel-blue/30">
          <div className="container">
            <ScrollReveal className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                <IconSparkles size={16} className="text-accent-peach" />
                <span>Our Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Comprehensive <span className="text-gradient">ABA Services</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer flexible service delivery options to meet your family\'s unique needs. 
                Our board-certified professionals provide evidence-based ABA therapy in the 
                setting that works best for your child.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20">
          <div className="container">
            <div className="space-y-24">
              {serviceDetails.map((service, index) => (
                <ScrollReveal key={service.id} delay={index * 0.1}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className={`inline-flex p-3 bg-${service.bgColor}/50 rounded-2xl mb-6`}>
                        <service.icon size={40} className="text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <IconCheckCircle size={20} className="text-accent-green flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className={`aspect-square bg-gradient-to-br from-${service.bgColor} to-${service.bgColor}/50 rounded-3xl flex items-center justify-center`}>
                        <service.icon size={120} className="text-white/50" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-peach/20 rounded-full blur-2xl" />
                      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-blue/20 rounded-full blur-2xl" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process CTA */}
        <section className="py-20 bg-gradient-to-b from-pastel-yellow/20 to-transparent">
          <div className="container">
            <ScrollReveal className="text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our intake process is designed to be simple and supportive. 
                Contact us today to discuss how we can help your child thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/getting-started"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
                >
                  Learn About Our Process
                </a>
                <a
                  href="tel:786-860-5161"
                  className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-full font-medium hover:bg-secondary transition-all"
                >
                  Call 786-860-5161
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