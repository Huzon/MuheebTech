import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { SEO } from "@/components/SEO";
import { CalendarClock, DraftingCompass, Lightbulb, Users } from "lucide-react";

const principles = [
  { icon: Lightbulb, title: "Think beyond the drawing", text: "We look for practical improvements in buildability, functionality and installation." },
  { icon: DraftingCompass, title: "Protect the intent", text: "The goal is not to simplify away the idea; it is to find the right way to execute it." },
  { icon: CalendarClock, title: "Plan around reality", text: "Deadlines, access, labour and site conditions shape a workable execution plan." },
  { icon: Users, title: "Take ownership", text: "We coordinate the people and tasks required to move the agreed scope toward completion." },
];

const About = () => (
  <div className="min-h-screen bg-white">
    <SEO title="About Our Interior & Event Execution Team" description="Muheeb is a Dubai interior and event execution company known for practical problem-solving, custom joinery and mobilising teams around difficult project deadlines." path="/about" />
    <Navbar />
    <section className="pt-32 pb-20 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-yellow-400 font-semibold uppercase tracking-[0.18em] mb-4">About Muheeb</p>
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mb-6">We are an execution company.</h1>
        <p className="text-xl text-blue-100 max-w-3xl">Our work starts with an idea, drawing, requirement or deadline. Our job is to figure out how to turn it into something that works—and take responsibility for the agreed execution.</p>
      </div>
    </section>
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14">
        <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-900 mb-3">Our story in the work</p><h2 className="text-4xl font-bold mb-6">The common thread is solving what happens next.</h2></div>
        <div className="space-y-6 text-lg text-gray-600">
          <p>We have coordinated a 25-person team to deliver an event project in three days, proposed practical solutions that were not obvious in an interior plan, and turned an AI reference image into a TV console with better functionality.</p>
          <p>Different projects, same strength: understand the intent, solve the real-world details and organise the work needed to deliver it.</p>
          <p>Today we focus that capability on two types of partners: interior designers and contractors who need design-to-build support, and event companies working against immovable dates.</p>
        </div>
      </div>
    </section>
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">How we approach the work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{principles.map(({ icon: Icon, title, text }) => <div key={title} className="bg-white rounded-2xl p-7"><Icon className="w-8 h-8 text-yellow-500 mb-5" /><h3 className="text-xl font-bold mb-3">{title}</h3><p className="text-gray-600">{text}</p></div>)}</div>
      </div>
    </section>
    <CTASection title="Need an execution partner?" subtitle="Tell us what you are designing, producing or preparing to install." primaryButton="Discuss Your Project" secondaryButton="View Project Stories" variant="dark" />
    <Footer />
  </div>
);

export default About;
