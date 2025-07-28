import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import ServicesOverview from '@/components/sections/services-overview';
import Process from '@/components/sections/process';
import About from '@/components/sections/about';
import CTA from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ServicesOverview />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}