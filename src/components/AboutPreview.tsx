import { ArrowRight, Lightbulb, Users, Wrench } from "lucide-react";

export const AboutPreview = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="rounded-3xl bg-blue-950 text-white p-8 md:p-12">
          <p className="text-yellow-400 font-semibold mb-3">25 people. 3 days. Delivered.</p>
          <h2 className="text-4xl font-bold mb-6">Built for the part between the idea and the finished work.</h2>
          <p className="text-lg text-blue-100 mb-8">On one event project, we assembled and coordinated a 25-person team to complete the requirement in three days. That same problem-solving mindset guides every drawing, detail and installation.</p>
          <a href="/about" className="inline-flex items-center font-semibold text-yellow-400">How we work <ArrowRight className="ml-2 w-5 h-5" /></a>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-900 mb-3">Why Muheeb</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">We take responsibility for execution.</h2>
          <div className="space-y-7">
            <div className="flex gap-4"><Lightbulb className="w-7 h-7 text-yellow-500 shrink-0" /><div><h3 className="text-xl font-bold mb-1">Practical problem-solving</h3><p className="text-gray-600">We identify buildability and functionality issues and suggest workable solutions before they become site problems.</p></div></div>
            <div className="flex gap-4"><Wrench className="w-7 h-7 text-yellow-500 shrink-0" /><div><h3 className="text-xl font-bold mb-1">Design-to-build execution</h3><p className="text-gray-600">We translate drawings, 3D renders, reference images and concepts into functional finished work.</p></div></div>
            <div className="flex gap-4"><Users className="w-7 h-7 text-yellow-500 shrink-0" /><div><h3 className="text-xl font-bold mb-1">People mobilised to the project</h3><p className="text-gray-600">We coordinate the workforce and trades the scope demands, especially when event timelines are tight.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
