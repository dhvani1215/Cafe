
import React from 'react';
import { ArrowDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onMenuClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onMenuClick }) => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-coffee-50 via-coffee-100 to-coffee-200 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-coffee-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-coffee-500 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 bg-coffee-300 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-coffee-800 mb-6 animate-fade-in-up">
            Welcome to
            <span className="block text-coffee-600 mt-2">Café Delight</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-coffee-700 mb-8 animate-fade-in-up delay-200">
            Where every sip tells a story and every bite creates memories
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center mb-8 animate-fade-in-up delay-300">
            <div className="flex items-center space-x-1 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-coffee-800 font-semibold">4.9/5</span>
              <span className="text-coffee-600">(2,000+ reviews)</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-500">
            <Button 
              onClick={scrollToMenu}
              size="lg"
              className="bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Explore Menu
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-coffee-600 text-coffee-600 hover:bg-coffee-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Our Story
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-gentle">
            <ArrowDown className="h-8 w-8 text-coffee-600 mx-auto" />
          </div>
        </div>
      </div>

      {/* Coffee Cup Illustration */}
      <div className="absolute right-10 bottom-10 opacity-20 hidden lg:block">
        <div className="w-32 h-32 bg-coffee-400 rounded-full animate-bounce-gentle"></div>
      </div>
    </section>
  );
};

export default Hero;
