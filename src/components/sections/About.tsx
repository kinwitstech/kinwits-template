import { PackageOpen, Sparkles, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import work1 from '@/assets/work-1.jpg';
import work2 from '@/assets/work-2.jpg';
import work3 from '@/assets/work-3.jpg';
import work4 from '@/assets/work-4.jpg';
import whoBg from '@/assets/who-we-are-bg.jpg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const scrollProgress = -rect.top / (rect.height / 2);
        setScrollY(scrollProgress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const values = [{
    icon: PackageOpen,
    title: 'INNOVATION',
    description: 'Pushing boundaries with cutting-edge technology and fresh ideas that transform businesses.'
  }, {
    icon: Sparkles,
    title: 'CREATIVITY',
    description: 'Turning imagination into reality through unique, inspiring solutions.'
  }, {
    icon: BadgeCheck,
    title: 'QUALITY',
    description: 'Committed to delivering work that exceeds the highest standards.'
  }];
  const navigateToAboutPage = () => {
    navigate('/about');
  };
  return <section id="about" ref={ref} className={`bg-background transition-all duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Values Section */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Values Grid */}
            <div className="text-center mb-24">
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
                We Bring Your Vision To Life
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight mb-6">
                Your partners in digital success
              </h2>
            </div>

            {/* Images Grid - Masonry Layout */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16 max-w-6xl mx-auto">
              {/* Image 1 - Medium portrait */}
              <div className="overflow-hidden rounded-2xl h-56 lg:h-68">
                <img src={work4} alt="Portfolio 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Image 2 - Tall portrait */}
              <div className="overflow-hidden rounded-2xl h-64 lg:h-80">
                <img src={work1} alt="Portfolio 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Image 3 - Wide landscape */}
              <div className="overflow-hidden rounded-2xl h-48 lg:h-52">
                <img src={work3} alt="Portfolio 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Image 4 - Tall portrait */}
              <div className="overflow-hidden rounded-2xl h-64 lg:h-80">
                <img src={work2} alt="Portfolio 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              {values.map((value, index) => <div key={value.title} className="text-center group" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="mb-8 inline-flex items-center justify-center">
                    <value.icon className="w-12 h-12 text-foreground" strokeWidth={1} />
                  </div>
                  <h3 className="text-xs font-normal tracking-widest mb-4">{value.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-normal">
                    {value.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>

      {/* WHO WE ARE Section - Full Width Dark Background */}
      <div className="w-full bg-foreground text-background py-16 md:py-20 relative bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${whoBg})`
    }}>
        <div className="absolute inset-0 bg-foreground/85"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8 lg:pr-12">
                <p className="text-[10px] tracking-widest uppercase text-background/60">
                  WHO WE ARE
                </p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-background leading-tight">
                  PASSIONATE<br />THINKERS
                </h3>
                <p className="text-base md:text-lg text-background/70 leading-relaxed font-normal max-w-md">
                  We specialize in creating bold brands and high-impact websites that cut through the noise. From visual identity to seamless digital experiences, our work is rooted in strategy, creativity, and results.
                </p>
                <Button onClick={navigateToAboutPage} variant="ghost" className="text-xs tracking-widest px-8 py-6 border-[0.5px] border-background text-background bg-transparent hover:bg-background hover:text-foreground transition-all">
                  MORE ABOUT US
                </Button>
              </div>

              {/* Right Side - Creative Image Collage */}
              <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0 lg:max-w-none">
                {/* Large Circular Image - Top Center-Right */}
                <div className="absolute top-0 right-0 w-[70%] h-[70%] rounded-full overflow-hidden border-[12px] md:border-[15px] lg:border-[18px] border-background shadow-2xl transition-transform duration-100 ease-out" style={{
                transform: `translateY(${scrollY * 20}px)`
              }}>
                  <img src={work1} alt="Our workspace" className="w-full h-full object-cover grayscale" />
                </div>
                
                {/* Rectangular Image with Dramatic Curved Top-Left - Bottom Left */}
                <div className="absolute bottom-[3%] left-0 w-[55%] h-[55%] z-10 transition-transform duration-100 ease-out" style={{
                transform: `translateY(${scrollY * -30}px)`
              }}>
                  {/* White border wrapper */}
                  <div className="relative w-full h-full bg-background -rotate-90" style={{
                  borderRadius: '40% 0 0 0'
                }}>
                    {/* Inner image with matching curve */}
                    <div className="absolute inset-[12px] md:inset-[15px] lg:inset-[18px] overflow-hidden" style={{
                    borderRadius: '38% 0 0 0'
                  }}>
                      <img src={work2} alt="Our team" className="w-full h-full object-cover grayscale rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Decorative Flower Icon - Bottom Right */}
                <div className="absolute bottom-16 right-4 md:bottom-20 md:right-12 z-20 transition-transform duration-100 ease-out" style={{
                transform: `translateY(${scrollY * 15}px) rotate(${scrollY * 10}deg)`
              }}>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;