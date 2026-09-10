import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/ui-kinwits/Reveal";
import { ChipList } from "@/components/ui-kinwits/ChipList";
import { bookingLinkProps } from "@/lib/constants";
import { useSeo } from "@/hooks/useSeo";

const STORY = [
  {
    heading: "The problem",
    body: "Healthcare and wellness practices run on complex workflows, disconnected systems and growing administrative demands — the day-to-day work that pulls teams away from patients.",
  },
  {
    heading: "What we built",
    body: "A clinical AI agent developed with a US healthcare client — designed around a real workflow, not a generic AI use case, and engineered through to production.",
  },
  {
    heading: "What it does",
    body: "It works inside the practice's existing workflow and systems: taking on the manual, repeatable steps, with human review where the workflow requires it.",
  },
  {
    heading: "Why it matters",
    body: "Practical outcomes over generic AI claims: less manual coordination, a workflow that runs faster, and a system the team actually uses every day.",
  },
];

const PILLARS = [
  {
    title: "Partnership",
    body: "We work as an extension of your team — from understanding the workflow to owning the solution.",
  },
  {
    title: "Agility & Access",
    body: "Direct access to the people doing the work, transparent communication and fast decisions.",
  },
  {
    title: "Senior Expertise",
    body: "Experienced product and technology professionals who take solutions into production — and keep improving them.",
  },
];

/**
 * Off-nav campaign landing page — only reachable from Home's hero slide 2 ("See Our Work").
 * The source itself flags this page "V3 rewrite ON HOLD": its "who it's for" chips are patched
 * with ad-hoc inline styles instead of a scoped class (built here with ChipList's onLight variant
 * instead — same visual result, no repeated inline styles). The H1 deliberately does *not* use
 * .display, matching the source exactly — this headline is long enough that the site-wide giant
 * treatment overwhelmed the page, so the source's own plain .page-hero h1 sizing is correct here,
 * not an inconsistency to fix.
 */
export default function Healthcare() {
  useSeo({
    title: "AI Agents for Healthcare and Wellness Practices — Kinwits",
    description:
      "Practical AI and software built around the workflows healthcare and wellness teams actually use. A real clinical AI system, in production.",
    canonicalPath: "/healthcare",
  });

  return (
    <Layout>
      <section className="page-hero" aria-labelledby="pageTitle">
        <div className="wrap">
          <p className="eyebrow" data-hero>
            Healthcare &amp; Wellness
          </p>
          <h1 id="pageTitle" data-hero>
            AI agents for healthcare &amp; wellness practices.
          </h1>
          <p className="lede" data-hero>
            We build practical AI and software solutions around the workflows healthcare and wellness teams
            actually use — helping practices reduce manual work, improve operational efficiency and bring
            intelligent capabilities into production.
          </p>
          <div className="hero-ctas" data-hero>
            <a className="btn" {...bookingLinkProps()}>
              Book an Intro <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* proof band */}
      <section className="band sec" style={{ paddingBlock: "clamp(44px,6vw,72px)" }}>
        <div className="wrap">
          <Reveal as="p" className="eyebrow">
            Proof
          </Reveal>
          <Reveal as="h2" className="h2">
            A real clinical AI system, in production.
          </Reveal>
          <Reveal as="p" className="lede">
            Our healthcare AI agent is live in production and used daily by physicians.
          </Reveal>
          <Reveal>
            <ChipList
              items={["CLINICAL WORKFLOW", "AI AGENT", "INTEGRATION", "HUMAN REVIEW"]}
              aria-label="Focus areas"
              style={{ marginTop: 20 }}
            />
          </Reveal>
        </div>
      </section>

      {/* the story for this audience */}
      <section className="sec">
        <div className="wrap">
          <div className="story">
            {STORY.map(({ heading, body }, i) => (
              <div key={heading}>
                <Reveal as="h2" style={i === 0 ? { marginTop: 0 } : undefined}>
                  {heading}
                </Reveal>
                <Reveal as="p">{body}</Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how Kinwits works */}
      <section className="sec sec-mist">
        <div className="wrap">
          <div className="sec-head">
            <Reveal as="p" className="eyebrow">
              How Kinwits works
            </Reveal>
            <Reveal as="h2" className="h2">
              Partnership, direct access, senior expertise and fast execution.
            </Reveal>
          </div>
          <div className="pillars">
            {PILLARS.map((pillar) => (
              <Reveal as="article" className="pillar" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* who it's for — audience list is subject to ICP confirmation */}
      <section className="sec">
        <div className="wrap">
          <Reveal as="p" className="eyebrow">
            Who it's for
          </Reveal>
          <Reveal as="h2" className="h2">
            Built for the people running the practice.
          </Reveal>
          <Reveal>
            <ChipList
              items={["CLINICS", "MEDICAL PRACTICES", "WELLNESS & MED-SPA OPERATORS", "ADJACENT ORGANISATIONS"]}
              variant="onLight"
            />
          </Reveal>
        </div>
      </section>

      {/* demo CTA — the primary sales mechanism */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="cta-panel">
            <h2 className="h2">See the live clinical AI agent.</h2>
            <p className="lede">A quick demonstration of real, in-production work — and a conversation about your workflow.</p>
            <div className="cta-actions">
              <a className="btn btn-light" {...bookingLinkProps()}>
                Book an Intro <span className="arr">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
