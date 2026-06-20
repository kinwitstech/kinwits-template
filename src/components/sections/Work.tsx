import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { projects, getProjectsByCategory, type Project } from '@/data/projects';

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => (
  <div
    className="group relative overflow-hidden bg-secondary/10 rounded-sm h-[300px] cursor-pointer"
    onClick={onClick}
  >
    <img
      src={project.thumbnail}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-foreground/88 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
      <div className="text-center">
        <p className="text-[10px] tracking-widest uppercase text-background/70 mb-3">
          {project.client}
        </p>
        <h3 className="text-xl md:text-2xl font-medium text-background mb-3">
          {project.title}
        </h3>
        <p className="text-[10px] tracking-widest uppercase text-background/50">
          {project.externalUrl ? 'VIEW ON GITHUB →' : 'VIEW CASE STUDY →'}
        </p>
      </div>
    </div>
  </div>
);

const Work = () => {
  const [activeTab, setActiveTab] = useState('ai-agents');
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const aiProjects = getProjectsByCategory('AI & Agents');
  const platformProjects = getProjectsByCategory('Platforms & Software');
  const webProjects = getProjectsByCategory('Web & Design');

  const handleCardClick = (project: Project) => {
    if (project.externalUrl) {
      window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      navigate(`/work/${project.slug}`);
    }
  };

  return (
    <section
      id="work"
      ref={ref}
      className={`py-16 md:py-20 bg-background transition-all duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[12px] tracking-widest uppercase text-muted-foreground mb-8">
              Our Portfolio
            </p>
            <h2 className="text-[30px] font-medium tracking-tight mb-6">SELECTED WORK</h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full md:w-auto mx-auto mb-12 grid grid-cols-3 gap-1 h-auto p-1">
              <TabsTrigger
                value="ai-agents"
                className="text-[9px] sm:text-xs tracking-widest px-2 py-2 whitespace-nowrap"
              >
                AI & AGENTS
              </TabsTrigger>
              <TabsTrigger
                value="platforms"
                className="text-[9px] sm:text-xs tracking-widest px-2 py-2 whitespace-nowrap"
              >
                PLATFORMS & SOFTWARE
              </TabsTrigger>
              <TabsTrigger
                value="web-design"
                className="text-[9px] sm:text-xs tracking-widest px-2 py-2 whitespace-nowrap"
              >
                WEB & DESIGN
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ai-agents" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleCardClick(project)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="platforms" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {platformProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleCardClick(project)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web-design" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => handleCardClick(project)}
                  />
                ))}
              </div>
              <p className="text-center text-[10px] tracking-widest uppercase text-muted-foreground mt-6">
                Open-source templates — click to view on GitHub
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Work;
