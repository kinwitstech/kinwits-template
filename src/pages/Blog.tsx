import Navigation from '@/components/Navigation';
import { useEffect } from 'react';
import { PenLine } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

const Blog = () => {
  useSeo({
    title: 'Blog & Insights',
    description: 'Thoughts on AI, software engineering, cloud architecture, and building for the web — from the Kinwits team.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
              Insights & Updates
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-8">
              OUR BLOG
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-normal max-w-3xl mx-auto">
              Thoughts on AI, software engineering, cloud architecture, and building
              products that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <PenLine className="w-10 h-10 text-muted-foreground mb-10" strokeWidth={1} />
            <p className="text-[12px] tracking-widest uppercase text-muted-foreground mb-6">
              COMING SOON
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
              INSIGHTS ON THE WAY
            </h2>
            <p className="text-base text-muted-foreground font-normal leading-relaxed max-w-xl">
              We're documenting what we learn building AI systems, healthcare platforms, and cloud infrastructure.
              Our first articles are in progress — check back soon, or{' '}
              <a
                href="mailto:info@kinwits.com"
                className="text-foreground underline underline-offset-4"
              >
                reach out directly
              </a>{' '}
              if you want to talk shop now.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
