import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { SEO } from "@/components/SEO";
import { CheckCircle2, FileImage, Lightbulb, Ruler, Wrench } from "lucide-react";

const scope = ["Custom joinery", "Wardrobes and cabinetry", "Kitchens and vanities", "TV units and feature walls", "Built-in furniture", "Partitions and interior finishes", "Flooring and painting", "Site installation"];

const InteriorDesigners = () => (
  <div className="min-h-screen bg-white">
    <SEO title="Custom Joinery Execution for Interior Designers" description="Custom joinery and interior execution in Dubai for designers, architects and contractors. Send drawings, renders or concepts; Muheeb solves buildability and installation." path="/interior-designers" />
    <Navbar />
    <section className="pt-32 pb-20 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-yellow-400 font-semibold uppercase tracking-[0.18em] mb-4">For designers, architects & contractors</p>
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mb-6">You design it. We make it work.</h1>
        <p className="text-xl text-blue-100 max-w-3xl mb-8">Your drawings. Our craftsmanship. Every detail made buildable.</p>
        <a href="/contact" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold px-8 py-3 rounded-md">Send Your Drawings</a>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-900 mb-3">An execution partner, not another design layer</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Designed by you.<br />Made by Muheeb.</h2>
          <img src="/projects/wall/IMG_4777.webp" alt="Bespoke timber wall detailing and integrated shelving" loading="lazy" decoding="async" width="960" height="1280" className="w-full h-80 object-cover mb-8" />
          <div className="grid sm:grid-cols-2 gap-3">
            {scope.map((item) => <div key={item} className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-yellow-500" />{item}</div>)}
          </div>
        </div>
        <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-8">How we support your project</h2>
          <div className="space-y-7">
            <div className="flex gap-4"><FileImage className="w-7 h-7 text-blue-900 shrink-0" /><div><h3 className="font-bold text-lg">Start with your design</h3><p className="text-gray-600">Drawings, renders, specifications, concepts or reference images.</p></div></div>
            <div className="flex gap-4"><Ruler className="w-7 h-7 text-blue-900 shrink-0" /><div><h3 className="font-bold text-lg">Review the practical details</h3><p className="text-gray-600">Dimensions, materials, interfaces, functionality and site conditions.</p></div></div>
            <div className="flex gap-4"><Lightbulb className="w-7 h-7 text-blue-900 shrink-0" /><div><h3 className="font-bold text-lg">Solve before we build</h3><p className="text-gray-600">We flag concerns and suggest workable alternatives where needed.</p></div></div>
            <div className="flex gap-4"><Wrench className="w-7 h-7 text-blue-900 shrink-0" /><div><h3 className="font-bold text-lg">Fabricate and install</h3><p className="text-gray-600">One team takes the agreed scope through to finished work.</p></div></div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-yellow-400 text-blue-950">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-3">A real example</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-5">From an AI reference image to a more functional TV console.</h2>
        <p className="text-lg text-blue-950/80">The same visual intent. Better storage and everyday usability.</p>
      </div>
    </section>
    <CTASection title="Have a design ready for execution?" subtitle="Send the drawings, renders or requirements and we'll review how we can support the scope." primaryButton="Send Your Drawings" secondaryButton="View Project Stories" />
    <Footer />
  </div>
);

export default InteriorDesigners;
