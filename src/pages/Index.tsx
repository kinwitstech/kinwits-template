import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import ContactInfo from '@/components/sections/ContactInfo';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Work />
      <Features />
      <Testimonials />
      <Contact />
      <ContactInfo />
    </main>
  );
};

export default Index;
