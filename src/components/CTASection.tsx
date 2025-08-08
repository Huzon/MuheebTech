
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButton: string;
  secondaryButton?: string;
  variant?: "light" | "dark";
}

export const CTASection = ({ 
  title, 
  subtitle, 
  primaryButton, 
  secondaryButton,
  variant = "light" 
}: CTASectionProps) => {
  const isDark = variant === "dark";
  
  return (
    <section className={`py-20 ${isDark ? 'bg-gradient-to-r from-blue-900 to-blue-800' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h2>
        <p className={`text-xl mb-8 ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
          >
            {primaryButton}
          </Button>
          {secondaryButton && (
            <Button 
              size="lg" 
              variant={isDark ? "outline" : "secondary"}
              className={`px-8 py-3 ${
                isDark 
                  ? 'border-white text-black hover:bg-white hover:text-blue-900' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}
            >
              {secondaryButton}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
