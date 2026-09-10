import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { CapabilitiesTechnology } from "@/components/home/CapabilitiesTechnology";
import { AboutSection } from "@/components/home/AboutSection";
import { WorkBentoSection } from "@/components/home/WorkBentoSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { InsightsPreviewSection } from "@/components/home/InsightsPreviewSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { useSeo } from "@/hooks/useSeo";

export default function Home() {
  useSeo({
    title: "Kinwits — Build What's Next",
    description:
      "Kinwits helps growing companies design, build, and scale the software products that move their business forward. From business problem to production-ready technology.",
    canonicalPath: "/",
  });

  return (
    <Layout>
      <HeroSlider />
      <CapabilitiesTechnology />
      <AboutSection />
      <WorkBentoSection />
      <TestimonialSection />
      <InsightsPreviewSection />
      <ContactCtaSection />
    </Layout>
  );
}
