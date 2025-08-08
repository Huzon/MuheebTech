
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "home", name: "Home Renovation" },
    { id: "office", name: "Office Fit-out" },
    { id: "furniture", name: "Custom Furniture" },
    { id: "paint", name: "Paint & Wallpaper" }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Renovation",
      category: "home",
      image: "/placeholder.svg",
      description: "Complete kitchen makeover with modern appliances and elegant design"
    },
    {
      id: 2,
      title: "Corporate Office Design",
      category: "office",
      image: "/placeholder.svg",
      description: "Professional office space with modern furniture and lighting"
    },
    {
      id: 3,
      title: "Custom Wardrobes",
      category: "furniture",
      image: "/placeholder.svg",
      description: "Built-in wardrobes with sliding doors and LED lighting"
    },
    {
      id: 4,
      title: "Living Room Makeover",
      category: "home",
      image: "/placeholder.svg",
      description: "Elegant living room with custom furniture and wall treatment"
    },
    {
      id: 5,
      title: "Office Reception Area",
      category: "office",
      image: "/placeholder.svg",
      description: "Welcoming reception area with modern design elements"
    },
    {
      id: 6,
      title: "Feature Wall Design",
      category: "paint",
      image: "/placeholder.svg",
      description: "Stunning feature wall with textured paint and lighting"
    },
    {
      id: 7,
      title: "Master Bedroom Suite",
      category: "home",
      image: "/placeholder.svg",
      description: "Luxurious master bedroom with walk-in closet"
    },
    {
      id: 8,
      title: "Conference Room",
      category: "office",
      image: "/placeholder.svg",
      description: "Modern conference room with AV integration"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our portfolio of completed projects across the UAE
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-yellow-500 text-black"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Inspired by Our Work?"
        subtitle="Let us transform your space with our expert craftsmanship and attention to detail"
        primaryButton="Start Your Project"
        secondaryButton="Get Free Quote"
      />

      <Footer />
    </div>
  );
};

export default Gallery;
