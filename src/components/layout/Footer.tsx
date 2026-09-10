import { Link } from "react-router-dom";
import { BrandMark } from "./BrandMark";
import { CONTACT_EMAIL, bookingLinkProps } from "@/lib/constants";

const CASE_STUDIES = [
  { label: "AI-Powered Clinical Workflow", href: "/work/clinical-workflow" },
  { label: "Intelligent Workflow Platform", href: "/work/intelligent-workflow" },
  { label: "Digital Business Platform", href: "/work/digital-platform" },
];

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" to="/" aria-label="Kinwits home">
              <BrandMark variant="footer" style={{ height: 24 }} />
              <span className="brand-name">KINWITS</span>
            </Link>
            <p>Product engineering for growing businesses. From business problem to production-ready technology.</p>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/#capabilities">Capabilities</Link>
              </li>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/insights">Insights</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Work</h4>
            <ul>
              {CASE_STUDIES.map((cs) => (
                <li key={cs.href}>
                  <Link to={cs.href}>{cs.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://www.linkedin.com/company/kinwits/" rel="noopener">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <a {...bookingLinkProps()}>Book an Intro</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Kinwits Technologies Pvt. Ltd.</span>
          <span>
            From problem <span style={{ color: "#FF7A1A" }}>→</span> production
          </span>
        </div>
      </div>
    </footer>
  );
}
