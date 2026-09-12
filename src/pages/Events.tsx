import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Clock3, Hammer, Truck, Users } from "lucide-react";

const eventScope = ["Custom booths", "Stages and backdrops", "Branded rooms and sets", "Event interiors", "Custom furniture and joinery", "Temporary structures", "On-site installation", "Dismantling"];

const Events = () => (
  <div className="min-h-screen bg-white">
    <SEO title="Event Fabrication, Joinery & Installation" description="Fast-turnaround event fabrication in Dubai: custom booths, stages, backdrops, branded rooms, joinery, installation and dismantling for deadlines that cannot move." path="/events" />
    <Navbar />
    <section className="pt-32 pb-20 bg-yellow-400 text-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-semibold uppercase tracking-[0.18em] mb-4">For event & production companies</p>
        <h1 className="text-4xl md:text-6xl font-bold max-w-5xl mb-6">Your deadline is fixed. Our execution is built around it.</h1>
        <p className="text-xl text-blue-950/80 max-w-3xl mb-8">Fabrication, crews and installation. Ready before the doors open.</p>
        <a href="/contact" className="inline-block bg-blue-950 hover:bg-blue-900 text-white font-bold px-8 py-3 rounded-md">Discuss Your Event</a>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-900 mb-3">Built for immovable dates</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Built around your opening day.</h2>
          <p className="text-lg text-gray-600 mb-8">One coordinated team. From workshop to handover.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {eventScope.map((item) => <div key={item} className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-yellow-500" />{item}</div>)}
          </div>
        </div>
        <div className="rounded-3xl bg-blue-950 text-white p-8 md:p-12">
          <div className="text-6xl font-bold text-yellow-400 mb-2">25</div>
          <p className="text-xl mb-8">people assembled and managed</p>
          <div className="text-6xl font-bold text-yellow-400 mb-2">3 days</div>
          <p className="text-xl mb-8">to complete the event requirement</p>
          <p className="border-t border-blue-800 pt-8 text-blue-100">One real event delivery. One immovable deadline.</p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">From requirement to event-ready</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[{ icon: Clock3, title: "Deadline first", text: "We begin with the event date, access window and non-negotiable milestones." }, { icon: Hammer, title: "Fabrication plan", text: "We break the scope into practical components, materials and production tasks." }, { icon: Users, title: "Team mobilisation", text: "The workforce is organised around the actual workload and available time." }, { icon: Truck, title: "Install & hand over", text: "Delivery and site installation are coordinated to get the space event-ready." }].map(({ icon: Icon, title, text }) => <div key={title} className="bg-white p-7 rounded-2xl"><Icon className="w-8 h-8 text-yellow-500 mb-5" /><h3 className="text-xl font-bold mb-3">{title}</h3><p className="text-gray-600">{text}</p></div>)}
        </div>
      </div>
    </section>
    <CTASection title="Working against a fixed event date?" subtitle="Send the date, drawings and scope. We'll review what must be fabricated, installed and coordinated." primaryButton="Discuss Your Event" secondaryButton="Call +971 56 603 6352" secondaryHref="tel:+971566036352" variant="dark" />
    <Footer />
  </div>
);

export default Events;
