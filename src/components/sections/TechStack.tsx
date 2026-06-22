import AnimatedSection from '@/components/AnimatedSection';

const technologies = [
  'React & Next.js',
  'TypeScript',
  'Python & FastAPI',
  'LangGraph & Anthropic Claude',
  'AWS (ECS · Lambda · Bedrock)',
  'PostgreSQL',
  'Tailwind CSS',
  'Vite',
];

const TechStack = () => {
  return (
    <AnimatedSection className="py-12 md:py-16 border-y border-border bg-muted/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-widest uppercase text-muted-foreground text-center mb-8">
            TECHNOLOGIES WE WORK WITH
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TechStack;
