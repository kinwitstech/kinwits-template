import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Melbourne',
      type: 'Full-time',
      description: 'We are looking for an experienced full-stack developer to join our growing engineering team.'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Melbourne',
      type: 'Full-time',
      description: 'Join our design team to create beautiful and intuitive digital experiences for our clients.'
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help us build cutting-edge AI solutions and integrate machine learning into our products.'
    },
    {
      title: 'Project Manager',
      department: 'Operations',
      location: 'Melbourne',
      type: 'Full-time',
      description: 'Lead cross-functional teams to deliver exceptional results for our clients.'
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Flexible working hours',
    'Remote work options',
    'Health insurance',
    'Professional development budget',
    'Modern tech stack',
    'Collaborative culture',
    'Exciting projects'
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
              Join Our Team
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-8">
              BUILD YOUR<br />CAREER WITH US
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-normal max-w-3xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation.
              Join us and help shape the future of digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                WHAT WE OFFER
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-background p-6 rounded-sm text-center"
                >
                  <p className="text-sm font-normal">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
                Opportunities
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                OPEN POSITIONS
              </h2>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div 
                  key={index} 
                  className="bg-muted/20 p-8 rounded-sm hover:bg-muted/30 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-medium mb-4">{position.title}</h3>
                      <p className="text-base text-muted-foreground mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="outline"
                      className="text-xs tracking-widest group-hover:bg-foreground group-hover:text-background transition-colors"
                    >
                      APPLY NOW
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-40 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
              DON'T SEE THE RIGHT ROLE?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-normal mb-12 max-w-2xl mx-auto">
              We're always interested in hearing from talented people. Send us your resume and 
              we'll get in touch if something comes up that matches your skills.
            </p>
            <Button
              variant="default"
              size="lg"
              className="text-xs tracking-widest px-12"
            >
              SEND YOUR RESUME
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Career;
