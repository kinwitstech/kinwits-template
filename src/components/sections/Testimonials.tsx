import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      quote: "This is template is so beautiful and has such wonderful new options. It is updated often which gives me even more quality. The support is one of the absolute best I've ever had the pleasure of interacting with. Quick, courteous, and extremely helpful!",
      author: "ADAM PETERSON",
      role: "BUSINESS OWNER",
      initials: "AP"
    },
    {
      quote: "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched. They delivered beyond our expectations!",
      author: "SARAH KLEIN",
      role: "MARKETING DIRECTOR",
      initials: "SK"
    },
    {
      quote: "The professionalism and creativity they bring to every project is outstanding. Our brand has never looked better. Highly recommended!",
      author: "MICHAEL JOHNSON",
      role: "CEO",
      initials: "MJ"
    },
    {
      quote: "Exceptional service from start to finish. They truly understand what it takes to create a memorable digital experience. Our website engagement has doubled!",
      author: "LISA RODRIGUEZ",
      role: "PRODUCT MANAGER",
      initials: "LR"
    },
    {
      quote: "Innovative solutions and flawless execution. They transformed our vision into reality and exceeded all our goals. A truly remarkable team!",
      author: "JAMES DAVIS",
      role: "FOUNDER",
      initials: "JD"
    }
  ];

  return (
    <section ref={ref} className={`py-32 md:py-40 bg-foreground text-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-block mb-8">
              <p className="text-[10px] tracking-widest uppercase text-background/60 relative">
                OUR <span className="relative">
                  CLIENTS
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-background"></span>
                </span> TESTIMONIALS
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight mb-12 text-background">
              TRUSTED BY LEADING<br />EXPERTS
            </h2>
          </div>

          {/* Avatars */}
          <div className="flex justify-center items-center gap-4 mb-12">
            {testimonials.map((testimonial, index) => (
              <Avatar 
                key={index} 
                className={`w-14 h-14 md:w-16 md:h-16 border-2 transition-all duration-300 ${
                  activeIndex === index 
                    ? 'border-background scale-110' 
                    : 'border-background/20 hover:border-background/40'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <AvatarImage src="" />
                <AvatarFallback className="bg-background/10 text-background text-xs font-light">
                  {testimonial.initials}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>

          {/* Testimonial */}
          <div className="space-y-8">
            <div className="inline-block mb-6">
              <Quote className="w-8 h-8 text-background/40" />
            </div>
            <p className="text-lg md:text-xl text-background/80 leading-relaxed font-normal max-w-3xl mx-auto transition-all duration-500">
              {testimonials[activeIndex].quote}
            </p>
            <div className="pt-6">
              <p className="text-sm tracking-widest font-normal mb-2">
                {testimonials[activeIndex].author}
              </p>
              <p className="text-[10px] tracking-widest uppercase text-background/60">
                {testimonials[activeIndex].role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
