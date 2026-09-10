import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { BrandMark } from "./BrandMark";

const NAV_LINKS = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/#about" },
];

interface SiteHeaderProps {
  menuOpen: boolean;
  onMenuToggle: () => void;
}

export function SiteHeader({ menuOpen, onMenuToggle }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Brand intro — runs on every page load (the source's logoTl is unconditional, not
  // homepage-only), so it lives here rather than in HeroSlider.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const logoTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      logoTl.from(".lg-c1", { x: -16, opacity: 0, duration: 0.4 }, 0.1);
      logoTl.from(".lg-c2", { x: -16, opacity: 0, duration: 0.4 }, 0.28);
      logoTl.from(".lg-d", { scale: 0, transformOrigin: "center", duration: 0.45, ease: "back.out(2.4)" }, 0.5);
      logoTl.from(".brand-name", { x: -26, opacity: 0, duration: 0.55 }, 0.68);
    },
    { scope: headerRef }
  );

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="siteHeader" ref={headerRef}>
      <div className="wrap nav">
        <Link className="brand" to="/" aria-label="Kinwits home">
          <BrandMark variant="header" />
          <span className="brand-mask">
            <span className="brand-name">KINWITS</span>
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <Link className="btn btn-nav" to="/contact">
            Let's Talk
          </Link>
          <button
            className="menu-btn"
            id="menuBtn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={onMenuToggle}
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
