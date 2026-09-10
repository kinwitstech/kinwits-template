import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { RevealGroup } from "@/components/ui-kinwits/Reveal";
import { insights } from "@/data/insights";
import { useSeo } from "@/hooks/useSeo";

export default function Insights() {
  useSeo({
    title: "Built. Learned. Shared. — Kinwits Insights",
    description: "Practical insights from the problems we solve and the products we build.",
    canonicalPath: "/insights",
  });

  return (
    <Layout>
      <section className="page-hero" aria-labelledby="pageTitle">
        <div className="wrap">
          <p className="eyebrow" data-hero>
            Insights
          </p>
          <h1 className="display" id="pageTitle" data-hero>
            Built. Learned.
            <br />
            Shared<span className="t-royal">.</span>
          </h1>
          <p className="lede" data-hero>
            Practical insights from the problems we solve and the products we build.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: "clamp(10px,2vw,20px)" }}>
        <div className="wrap">
          <RevealGroup className="blog-grid">
            {insights.map((insight) => (
              <Link key={insight.slug} className="post-card" to={`/insights/${insight.slug}`} data-sitem="">
                <span className="meta">{insight.cardMeta}</span>
                <h3>{insight.title}</h3>
                <p>{insight.summary}</p>
                <span className="rd">Read →</span>
              </Link>
            ))}
          </RevealGroup>
        </div>
      </section>
    </Layout>
  );
}
