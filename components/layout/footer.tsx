import Link from "next/link";
import Image from "next/image";
import { IconMapPin, IconPhone } from "@tabler/icons-react";

const footerLinks = {
  services: [
    { name: "Home-Based Therapy", href: "/services#home" },
    { name: "School-Based Support", href: "/services#school" },
    { name: "Clinic-Based Services", href: "/services#clinic" },
  ],
  company: [
    { name: "Join Our Team", href: "/join-our-team" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [{ name: "Getting Started", href: "/getting-started" }],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-section-sage/30 to-background border-t border-border">
      {/* Instagram Gallery */}
      <div className="grid grid-cols-6 md:grid-cols-12">
        {[12, 13, 0, 3, 5, 7, 8, 9, 10, 11, 1, 2].map((num, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden group cursor-pointer"
          >
            <Image
              src={`/images/ig-${num}.jpg`}
              alt="Instagram gallery"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/0" />
          </div>
        ))}
      </div>

      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-1.avif"
                alt="The Behaviorists"
                width={180}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Providing exceptional ABA therapy services to children and
              families across South Florida since 2017.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <IconMapPin
                size={18}
                className="flex-shrink-0 mt-0.5 text-muted-foreground"
              />
              <div>
                <p className="font-medium">Headquarters</p>
                <p className="text-muted-foreground">
                  7735 NW 48th St Ste 110, Doral, FL
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <IconMapPin
                size={18}
                className="flex-shrink-0 mt-0.5 text-muted-foreground"
              />
              <div>
                <p className="font-medium">Miami Springs</p>
                <p className="text-muted-foreground">
                  657 South Dr Ste 403, Miami Springs, FL
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <IconPhone
                size={18}
                className="flex-shrink-0 mt-0.5 text-muted-foreground"
              />
              <div>
                <p className="font-medium">Contact</p>
                <a href="tel:786-860-5161" className="text-muted-foreground">
                  786-860-5161
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <Image
            src="/logo-rainbow-mark.avif"
            alt="The Behaviorists Logo"
            width={72}
            height={72}
            className="mx-auto mb-4 opacity-60"
          />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} The Behaviorists. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
