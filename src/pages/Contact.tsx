import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    const whatsappMessage = `
Hello, I would like to inquire about your services:

🧑 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}
🛠 Service Interested In: ${service || "Not specified"}
📝 Message: ${message}
    `;

    const whatsappUrl = `https://wa.me/971566036352?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    form.reset(); // optional: clear form after redirect
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch for your next project or technical service needs
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input id="name" name="name" type="text" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="Home Renovation">Home Renovation</option>
                      <option value="Office Fit-out">Office Fit-out</option>
                      <option value="Maintenance Services">Maintenance Services</option>
                      <option value="Wallpaper & Paint">Wallpaper & Paint</option>
                      <option value="Custom Furniture">Custom Furniture</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  >
                    Send on WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a className="text-gray-600" href="tel:971566036352">+971 56 603 6352</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@muheebtechnicals.com" className="text-gray-600">info@muheebtechnical.com</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Offer */}
              <Card className="bg-gradient-to-r from-blue-50 to-yellow-50 border-yellow-200">
                <CardContent className="text-center p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Offer</h3>
                  <p className="text-gray-700 mb-6">
                    Get expert advice for your project with our professional consultation
                  </p>
                  <a
                    href="https://wa.me/971566036352?text=I%20would%20like%20a%20free%20counselling"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-md text-center"
                  >
                    Book Free Counselling
                  </a>
                  <p className="text-xs text-gray-500 mt-3">
                    *Free counselling is applicable only if a service is purchased
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
