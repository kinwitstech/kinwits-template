import { Link } from "react-router-dom";
import { ChipList } from "@/components/ui-kinwits/ChipList";
import { cn } from "@/lib/utils";

export type TileVariant = "lav" | "cream" | "royal";

const VARIANT_CLASS: Record<TileVariant, string> = {
  lav: "tile-lav",
  cream: "tile-cream",
  royal: "tile-royal",
};

export interface TileProps {
  variant: TileVariant;
  /** Source's `.tile-wide` — spans both bento columns. */
  wide?: boolean;
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  href: string;
}

/**
 * One `.bento` case-study tile (source: `.tile` in kinwits-design-system.css).
 * Used by the Home "Work" bento section; reused verbatim by the standalone
 * `/work` page.
 *
 * Carries its own `data-sitem` (rather than the `RevealItem` helper) because
 * it must render as a routed `Link` and stay the bento's direct grid child —
 * `RevealItem`'s wrapper is typed for plain div-like passthrough props only,
 * and a wrapping element here would break `.tile-wide`'s `grid-column: 1/-1`.
 * Render inside a `RevealGroup` (`data-stagger`) to get the cascade-in.
 */
export function Tile({ variant, wide = false, eyebrow, title, description, chips, href }: TileProps) {
  return (
    <Link className={cn("tile", wide && "tile-wide", VARIANT_CLASS[variant])} to={href} data-sitem="">
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <ChipList items={chips} variant={variant === "royal" ? "onRoyal" : "onCard"} />
      <span className="go2">
        View Work <span className="arr">→</span>
      </span>
    </Link>
  );
}
