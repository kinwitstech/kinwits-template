import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type ChipVariant = "onDark" | "onLight" | "onCard" | "onRoyal";

const VARIANT_CLASS: Record<ChipVariant, string> = {
  // base `.chips span` in the design system is already styled for dark backgrounds
  onDark: "",
  onLight: "chips--on-light",
  onCard: "chips--on-card",
  onRoyal: "chips--on-royal",
};

interface ChipListProps {
  items: string[];
  variant?: ChipVariant;
  className?: string;
  style?: CSSProperties;
  /** Passthrough for things like aria-label, which a couple of source instances carry directly
   * on the .chips element. */
  [prop: string]: unknown;
}

/**
 * Consolidates the source's five scoped overrides (`.case .chips span`,
 * `.tile .chips span`, `.tile-royal .chips span`, `.bg-royal .chips span`,
 * `.case-hero .chips span`) into four named variants — modifier classes
 * defined alongside `.chips` in kinwits-design-system.css.
 */
export function ChipList({ items, variant = "onDark", className, style, ...rest }: ChipListProps) {
  return (
    <div className={cn("chips", VARIANT_CLASS[variant], className)} style={style} {...rest}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
