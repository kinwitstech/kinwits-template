import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/ui-kinwits/Reveal";
import { CONTACT_EMAIL } from "@/lib/constants";
import { useSeo } from "@/hooks/useSeo";

export default function Careers() {
  useSeo({
    title: "Come Build With Us — Careers at Kinwits",
    description:
      "We're building a small, ambitious engineering company where people have the opportunity to make a real impact.",
    canonicalPath: "/careers",
  });

  return (
    <Layout>
      <section className="page-hero" aria-labelledby="pageTitle" style={{ paddingBottom: "clamp(20px,3vw,36px)" }}>
        <div className="wrap">
          <p className="eyebrow" data-hero>
            Careers
          </p>
          <h1 className="display" id="pageTitle" data-hero>
            Come Build
            <br />
            With Us<span className="t-ember">.</span>
          </h1>
          <p className="lede" data-hero>
            We're building a small, ambitious engineering company where people have the opportunity to make a real
            impact.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="careers-band">
            <p className="eyebrow" style={{ color: "var(--ink)" }}>
              How it works here
            </p>
            <div className="stepper" aria-label="Idea to impact">
              <span>IDEA</span>
              <i aria-hidden="true">→</i>
              <span>CODE</span>
              <i aria-hidden="true">→</i>
              <span>PRODUCT</span>
              <i aria-hidden="true">→</i>
              <span>IMPACT</span>
            </div>
            <p style={{ marginTop: 26, maxWidth: "36em", fontWeight: 500 }}>
              No open roles are listed right now — but we always want to hear from strong engineers and product
              thinkers. Tell us what you'd build.
            </p>
            <div className="sec-cta">
              <a
                className="btn"
                style={{ background: "var(--ink)", borderColor: "var(--ink)" }}
                href={`mailto:${CONTACT_EMAIL}?subject=Careers%20at%20Kinwits`}
              >
                Write to Us <span className="arr">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
