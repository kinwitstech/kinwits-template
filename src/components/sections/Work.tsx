import work1 from '@/assets/work-1.jpg';
import work2 from '@/assets/work-2.jpg';
import work3 from '@/assets/work-3.jpg';
import work4 from '@/assets/work-4.jpg';
import work5 from '@/assets/work-5.jpg';
import work6 from '@/assets/work-6.jpg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Work = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const { ref, isVisible } = useScrollAnimation();

  const templatesProjects = [
    { image: work1, title: 'Modern E-Commerce', category: 'E-Commerce Template' },
    { image: work2, title: 'Portfolio Theme', category: 'Portfolio Template' },
    { image: work3, title: 'SaaS Landing Page', category: 'Business Template' }
  ];

  const softwaresProjects = [
    { image: work5, title: 'CRM System', category: 'Business Software' }
  ];

  const aiAgentsProjects = [
    { image: work6, title: 'Code Review Assistant', category: 'AI Developer Tool' }
  ];

  return (
    <section id="work" ref={ref} className={`py-16 md:py-20 bg-background transition-all duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[12px] tracking-widest uppercase text-muted-foreground mb-8">
              Our Portfolio
            </p>
            <h2 className="text-[30px] font-medium tracking-tight mb-6">
              SELECTED WORK
            </h2>
          </div>

          {/* Tabs Section */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full md:w-auto mx-auto mb-12 grid grid-cols-3 gap-2">
              <TabsTrigger value="templates" className="text-xs tracking-widest">
                TEMPLATES
              </TabsTrigger>
              <TabsTrigger value="softwares" className="text-xs tracking-widest">
                SOFTWARES
              </TabsTrigger>
              <TabsTrigger value="ai-agents" className="text-xs tracking-widest">
                AI AGENTS
              </TabsTrigger>
            </TabsList>

            <TabsContent value="templates" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {templatesProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden bg-secondary/10 rounded-sm h-[300px]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                      <div className="text-center">
                        <p className="text-[10px] tracking-widest uppercase text-background/70 mb-3">
                          {project.category}
                        </p>
                        <h3 className="text-xl md:text-2xl font-medium text-background">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="softwares" className="mt-0">
              <div className="flex justify-center">
                {softwaresProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden bg-secondary/10 rounded-sm w-full md:w-1/3 h-[300px]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                      <div className="text-center">
                        <p className="text-[10px] tracking-widest uppercase text-background/70 mb-3">
                          {project.category}
                        </p>
                        <h3 className="text-xl md:text-2xl font-medium text-background">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai-agents" className="mt-0">
              <div className="flex justify-center">
                {aiAgentsProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden bg-secondary/10 rounded-sm w-full md:w-1/3 h-[300px]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                      <div className="text-center">
                        <p className="text-[10px] tracking-widest uppercase text-background/70 mb-3">
                          {project.category}
                        </p>
                        <h3 className="text-xl md:text-2xl font-medium text-background">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Work;
