import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui-kinwits/Reveal";
import { bookingLinkProps, CONTACT_EMAIL } from "@/lib/constants";

export function ContactCtaSection() {
  return (
    <section className="sec" id="contact" aria-labelledby="contactTitle">
      <div className="wrap">
        {/* Only the panel itself carries data-reveal in source (not the heading inside it),
            so — unlike the Testimonial/Insights headings — id="contactTitle" can stay right
            on this plain <h2>, no Reveal-prop-forwarding workaround needed. */}
        <Reveal as="div" className="cta-panel">
          <h2 className="display display-lg" id="contactTitle">
            Let's Build
            <br />
            Something Useful<span className="t-ember">.</span>
          </h2>
          <p className="lede">Tell us what you're solving. We'll bring the thinking, engineering, and ownership to build it right.</p>
          <div className="cta-actions">
            <Link className="btn btn-light" to="/contact">
              Start a Conversation <span className="arr">→</span>
            </Link>
            {/* Source's `js-demo` class was the vanilla-JS hook that swapped in the real
                booking URL — bookingLinkProps() is its React replacement. */}
            <a className="btn btn-ghost-dark" {...bookingLinkProps()}>
              Book an Intro <span className="arr">→</span>
            </a>
          </div>
          <p className="brandline">
            <Link to="/careers">
              CAREERS AT KINWITS →
            </Link>
            {"  ·  "}
            <a href={`mailto:${CONTACT_EMAIL}`}>
              CONTACT THE TEAM →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
