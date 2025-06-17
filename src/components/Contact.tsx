
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Coffee Street", "Downtown, City 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cafedelight.com", "orders@cafedelight.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 6:00 AM - 8:00 PM", "Sat-Sun: 7:00 AM - 9:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-coffee-600 max-w-2xl mx-auto">
            Have questions or want to make a reservation? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-coffee-800 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-coffee-50 rounded-xl hover:bg-coffee-100 transition-colors duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-coffee-600 p-3 rounded-full">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-coffee-800 mb-1">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-coffee-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-64 bg-coffee-100 rounded-xl flex items-center justify-center animate-fade-in-up">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-coffee-600 mx-auto mb-2" />
                <p className="text-coffee-700 font-semibold">Interactive Map</p>
                <p className="text-coffee-600">123 Coffee Street, Downtown</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-coffee-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-coffee-800 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-coffee-700 font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border-coffee-200 focus:border-coffee-600 focus:ring-coffee-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-coffee-700 font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="w-full border-coffee-200 focus:border-coffee-600 focus:ring-coffee-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-coffee-700 font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                    className="w-full border-coffee-200 focus:border-coffee-600 focus:ring-coffee-600 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-coffee-600 hover:bg-coffee-700 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
