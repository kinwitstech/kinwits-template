import { Trophy, ShieldCheck, Laptop } from 'lucide-react';

const Features = () => {
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
    <section className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-16 items-start">
            {/* Title Section */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                WHY WE ARE<br />DIFFERENT
              </h2>
              <div className="w-16 h-0.5 bg-foreground"></div>
            </div>

            {/* Features Grid */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-6">
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
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
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
