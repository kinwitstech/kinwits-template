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
    { image: work3, title: 'SaaS Landing Page', category: 'Business Template' },
    { image: work4, title: 'Blog Platform', category: 'Content Template' }
  ];

  const softwaresProjects = [
    { image: work5, title: 'CRM System', category: 'Business Software' },
    { image: work6, title: 'Project Manager', category: 'Productivity Tool' },
    { image: work1, title: 'Invoice Generator', category: 'Finance Software' },
    { image: work2, title: 'Team Collaboration', category: 'Communication Tool' }
  ];

  const aiAgentsProjects = [
    { image: work3, title: 'Customer Support Bot', category: 'AI Assistant' },
    { image: work4, title: 'Content Generator', category: 'AI Writer' },
    { image: work5, title: 'Data Analytics Agent', category: 'AI Analytics' },
    { image: work6, title: 'Code Review Assistant', category: 'AI Developer Tool' }
  ];

  return (
    <section id="work" ref={ref} className={`py-32 md:py-40 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
              Our Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight mb-6">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templatesProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden bg-secondary/10 rounded-sm aspect-[4/3]"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softwaresProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden bg-secondary/10 rounded-sm aspect-[4/3]"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiAgentsProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden bg-secondary/10 rounded-sm aspect-[4/3]"
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
