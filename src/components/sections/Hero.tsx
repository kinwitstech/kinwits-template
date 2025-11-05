import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroBg from '@/assets/hero-bg-new.jpg';
import ParticleBackground from '@/components/ParticleBackground';

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
      <div className="absolute inset-0 bg-background/85 animate-fade-in"></div>
      <ParticleBackground />
      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          Software Development / AI Solutions / Design
        </p>
        
        <div className="relative overflow-hidden mb-8 opacity-0 animate-scale-in" style={{ height: '1.2em', fontSize: 'clamp(2rem, 6vw, 6rem)', animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <h1 className="absolute inset-0 flex items-center justify-center font-medium tracking-tight text-foreground">
            <span 
              key={currentText} 
              className="animate-scroll-up inline-block whitespace-nowrap opacity-100"
            >
              {rotatingTexts[currentText]}
            </span>
          </h1>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 animate-fade-in-up opacity-0 font-normal" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          We build digital experiences that transform your business
        </p>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float opacity-0 animate-fade-in z-10"
        style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" strokeWidth={1} />
      </button>
    </section>
  );
};

export default Hero;
