import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Testimonials = () => {
  return (
    <AnimatedSection
      id="testimonials"
      className="py-16 md:py-20 bg-foreground text-background"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16">
            <div className="inline-block mb-8">
              <p className="text-[12px] tracking-widest uppercase text-background/80 relative">
                OUR{' '}
                <span className="relative">
                  CLIENTS
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-background"></span>
                </span>{' '}
                TESTIMONIALS
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 text-background">
              WE LET OUR WORK<br />SPEAK FIRST
            </h2>
          </div>

          <div className="py-12 border border-background/10 max-w-2xl mx-auto">
            <p className="text-lg text-background/90 tracking-wide font-normal mb-8">
              Client testimonials coming soon.
            </p>
            <button
              onClick={() => {
                const workSection = document.getElementById('work');
                if (workSection) {
                  workSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-background/80 hover:text-background transition-colors group"
            >
              SEE OUR WORK
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;
