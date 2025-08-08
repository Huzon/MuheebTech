
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality standards in all our services."
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do. We listen, understand, and deliver beyond expectations."
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: "Reliability",
      description: "We honor our commitments and deliver projects on time, every time, without compromising on quality."
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      title: "Trust",
      description: "Built on transparency and integrity, we maintain the highest ethical standards in all our dealings."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Muheeb Technical Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            "Trusted by homes, chosen by businesses"
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver high-quality, reliable, and innovative technical services that enhance living and working spaces across the UAE. We are committed to customer satisfaction, safety, and excellence in every project we undertake.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the UAE's most trusted and sought-after technical services provider, known for transforming spaces and exceeding client expectations through professionalism, integrity, and cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Founded with a passion for transforming spaces and a commitment to excellence, Muheeb Technical Services has grown to become a trusted name in the UAE's technical services industry. From humble beginnings, we have built our reputation on quality craftsmanship, reliable service, and unwavering dedication to our clients.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Today, we serve both residential and commercial clients across the UAE, offering a comprehensive range of services from home renovations to office fit-outs. Our team of skilled professionals combines years of experience with the latest techniques and technologies to deliver results that exceed expectations.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-gray-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">5+</div>
              <div className="text-gray-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">100%</div>
              <div className="text-gray-200">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-gray-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Work With Us?"
        subtitle="Join hundreds of satisfied customers who trust Muheeb Technical Services"
        primaryButton="Get Free Quote"
        secondaryButton="Contact Us Today"
      />

      <Footer />
    </div>
  );
};

export default About;
