import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/ui-kinwits/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/constants";
import { useSeo } from "@/hooks/useSeo";

export default function Contact() {
  useSeo({
    title: "Let's Build Something Useful — Kinwits",
    description:
      "Tell us what you're solving. We'll bring the thinking, engineering, and ownership to build it right.",
    canonicalPath: "/contact",
  });

  return (
    <Layout>
      <section className="page-hero" aria-labelledby="pageTitle">
        <div className="wrap">
          <p className="eyebrow" data-hero>
            Let's talk
          </p>
          <h1 className="display" id="pageTitle" data-hero>
            Let's Build
            <br />
            Something Useful<span className="t-ember">.</span>
          </h1>
          <p className="lede" data-hero>
            Tell us what you're solving. We'll bring the thinking, engineering, and ownership to build it right.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: "clamp(10px,2vw,20px)", paddingBottom: "clamp(28px,4vw,44px)" }}>
        <div className="wrap">
          <Reveal className="cta-panel" style={{ textAlign: "left", padding: "clamp(30px,4.5vw,52px)" }}>
            <span className="badge-live">
              <span aria-hidden="true">●</span> FASTEST ROUTE
            </span>
            <h2 className="h2" style={{ marginTop: 16, marginInline: 0 }}>
              A quick intro. Your problem. Our thinking.
            </h2>
            <p className="lede" style={{ marginInline: 0 }}>
              The quickest way to see whether Kinwits is the right partner for what you're building.
            </p>
            <div className="cta-actions" style={{ justifyContent: "flex-start" }}>
              <a className="btn btn-light" href={`mailto:${CONTACT_EMAIL}?subject=Intro%20call`}>
                Book an Intro <span className="arr">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal as="p" className="eyebrow">
            Or write to us
          </Reveal>
          <Reveal as="h2" className="h2">
            Start a conversation.
          </Reveal>
          <ContactForm />
          <Reveal as="p" className="brandline" style={{ color: "var(--ink-soft)", marginTop: 40 }}>
            <Link to="/careers">
              CAREERS AT KINWITS →
            </Link>
            &nbsp;·&nbsp;
            <a href={`mailto:${CONTACT_EMAIL}`}>
              CONTACT THE TEAM →
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
