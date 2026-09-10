import { Reveal } from "@/components/ui-kinwits/Reveal";

/**
 * All copy below is explicitly SAMPLE/placeholder content per the v36 source's own
 * comments (sample-chip badges, "REPLACE" suffixes on the cite lines) — do not swap in
 * real testimonials here.
 */
interface Testimonial {
  quote: string;
  cite: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Kinwits understood our workflow before they wrote a line of code. What they built is now part of how we operate every day.",
    cite: "CLIENT NAME · CLINICAL OPERATIONS — REPLACE",
  },
  {
    quote: "Direct access to the people doing the work changed everything. Decisions that used to take weeks happen in a call.",
    cite: "CLIENT NAME · FOUNDER — REPLACE",
  },
  {
    quote: "They pushed back on what we asked for and built what we actually needed. That's the difference.",
    cite: "CLIENT NAME · PRODUCT DIRECTOR — REPLACE",
  },
];

/** Renders the one set of 3 cards — called twice so the marquee track has two back-to-back
 * copies for `@keyframes t-scroll{ to{ transform:translateX(-50%); } }` to loop seamlessly. */
function renderTestimonialCards() {
  return TESTIMONIALS.map((t, i) => (
    <figure className="t-card" key={i}>
      <span className="sample-chip">SAMPLE</span>
      <blockquote>&quot;{t.quote}&quot;</blockquote>
      <cite>{t.cite}</cite>
    </figure>
  ));
}

export function TestimonialSection() {
  return (
    // Source uses id="testiTitle" + aria-labelledby to name this section from its own <h2>.
    // That <h2> also carries data-reveal, and the shared Reveal component (by design) only
    // forwards `className`/`children` — not `id` — so it can't carry testiTitle's id here.
    // aria-label reproduces the same accessible name without needing that id.
    <section className="sec sec-dark" id="testimonial" aria-label="Built Together. Proven in Production.">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Testimonial
        </Reveal>
        <Reveal as="h2" className="display" display>
          Built Together<span className="t-ember">.</span>
          <br />
          Proven in Production<span className="t-ember">.</span>
        </Reveal>
        <Reveal as="p" className="lede">
          Hear directly from the people who build with us.
        </Reveal>
        <Reveal as="div" className="testi-top">
          <div className="video-ph" role="img" aria-label="Client video testimonial placeholder">
            <span className="sample-chip">SAMPLE — VIDEO SLOT</span>
            <span className="play" aria-hidden="true" />
          </div>
        </Reveal>
      </div>

      {/* Same id-forwarding limitation as above applies to aria-label here — Reveal can't
          carry it on the .t-marquee node itself, so an unstyled wrapper div carries it
          instead. The wrapper has no class/box styling of its own, so it's inert for layout. */}
      <div aria-label="Client quotes (sample placeholders)">
        <Reveal as="div" className="t-marquee">
          <div className="t-track">
            {renderTestimonialCards()}
            <div aria-hidden="true" style={{ display: "contents" }}>
              {renderTestimonialCards()}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal as="p" className="proofline">
          <span className="live-dot" aria-hidden="true" /> Built for production. Used by physicians every day.
        </Reveal>
        {/* Source centers this via inline style="text-align:center" — Reveal doesn't forward
            `style`, so the Tailwind v4 `text-center` utility (wired globally, higher-priority
            layer than the ported design-system CSS) reproduces the same rule instead. */}
        <Reveal as="div" className="sec-cta text-center">
          <a className="btn btn-ghost-dark" href="#capabilities">
            See What We Can Build <span className="arr">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
