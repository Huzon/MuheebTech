
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
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex flex-row items-center h-full" aria-label="Muheeb Technical Services home">
              <img src="/muheeb_icon.png" alt="Muheeb Technical Services" className="h-14 w-14 object-contain" />
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-blue-900">
                  Muheeb
                </h1>
                <span className="text-yellow-500 text-sm">Technical Services</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
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
            <div className="hidden md:block">
              <a href="https://wa.me/971566036352?text=I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Discuss Your Project
                </Button></a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-900"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
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
              <a href="https://wa.me/971566036352?text=I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer" >
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Discuss Your Project
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
