
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Mr Ali Asghar",
      position: "Villa Work, Dubai",
      rating: 5,
      text: "Alhumdolillah, The work has been done very nicely, even after so much time there are no issues. All the guests are awe struck by the work done and I have always recieved complements. Thank you.",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Ms Zainab",
      position: "Apartment Work, Dubai",
      rating: 5,
      text: "Amazing work, completed right on time. Really liked the fact that even when there were some changes in the original plan you were happy to make the changes. Good quality work.",
      image: "photo-1649972904349-6e44c42644a7"
    },
    // {
    //   name: "Mohammed Hassan",
    //   position: "Restaurant Owner, Sharjah",
    //   rating: 5,
    //   text: "From custom furniture to complete interior renovation, Muheeb Technical Services handled everything perfectly. Their technical expertise and customer service are unmatched in the UAE.",
    //   image: "photo-1649972904349-6e44c42644a7"
    // }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by homes and businesses across the UAE
          </p>
        </div>

        <div className="relative">
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Testimonial Image */}
              <div className="flex-shrink-0">
                <img
                  src={`https://images.unsplash.com/${testimonials[currentTestimonial].image}`}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].position}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentTestimonial ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
