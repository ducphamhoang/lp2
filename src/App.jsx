import React from 'react';
import { ModalProvider } from './contexts/ModalContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedOffer from './components/FeaturedOffer';
import Services from './components/Services';
import SpecialOffers from './components/SpecialOffers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <FeaturedOffer />
        <Services />
        <SpecialOffers />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
        <ContactModal />
      </div>
    </ModalProvider>
  );
}

export default App;