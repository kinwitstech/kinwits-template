import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" ref={ref} className={`py-32 md:py-40 bg-secondary/30 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-8">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight mb-6">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-base text-muted-foreground font-normal">
              Ready to start your project? Send us a message.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input 
                  type="text" 
                  placeholder="NAME" 
                  required 
                  className="bg-background border-border text-sm"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="EMAIL" 
                  required 
                  className="bg-background border-border text-sm"
                />
              </div>
            </div>
            <div>
              <Input 
                type="text" 
                placeholder="SUBJECT" 
                required 
                className="bg-background border-border text-sm"
              />
            </div>
            <div>
              <Textarea 
                placeholder="MESSAGE" 
                required 
                rows={8} 
                className="bg-background border-border text-sm resize-none"
              />
            </div>
            <div className="text-center pt-4">
              <Button 
                type="submit" 
                className="px-12 py-6 text-xs tracking-widest"
              >
                SEND MESSAGE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
