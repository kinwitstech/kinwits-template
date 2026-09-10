import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { bookingLinkProps } from "@/lib/constants";

const AUTOPLAY_MS = 9000;
const SLIDE_COUNT = 2;

export function HeroSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (n: number) => setIdx(((n % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);

  const arm = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (!prefersReducedMotion()) {
      timerRef.current = setInterval(() => setIdx((i) => (i + 1) % SLIDE_COUNT), AUTOPLAY_MS);
    }
  };

  const pause = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    arm();
    return () => pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Build-path draw-in + travelers — unique to this hero's SVG diagram, index.html only.
  // Brand intro lives in SiteHeader and the [data-hero] fade-in lives in Layout (both run on
  // every page, not just Home — see there).
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const path = pathRef.current;
      if (!path) return;

      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, { strokeDashoffset: 0, duration: 1.5, ease: "power2.inOut", delay: 0.7 });

      const travelers = gsap.utils.toArray<SVGCircleElement>(".traveler");
      travelers.forEach((traveler, t) => {
        gsap.to(traveler, { autoAlpha: 1, duration: 0.4, delay: 2.2 + t * 1.4 });
        gsap.to(traveler, {
          motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
          duration: 5.5 + t * 2,
          delay: 2.2 + t * 1.4,
          repeat: -1,
          repeatDelay: 0.6,
          ease: "power1.inOut",
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="hero slider"
      id="heroSlider"
      aria-roledescription="carousel"
      aria-label="Kinwits introduction"
      ref={sectionRef}
      onMouseEnter={pause}
      onMouseLeave={arm}
    >
      <div className="slides" style={{ transform: `translateX(-${idx * 100}%)` }}>
        {/* SLIDE 1 */}
        <div className="slide">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow" data-hero>
                AI · Product Engineering · Cloud · Integration
              </p>
              <h1 className="display" data-hero>
                Build
                <br />
                What's
                <br />
                Next<span className="t-ember">.</span>
              </h1>
              <p className="tagline" data-hero>
                Think It. Build It. <em>Make It Work.</em>
              </p>
              <p className="lede" data-hero>
                Kinwits helps growing companies design, build, and scale the software products that move their
                business forward.
              </p>
              <div className="hero-ctas" data-hero>
                <a className="btn" {...bookingLinkProps()}>
                  Book an Intro <span className="arr">→</span>
                </a>
              </div>
            </div>
            <div
              className="panel"
              data-hero
              role="img"
              aria-label="Diagram: a business problem moves through understand, define, design and build, and arrives live in production."
            >
              <svg viewBox="0 0 520 400" fill="none" aria-hidden="true">
                <path
                  ref={pathRef}
                  d="M52 300 C 158 300, 168 190, 268 190 C 362 190, 376 168, 468 168"
                  stroke="rgba(255,255,255,.28)"
                  strokeWidth="2"
                />
                <circle cx="150" cy="256.9" r="4" stroke="#2E7CF6" strokeWidth="2" fill="#191434" />
                <text className="stage-label" x="150" y="237" textAnchor="middle">
                  UNDERSTAND
                </text>
                <circle cx="222" cy="199.4" r="4" stroke="#2E7CF6" strokeWidth="2" fill="#191434" />
                <text className="stage-label" x="222" y="179" textAnchor="middle">
                  DEFINE
                </text>
                <circle cx="300" cy="189" r="4" stroke="#2E7CF6" strokeWidth="2" fill="#191434" />
                <text className="stage-label" x="300" y="223" textAnchor="middle">
                  DESIGN
                </text>
                <circle cx="386" cy="175.6" r="4" stroke="#2E7CF6" strokeWidth="2" fill="#191434" />
                <text className="stage-label" x="386" y="156" textAnchor="middle">
                  BUILD
                </text>
                <circle cx="52" cy="300" r="7" fill="#191434" stroke="#FFFFFF" strokeWidth="2.5" />
                <text className="node-label" x="52" y="330" textAnchor="start">
                  BUSINESS PROBLEM
                </text>
                <circle className="pulse-dot" cx="468" cy="168" r="9" fill="#FF7A1A" opacity=".8" />
                <circle cx="468" cy="168" r="8" fill="#FF7A1A" />
                <rect x="424" y="112" rx="8" width="88" height="30" fill="rgba(255,122,26,.12)" stroke="rgba(255,122,26,.5)" />
                <circle cx="449" cy="127" r="3.5" fill="#FF7A1A" />
                <text className="live-text" x="473" y="127" textAnchor="middle" dominantBaseline="central">
                  LIVE
                </text>
                <text className="node-label" x="468" y="205" textAnchor="middle">
                  PRODUCTION
                </text>
                <circle className="traveler" r="4.5" fill="#2E7CF6" />
                <circle className="traveler" r="3.5" fill="#9DB9F8" />
              </svg>
              <span className="chip" style={{ top: "9%", left: "7%" }}>
                EMR
              </span>
              <span className="chip" style={{ top: "9%", left: "36%" }}>
                APIs
              </span>
              <span className="chip" style={{ top: "44%", left: "12%" }}>
                CLOUD
              </span>
              <span className="chip" style={{ bottom: "11%", right: "9%" }}>
                HUMAN REVIEW
              </span>
            </div>
          </div>
        </div>

        {/* SLIDE 2 — proof (product screenshots drop into the frames when approved) */}
        <div className="slide">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">Proof · In Production</p>
              <h1 className="display">
                Built. <span className="t-ember">Live.</span>
                <br />
                Proven<span className="t-ember">.</span>
              </h1>
              <p className="tagline">Where AI meets the complexity of real clinical work.</p>
              <p className="lede">
                Our AI turns complex clinical information into actionable insights — streamlining documentation and
                giving physicians more time for what matters most: patient care.
              </p>
              <div className="hero-ctas">
                <Link className="btn" to="/healthcare">
                  See Our Work <span className="arr">→</span>
                </Link>
              </div>
            </div>
            <div className="shotstack" aria-label="Product screenshots placeholder">
              <div className="shot shot-a">
                <div className="bar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="ph">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="shot shot-b">
                <div className="bar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="ph">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <span className="shot-note">PRODUCT SCREENSHOTS — PENDING APPROVAL</span>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="slider-nav">
          <button
            className="slider-btn sl-prev"
            aria-label="Previous slide"
            onClick={() => {
              go(idx - 1);
              arm();
            }}
          >
            ←
          </button>
          <button
            className="slider-btn sl-next"
            aria-label="Next slide"
            onClick={() => {
              go(idx + 1);
              arm();
            }}
          >
            →
          </button>
          <div className="slider-dots" role="tablist" aria-label="Slides">
            {Array.from({ length: SLIDE_COUNT }).map((_, d) => (
              <button
                key={d}
                className={d === idx ? "on" : undefined}
                aria-label={`Slide ${d + 1}`}
                onClick={() => {
                  go(d);
                  arm();
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
