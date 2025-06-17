
import React from 'react';
import { Coffee, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-coffee-300" />
              <span className="text-2xl font-bold">Café Delight</span>
            </div>
            <p className="text-coffee-300 mb-4 leading-relaxed">
              Creating memorable coffee experiences since 2015. Every cup tells a story of passion and craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-coffee-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-coffee-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-coffee-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up delay-100">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-coffee-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="text-coffee-300 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="text-coffee-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-coffee-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-coffee-300 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up delay-200">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-coffee-300 hover:text-white transition-colors">Dine In</a></li>
              <li><a href="#" className="text-coffee-300 hover:text-white transition-colors">Takeaway</a></li>
              <li><a href="#" className="text-coffee-300 hover:text-white transition-colors">Delivery</a></li>
              <li><a href="#" className="text-coffee-300 hover:text-white transition-colors">Catering</a></li>
              <li><a href="#" className="text-coffee-300 hover:text-white transition-colors">Private Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up delay-300">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-coffee-300 mt-1" />
                <div>
                  <p className="text-coffee-300">123 Coffee Street</p>
                  <p className="text-coffee-300">Downtown, City 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-coffee-300" />
                <p className="text-coffee-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-coffee-300" />
                <p className="text-coffee-300">info@cafedelight.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-coffee-700 mt-8 pt-8 text-center">
          <p className="text-coffee-300">
            © 2024 Café Delight. All rights reserved. Made with ❤️ for coffee lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
