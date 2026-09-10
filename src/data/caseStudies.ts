export type CaseStudyTint = "bg-lav" | "bg-cream" | "bg-royal";

export interface CaseStudy {
  slug: string;
  pageTitle: string;
  description: string;
  eyebrow: string;
  titleLines: [string, string];
  lede: string;
  chips: string[];
  heroTint: CaseStudyTint;
  outcomeTint: Exclude<CaseStudyTint, "bg-royal">;
  challenge: string;
  context: string;
  solutionIntro: string;
  solutionList: { title: string; description: string }[];
  techChips: string[];
  architecture: string;
  outcomeLede: string;
}

// Order matters: each case study's "More work" cross-links are every OTHER entry,
// in this array's order — matches the source's fixed cross-link pattern exactly.
export const caseStudies: CaseStudy[] = [
  {
    slug: "clinical-workflow",
    pageTitle: "AI-Powered Clinical Workflow — Kinwits",
    description:
      "Transforming fragmented clinical and administrative processes into a connected, AI-assisted workflow for a US health and wellness organization.",
    eyebrow: "Confidential · US Health & Wellness",
    titleLines: ["AI-Powered", "Clinical Workflow"],
    lede: "Transforming fragmented clinical and administrative processes into a connected, AI-assisted workflow.",
    chips: ["HEALTHCARE", "AI AGENTS", "WORKFLOW AUTOMATION", "SYSTEMS INTEGRATION"],
    heroTint: "bg-lav",
    outcomeTint: "bg-cream",
    challenge:
      "Disconnected systems and manual handoffs slowed critical workflows and made processes difficult to track and audit.",
    context: "A US health & wellness organization with complex workflows, strict privacy requirements, and multiple systems.",
    solutionIntro:
      "Kinwits built an intelligent workflow layer that connects systems, applies AI where it adds value, and keeps people in control.",
    solutionList: [
      {
        title: "AI-powered Extraction",
        description: "Surfaces key information from unstructured documents, reducing manual review and data handling.",
      },
      {
        title: "Workflow Orchestration",
        description: "Automates routing, tasks, and approvals with a complete audit trail.",
      },
      {
        title: "Systems Integration",
        description: "Connects existing clinical and administrative systems to keep data flowing seamlessly.",
      },
      {
        title: "Human-centered Interfaces",
        description: "Puts the right information in front of reviewers at the right moment.",
      },
    ],
    techChips: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "AWS", "LLMs", "RAG"],
    architecture:
      "A secure, reliable cloud setup that processes AI tasks efficiently, keeps data isolated, and provides clear visibility into how the system is running.",
    outcomeLede: "Connected workflows. Less manual work. Smarter decisions. Human judgement where it matters.",
  },
  {
    slug: "intelligent-workflow",
    pageTitle: "Intelligent Workflow Platform — Kinwits",
    description: "Connecting business systems and automating complex workflows to reduce manual operational effort.",
    eyebrow: "AI · Automation",
    titleLines: ["Intelligent", "Workflow Platform"],
    lede: "Connecting business systems and automating complex workflows to reduce manual operational effort.",
    chips: ["AUTOMATION", "INTEGRATION", "AI", "CLOUD"],
    heroTint: "bg-cream",
    outcomeTint: "bg-lav",
    challenge: "Operations relied on spreadsheets and email, making work difficult to track, measure, and manage across teams.",
    context: "A growing US business using multiple SaaS platforms without a unified view of its operations.",
    solutionIntro: "Kinwits turned a fragmented manual process into a connected, measurable workflow.",
    solutionList: [
      {
        title: "Process Automation",
        description: "Mapped operational steps, ownership, and exceptions into a structured workflow.",
      },
      {
        title: "Systems Integration",
        description: "Connected the CRM and third-party platforms through bidirectional integrations.",
      },
      {
        title: "AI-assisted Decisions",
        description: "Applied AI to summarize, classify, and draft where it adds value.",
      },
      {
        title: "Operational Visibility",
        description: "Built dashboards that show where work sits, what needs attention, and where processes slow down.",
      },
    ],
    techChips: ["TypeScript", "Node.js", "Python", "PostgreSQL", "Redis", "AWS Lambda"],
    architecture:
      "A reliable cloud setup that keeps work moving, handles failures automatically, and provides a single, accurate view of every process.",
    outcomeLede: "Less coordination. Greater visibility. A measurable operation.",
  },
  {
    slug: "digital-platform",
    pageTitle: "Digital Business Platform — Kinwits",
    description: "A scalable digital platform designed around the needs of users, teams, and business operations.",
    eyebrow: "Platform · Cloud",
    titleLines: ["Digital Business", "Platform"],
    lede: "A scalable digital platform designed around the needs of users, teams, and business operations.",
    chips: ["PLATFORM", "CLOUD", "DESIGN SYSTEMS"],
    heroTint: "bg-royal",
    outcomeTint: "bg-cream",
    challenge: "An ageing application couldn't keep up with new business needs, making every change risky and slowing growth.",
    context: "A mid-sized company modernizing its platform without disrupting day-to-day operations.",
    solutionIntro:
      "Kinwits modernized the platform incrementally, creating a scalable foundation without disrupting ongoing operations.",
    solutionList: [
      { title: "Modular Architecture", description: "Rebuilt the platform with clear, scalable components." },
      { title: "Consistent Experiences", description: "Created a shared design system and component library." },
      {
        title: "Incremental Migration",
        description: "Introduced the new platform alongside the existing system, enabling a gradual transition.",
      },
      { title: "Secure Access and Reporting", description: "Added role-based access and operational reporting." },
    ],
    techChips: ["React", "Next.js", "TypeScript", "FastAPI", "PostgreSQL", "ECS/Fargate", "Terraform"],
    architecture:
      "A modern cloud setup that supports reliable deployments, gradual migration, and consistent environments from development through production.",
    outcomeLede: "A platform built to evolve. Faster releases. Fewer workarounds.",
  },
];

export function getCaseStudyBySlug(slug: string | undefined): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getOtherCaseStudies(slug: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.slug !== slug);
}
