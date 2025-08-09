
import { Target, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <img
              src="/about.jpg"
              alt="Muheeb Technical Services Team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Muheeb Technical Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              As a new name in the UAE’s technical services industry, we combine a forward-thinking approach with deep industry know-how to deliver solutions that set new benchmarks in quality and reliability.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Target className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To deliver high-quality, reliable, and innovative technical services that
                    enhance living and working spaces across the UAE.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Eye className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To become the UAE's most trusted technical services provider, known for
                    transforming spaces and exceeding client expectations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-600">
                    Customer satisfaction, safety, excellence, professionalism, and
                    integrity in every project we undertake.
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
