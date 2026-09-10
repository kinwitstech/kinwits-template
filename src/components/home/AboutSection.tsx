import { Link } from "react-router-dom";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-kinwits/Reveal";

interface AboutCard {
  no: string;
  variant: "abt-1" | "abt-2" | "abt-3";
  title: string;
  body: string;
}

const ABOUT_CARDS: AboutCard[] = [
  { no: "01", variant: "abt-1", title: "One Team", body: "Understand deeply. Take ownership. Build the right thing." },
  { no: "02", variant: "abt-2", title: "Momentum", body: "Stay close. Move fast. Build better." },
  { no: "03", variant: "abt-3", title: "Deep Expertise", body: "Senior minds. Hands-on work. Better decisions." },
];

export function AboutSection() {
  return (
    <section className="sec" id="about" aria-labelledby="aboutTitle">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          About Kinwits
        </Reveal>
        <Reveal as="h2" id="aboutTitle" className="display" display>
          We Build the Technology
          <br />
          Behind Growing Businesses<span className="t-royal">.</span>
        </Reveal>
        <Reveal as="p" className="lede">
          Kinwits is a product engineering company built around a simple idea: growing companies deserve
          enterprise-grade engineering without the enterprise overhead. We bring together product thinking,
          engineering, AI, and cloud expertise to build technology businesses can grow on.
        </Reveal>

        <RevealGroup className="abt-grid">
          {ABOUT_CARDS.map((card) => (
            <RevealItem key={card.no} as="article" className={`abt ${card.variant}`}>
              <span className="ghost" aria-hidden="true">
                {card.no}
              </span>
              <span className="no">{card.no}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal as="div" className="sec-cta">
          <Link className="link-arrow" to="/work">
            View Our Work <span className="arr">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
