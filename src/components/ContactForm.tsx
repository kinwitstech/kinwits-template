import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "@/components/ui-kinwits/Reveal";

const LAMBDA_URL = import.meta.env.VITE_LAMBDA_URL;

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  problem: z.string().min(10, "Tell us a bit more about what you're building"),
  context: z.string().optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

/**
 * Matches kinwits-site-v36/contact.html's form exactly: name, email, company, problem,
 * context. The source's own form has no validation and submits via `mailto:` — this wires
 * it to the same Lambda contract as the previous contact form (see src/components/sections/Contact.tsx,
 * now retired), but with the new field shape. The Lambda itself needs a corresponding update —
 * see the conversion plan's Lambda checklist; this payload will 404/be silently dropped until
 * that lands if the endpoint still expects {name, email, subject, message}.
 */
export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(LAMBDA_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");

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
      reset();
    } catch {
      toast({
        title: "Something went wrong.",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Reveal as="form" className="form" style={{ marginTop: 28 }} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field">
        <label htmlFor="f-name">Name</label>
        <input id="f-name" type="text" autoComplete="name" {...register("name")} />
        {errors.name && (
          <p className="hint" style={{ color: "#DC2626", marginTop: 7 }}>
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" type="email" autoComplete="email" {...register("email")} />
        <p className="hint" style={{ marginTop: 7 }}>
          {errors.email ? (
            <span style={{ color: "#DC2626" }}>{errors.email.message}</span>
          ) : (
            "Any email works — no work address required."
          )}
        </p>
      </div>
      <div className="field">
        <label htmlFor="f-company">Company</label>
        <input id="f-company" type="text" autoComplete="organization" {...register("company")} />
      </div>
      <div className="field">
        <label htmlFor="f-problem">What are you trying to build or solve?</label>
        <textarea id="f-problem" {...register("problem")} />
        {errors.problem && (
          <p className="hint" style={{ color: "#DC2626", marginTop: 7 }}>
            {errors.problem.message}
          </p>
        )}
      </div>
      <div className="field">
        <label htmlFor="f-context">Optional context</label>
        <textarea id="f-context" style={{ minHeight: 90 }} {...register("context")} />
      </div>
      <div>
        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Start a Conversation"} <span className="arr">→</span>
        </button>
      </div>
    </Reveal>
  );
}
