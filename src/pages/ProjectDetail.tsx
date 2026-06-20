import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { getProjectBySlug } from '@/data/projects';
import { useSeo } from '@/hooks/useSeo';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug ?? '');

  useSeo({
    title: project ? `${project.title} — ${project.client}` : 'Project Not Found',
    description: project?.summary,
  });

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 lg:px-12 pt-40 text-center">
          <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-6">404</p>
          <h1 className="text-4xl font-medium tracking-tight mb-8">Project Not Found</h1>
          <Button onClick={() => navigate('/#work')} variant="outline" className="tracking-widest text-xs">
            BACK TO WORK
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => navigate('/#work')}
              className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-12 group"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              BACK TO WORK
            </button>

            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-6">
              {project.category} — {project.client}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
              {project.title.toUpperCase()}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-normal max-w-3xl">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Thumbnail */}
      <section className="bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-[16/7] overflow-hidden rounded-sm">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-4 relative inline-block">
                THE CHALLENGE
                <span className="absolute -bottom-1 left-0 w-3/4 h-[1px] bg-foreground"></span>
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 md:py-32 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-4 relative inline-block">
                OUR SOLUTION
                <span className="absolute -bottom-1 left-0 w-3/4 h-[1px] bg-foreground"></span>
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-12 relative inline-block">
              KEY HIGHLIGHTS
              <span className="absolute -bottom-1 left-0 w-3/4 h-[1px] bg-foreground"></span>
            </p>
            <ul className="space-y-6">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-6 items-start border-t border-border pt-6">
                  <span className="text-[10px] tracking-widest text-muted-foreground mt-1 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base font-normal leading-relaxed">{highlight}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-background/60 mb-12 relative inline-block">
              TECH STACK
              <span className="absolute -bottom-1 left-0 w-3/4 h-[1px] bg-background"></span>
            </p>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-background/20 text-[11px] tracking-widest uppercase text-background/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                HAVE A SIMILAR PROJECT?
              </h2>
              <p className="text-muted-foreground font-normal">
                Let's talk about what we can build together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-foreground text-[11px] tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
                >
                  VIEW ON GITHUB
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <Link to="/#contact">
                <Button className="tracking-widest text-xs px-8">
                  START A PROJECT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
