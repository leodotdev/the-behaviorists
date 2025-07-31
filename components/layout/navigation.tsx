'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IconMenu2, IconX, IconPhone } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Getting Started', href: '/getting-started' },
  { name: 'Join Our Team', href: '/join-our-team' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-border'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div
              className="relative h-12 w-48"
            >
              <Image
                src="/logo-1.avif"
                alt="The Behaviorists"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-base font-medium hover:text-primary ${
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-foreground'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
            <a
              href="tel:786-860-5161"
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 hover:shadow-md cursor-pointer"
            >
              <IconPhone size={16} />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
          <div
            className="md:hidden border-t border-border bg-white/95 backdrop-blur-md"
          >
            <div className="container py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg ${
                    pathname === item.href
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:786-860-5161"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
              >
                <IconPhone size={20} />
                <span>786-860-5161</span>
              </a>
            </div>
          </div>
        )}
    </nav>
  );
}