import { Reveal, RevealGroup } from "@/components/ui-kinwits/Reveal";
import { Tile, type TileProps } from "@/components/home/Tile";

const WORK_TILES: TileProps[] = [
  {
    variant: "lav",
    wide: true,
    eyebrow: "Confidential · US Health & Wellness",
    title: "AI-Powered Clinical Workflow",
    description:
      "Transforming fragmented clinical and administrative processes into a connected, AI-assisted workflow.",
    chips: ["HEALTHCARE", "AI AGENTS", "WORKFLOW AUTOMATION", "SYSTEMS INTEGRATION"],
    href: "/work/clinical-workflow",
  },
  {
    variant: "cream",
    eyebrow: "AI · Automation",
    title: "Intelligent Workflow Platform",
    description: "Connected systems. Automated workflows. Less manual effort.",
    chips: ["AUTOMATION", "INTEGRATION", "AI", "CLOUD"],
    href: "/work/intelligent-workflow",
  },
  {
    variant: "royal",
    eyebrow: "Platform · Cloud",
    title: "Digital Business Platform",
    description: "A scalable digital platform designed around the needs of users, teams, and business operations.",
    chips: ["PLATFORM", "CLOUD", "DESIGN SYSTEMS"],
    href: "/work/digital-platform",
  },
];

export function WorkBentoSection() {
  return (
    <section className="sec sec-mist" id="work" aria-labelledby="workTitle">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Selected Work
        </Reveal>
        <Reveal as="h2" id="workTitle" className="display" display>
          Work That Shipped<span className="t-ember">.</span>
        </Reveal>
        <Reveal as="p" className="lede">
          Some client names stay confidential. The engineering doesn't.
        </Reveal>

        <RevealGroup className="bento">
          {WORK_TILES.map((tile) => (
            <Tile key={tile.href} {...tile} />
          ))}
        </RevealGroup>

        <Reveal as="div" className="bridge">
          <p>
            Bring us a hard problem. We'll dig into the details, challenge the assumptions, and work out what it
            takes to build the right solution.
          </p>
          <div className="sec-cta">
            <a className="link-arrow" href="#contact">
              Let's build something useful <span className="arr">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
