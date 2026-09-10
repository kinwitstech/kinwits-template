import { Link } from "react-router-dom";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/#about" },
  { label: "Careers", href: "/careers" },
];

interface MobileMenuProps {
  open: boolean;
  onLinkClick: () => void;
}

export function MobileMenu({ open, onLinkClick }: MobileMenuProps) {
  return (
    <div className={`mobile-menu${open ? " open" : ""}`} id="mobileMenu">
      {LINKS.map((link) => (
        <Link key={link.href} to={link.href} onClick={onLinkClick}>
          {link.label}
        </Link>
      ))}
      <Link to="/contact" onClick={onLinkClick} style={{ color: "var(--royal)", fontWeight: 700 }}>
        Let's Talk →
      </Link>
    </div>
  );
}
