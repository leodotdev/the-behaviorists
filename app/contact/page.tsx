'use client';

import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { IconPhone, IconMapPin, IconClock, IconMail, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { useState } from 'react';

const locations = [
  {
    name: 'Headquarters - Doral',
    address: '7735 NW 48th St Ste 110',
    city: 'Doral, FL 33166',
    mapUrl: 'https://maps.google.com/?q=7735+NW+48th+St+Ste+110+Doral+FL+33166',
  },
  {
    name: 'Miami Springs Office',
    address: '657 South Dr Ste 403',
    city: 'Miami Springs, FL',
    mapUrl: 'https://maps.google.com/?q=657+South+Dr+Ste+403+Miami+Springs+FL',
  },
];

const contactInfo = [
  {
    icon: IconPhone,
    label: 'Phone',
    value: '786-860-5161',
    link: 'tel:786-860-5161',
  },
  {
    icon: IconMail,
    label: 'Email',
    value: 'info@thebehaviorists.com',
    link: 'mailto:info@thebehaviorists.com',
  },
  {
    icon: IconClock,
    label: 'Hours',
    value: 'Monday - Friday: 8:00 AM - 6:00 PM',
    link: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pastel-blue/30 to-pastel-lavender/30">
          <div className="container">
            <ScrollReveal className="text-center">
              <h1 className="text-5xl md:text-6xl font-sans font-bold mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We&apos;re here to answer your questions and help you begin your journey. 
                Reach out to our friendly team today.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ScrollReveal>
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h2 className="text-3xl font-sans font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none"
                        placeholder="john.doe@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none"
                        placeholder="(786) 860-5161"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="home">Home-Based Therapy</option>
                        <option value="school">School-Based Support</option>
                        <option value="clinic">Clinic-Based Services</option>
                        <option value="assessment">Initial Assessment</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none resize-none"
                        placeholder="Tell us about your child&apos;s needs..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    
                    {submitStatus === 'success' && (
                      <div
                        className="text-center text-success-foreground bg-success/20 border border-success-border rounded-lg p-3"
                      >
                        Thank you! We&apos;ll be in touch soon.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div
                        className="text-center text-danger-foreground bg-danger/20 border border-danger-border rounded-lg p-3"
                      >
                        Something went wrong. Please try again or call us directly.
                      </div>
                    )}
                  </form>
                </div>
              </ScrollReveal>

              {/* Contact Information */}
              <div className="space-y-8">
                <ScrollReveal delay={0.1}>
                  <div className="bg-pastel-peach/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-sans font-bold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      {contactInfo.map((info) => (
                        <div key={info.label} className="flex items-start gap-4">
                          <div className="p-2 bg-white rounded-lg">
                            <info.icon size={24} className="text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{info.label}</p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-muted-foreground hover:text-primary"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="bg-pastel-lavender/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-sans font-bold mb-6">Our Locations</h3>
                    <div className="space-y-6">
                      {locations.map((location) => (
                        <div key={location.name}>
                          <h4 className="font-sans font-bold mb-2">{location.name}</h4>
                          <p className="text-muted-foreground mb-2">
                            {location.address}<br />
                            {location.city}
                          </p>
                          <a
                            href={location.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:underline"
                          >
                            <IconMapPin size={16} />
                            <span className="text-sm">View on Map</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="bg-pastel-blue/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-sans font-bold mb-6">Follow Us</h3>
                    <p className="text-muted-foreground mb-4">
                      Stay connected for updates and resources
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="p-3 bg-white rounded-lg hover:bg-secondary"
                        aria-label="Facebook"
                      >
                        <IconBrandFacebook size={24} className="text-primary" />
                      </a>
                      <a
                        href="#"
                        className="p-3 bg-white rounded-lg hover:bg-secondary"
                        aria-label="Instagram"
                      >
                        <IconBrandInstagram size={24} className="text-primary" />
                      </a>
                      <a
                        href="#"
                        className="p-3 bg-white rounded-lg hover:bg-secondary"
                        aria-label="LinkedIn"
                      >
                        <IconBrandLinkedin size={24} className="text-primary" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-b from-pastel-green/20 to-transparent">
          <div className="container">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
                Serving South Florida
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                With two convenient locations and home-based services throughout the region, 
                we&apos;re always nearby when you need us.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-3xl p-4 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-pastel-blue to-pastel-green rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <IconMapPin size={64} className="mx-auto mb-4 text-white/80" />
                    <p className="text-white/80 font-sans text-xl">
                      Interactive Map Coming Soon
                    </p>
                  </div>
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