
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building, Wrench, Paintbrush, Sofa, Hammer } from "lucide-react";
import { SEO } from "@/components/SEO";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-yellow-500" />,
      title: "Custom Joinery",
      description: "Design-to-build joinery for interior and event projects, fabricated from drawings, renders or reference concepts.",
      features: ["Wardrobes & Cabinets", "Kitchens & Vanities", "TV Units", "Built-in Furniture"]
    },
    {
      icon: <Building className="w-8 h-8 text-yellow-500" />,
      title: "Interior Execution",
      description: "Coordinated execution support for designers and contractors who need a finished space—not another trade to manage.",
      features: ["Partitions", "Feature Walls", "Flooring", "Painting & Finishes"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-500" />,
      title: "Event Fabrication",
      description: "Fast-turnaround fabrication for event and production companies working against fixed opening dates.",
      features: ["Custom Booths", "Branded Rooms", "Temporary Structures", "Event Interiors"]
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-yellow-500" />,
      title: "Stages & Backdrops",
      description: "Custom-built event focal points planned for the design, venue access and installation window.",
      features: ["Stages", "Backdrops", "Branding Structures", "Custom Set Elements"]
    },
    {
      icon: <Sofa className="w-8 h-8 text-yellow-500" />,
      title: "Site Installation",
      description: "Delivery, installation and dismantling coordinated with the project schedule and site conditions.",
      features: ["Site Coordination", "Joinery Installation", "Event Setup", "Dismantling"]
    },
    {
      icon: <Hammer className="w-8 h-8 text-yellow-500" />,
      title: "Additional Technical Works",
      description: "Supporting trades kept within the execution package when the project needs a coordinated solution.",
      features: ["Flooring", "Acrylic Work", "POP & Ceiling", "Electrical Works"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Custom Joinery, Interior & Event Execution Services" description="Explore Muheeb's Dubai execution capabilities: custom joinery, interior works, event booths, stages, backdrops, installation and supporting technical works." path="/services" />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Execution That Brings Designs to Life</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Custom joinery, interior works and event fabrication organised around the finished result
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/971566036352?text=${encodeURIComponent(`Get quote for ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                      Get Quote for {service.title}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Have a scope ready to review?"
        subtitle="Send the drawings, render, reference or event brief and we'll discuss the execution."
        primaryButton="Discuss Your Project"
        secondaryButton="View Project Stories"
      />

      <Footer />
    </div>
  );
};

export default Services;
