import { Link } from "react-router-dom";
import { Reveal, RevealGroup } from "@/components/ui-kinwits/Reveal";

interface InsightPost {
  to: string;
  meta: string;
  title: string;
  excerpt: string;
}

const POSTS: InsightPost[] = [
  {
    to: "/insights/clinical-ai-past-the-demo",
    meta: "JUL 13, 2026 · 7 MIN · PRODUCTION AI",
    title: "What it takes to get a clinical AI agent past the demo",
    excerpt:
      "The demo is the easy part. Everything that decides whether a clinical agent survives contact with an actual practice happens after it.",
  },
  {
    to: "/insights/hipaa-ai-aws-architecture",
    meta: "JUL 6, 2026 · 8 MIN · ARCHITECTURE",
    title: "HIPAA-compliant AI on AWS: the architecture decisions",
    excerpt:
      "Which decisions actually matter when you are running language models over protected health information, and which ones are theater.",
  },
  {
    to: "/insights/emr-integration",
    meta: "JUN 29, 2026 · 6 MIN · INTEGRATION",
    title: "Why EMR integration is where healthcare projects die",
    excerpt: "Everyone scopes the model and the interface. Almost nobody scopes the part that consumes most of the budget.",
  },
];

export function InsightsPreviewSection() {
  return (
    // Source uses id="insTitle" + aria-labelledby to name this section from its own <h2>,
    // which also carries data-reveal — same as TestimonialSection, Reveal only forwards
    // `className`/`children` so it can't carry insTitle's id; aria-label is the equivalent.
    <section className="sec sec-mist" id="insights" aria-label="Built. Learned. Shared.">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Insights
        </Reveal>
        <Reveal as="h2" className="display" display>
          Built. Learned.
          <br />
          Shared<span className="t-royal">.</span>
        </Reveal>
        <Reveal as="p" className="lede">
          Practical insights from the problems we solve and the products we build.
        </Reveal>
        <RevealGroup as="div" className="blog-grid">
          {POSTS.map((post) => (
            // RevealItem can't carry `to`, since it only forwards className/children (like
            // Reveal above) — data-sitem is set directly on the Link instead, which the
            // parent RevealGroup's `querySelectorAll("[data-sitem]")` picks up all the same.
            <Link key={post.to} className="post-card" to={post.to} data-sitem="">
              <span className="meta">{post.meta}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="rd">Read →</span>
            </Link>
          ))}
        </RevealGroup>
        <Reveal as="div" className="sec-cta">
          <Link className="link-arrow" to="/insights">
            Explore Insights <span className="arr">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
