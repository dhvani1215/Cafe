
import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onReservationClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReservationClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in-down">
            <Coffee className="h-8 w-8 text-coffee-600" />
            <span className="text-2xl font-bold text-coffee-800">Café Delight</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-coffee-700 hover:text-coffee-900 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-coffee-700 hover:text-coffee-900 transition-colors font-medium"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-coffee-700 hover:text-coffee-900 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-coffee-700 hover:text-coffee-900 transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={onReservationClick}
              className="bg-coffee-600 hover:bg-coffee-700 text-white transition-all duration-300 transform hover:scale-105"
            >
              Reserve Table
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-coffee-700 hover:text-coffee-900 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pt-4 pb-2 space-y-2">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 px-4 text-coffee-700 hover:text-coffee-900 hover:bg-coffee-50 transition-colors rounded"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left py-2 px-4 text-coffee-700 hover:text-coffee-900 hover:bg-coffee-50 transition-colors rounded"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 px-4 text-coffee-700 hover:text-coffee-900 hover:bg-coffee-50 transition-colors rounded"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 px-4 text-coffee-700 hover:text-coffee-900 hover:bg-coffee-50 transition-colors rounded"
            >
              Contact
            </button>
            <Button 
              onClick={onReservationClick}
              className="w-full mt-4 bg-coffee-600 hover:bg-coffee-700 text-white"
            >
              Reserve Table
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
