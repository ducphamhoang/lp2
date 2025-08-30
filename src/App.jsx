import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedOffer from './components/FeaturedOffer';
import Services from './components/Services';
import SpecialOffers from './components/SpecialOffers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
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
    </div>
  );
}

export default App;