
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Interior Designers", href: "/interior-designers" },
    { name: "Events", href: "/events" },
    { name: "Projects", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="site-nav fixed top-0 left-0 right-0 z-50" aria-label="Main navigation">
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex flex-row items-center h-full" aria-label="Muheeb Technical Services home">
              <img src="/muheeb_icon.png" alt="Muheeb Technical Services" className="h-14 w-14 object-contain" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-900">
                  Muheeb
                </span>
                <span className="text-yellow-500 text-sm">Technical Services</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive ? "text-blue-900 bg-blue-50" : "text-gray-700 hover:text-blue-900"}`}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden xl:block">
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"><a href="https://wa.me/971566036352?text=I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer">
                  Discuss Your Project
                </a></Button>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-900"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-navigation" className="xl:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "text-blue-900 bg-blue-50" : "text-gray-700 hover:text-blue-900"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"><a href="https://wa.me/971566036352?text=I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer" >
                  Discuss Your Project
              </a></Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
