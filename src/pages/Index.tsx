
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { AboutPreview } from "@/components/AboutPreview";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ProjectShowcase } from "@/components/ProjectShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Interior Execution, Custom Joinery & Event Fabrication"
        description="Dubai execution partner for custom joinery, interior fit-out and event fabrication. We turn drawings, renders and concepts into finished work—even on fixed deadlines."
      />
      <Navbar />
      <Hero />
      <ServicesOverview />
      <ProjectShowcase compact />
      <CTASection
        title="Have drawings, a concept or a fixed deadline?"
        subtitle="Send us the project requirements. We'll review the scope and discuss the practical route to execution."
        primaryButton="Discuss Your Project"
        secondaryButton="View Projects"
      />
      <AboutPreview />
      <Testimonials />
      <CTASection
        title="Give us the requirement. We'll work out the execution."
        subtitle="Talk to Muheeb about joinery, interior works or a time-critical event project in Dubai."
        primaryButton="Send Your Requirements"
        secondaryButton="Call +971 56 603 6352"
        secondaryHref="tel:+971566036352"
        variant="dark"
      />
      <Footer />
    </div>
  );
};

export default Index;
