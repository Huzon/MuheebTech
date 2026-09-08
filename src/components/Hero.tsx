
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[720px] h-screen overflow-hidden bg-blue-950">
      <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=82" alt="Custom interior execution and joinery" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-black/45"></div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto pt-16 text-white">
          <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-yellow-400 mb-5">Interior & event execution partner · Dubai</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            You Have the Design.<br />We Make It Work.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-gray-100 animate-fade-in delay-200">
            Custom joinery, interior execution and event installations for designers, contractors and event companies who need the details solved and the work delivered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-500">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-3">
              <a href="/contact">Discuss Your Project</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-blue-950 text-lg px-8 py-3">
              <a href="/gallery">View Our Projects</a>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-200">
            <span>Drawings → finished work</span><span>Custom joinery specialists</span><span>Fast event mobilisation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
