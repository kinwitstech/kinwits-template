import type { CSSProperties } from "react";

interface BrandMarkProps {
  /** header: animated-in by GSAP (lg-c1/lg-c2/lg-d), ink wordmark stroke.
   *  footer: static, white wordmark stroke. */
  variant?: "header" | "footer";
  className?: string;
  style?: CSSProperties;
}

export function BrandMark({ variant = "header", className, style }: BrandMarkProps) {
  const isHeader = variant === "header";
  return (
    <svg viewBox="0 0 122 80" fill="none" aria-hidden="true" className={className} style={style}>
      <polyline
        className={isHeader ? "lg-c1" : undefined}
        points="10,8 44,40 10,72"
        stroke="#8E939E"
        strokeWidth="15"
      />
      <polyline
        className={isHeader ? "lg-c2" : undefined}
        points="46,8 80,40 46,72"
        stroke={isHeader ? "#16141D" : "#FFFFFF"}
        strokeWidth="15"
      />
      <polygon className={isHeader ? "lg-d" : undefined} points="101,26 115,40 101,54 87,40" fill="#FF7A1A" />
    </svg>
  );
}
