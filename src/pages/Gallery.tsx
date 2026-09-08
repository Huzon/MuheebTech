import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { SEO } from "@/components/SEO";

const Gallery = () => (
  <div className="min-h-screen bg-white">
    <SEO title="Interior Joinery & Event Project Portfolio" description="Browse Muheeb Technical Services projects in Dubai, including residential interiors, office fit-outs, custom furniture and feature-wall execution." path="/gallery" />
    <Navbar />
    <section className="pt-32 pb-20 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-yellow-400 font-semibold uppercase tracking-[0.18em] mb-4">Selected project portfolio</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Ideas and drawings, made real.</h1>
        <p className="text-xl text-blue-100 max-w-3xl">Explore examples of our interior execution, custom joinery and finishing work, then open each project to see more images.</p>
      </div>
    </section>
    <ProjectShowcase />
    <CTASection title="What are you trying to build?" subtitle="Share your deadline, drawings, render or reference. We'll look at the requirement and discuss the execution." primaryButton="Discuss Your Project" secondaryButton="Explore Interior Execution" secondaryHref="/interior-designers" />
    <Footer />
  </div>
);

export default Gallery;
