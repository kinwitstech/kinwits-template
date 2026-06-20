import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import TechStack from '@/components/sections/TechStack';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import BlogPreview from '@/components/sections/BlogPreview';
import Contact from '@/components/sections/Contact';
import ContactInfo from '@/components/sections/ContactInfo';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Work />
      <TechStack />
      <Features />
      <Testimonials />
      <BlogPreview />
      <Contact />
      <ContactInfo />
      <ScrollToTopButton />
    </main>
  );
};

export default Index;
