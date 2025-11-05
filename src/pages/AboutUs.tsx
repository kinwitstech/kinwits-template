import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Users, Target, Zap, Heart } from 'lucide-react';
import work1 from '@/assets/work-1.jpg';
import work2 from '@/assets/work-2.jpg';
import work3 from '@/assets/work-3.jpg';

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of passionate designers, developers, and strategists committed to excellence in every project we undertake.'
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative digital solutions that drive growth and create lasting impact in the digital landscape.'
    },
    {
      icon: Zap,
      title: 'Our Approach',
      description: 'We combine creative thinking with technical expertise to deliver solutions that are both beautiful and functional.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, innovation, and client success are at the heart of everything we do. We build lasting partnerships.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '8+', label: 'Years Experience' },
    { number: '15+', label: 'Team Members' }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="mb-8 text-xs tracking-widest"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              BACK TO HOME
            </Button>
            
            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-8">
              BUILDING DIGITAL<br />EXPERIENCES
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-normal max-w-3xl">
              We are a creative digital agency specializing in creating bold brands and high-impact websites. 
              Our work is rooted in strategy, creativity, and results that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-4xl md:text-5xl font-medium mb-2">{stat.number}</h3>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
                  Our Story
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
                  PASSIONATE ABOUT INNOVATION
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed font-normal mb-6">
                  Founded with a vision to transform the digital landscape, we've grown from a small team 
                  of passionate creators to a full-service digital agency serving clients worldwide.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed font-normal">
                  Our journey has been defined by our commitment to pushing boundaries, embracing new 
                  technologies, and delivering exceptional results that exceed expectations.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square overflow-hidden rounded-sm">
                    <img src={work1} alt="Team" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-sm">
                    <img src={work2} alt="Office" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="pt-12">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm">
                    <img src={work3} alt="Workspace" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
                What Drives Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                OUR CORE VALUES
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="mb-6">
                    <value.icon className="w-12 h-12 text-foreground" strokeWidth={1} />
                  </div>
                  <h3 className="text-xl font-medium tracking-wide mb-4">{value.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-normal">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
              LET'S BUILD SOMETHING AMAZING TOGETHER
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-normal mb-12 max-w-2xl mx-auto">
              Ready to take your digital presence to the next level? Let's discuss your project 
              and explore how we can help you achieve your goals.
            </p>
            <Button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              variant="default"
              size="lg"
              className="text-xs tracking-widest px-12"
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
