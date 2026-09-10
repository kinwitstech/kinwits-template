export interface Insight {
  slug: string;
  pageTitle: string;
  description: string;
  /** e.g. "JUL 13, 2026 · 7 MIN · PRODUCTION AI" — used on preview/index cards. */
  cardMeta: string;
  /** e.g. "July 13, 2026 · 7 min · Kinwits" — used on the article's own page-hero. */
  articleMeta: string;
  title: string;
  /** Shared verbatim between the preview card excerpt and the article's hero lede (source uses the same text for both). */
  summary: string;
  tags: string[];
}

// Order matches the source's insights.html / homepage preview listing (newest first).
export const insights: Insight[] = [
  {
    slug: "clinical-ai-past-the-demo",
    pageTitle: "What it takes to get a clinical AI agent past the demo — Kinwits",
    description:
      "The demo is the easy part. Everything that decides whether a clinical agent survives contact with an actual practice happens after it.",
    cardMeta: "JUL 13, 2026 · 7 MIN · PRODUCTION AI",
    articleMeta: "July 13, 2026 · 7 min · Kinwits",
    title: "What it takes to get a clinical AI agent past the demo",
    summary:
      "The demo is the easy part. Everything that decides whether a clinical agent survives contact with an actual practice happens after it.",
    tags: ["AI AGENTS", "HEALTHCARE", "PRODUCTION"],
  },
  {
    slug: "hipaa-ai-aws-architecture",
    pageTitle: "HIPAA-compliant AI on AWS: the architecture decisions — Kinwits",
    description:
      "Which decisions actually matter when you are running language models over protected health information, and which ones are theatre.",
    cardMeta: "JUL 6, 2026 · 8 MIN · ARCHITECTURE",
    articleMeta: "July 6, 2026 · 8 min · Kinwits",
    title: "HIPAA-compliant AI on AWS: the architecture decisions",
    summary:
      "Which decisions actually matter when you are running language models over protected health information, and which ones are theater.",
    tags: ["AWS", "HIPAA", "ARCHITECTURE"],
  },
  {
    slug: "emr-integration",
    pageTitle: "Why EMR integration is where healthcare projects die — Kinwits",
    description: "Everyone scopes the model and the interface. Almost nobody scopes the part that consumes most of the budget.",
    cardMeta: "JUN 29, 2026 · 6 MIN · INTEGRATION",
    articleMeta: "June 29, 2026 · 6 min · Kinwits",
    title: "Why EMR integration is where healthcare projects die",
    summary: "Everyone scopes the model and the interface. Almost nobody scopes the part that consumes most of the budget.",
    tags: ["INTEGRATION", "HEALTHCARE", "ENGINEERING"],
  },
];

export function getInsightBySlug(slug: string | undefined): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
