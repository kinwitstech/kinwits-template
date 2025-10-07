import work1 from '@/assets/work-1.jpg';
import work2 from '@/assets/work-2.jpg';
import work3 from '@/assets/work-3.jpg';
import work4 from '@/assets/work-4.jpg';
import work5 from '@/assets/work-5.jpg';
import work6 from '@/assets/work-6.jpg';

const Work = () => {
  const projects = [
    { image: work1, title: 'E-Commerce Platform', category: 'Web Development', height: 'tall' },
    { image: work2, title: 'Brand Identity', category: 'Design', height: 'short' },
    { image: work3, title: 'Mobile Banking App', category: 'Mobile Development', height: 'tall' },
    { image: work4, title: 'AI Dashboard', category: 'AI Solutions', height: 'short' },
    { image: work5, title: 'Corporate Website', category: 'Web Design', height: 'short' },
    { image: work6, title: 'SaaS Platform', category: 'Software Development', height: 'short' }
  ];

  return (
    <section id="work" className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
              Our Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-6">
              SELECTED WORK
            </h2>
          </div>

          {/* Grid Layout with uniform cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden bg-secondary/10 rounded-sm aspect-[4/3]`}
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
                    <h3 className="text-lg md:text-xl font-light text-background">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
