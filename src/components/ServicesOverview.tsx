import { ArrowRight, CalendarClock, DraftingCompass, Hammer, Layers, Sofa, Store } from "lucide-react";

const capabilities = [
  { icon: Sofa, title: "Custom Joinery", text: "Wardrobes, kitchens, vanities, TV units and built-in furniture made for the project." },
  { icon: Layers, title: "Interior Execution", text: "Partitions, feature walls, flooring, painting and finishes coordinated as one scope." },
  { icon: Store, title: "Event Fabrication", text: "Booths, stages, backdrops, branded rooms and temporary custom structures." },
  { icon: Hammer, title: "Installation", text: "Site delivery, installation and dismantling planned around access and deadlines." },
];

export const ServicesOverview = () => (
  <>
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-900 mb-3">Choose your project path</p>
          <h2 className="text-4xl font-bold text-gray-900">Execution built around your priorities</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <a href="/interior-designers" className="group rounded-3xl bg-blue-950 text-white p-8 md:p-12 hover:-translate-y-1 transition-transform">
            <DraftingCompass className="w-10 h-10 text-yellow-400 mb-8" />
            <p className="text-sm uppercase tracking-wider text-blue-200 mb-3">For designers, architects & contractors</p>
            <h3 className="text-3xl font-bold mb-4">You design it. We make it work.</h3>
            <p className="text-lg text-blue-100 mb-8">Send us the drawings, renders or concept. We handle the custom joinery and practical execution—including the buildability details that are easy to miss on paper.</p>
            <span className="inline-flex items-center font-semibold text-yellow-400">Explore interior execution <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
          </a>
          <a href="/events" className="group rounded-3xl bg-yellow-400 text-blue-950 p-8 md:p-12 hover:-translate-y-1 transition-transform">
            <CalendarClock className="w-10 h-10 mb-8" />
            <p className="text-sm uppercase tracking-wider text-blue-900 mb-3">For event & production companies</p>
            <h3 className="text-3xl font-bold mb-4">Your deadline is fixed. Our execution is built around it.</h3>
            <p className="text-lg text-blue-950/80 mb-8">Custom event interiors, joinery and installations delivered under tight timelines, with the labour and coordination needed to finish.</p>
            <span className="inline-flex items-center font-semibold">Explore event execution <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
          </a>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-900 mb-3">What we execute</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Capabilities that work together</h2>
          <p className="text-xl text-gray-600">One accountable execution partner across the package—not a list of disconnected trades for you to coordinate.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <Icon className="w-8 h-8 text-yellow-500 mb-5" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);
