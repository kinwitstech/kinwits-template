import { useRef, useState, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { SiteHeader } from "./SiteHeader";
import { MobileMenu } from "./MobileMenu";
import { Footer } from "./Footer";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Global per-page-load reveal for [data-hero] content (every page-hero across the site uses
  // this attribute — work.html, contact.html, careers.html, insights.html, the insight articles,
  // not just index.html's hero). Adding the `anim` class and animating [data-hero] happen in the
  // same synchronous callback so there's no ordering gap between the CSS gate going live and the
  // reveal that's supposed to undo it.
  useGSAP(
    () => {
      if (prefersReducedMotion() || !mainRef.current) return;
      document.documentElement.classList.add("anim");
      const heroEls = mainRef.current.querySelectorAll("[data-hero]");
      if (!heroEls.length) return;
      gsap.to(heroEls, { opacity: 1, y: 0, duration: 0.85, stagger: 0.11, delay: 0.25, ease: "power3.out" });
    },
    { scope: mainRef }
  );

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} />
      <MobileMenu open={menuOpen} onLinkClick={() => setMenuOpen(false)} />
      <main id="main" ref={mainRef}>
        {children}
      </main>
      <Footer />
    </>
  );
}
