import Link from 'next/link';
import { IconMapPin, IconPhone, IconMail, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

const footerLinks = {
  services: [
    { name: 'Home-Based Therapy', href: '/services#home' },
    { name: 'School-Based Support', href: '/services#school' },
    { name: 'Clinic-Based Services', href: '/services#clinic' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Join Our Team', href: '/join-our-team' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Getting Started', href: '/getting-started' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'FAQs', href: '/faqs' },
  ],
};

const socialLinks = [
  { icon: IconBrandFacebook, href: '#', label: 'Facebook' },
  { icon: IconBrandInstagram, href: '#', label: 'Instagram' },
  { icon: IconBrandLinkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-pastel-yellow/10 to-white border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4 text-gradient">
              The Behaviorists
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Providing exceptional ABA therapy services to children and families 
              across South Florida since 2017.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <social.icon size={20} className="text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <IconMapPin size={20} className="flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Headquarters</p>
                <p>7735 NW 48th St Ste 110</p>
                <p>Doral, FL 33166</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <IconMapPin size={20} className="flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Miami Springs</p>
                <p>657 South Dr Ste 403</p>
                <p>Miami Springs, FL</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <IconPhone size={20} className="flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Contact</p>
                <a href="tel:786-860-5161" className="hover:text-primary transition-colors">
                  786-860-5161
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Behaviorists. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}