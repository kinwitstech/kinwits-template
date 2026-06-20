import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      title: 'AI SOLUTIONS & AGENTS',
      description:
        'LLM-powered applications, multi-agent systems, and RAG pipelines built for production. We design, train, and deploy AI that integrates cleanly with your existing data and workflows.',
    },
    {
      title: 'SOFTWARE ENGINEERING',
      description:
        'Web and mobile applications, REST and streaming APIs, and enterprise platforms — from architecture to deployment. We ship reliable software that scales.',
    },
    {
      title: 'CLOUD & DEVOPS',
      description:
        'AWS architecture design, serverless deployments (Lambda, ECS/Fargate), CI/CD pipelines, and infrastructure-as-code. We build systems that are resilient, observable, and cost-efficient.',
    },
    {
      title: 'SYSTEMS INTEGRATION',
      description:
        'CRM, EMR, and third-party API automation — connecting the tools your business already uses. We eliminate manual data entry and sync your systems in real time.',
    },
    {
      title: 'UI/UX & DESIGN',
      description:
        'Product design, design systems, and frontend engineering. We craft interfaces that are intuitive and visually sharp, grounded in user research and brand strategy.',
    },
  ];

  const stats = [
    { number: '1+', label: 'YEARS OF EXPERIENCE' },
    { number: '1+', label: 'SATISFIED CLIENTS' },
    { number: '5+', label: 'PROJECTS DELIVERED' },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className={`py-16 md:py-20 bg-muted/30 transition-all duration-[1400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Two Columns */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            {/* Left Side */}
            <div className="space-y-8">
              <div className="inline-block py-10">
                <p className="text-xs tracking-widest uppercase text-muted-foreground relative">
                  OUR SERVICES
                  <span className="absolute -bottom-1 left-0 w-3/4 h-[1px] bg-foreground"></span>
                </p>
              </div>
              <h2 className="text-[30px] font-semibold tracking-tight leading-tight">
                WHAT WE CAN DO FOR YOU
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
                We offer a{' '}
                <span className="underline decoration-1 underline-offset-4">
                  full spectrum of technical services
                </span>{' '}
                designed to take your product from idea to production — and keep it running.
              </p>
              <Button
                onClick={() => navigate('/pricing')}
                variant="outline"
                className="text-xs tracking-widest px-8"
              >
                VIEW PRICING
              </Button>
            </div>

            {/* Right Side - Accordion */}
            <div>
              <Accordion type="single" collapsible className="w-full">
                {services.map((service, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-t border-border"
                  >
                    <AccordionTrigger className="text-left text-base md:text-[17px] tracking-widest py-6 hover:no-underline font-normal">
                      {service.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed font-normal pb-6">
                      {service.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="pt-8">
            <p className="text-[12px] tracking-widest uppercase text-center text-muted-foreground mb-16">
              EARLY-STAGE — EVERY PROJECT GETS OUR FULL ATTENTION.
            </p>
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-[58px] md:text-[70px] lg:text-[94px] font-medium tracking-tight mb-4">
                    {stat.number}
                  </div>
                  <p className="text-[14px] tracking-widest uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
