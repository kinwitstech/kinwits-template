import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { jobOpenings } from '@/data/jobOpenings';

const Career = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
              Join Our Team
            </p>
            <h1 className="text-4xl/[1.1] md:text-5xl/[1.1] font-medium tracking-tight mb-8">
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
      

      {/* Open Positions */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
                Opportunities
              </p>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                OPEN POSITIONS
              </h2>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((position) => (
                <div
                  key={position.id}
                  className={`bg-muted/20 p-8 rounded-sm transition-all group ${position.status === 'Open' ? 'hover:bg-muted/30 hover:shadow-md' : 'opacity-80'}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-xl md:text-2xl font-medium">{position.title}</h3>
                        <span className={`text-[10px] tracking-widest uppercase px-3 py-1 rounded-full ${position.status === 'Open' ? 'bg-green-500/10 text-green-700' : 'bg-red-500/10 text-red-700 font-medium'}`}>
                          {position.status}
                        </span>
                      </div>
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
                      className={`text-xs tracking-widest transition-colors ${position.status === 'Open' ? 'group-hover:bg-foreground group-hover:text-background' : 'opacity-40 hover:bg-transparent'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/career/${position.id}`);
                      }}
                    >
                      VIEW DETAILS
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
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
              DON'T SEE THE RIGHT ROLE?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-normal mb-12 max-w-2xl mx-auto">
              We're always interested in hearing from talented people. Send us your resume and 
              we'll get in touch if something comes up that matches your skills.
            </p>
            <a 
              href={`mailto:info@kinwits.com?subject=${encodeURIComponent('Resume Submission')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 px-12 text-xs tracking-widest font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              SEND YOUR RESUME
            </a>
          </div>
        </div>
      </section>
    </main>;
};
export default Career;