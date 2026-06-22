import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';

const LAMBDA_URL = import.meta.env.VITE_LAMBDA_URL;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    setIsSubmitting(true);
    try {
      const res = await fetch(LAMBDA_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          subject: data.get('subject'),
          message: data.get('message'),
        }),
      });

      if (!res.ok) throw new Error('Failed');

      toast({
        title: (
          <span className="flex items-center gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </span>
            Message sent!
          </span>
        ) as unknown as string,
        description: "We'll get back to you soon.",
      });
      form.reset();
    } catch {
      toast({ title: "Something went wrong.", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[12px] tracking-widest uppercase text-muted-foreground mb-8">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-base text-muted-foreground font-normal">
              Ready to start your project? Send us a message.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="sr-only">Name</label>
                <Input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="NAME"
                  required
                  autoComplete="name"
                  className="bg-background border-border text-base"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <Input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  required
                  autoComplete="email"
                  className="bg-background border-border text-base"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="sr-only">Subject</label>
              <Input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="SUBJECT"
                required
                className="bg-background border-border text-base"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">Message</label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="MESSAGE"
                required
                rows={8}
                className="bg-background border-border text-base resize-none"
              />
            </div>
            <div className="text-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-6 text-xs tracking-widest"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
