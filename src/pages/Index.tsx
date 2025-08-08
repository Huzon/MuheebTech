
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { AboutPreview } from "@/components/AboutPreview";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <CTASection
        title="Ready to Transform Your Space?"
        subtitle="Get professional technical services from UAE's trusted experts"
        primaryButton="Get Free Quote"
        secondaryButton="Book Consultation"
      />
      <AboutPreview />
      <Testimonials />
      <CTASection
        title="Join the list of Satisfied Customers"
        subtitle="Experience the Muheeb difference today"
        primaryButton="Request Callback"
        secondaryButton="Explore Services"
        variant="dark"
      />
      <Footer />
    </div>
  );
};

export default Index;
