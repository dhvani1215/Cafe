
import React from 'react';
import { Coffee, Heart, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Coffee, value: "50+", label: "Coffee Varieties" },
    { icon: Heart, value: "10k+", label: "Happy Customers" },
    { icon: Award, value: "15", label: "Awards Won" },
    { icon: Users, value: "25", label: "Expert Baristas" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-coffee-50 to-coffee-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-coffee-700 mb-6 leading-relaxed">
              Founded in 2015, Café Delight began as a small neighborhood coffee shop with a big dream: 
              to create a space where people could enjoy exceptional coffee in a warm, welcoming atmosphere.
            </p>
            <p className="text-lg text-coffee-700 mb-8 leading-relaxed">
              Today, we're proud to serve our community with ethically sourced, premium coffee beans 
              roasted to perfection. Every cup tells a story of passion, craftsmanship, and dedication 
              to excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="h-8 w-8 text-coffee-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-coffee-800">{stat.value}</div>
                  <div className="text-coffee-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600"
                alt="Cafe Interior"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-coffee-400 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-coffee-500 rounded-full opacity-30 animate-bounce-gentle"></div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-coffee-800 mb-4">Our Mission</h3>
            <p className="text-xl text-coffee-700 leading-relaxed">
              "To create moments of joy and connection through exceptional coffee experiences, 
              while supporting sustainable farming practices and building a stronger community, 
              one cup at a time."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
