import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const submitting = useRef(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => body.append(key, String(value)));
    submitting.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Discuss an Interior or Event Project" description="Send Muheeb your drawings, renders, event date or project requirements. Discuss custom joinery, interior execution and event fabrication in Dubai." path="/contact" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tell Us What You're Trying to Build</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Send your drawings, renders, reference images, project scope or event date. We'll review what execution support you need.
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
                <CardTitle className="text-2xl">Send Your Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  aria-busy={status === "sending"}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
                  </p>
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
                    <label htmlFor="client-type" className="block text-sm font-medium text-gray-700 mb-2">
                      I am a
                    </label>
                    <select id="client-type" name="client-type" required className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select one</option>
                      <option value="interior-designer">Interior Designer / Architect</option>
                      <option value="event-company">Event / Production Company</option>
                      <option value="contractor">Contractor</option>
                      <option value="direct-client">Direct Client</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-joinery">Custom Joinery</option>
                      <option value="interior-execution">Interior Execution</option>
                      <option value="event-execution">Event Fabrication & Installation</option>
                      <option value="technical-services">Additional Technical Services</option>
                      <option value="other">Other</option>
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
                      placeholder="Tell us what you need to build, the location and your target date..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  >
                    {status === "sending" ? "Sending…" : "Send Requirements"}
                  </Button>
                  <div role="status" aria-live="polite">
                    {status === "success" && (
                      <p className="text-green-700">Thank you! Your requirements have been sent. Our team will be in touch to discuss your project.</p>
                    )}
                  </div>
                  {status === "error" && (
                    <p role="alert" className="text-red-700">We couldn't send your message. Your details are still here—please try again, or contact us using WhatsApp below.</p>
                  )}
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
                      <a href="mailto:info@muheebtechnical.com" className="text-gray-600">info@muheebtechnical.com</a>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Prefer WhatsApp?</h3>
                  <p className="text-gray-700 mb-6">
                    Send the drawings, renders, scope or event date directly and start with the real project requirement.
                  </p>
                 <a
                  href="https://wa.me/971566036352?text=I%27d%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-md text-center"
                >
  Discuss Your Project
</a>
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
