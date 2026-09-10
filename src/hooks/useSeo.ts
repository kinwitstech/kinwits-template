import { useEffect } from "react";

interface SeoOptions {
  /** Full, exact page title — v36's pages ship complete titles (e.g. "Kinwits — Build What's Next"),
   * not a base string needing a suffix appended, so this is used verbatim. */
  title: string;
  description?: string;
  /** Path only, e.g. "/work/clinical-workflow" — resolved against the site origin. */
  canonicalPath?: string;
}

const DEFAULT_TITLE = "Kinwits — Build What's Next";
const DEFAULT_DESCRIPTION =
  "Kinwits helps growing companies design, build, and scale the software products that move their business forward. From business problem to production-ready technology.";
const SITE_ORIGIN = "https://www.kinwits.com";

export const useSeo = ({ title, description, canonicalPath }: SeoOptions) => {
  useEffect(() => {
    document.title = title || DEFAULT_TITLE;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description ?? DEFAULT_DESCRIPTION);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", document.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description ?? DEFAULT_DESCRIPTION);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const url = `${SITE_ORIGIN}${canonicalPath ?? ""}`;
    if (canonicalPath) {
      if (ogUrl) ogUrl.setAttribute("content", url);
      if (canonical) canonical.setAttribute("href", url);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      if (metaDescription) metaDescription.setAttribute("content", DEFAULT_DESCRIPTION);
      if (ogUrl) ogUrl.setAttribute("content", `${SITE_ORIGIN}/`);
      if (canonical) canonical.setAttribute("href", `${SITE_ORIGIN}/`);
    };
  }, [title, description, canonicalPath]);
};
