import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const pricingPlans = [
    {
      name: 'STARTER',
      price: '$2,999',
      period: 'per project',
      description: 'Perfect for small businesses and startups looking to establish their digital presence.',
      features: [
        'Brand Strategy Consultation',
        'Responsive Web Design (5 pages)',
        'Basic SEO Optimization',
        'Mobile Optimization',
        '3 Rounds of Revisions',
        '30 Days Support',
      ],
      highlighted: false,
    },
    {
      name: 'PROFESSIONAL',
      price: '$6,999',
      period: 'per project',
      description: 'Ideal for growing businesses that need a comprehensive digital solution.',
      features: [
        'Complete Brand Strategy',
        'Custom Web Design & Development (10 pages)',
        'Advanced SEO & Analytics',
        'CMS Integration',
        'E-commerce Functionality',
        'Art Direction & Creative Assets',
        'Unlimited Revisions',
        '90 Days Priority Support',
      ],
      highlighted: true,
    },
    {
      name: 'ENTERPRISE',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations requiring extensive customization and dedicated support.',
      features: [
        'Full Brand Identity System',
        'Custom Application Development',
        'Advanced Integrations & APIs',
        'Dedicated Project Manager',
        'Performance Optimization',
        'Security Audits',
        'Multi-platform Development',
        'Ongoing Maintenance & Support',
        'Training & Documentation',
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
                PRICING PLANS
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6">
                CHOOSE YOUR PLAN
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Transparent pricing for every stage of your journey. From startups to enterprises, we have a solution that fits your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative border rounded-lg p-8 transition-all ${
                    plan.highlighted
                      ? 'border-foreground bg-foreground text-background shadow-2xl scale-105'
                      : 'border-border bg-background hover:border-foreground/50'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background text-foreground px-4 py-1 rounded-full text-[10px] tracking-widest">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-xs tracking-widest mb-4">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl md:text-6xl font-medium tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <p className={`text-xs tracking-wider ${plan.highlighted ? 'text-background/60' : 'text-muted-foreground'}`}>
                      {plan.period}
                    </p>
                  </div>

                  <p className={`text-sm leading-relaxed mb-8 ${plan.highlighted ? 'text-background/80' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-background' : 'text-foreground'}`} />
                        <span className={`text-sm ${plan.highlighted ? 'text-background' : 'text-foreground'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => navigate('/')}
                    variant={plan.highlighted ? "ghost" : "outline"}
                    className={`w-full text-xs tracking-widest ${
                      plan.highlighted
                        ? 'border-background text-background hover:bg-background hover:text-foreground'
                        : ''
                    }`}
                  >
                    GET STARTED
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
                NEED A CUSTOM SOLUTION?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                Every business is unique. Let's discuss how we can create a tailored solution for your specific needs.
              </p>
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                className="text-xs tracking-widest px-8"
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
