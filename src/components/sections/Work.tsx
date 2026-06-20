import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { useNavigate } from 'react-router-dom';
import { projects, getProjectsByCategory, type Project } from '@/data/projects';

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={`${project.externalUrl ? 'View on GitHub' : 'View case study'}: ${project.title}`}
    className="group relative block w-full text-left overflow-hidden bg-secondary/20 rounded-sm aspect-video cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  >
    <img
      src={project.thumbnail}
      alt={`${project.title} — ${project.client}`}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-end md:items-center justify-start md:justify-center p-6 md:p-8 bg-gradient-to-t from-black/85 via-black/40 to-transparent md:bg-none md:bg-black/75 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
      <div className="text-left md:text-center">
        <p className="text-[10px] tracking-widest uppercase text-white/80 mb-2 md:mb-3">
          {project.client}
        </p>
        <h3 className="text-lg md:text-2xl font-medium text-white mb-3 md:mb-4">
          {project.title}
        </h3>
        <span className="inline-block text-[10px] tracking-widest uppercase text-white/90 border border-white/40 px-4 py-2">
          {project.externalUrl ? 'VIEW ON GITHUB →' : 'VIEW CASE STUDY →'}
        </span>
      </div>
    </div>
  </button>
);

const Work = () => {
  const [activeTab, setActiveTab] = useState('ai-agents');
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
    <AnimatedSection
      id="work"
      className="py-16 md:py-20 bg-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[12px] tracking-widest uppercase text-muted-foreground mb-8">
              Our Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">SELECTED WORK</h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full md:w-auto mx-auto mb-12 grid grid-cols-1 sm:grid-cols-3 gap-1 h-auto p-1">
              <TabsTrigger
                value="ai-agents"
                className="text-[11px] sm:text-xs tracking-widest px-3 py-2.5 whitespace-nowrap"
              >
                AI & AGENTS
              </TabsTrigger>
              <TabsTrigger
                value="platforms"
                className="text-[11px] sm:text-xs tracking-widest px-3 py-2.5 whitespace-nowrap"
              >
                PLATFORMS & SOFTWARE
              </TabsTrigger>
              <TabsTrigger
                value="web-design"
                className="text-[11px] sm:text-xs tracking-widest px-3 py-2.5 whitespace-nowrap"
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
    </AnimatedSection>
  );
};

export default Work;
