import { Reveal, RevealGroup } from "@/components/ui-kinwits/Reveal";
import { Tile } from "@/components/home/Tile";
import { workTiles } from "@/data/caseStudies";

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
          {workTiles.map((tile) => (
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
