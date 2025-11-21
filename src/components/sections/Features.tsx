import { Trophy, ShieldCheck, Laptop } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const features = [
    {
      icon: Trophy,
      title: 'UNIQUE DESIGN',
      description: 'We create unique clean and minimal designs.'
    },
    {
      icon: ShieldCheck,
      title: 'QUALITY CODE',
      description: 'Built to look great and perform flawlessly.'
    },
    {
      icon: Laptop,
      title: 'MINIMALIST',
      description: 'Every element enhances user experience.'
    }
  ];

  return (
    <section id="features" ref={ref} className={`py-16 md:py-20 bg-muted/30 transition-all duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 items-start">
            {/* Title Section */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                WHY WE ARE<br />DIFFERENT
              </h2>
              <div className="w-16 h-0.5 bg-foreground"></div>
            </div>

            {/* Features Grid */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center md:text-left group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center md:justify-start mb-6">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <feature.icon 
                        className="w-12 h-12 text-foreground transition-transform duration-300 group-hover:scale-110" 
                        strokeWidth={1}
                      />
                    </div>
                  </div>
                  <h3 className="text-xs tracking-widest uppercase mb-4 font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-base text-muted-foreground font-normal leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
