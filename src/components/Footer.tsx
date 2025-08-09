
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
              UAE's trusted technical services provider for homes and businesses.
            </p>
            <p className="text-sm text-yellow-400 font-medium">
              "Trusted by homes, chosen by businesses"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Services</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-yellow-500 transition-colors">Gallery</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-yellow-500 transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Home Renovation</li>
              <li className="text-gray-300">Office Fit-out</li>
              <li className="text-gray-300">Maintenance Services</li>
              <li className="text-gray-300">Custom Furniture</li>
              <li className="text-gray-300">Wallpaper & Paint</li>
              <li className="text-gray-300">Flooring Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+971565475321" className="text-gray-300 text-sm">+971 56 547 5321</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+971566036352" className="text-gray-300 text-sm">+971 56 603 6352</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="mailto:info@muheebtechnicals.com" className="text-gray-300 text-sm">info@muheebtechnical.com</a>
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
              © 2025 Muheeb Technical Services. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
