import work1 from '@/assets/work-1.jpg';
import work2 from '@/assets/work-2.jpg';
import work3 from '@/assets/work-3.jpg';
import work4 from '@/assets/work-4.jpg';
import work5 from '@/assets/work-5.jpg';
import work6 from '@/assets/work-6.jpg';

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'AI & Agents' | 'Platforms & Software' | 'Web & Design';
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  highlights: string[];
  thumbnail: string;
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'clinical-ai-platform',
    slug: 'clinical-ai-platform',
    title: 'Clinical AI Platform',
    client: 'Energy4Life Centers / bVital',
    category: 'AI & Agents',
    summary:
      'Multi-agent AI system that auto-generates personalized Parkinson\'s treatment plans, integrating EMR and CRM in a HIPAA-compliant cloud architecture.',
    problem:
      'Energy4Life Centers needed a scalable way to generate personalized treatment plans for Parkinson\'s patients — a process that was manual, time-intensive, and inconsistent across providers. Clinical teams spent hours per patient assembling data from disconnected systems before a plan could even be drafted.',
    solution:
      'We built a multi-agent LangGraph system powered by Anthropic Claude that ingests patient data from Cerbo EMR and GoHighLevel CRM, generates evidence-based treatment plans, and routes them for provider review — all within a HIPAA-compliant AWS architecture on ECS/Fargate with DynamoDB and S3 for persistence.',
    techStack: [
      'Python',
      'FastAPI',
      'LangGraph',
      'Anthropic Claude',
      'AWS Bedrock',
      'AWS ECS/Fargate',
      'DynamoDB',
      'S3',
      'Cognito',
    ],
    highlights: [
      'Multi-agent LangGraph orchestration with specialized reasoning nodes for intake, planning, and review',
      'HIPAA-compliant deployment on AWS ECS/Fargate with encrypted data at rest and in transit',
      'Cerbo EMR + GoHighLevel CRM integration for unified patient context',
      'Automated treatment plan generation with provider oversight loop',
      'Elastic serverless-ready architecture for variable clinical workloads',
    ],
    thumbnail: work1,
  },
  {
    id: 'patient-portal',
    slug: 'patient-portal',
    title: 'bVital Patient Portal',
    client: 'bVital',
    category: 'Platforms & Software',
    summary:
      'HIPAA-compliant patient-facing PWA enabling appointment management, AI-powered lab result analysis, supplement tracking, and secure document access.',
    problem:
      'Patients lacked a unified digital interface to manage their care journey — appointments, lab results, supplements, and clinical documents were scattered across disconnected systems, creating friction and reducing engagement.',
    solution:
      'We delivered a Progressive Web App with MFA-secured authentication, a real-time AI analysis engine for lab results, and a unified dashboard integrating all patient data streams from a FastAPI backend on AWS. The app is installable on iOS and Android without an app store.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'AWS Amplify',
      'FastAPI',
      'PostgreSQL / RDS',
      'Cognito MFA',
    ],
    highlights: [
      'Cognito MFA for HIPAA-grade patient authentication',
      'AI-powered lab result analysis with plain-language patient summaries',
      'Real-time appointment booking with availability sync',
      'Secure document storage and in-browser access',
      'PWA — installable on iOS and Android, offline-capable',
    ],
    thumbnail: work2,
  },
  {
    id: 'provider-ai-console',
    slug: 'provider-ai-console',
    title: 'Provider AI Console',
    client: 'bVital',
    category: 'Platforms & Software',
    summary:
      'Real-time streaming AI chat console for healthcare providers — inline feedback on treatment plans with direct send-to-EMR workflow.',
    problem:
      'Providers needed a fast, intuitive interface to interact with AI-generated treatment plans, request revisions, and push finalized plans directly to the EMR without context-switching between multiple tools.',
    solution:
      'We built a streaming SSE-based chat console with TanStack Query for optimistic UI updates, inline diff-based feedback on plan revisions, and a one-click send-to-EMR integration with Cerbo — giving providers AI assistance without leaving their clinical workflow.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'SSE (Server-Sent Events)',
      'TanStack Query',
      'FastAPI',
    ],
    highlights: [
      'Real-time SSE streaming for zero-latency AI responses',
      'Inline treatment plan feedback with revision diff view',
      'One-click EMR submission to Cerbo',
      'Optimistic UI updates via TanStack Query',
      'Role-based access control for clinical staff tiers',
    ],
    thumbnail: work3,
  },
  {
    id: 'crm-emr-bridge',
    slug: 'crm-emr-bridge',
    title: 'CRM ↔ EMR Automation Bridge',
    client: 'bVital',
    category: 'AI & Agents',
    summary:
      'Serverless webhook bridge that auto-creates clinical encounters in Cerbo EMR from GoHighLevel CRM survey submissions — eliminating manual data entry entirely.',
    problem:
      'New patient intake created a manual bottleneck: staff had to copy survey responses from GoHighLevel into Cerbo EMR for every patient, slowing onboarding by hours per case and introducing transcription errors that risked clinical accuracy.',
    solution:
      'We built a serverless FastAPI application deployed on AWS Lambda via SAM. Incoming GoHighLevel webhooks trigger automatic clinical encounter creation in Cerbo EMR — with field mapping, deduplication, error handling, and a full audit log — reducing intake time from hours to seconds.',
    techStack: [
      'Python',
      'FastAPI',
      'Mangum',
      'AWS Lambda',
      'AWS SAM',
      'GoHighLevel API',
      'Cerbo EMR API',
    ],
    highlights: [
      'Zero-infrastructure serverless deployment on AWS Lambda',
      'Automatic clinical encounter creation from CRM survey responses',
      'Bidirectional field mapping between GoHighLevel and Cerbo',
      'Webhook validation and idempotency guarantees',
      'SAM-based IaC for reproducible, version-controlled deployments',
    ],
    thumbnail: work4,
  },
  {
    id: 'kinwits-web-template',
    slug: 'kinwits-web-template',
    title: 'Kinwits Website Template',
    client: 'Kinwits',
    category: 'Web & Design',
    summary:
      'Open-source React + Vite marketing site template with Tailwind CSS, shadcn/ui, and a clean monochrome design system — ready to deploy.',
    problem:
      'Agencies and founders needed a polished, production-ready marketing site template they could own and customise — not a page-builder subscription.',
    solution:
      'A fully open-source Vite + React + TypeScript template with shadcn/ui components, Tailwind CSS design tokens, scroll animations, contact form with Lambda backend, and a responsive monochrome design system built around the Unbounded typeface.',
    techStack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'AWS Lambda'],
    highlights: [
      'Monochrome design system with Unbounded typeface',
      'Scroll-triggered animations and parallax hero',
      'Contact form with AWS Lambda backend',
      'Fully responsive across mobile, tablet, and desktop',
      'Open-source — clone and deploy in minutes',
    ],
    thumbnail: work5,
    externalUrl: 'https://github.com/kinwits',
  },
  {
    id: 'ghl-automation-template',
    slug: 'ghl-automation-template',
    title: 'GoHighLevel Automation Kit',
    client: 'Kinwits',
    category: 'Web & Design',
    summary:
      'Open-source GoHighLevel automation scripts and webhook templates for agencies looking to extend the GHL platform with custom serverless workflows.',
    problem:
      'GHL agencies needed reusable, battle-tested automation patterns for common workflows — without rebuilding from scratch for every client.',
    solution:
      'A collection of open-source FastAPI webhook handlers and automation templates covering lead routing, appointment sync, survey ingestion, and CRM field mapping — all deployable to AWS Lambda in one command.',
    techStack: ['Python', 'FastAPI', 'AWS Lambda', 'GoHighLevel API', 'AWS SAM'],
    highlights: [
      'Plug-and-play webhook handlers for common GHL events',
      'One-command Lambda deployment via SAM',
      'Reusable field mapping utilities for CRM integration',
      'Battle-tested patterns from production deployments',
      'Open-source — free to use and extend',
    ],
    thumbnail: work6,
    externalUrl: 'https://github.com/kinwits',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getProjectsByCategory = (category: Project['category']): Project[] =>
  projects.filter((p) => p.category === category);
