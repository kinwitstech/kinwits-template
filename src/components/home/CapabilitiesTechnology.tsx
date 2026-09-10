import { useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-kinwits/Reveal";

interface CapabilityItem {
  no: string;
  title: string;
  body: string;
  tags: string[];
}

const CAPABILITIES: CapabilityItem[] = [
  {
    no: "01",
    title: "AI Agents & Intelligent Workflows",
    body: "Build AI into real business workflows — from production-ready agents and LLM applications to intelligent automation, with the integrations and controls needed to operate reliably.",
    tags: ["AI AGENTS", "LLMS", "RAG", "LANGGRAPH", "AI INTEGRATION"],
  },
  {
    no: "02",
    title: "Product Engineering",
    body: "Build and evolve customer-facing and internal products — from problem definition and architecture through engineering, deployment, and iteration.",
    tags: ["WEB", "MOBILE", "APIS", "PLATFORMS", "PRODUCT ENGINEERING"],
  },
  {
    no: "03",
    title: "Cloud & Infrastructure",
    body: "Build secure, reliable cloud foundations for production software, designed for performance, deployment, access, and scale.",
    tags: ["AWS", "ECS", "FARGATE", "LAMBDA", "BEDROCK", "INFRASTRUCTURE"],
  },
  {
    no: "04",
    title: "Systems Integration",
    body: "Connect the systems your business relies on with reliable APIs, data flows, and integrations that make technology work together seamlessly.",
    tags: ["APIS", "CRM", "EMR", "WEBHOOKS", "INTEGRATION"],
  },
  {
    no: "05",
    title: "Data & Internal Tools",
    body: "Turn business data into better decisions and build internal tools that reduce manual work and help teams operate more effectively.",
    tags: ["DATA & ANALYTICS", "POSTGRESQL", "REDIS", "ELASTICSEARCH", "INTERNAL TOOLS"],
  },
];

interface TechColumn {
  heading: string;
  items: string[];
}

const TECH_COLUMNS: TechColumn[] = [
  { heading: "FRONTEND", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
  { heading: "AI", items: ["Anthropic Claude", "LangGraph", "RAG", "LLMs"] },
  { heading: "BACKEND", items: ["Python", "FastAPI", "Node.js", "REST", "Streaming APIs"] },
  { heading: "CLOUD", items: ["AWS", "ECS", "Fargate", "Lambda", "Bedrock"] },
  { heading: "DATA", items: ["PostgreSQL", "Redis", "Elasticsearch"] },
];

/** Fires the source's "capsule cascade" on a just-opened item's `.acc-tags span` tags. */
function popTags(body: HTMLDivElement) {
  if (prefersReducedMotion()) return;
  const tags = body.querySelectorAll<HTMLSpanElement>(".acc-tags span");
  if (!tags.length) return;
  gsap.fromTo(
    tags,
    { y: 18, opacity: 0, scale: 0.8 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.55,
      delay: 0.12,
      stagger: 0.09,
      ease: "back.out(1.6)",
      overwrite: true,
      clearProps: "transform",
    }
  );
}

export function CapabilitiesTechnology() {
  // Rendered outside <Reveal> because this heading needs `id="capsTitle"` for
  // aria-labelledby, and Reveal's props don't forward arbitrary attributes —
  // so its reveal (the `display` branch: slower duration, bigger easing) is
  // replicated manually here instead of widening the shared component.
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !titleRef.current) return;
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.05,
        ease: "power4.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
      });
    },
    { scope: titleRef }
  );

  // Mirrors the source's separate "firstAcc" mount block: item 0 opens on
  // load (max-height measured from scrollHeight) without the tag-cascade
  // animation firing — that only fires from a user click.
  useLayoutEffect(() => {
    const firstBody = bodyRefs.current[0];
    if (firstBody) {
      firstBody.style.maxHeight = `${firstBody.scrollHeight}px`;
    }
  }, []);

  function handleHeaderClick(index: number) {
    const wasOpen = openIndex === index;

    if (openIndex !== null) {
      const openBody = bodyRefs.current[openIndex];
      if (openBody) openBody.style.maxHeight = "0px";
    }

    if (wasOpen) {
      setOpenIndex(null);
      return;
    }

    setOpenIndex(index);
    const body = bodyRefs.current[index];
    if (body) {
      body.style.maxHeight = `${body.scrollHeight}px`;
      popTags(body);
    }
  }

  return (
    <section className="sec sec-dark" id="capabilities" aria-labelledby="capsTitle">
      <div className="wrap">
        <div className="acc-grid">
          <div>
            <Reveal as="p" className="eyebrow">
              Capabilities
            </Reveal>
            <h2 className="display" id="capsTitle" data-reveal="" ref={titleRef}>
              Engineering
              <br />
              That Ships<span className="t-ember">.</span>
            </h2>
            <Reveal as="p" className="tagline">
              Product thinking. Strong Engineering. Technology that delivers.
            </Reveal>
            <Reveal as="p" className="lede">
              Five capabilities. One team. We take ownership of architecture, engineering, and delivery — then stay
              for what happens after launch.
            </Reveal>
          </div>

          <Reveal as="div" className="acc">
            {CAPABILITIES.map((cap, index) => {
              const isOpen = openIndex === index;
              return (
                <div className={`acc-item${isOpen ? " open" : ""}`} key={cap.no}>
                  <button className="acc-head" aria-expanded={isOpen} onClick={() => handleHeaderClick(index)}>
                    <span>
                      <span className="no">{cap.no}</span>
                      {cap.title}
                    </span>
                    <span className="tog" aria-hidden="true">
                      <svg viewBox="0 0 12 12">
                        <path d="M6 1v10M1 6h10" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="acc-body"
                    ref={(el) => {
                      bodyRefs.current[index] = el;
                    }}
                  >
                    <div className="acc-body-in">
                      <p>{cap.body}</p>
                      <div className="acc-tags">
                        {cap.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>

        <RevealGroup as="div" className="tech-merge">
          <Reveal as="p" className="eyebrow">
            Technology we work with
          </Reveal>
          <Reveal as="p" className="lede">
            We choose technology based on the problem — not the other way around.
          </Reveal>
          <div className="tech-grid">
            {TECH_COLUMNS.map((col) => (
              <RevealItem as="div" className="tech-col" key={col.heading}>
                <h3>{col.heading}</h3>
                <ul>
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
