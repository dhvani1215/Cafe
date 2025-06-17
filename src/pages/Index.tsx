
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ReservationDialog from '@/components/ReservationDialog';

const Index = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleReservationClick = () => {
    setIsReservationOpen(true);
  };

  const handleMenuClick = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onReservationClick={handleReservationClick} />
      <Hero onMenuClick={handleMenuClick} />
      <Menu />
      <About />
      <Contact />
      <Footer />
      <ReservationDialog 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />
    </div>
  );
};

export default Index;
