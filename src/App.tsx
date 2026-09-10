import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Insights from "./pages/Insights";
import ClinicalAiPastTheDemo from "./pages/insights/ClinicalAiPastTheDemo";
import EmrIntegration from "./pages/insights/EmrIntegration";
import HipaaAiAwsArchitecture from "./pages/insights/HipaaAiAwsArchitecture";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Healthcare from "./pages/Healthcare";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/clinical-ai-past-the-demo" element={<ClinicalAiPastTheDemo />} />
        <Route path="/insights/emr-integration" element={<EmrIntegration />} />
        <Route path="/insights/hipaa-ai-aws-architecture" element={<HipaaAiAwsArchitecture />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        {/* Off-nav, matching source — only reachable via Home's hero slide 2 CTA. */}
        <Route path="/healthcare" element={<Healthcare />} />
        {/* No v36 design exists for this — kept live for now (legal/compliance), pending a design pass. */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
