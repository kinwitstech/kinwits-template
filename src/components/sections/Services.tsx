import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      title: 'BRAND STRATEGY',
      description: 'Developing comprehensive brand strategies that define your unique market position and resonate with your target audience.'
    },
    {
      title: 'WEB DESIGN',
      description: 'Visually stunning and functional designs that drive engagement. Responsive design, user interfaces, and brand identity.'
    },
    {
      title: 'ART DIRECTION',
      description: 'Creative direction that brings your vision to life through compelling visual storytelling and cohesive brand aesthetics.'
    },
    {
      title: 'WEB DEVELOPMENT',
      description: 'Scalable, secure software solutions tailored to your business needs. Web applications, mobile apps, and enterprise software.'
    },
    {
      title: 'MARKETING',
      description: 'Data-driven strategies that deliver measurable results. SEO, content marketing, and social media campaigns.'
    }
  ];

  const stats = [
    { number: '15+', label: 'YEARS OF EXPERIENCE' },
    { number: '75+', label: 'SATISFIED CUSTOMERS' },
    { number: '250+', label: 'SUCCESSFULL PROJECTS' }
  ];

  return (
    <section id="services" className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Two Columns */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
            {/* Left Side - Heading and Description */}
            <div className="space-y-8">
              <div className="inline-block">
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground relative">
                  OUR SERVICES
                  <span className="absolute -bottom-1 left-0 w-3/4 h-[1px] bg-foreground"></span>
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-tight">
                WHAT WE CAN DO FOR YOU
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
                We offer a <span className="underline decoration-1 underline-offset-4">full spectrum of creative services</span> designed to elevate your brand and bring your vision to life.
              </p>
            </div>

            {/* Right Side - Accordion */}
            <div>
              <Accordion type="single" collapsible className="w-full">
                {services.map((service, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-t border-border">
                    <AccordionTrigger className="text-left text-sm md:text-base tracking-widest py-8 hover:no-underline font-normal">
                      {service.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed font-normal pb-8">
                      {service.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="pt-8">
            <p className="text-[10px] tracking-widest uppercase text-center text-muted-foreground mb-16">
              OUR WORK ISN'T JUST ABOUT CREATING - IT'S ABOUT MAKING A DIFFERENCE.
            </p>
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-4">
                    {stat.number}
                  </div>
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground">
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
