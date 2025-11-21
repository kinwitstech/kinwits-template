import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroBg from '@/assets/hero-bg-new.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = [
    'KINWITS TECH',
    'SOFTWARE DEVELOPERS',
    'AI INNOVATORS',
    'DESIGN EXPERTS',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-background/85"></div>
      <div className="container mx-auto px-6 text-center relative z-10 -mt-16">
        <p className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground mb-8 opacity-0 animate-fade-in-up">
          Software Development / AI Solutions / Design
        </p>
        
        <div className="relative overflow-hidden mb-8 opacity-0 animate-fade-in-up h-[1.2em]" style={{ animationDelay: '200ms' }}>
          <h1 className="absolute inset-0 flex items-center justify-center font-medium tracking-tight text-foreground text-[28px] sm:text-[36px] md:text-[42px] lg:text-[47px]">
            <span 
              key={currentText} 
              className="animate-scroll-up inline-block whitespace-nowrap opacity-100"
            >
              {rotatingTexts[currentText]}
            </span>
          </h1>
        </div>
        
        <p className="text-[11px] text-muted-foreground max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in-up font-normal" style={{ animationDelay: '400ms' }}>
          WE CRAFT SOFTWARE, DESIGN UNIQUE DIGITAL EXPERIENCES, AND EMPOWER AI TO ELEVATE YOUR BUSINESS
        </p>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-float z-10"
        style={{ animationDelay: '400ms' }}
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" strokeWidth={1} />
      </button>
    </section>
  );
};

export default Hero;
