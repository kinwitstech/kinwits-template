import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import type { Insight } from "@/data/insights";
import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/ui-kinwits/Reveal";
import { useSeo } from "@/hooks/useSeo";

interface InsightArticleLayoutProps {
  insight: Insight;
  /** The article prose (p/h2/ul/.pull etc.) — the trailing .tagrow is rendered by this layout from `insight.tags`. */
  children: ReactNode;
}

export function InsightArticleLayout({ insight, children }: InsightArticleLayoutProps) {
  useSeo({
    title: insight.pageTitle,
    description: insight.description,
    canonicalPath: `/insights/${insight.slug}`,
  });

  return (
    <Layout>
      <section className="page-hero" aria-labelledby="pageTitle" style={{ paddingBottom: "clamp(24px,3vw,40px)" }}>
        <div className="wrap">
          <Link className="back" to="/insights">
            ← All Insights
          </Link>
          <p className="art-meta" data-hero>
            {insight.articleMeta}
          </p>
          <h1
            id="pageTitle"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              fontSize: "clamp(2rem,3.8vw,3.1rem)",
              lineHeight: 1.12,
              maxWidth: "19em",
            }}
            data-hero
          >
            {insight.title}
          </h1>
          <p className="lede" data-hero>
            {insight.summary}
          </p>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal as="div" className="story">
            {children}
            <div className="tagrow">
              {insight.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Reveal>
          <Reveal as="div" className="sec-cta">
            <Link className="link-arrow" to="/insights">
              More Insights <span className="arr">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
