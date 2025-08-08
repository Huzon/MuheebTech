
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building, Wrench, Paintbrush, Sofa, Hammer } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-yellow-500" />,
      title: "Home Renovation",
      description: "Complete home makeovers including kitchen, bathroom, and living space renovations with modern design and quality materials.",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Living Room Design", "Bedroom Makeover"]
    },
    {
      icon: <Building className="w-8 h-8 text-yellow-500" />,
      title: "Office Fit-out",
      description: "Professional office spaces designed for productivity and comfort, from small startups to large corporate environments.",
      features: ["Corporate Office Design", "Workspace Planning", "Reception Areas", "Meeting Rooms"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-yellow-500" />,
      title: "Maintenance Services",
      description: "Regular maintenance and repair services to keep your property in perfect condition year-round.",
      features: ["Regular Inspections", "Preventive Maintenance", "Emergency Repairs", "Annual Contracts"]
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-yellow-500" />,
      title: "Wallpaper & Paint",
      description: "Professional painting and wallpaper installation services with premium materials and expert craftsmanship.",
      features: ["Interior Painting", "Exterior Painting", "Wallpaper Installation", "Texture Work"]
    },
    {
      icon: <Sofa className="w-8 h-8 text-yellow-500" />,
      title: "Custom Furniture",
      description: "Bespoke furniture solutions designed and crafted to perfectly fit your space and style preferences.",
      features: ["Built-in Wardrobes", "Kitchen Cabinets", "Office Furniture", "Custom Storage"]
    },
    {
      icon: <Hammer className="w-8 h-8 text-yellow-500" />,
      title: "Specialized Services",
      description: "Expert services including flooring, acrylic work, POP & ceiling installations for complete space transformation.",
      features: ["Flooring Installation", "Acrylic Work", "POP & Ceiling", "Electrical Work"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive technical services for homes and businesses across the UAE
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
        title="Ready to Start Your Project?"
        subtitle="Get a free consultation and quote for your next renovation or technical service"
        primaryButton="Get Free Quote"
        secondaryButton="Book Consultation"
      />

      <Footer />
    </div>
  );
};

export default Services;
