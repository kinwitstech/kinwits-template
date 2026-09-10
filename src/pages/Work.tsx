import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Reveal, RevealGroup } from "@/components/ui-kinwits/Reveal";
import { Tile } from "@/components/home/Tile";
import { useSeo } from "@/hooks/useSeo";

export default function Work() {
  useSeo({
    title: "Work That Shipped — Kinwits",
    description: "Some client names stay confidential. The engineering doesn't.",
    canonicalPath: "/work",
  });

  return (
    <Layout>
      <section className="page-hero" aria-labelledby="pageTitle">
        <div className="wrap">
          <p className="eyebrow" data-hero>
            Work
          </p>
          <h1 className="display" id="pageTitle" data-hero>
            Work That
            <br />
            Shipped<span className="t-ember">.</span>
          </h1>
          <p className="lede" data-hero>
            Some client names stay confidential. The engineering doesn't.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: "clamp(10px,2vw,20px)" }}>
        <div className="wrap">
          <RevealGroup className="bento">
            <Tile
              variant="lav"
              wide
              eyebrow="Confidential · US Health & Wellness"
              title="AI-Powered Clinical Workflow"
              description="Transforming fragmented clinical and administrative processes into a connected, AI-assisted workflow."
              chips={["HEALTHCARE", "AI AGENTS", "WORKFLOW AUTOMATION", "SYSTEMS INTEGRATION"]}
              href="/work/clinical-workflow"
            />
            <Tile
              variant="cream"
              eyebrow="AI · Automation"
              title="Intelligent Workflow Platform"
              description="Connected business systems and automated complex workflows to reduce manual operational effort."
              chips={["AUTOMATION", "INTEGRATION", "AI", "CLOUD"]}
              href="/work/intelligent-workflow"
            />
            <Tile
              variant="royal"
              eyebrow="Platform · Cloud"
              title="Digital Business Platform"
              description="A scalable digital platform designed around the needs of users, teams, and business operations."
              chips={["PLATFORM", "CLOUD", "DESIGN SYSTEMS"]}
              href="/work/digital-platform"
            />
          </RevealGroup>
          <Reveal className="bridge">
            <h2 className="display display-lg">
              Let's Build Something Useful<span className="t-ember">.</span>
            </h2>
            <p>
              Bring us a hard problem. We'll dig into the details, challenge the assumptions, and work out what it
              takes to build the right solution.
            </p>
            <div className="sec-cta">
              <Link className="btn" to="/contact">
                Start a Conversation <span className="arr">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
