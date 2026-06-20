import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PenLine } from "lucide-react";

const BlogPreview = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="blog"
      ref={ref}
      className={`py-16 md:py-20 bg-muted/30 transition-all duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <p className="text-[12px] tracking-widest uppercase text-muted-foreground relative">
                OUR{' '}
                <span className="relative">
                  LATEST
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground"></span>
                </span>{' '}
                INSIGHTS
              </p>
            </div>
            <h2 className="text-[30px] font-medium tracking-tight mb-6">BLOG & UPDATES</h2>
          </div>

          {/* Coming Soon */}
          <div className="flex flex-col items-center justify-center py-24 border border-border">
            <PenLine className="w-8 h-8 text-muted-foreground mb-8" strokeWidth={1} />
            <p className="text-[12px] tracking-widest uppercase text-muted-foreground mb-3">
              COMING SOON
            </p>
            <p className="text-base text-muted-foreground font-normal mb-10 max-w-md text-center">
              We're working on insights about AI, software engineering, and cloud architecture. Check back soon.
            </p>
            <Button
              onClick={() => navigate('/blog')}
              variant="outline"
              className="tracking-widest text-xs"
            >
              VISIT BLOG
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
