import { PackageOpen, Sparkles, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import abstractNetwork from '@/assets/abstract-network.svg';
import abstractWaves from '@/assets/abstract-waves.svg';
import abstractArcs from '@/assets/abstract-arcs.svg';
import abstractGrid from '@/assets/abstract-grid.svg';
import whoBg from '@/assets/who-we-are-bg.jpg';
import aboutWorkspace from '@/assets/about-workspace.png';
import aboutTeam from '@/assets/about-team.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
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
  return <AnimatedSection id="about" className="bg-background">
      {/* Values Section */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Values Grid */}
            <div className="text-center mb-24">
              <p className="text-[12px] tracking-widest uppercase text-muted-foreground mb-8">
                We Bring Your Vision To Life
              </p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                YOUR PARTNERS IN DIGITAL SUCCESS
              </h2>
            </div>

            {/* Images Grid - Masonry Layout */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
              {/* Abstract visual 1 - node network (AI) */}
              <div className="overflow-hidden rounded-2xl h-56 lg:h-68">
                <img src={abstractNetwork} alt="" aria-hidden="true" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Abstract visual 2 - flowing lines */}
              <div className="overflow-hidden rounded-2xl h-64 lg:h-80">
                <img src={abstractWaves} alt="" aria-hidden="true" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Abstract visual 3 - concentric arcs */}
              <div className="overflow-hidden rounded-2xl h-48 lg:h-52">
                <img src={abstractArcs} alt="" aria-hidden="true" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              {/* Abstract visual 4 - dot grid (systems) */}
              <div className="overflow-hidden rounded-2xl h-64 lg:h-80">
                <img src={abstractGrid} alt="" aria-hidden="true" loading="lazy" decoding="async" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
      <div className="w-full text-background py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(${whoBg})`,
          backgroundAttachment: 'fixed'
        }}></div>
        <div className="absolute inset-0 bg-foreground/85"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8 lg:pr-12">
                <p className="text-[12px] tracking-widest uppercase text-background/80">
                  WHO WE ARE
                </p>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-background leading-tight">
                  PASSIONATE<br />THINKERS
                </h3>
                <p className="text-[15px] md:text-[17px] text-background/90 leading-relaxed font-normal">
                  At Kinwits Tech, we believe in the power of design and technology to transform businesses. With 15+ years of experience in software development and a team of seasoned professionals, we bring a unique blend of expertise and innovation to every project. Our mission is to deliver solutions that not only meet but exceed our clients' expectations, helping them thrive in the digital world.
                </p>
                <Button onClick={navigateToAboutPage} variant="ghost" className="text-[11px] tracking-widest px-6 py-6 border-[0.5px] border-background text-background bg-transparent hover:bg-background hover:text-foreground transition-all">
                  MORE ABOUT US
                </Button>
              </div>

              {/* Right Side - Creative Image Collage */}
              <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0 lg:max-w-none">
                {/* Large Circular Image - Top Right */}
                <div className="absolute top-0 right-0 w-[65%] h-[65%] rounded-full overflow-hidden border-[2px] border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-transform duration-100 ease-out" style={{
                transform: `translateY(${scrollY * 20}px)`
              }}>
                  <img src={aboutWorkspace} alt="Our workspace" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                </div>
                
                {/* Rectangular Image - Bottom Left */}
                <div className="absolute bottom-[5%] left-0 w-[58%] h-[55%] z-10 transition-transform duration-100 ease-out" style={{
                transform: `translateY(${scrollY * -30}px)`
              }}>
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-[2px] border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                    <img src={aboutTeam} alt="Our team" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                {/* Decorative accent dot */}
                <div className="absolute top-[60%] left-[55%] w-3 h-3 rounded-full bg-white/30 blur-[1px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>;
};
export default About;