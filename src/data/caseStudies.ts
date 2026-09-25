import type { TileProps, TileVariant } from "@/components/home/Tile";

export type CaseStudyTint = "bg-lav" | "bg-cream" | "bg-royal";

interface CaseStudyBase {
  slug: string;
  pageTitle: string;
  description: string;
  eyebrow: string;
  titleLines: [string, string];
  lede: string;
  chips: string[];
  heroTint: CaseStudyTint;
  outcomeTint: Exclude<CaseStudyTint, "bg-royal">;
  /** Source's `.tile-wide` — spans both bento columns. One tile per grid, at most. */
  tileWide?: boolean;
}

interface CaseStudyBody {
  challenge: string;
  context: string;
  solutionIntro: string;
  solutionList: { title: string; description: string }[];
  techChips: string[];
  architecture: string;
  outcomeLede: string;
}

/**
 * A case study either carries its full body copy, or is flagged `copyPending`
 * and renders a visible notice in place of it — so unwritten copy can't ship
 * unnoticed behind plausible-looking filler.
 */
export type CaseStudy =
  | (CaseStudyBase & CaseStudyBody & { copyPending?: false })
  | (CaseStudyBase & { copyPending: true });

// Order matters: each case study's "More work" cross-links are every OTHER entry,
// in this array's order — matches the source's fixed cross-link pattern exactly.
export const caseStudies: CaseStudy[] = [
  {
    slug: "clinical-workflow",
    pageTitle: "AI. From Data to Decisions | Kinwits",
    description:
      "Transforming fragmented clinical and administrative processes into a connected, AI-assisted workflow for a US health and wellness organization.",
    eyebrow: "Confidential · US Health & Wellness",
    titleLines: ["AI.", "From Data to Decisions"],
    lede: "Transforming fragmented clinical and administrative processes into a connected, AI-assisted workflow.",
    chips: ["HEALTHCARE", "AI AGENTS", "WORKFLOW AUTOMATION", "SYSTEMS INTEGRATION"],
    heroTint: "bg-lav",
    outcomeTint: "bg-cream",
    tileWide: true,
    challenge:
      "Clinicians spent hours reviewing patient records, lab results, assessments, medications, supplements, and prior visits to create personalized treatment plans, while checking dosages, interactions, and clinical guidelines. This manual process was time-intensive and made it easy to miss important information.",
    context: "A US health & wellness organization with complex workflows, strict privacy requirements, and multiple systems.",
    solutionIntro:
      "Kinwits built an AI-powered clinical workflow that reviews patient records, applies clinical protocols, generates personalized treatment plans, and keeps clinicians in control.",
    solutionList: [
      {
        title: "AI-Powered Clinical Analysis",
        description: "Combines labs, assessments, medications, supplements, and visit history.",
      },
      {
        title: "Personalized Treatment Plans",
        description:
          "Recommends supplements and dosages, checks interactions, and generates complete plans in minutes.",
      },
      {
        title: "Clinical AI Assistant",
        description: "Helps clinicians find patient information and answer clinical questions in plain English.",
      },
      {
        title: "Clinician Review & Approval",
        description: "Ensures every plan is reviewed and approved by a clinician.",
      },
      {
        title: "Third-Party Integration",
        description: "Sends approved plans to connected systems as chart notes with one click.",
      },
    ],
    techChips: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "AWS", "LLMs", "RAG"],
    architecture:
      "A secure, reliable cloud setup that processes AI tasks efficiently, keeps data isolated, and provides clear visibility into system activity.",
    outcomeLede:
      "Hours of manual review reduced to minutes. Personalized plans generated faster. Clinicians stay in control.",
  },
  {
    slug: "patient-portal",
    pageTitle: "One Patient. One Workflow. | Kinwits",
    description: "Connecting clinical, billing, and patient workflows through one integrated platform.",
    eyebrow: "Healthcare · Platform",
    titleLines: ["One Patient.", "One Workflow."],
    lede: "Connecting clinical, billing, and patient workflows through one integrated platform.",
    chips: ["HEALTHCARE", "PRODUCT ENGINEERING", "SYSTEMS INTEGRATION", "WORKFLOW AUTOMATION"],
    heroTint: "bg-cream",
    outcomeTint: "bg-lav",
    challenge:
      "Patient information, appointments, forms, lab results, billing, and support were spread across multiple systems. Patients had to navigate different processes, while clinic teams relied on disconnected systems to manage the patient journey.",
    context:
      "A US healthcare and wellness organization using third-party portals for clinical records, billing, and marketing, with complex patient workflows and strict privacy requirements.",
    solutionIntro:
      "Kinwits built a patient portal that connects third-party portals and the patient, bringing information and workflows together in one place and keeping systems synchronized in real time.",
    solutionList: [
      {
        title: "Systems Integration",
        description:
          "Connects clinical, billing, and patient-facing systems so information flows between them automatically.",
      },
      {
        title: "Patient Onboarding",
        description:
          "Automatically invites new patients from third-party portals and guides them through secure sign-in, onboarding, and profile setup.",
      },
      {
        title: "Appointments, Forms & Consents",
        description:
          "Keeps appointments up to date, sends reminders, and surfaces the right forms and consents based on the patient's workflow.",
      },
      {
        title: "Lab Results & AI",
        description:
          "Uses AI to read incoming lab reports, extract key markers, and present results with reference ranges and clear status indicators.",
      },
      {
        title: "Patient Support & Billing",
        description:
          "Brings support requests and billing information into the portal while triggering the right workflows across connected systems.",
      },
    ],
    techChips: ["React", "TypeScript", "AWS", "AWS Cognito", "AI Vision"],
    architecture:
      "A secure, real-time integration layer connecting clinical, billing, and patient-facing systems. Designed to keep information synchronized, maintain clear data flows, and support reliable patient workflows across the platform.",
    outcomeLede:
      "Connected systems. Simpler patient workflows. Real-time information. Less manual coordination.",
  },
  {
    slug: "scheduling",
    pageTitle: "One Clinic. One Schedule. | Kinwits",
    description:
      "A sophisticated scheduling platform that orchestrates patients, staff, rooms, equipment, and clinical protocols with precision.",
    eyebrow: "Healthcare · Optimization",
    titleLines: ["One Clinic.", "One Schedule."],
    lede: "A sophisticated scheduling platform that orchestrates patients, staff, rooms, equipment, and clinical protocols with precision.",
    chips: ["WORKFLOW AUTOMATION", "PRODUCT ENGINEERING", "SYSTEMS INTEGRATION"],
    heroTint: "bg-royal",
    outcomeTint: "bg-cream",
    challenge:
      "Manually scheduling a busy clinic meant coordinating patients, providers, rooms, equipment, and treatment requirements across dozens of clinical rules. With treatments requiring specific sequences, spacing, and shared resources, creating a conflict-free schedule was time-consuming and prone to clashes.",
    context:
      "A US healthcare and wellness organization running multiple treatment programs with shared providers, rooms, equipment, group sessions, and patient-specific scheduling requirements.",
    solutionIntro:
      "Kinwits built a scheduling engine that generates complete weekly schedules based on patient needs, available resources, and clinical rules.",
    solutionList: [
      {
        title: "Constraint-Based Scheduling",
        description:
          "Applies 36 rules covering treatment timing, sequencing, spacing, resource limits, and patient requirements.",
      },
      {
        title: "Multi-Patient Scheduling",
        description:
          "Schedules multiple patients in one run while coordinating shared providers, rooms, equipment, and sessions.",
      },
      {
        title: "Conflict-Aware Scheduling",
        description: "Accounts for existing bookings to prevent double-booking patients, staff, and resources.",
      },
      {
        title: "Flexible Program Scheduling",
        description: "Supports multi-week programs, flexible schedules, group sessions, and couples scheduling.",
      },
      {
        title: "Third-Party Integration",
        description: "Pushes completed schedules directly to the clinic's calendar.",
      },
    ],
    techChips: ["Python", "OR-Tools CP-SAT", "EMR Integration", "React", "TypeScript", "AWS"],
    architecture:
      "A constraint-based scheduling engine that processes multiple inputs and rules to generate conflict-free schedules in seconds. The system integrates with a third-party platform to read existing bookings and publish completed schedules to the clinic calendar.",
    outcomeLede: "Manual scheduling reduced to seconds. Fewer conflicts. Schedules ready to use.",
  },
];

const TILE_VARIANT: Record<CaseStudyTint, TileVariant> = {
  "bg-lav": "lav",
  "bg-cream": "cream",
  "bg-royal": "royal",
};

/**
 * Single source for the bento tiles on Home and `/work`, and the footer's Work
 * links — derived from `caseStudies` so tile copy can never drift from the page
 * it links to. Never hardcode tile copy in a component.
 */
export const workTiles: TileProps[] = caseStudies.map((cs) => ({
  variant: TILE_VARIANT[cs.heroTint],
  wide: cs.tileWide,
  eyebrow: cs.eyebrow,
  title: cs.titleLines.join(" "),
  description: cs.lede,
  chips: cs.chips,
  href: `/work/${cs.slug}`,
}));

export function getCaseStudyBySlug(slug: string | undefined): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getOtherCaseStudies(slug: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.slug !== slug);
}
