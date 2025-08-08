import { 
  Home, 
  Building, 
  Wrench, 
  Paintbrush, 
  Sofa, 
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServicesOverview = () => {
  const mainServices = [
    {
      icon: Home,
      title: "Home Renovation",
      description: "Complete home transformation services from concept to completion",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Living Space Design"]
    },
    {
      icon: Building,
      title: "Office Fit-out",
      description: "Professional office spaces designed for productivity and aesthetics",
      features: ["Space Planning", "Interior Design", "Furniture Installation"]
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Comprehensive maintenance solutions for homes and offices",
      features: ["Electrical Work", "Plumbing", "HVAC Services"]
    }
  ];

  const otherServices = [
    {
      icon: Paintbrush,
      title: "Wallpaper & Paint",
      description: "Professional painting and wallpaper installation services"
    },
    {
      icon: Sofa,
      title: "Custom Furniture",
      description: "Bespoke furniture design and manufacturing"
    },
    {
      icon: Layers,
      title: "Flooring Solutions",
      description: "Premium flooring installation and renovation"
    },
    {
      icon: Layers,
      title: "Acrylic Work",
      description: "Custom acrylic installations and fabrication"
    },
    {
      icon: Building,
      title: "POP & Ceiling Work",
      description: "Decorative ceiling designs and installations"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical services for your home and office transformation needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-900 hover:bg-yellow-500 hover:text-black transition-colors duration-300">
                Get Quote
              </Button>
            </div>
          ))}
        </div>

        {/* Other Services */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Additional Services
          </h3>
          <p className="text-lg text-gray-600">
            Specialized technical services to complete your project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white/40 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/60 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-lg mr-4 group-hover:bg-blue-900 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-black group-hover:text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h4>
              </div>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};
