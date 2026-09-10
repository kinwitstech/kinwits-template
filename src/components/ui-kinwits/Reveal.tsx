import { createElement, useRef, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type PassthroughProps = Omit<ComponentPropsWithoutRef<"div">, "className" | "children">;

interface RevealProps extends PassthroughProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** Matches the source's `isDisplay` branch — slower, larger-easing reveal for .display headings. */
  display?: boolean;
  /** Escape hatch for polymorphic `as` targets (e.g. `as={Link} to="/work"`) whose own props
   * aren't statically known here. */
  [prop: string]: unknown;
}

/** React equivalent of the source's `[data-reveal]` ScrollTrigger fade-up. */
export function Reveal({ as = "div", className, children, display = false, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;
      gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: display ? 1.05 : 0.95,
        ease: display ? "power4.out" : "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
    },
    { scope: ref }
  );

  return createElement(as, { ref, "data-reveal": "", className, ...rest }, children);
}

interface RevealGroupProps extends PassthroughProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [prop: string]: unknown;
}

/** React equivalent of the source's `[data-stagger]` group — cascades its `RevealItem` children in. */
export function RevealGroup({ as = "div", className, children, ...rest }: RevealGroupProps) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;
      const kids = ref.current.querySelectorAll("[data-sitem]");
      if (!kids.length) return;
      gsap.to(kids, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.13,
        scrollTrigger: { trigger: ref.current, start: "top 82%" },
      });
    },
    { scope: ref }
  );

  return createElement(as, { ref, "data-stagger": "", className, ...rest }, children);
}

interface RevealItemProps extends PassthroughProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [prop: string]: unknown;
}

export function RevealItem({ as = "div", className, children, ...rest }: RevealItemProps) {
  return createElement(as, { "data-sitem": "", className, ...rest }, children);
}
