
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "photo-1721322800607-8c38375eef04",
      title: "Transform Your Living Space",
      subtitle: "Professional home renovation services across UAE"
    },
    {
      image: "photo-1483058712412-4245e9b90334",
      title: "Modern Office Solutions",
      subtitle: "Complete office fit-out and technical services"
    },
    {
      image: "photo-1487958449943-2429e8be8625",
      title: "Premium Technical Services",
      subtitle: "From maintenance to custom installations"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={`https://images.unsplash.com/${slide.image}`}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 animate-fade-in delay-200">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg md:text-xl mb-8 font-medium text-yellow-400 animate-fade-in delay-300">
            Trusted by homes, chosen by businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-3"
            >
              Get Free Quote Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black hover:bg-white hover:text-yellow-500 hover:border-yellow-500 text-lg px-8 py-3"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-yellow-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
