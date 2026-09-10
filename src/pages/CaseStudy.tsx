import { Link, Navigate, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/ui-kinwits/Reveal";
import { ChipList } from "@/components/ui-kinwits/ChipList";
import { bookingLinkProps } from "@/lib/constants";
import { getCaseStudyBySlug, getOtherCaseStudies } from "@/data/caseStudies";
import { useSeo } from "@/hooks/useSeo";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) return <Navigate to="/work" replace />;

  return <CaseStudyView caseStudy={caseStudy} />;
}

function CaseStudyView({ caseStudy }: { caseStudy: NonNullable<ReturnType<typeof getCaseStudyBySlug>> }) {
  const others = getOtherCaseStudies(caseStudy.slug);

  useSeo({
    title: caseStudy.pageTitle,
    description: caseStudy.description,
    canonicalPath: `/work/${caseStudy.slug}`,
  });

  // hero chip variant matches the source: light-on-lav/cream tints read as "onCard" white chips,
  // the dark royal tint reads as "onRoyal" translucent chips.
  const heroChipVariant = caseStudy.heroTint === "bg-royal" ? "onRoyal" : "onCard";

  return (
    <Layout>
      <section className={`case-hero ${caseStudy.heroTint}`} aria-labelledby="pageTitle">
        <div className="wrap">
          <Link className="back" to="/work">
            ← Selected Work
          </Link>
          <p className="eyebrow">{caseStudy.eyebrow}</p>
          <h1 className="display" id="pageTitle">
            {caseStudy.titleLines[0]}
            <br />
            {caseStudy.titleLines[1]}
          </h1>
          <p className="lede">{caseStudy.lede}</p>
          <ChipList items={caseStudy.chips} variant={heroChipVariant} />
        </div>
      </section>

      <section className="sec" style={{ paddingTop: "clamp(24px,3vw,40px)" }}>
        <div className="wrap">
          <Reveal as="div" className="crow" style={{ borderTop: 0 }}>
            <h2>The Challenge</h2>
            <div className="body">
              <p>{caseStudy.challenge}</p>
            </div>
          </Reveal>
          <Reveal as="div" className="crow">
            <h2>Context</h2>
            <div className="body">
              <p>{caseStudy.context}</p>
            </div>
          </Reveal>
          <Reveal as="div" className="crow">
            <h2>The Solution</h2>
            <div className="body">
              <p>{caseStudy.solutionIntro}</p>
              <div className="sol-list">
                {caseStudy.solutionList.map((item) => (
                  <div key={item.title}>
                    <b>{item.title}</b>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal as="div" className="crow">
            <h2>Built for Production</h2>
            <div className="body">
              <p className="eyebrow" style={{ marginBottom: 12 }}>
                Technology
              </p>
              <ChipList items={caseStudy.techChips} variant="onLight" style={{ marginTop: 0 }} />
              <p className="eyebrow" style={{ margin: "26px 0 12px" }}>
                Architecture
              </p>
              <div className="arch-list">
                <p>{caseStudy.architecture}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`band-tile ${caseStudy.outcomeTint}`}>
        <div className="wrap">
          <Reveal as="h2" className="display display-lg">
            Outcome<span className="t-ember">.</span>
          </Reveal>
          <Reveal as="p" className="lede">
            {caseStudy.outcomeLede}
          </Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Reveal as="h2" className="h2">
            More work
          </Reveal>
          <div className="more-grid">
            {others.map((other) => (
              <Reveal as={Link} key={other.slug} className="more-card" to={`/work/${other.slug}`}>
                <p className="eyebrow" style={{ marginBottom: 0 }}>
                  {other.eyebrow}
                </p>
                <h3>
                  {other.titleLines[0]} {other.titleLines[1]}
                </h3>
                <span className="link-arrow" style={{ marginTop: 10 }}>
                  View Work <span className="arr">→</span>
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal className="sec-cta">
            <a className="btn" {...bookingLinkProps()}>
              Book an Intro <span className="arr">→</span>
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
