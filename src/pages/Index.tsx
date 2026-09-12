
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ProjectJourney } from "@/components/ProjectJourney";
import "@/premium.css";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ProjectShowcase } from "@/components/ProjectShowcase";

const Index = () => {
  return (
    <div className="premium-home">
      <SEO
        title="Interior Execution, Custom Joinery & Event Fabrication"
        description="Dubai execution partner for custom joinery, interior fit-out and event fabrication. We turn drawings, renders and concepts into finished work—even on fixed deadlines."
      />
      <Navbar />
      <main>
        <section className="editorial-hero">
          <img className="hero-photo" src="/projects/home/IMG_9306.webp" alt="Muheeb living room with bespoke furniture and coordinated finishes" width="1600" height="1600" />
          <div className="hero-shade" />
          <div className="hero-copy"><p className="eyebrow">MUHEEB / DUBAI / BUILT WITH PURPOSE</p><h1>You imagine it.<br /><em>We bring it to life.</em></h1><p className="hero-intro">Custom joinery. Interior execution. Event fabrication.</p><Link className="studio-button" to="/contact">Start a project <ArrowUpRight size={18} /></Link></div>
          <div className="hero-bottom"><span>Design intent. Built reality.</span><a href="#journey">Scroll to see the transformation <ArrowDown size={16} /></a></div>
        </section>
        <ProjectJourney />
        <section className="studio-intro"><p className="eyebrow">ONE EXECUTION PARTNER</p><h2>Considered in detail.<br /><em>Made for the real world.</em></h2><div className="audience-grid">
          <Link to="/interior-designers" className="audience-card"><span>01 / INTERIORS & JOINERY</span><h3>You design it.<br />We make it work.</h3><span>For designers & architects <ArrowUpRight /></span></Link>
          <Link to="/events" className="audience-card"><span>02 / EVENTS & INSTALLATIONS</span><h3>Your deadline is fixed.<br />We build around it.</h3><span>For event & production teams <ArrowUpRight /></span></Link>
        </div></section>
        <ProjectShowcase compact />
        <section className="studio-closing"><p className="eyebrow">YOUR NEXT PROJECT STARTS HERE</p><h2>From “what if”<br /><em>to walked into.</em></h2><Link to="/contact" className="studio-button">Let's build it <ArrowUpRight size={18} /></Link><a className="quiet-link" href="tel:+971566036352">Or call +971 56 603 6352</a></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
