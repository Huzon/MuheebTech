
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Muheeb <span className="text-yellow-500">Technical</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Interior execution, custom joinery and event fabrication in Dubai.
            </p>
            <p className="text-sm text-yellow-400 font-medium">
              You design it. We make it work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="/interior-designers" className="text-gray-300 hover:text-yellow-500 transition-colors">Interior Designers</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-yellow-500 transition-colors">Events</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-yellow-500 transition-colors">Projects</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-yellow-500 transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Custom Joinery</li>
              <li className="text-gray-300">Interior Execution</li>
              <li className="text-gray-300">Event Fabrication</li>
              <li className="text-gray-300">Booths, Stages & Backdrops</li>
              <li className="text-gray-300">Installation & Dismantling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+971566036352" className="text-gray-300 text-sm hover:text-yellow-500">+971 56 603 6352</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="mailto:info@muheebtechnical.com" className="text-gray-300 text-sm hover:text-yellow-500">info@muheebtechnical.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Mon-Sat: 8AM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Muheeb Technical Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://wa.me/971566036352" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
