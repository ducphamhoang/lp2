import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4 font-script">Belle Weddings</h3>
            <p className="text-sm text-gray-300 leading-relaxed font-serif-body italic">
              Creating unforgettable moments for your special day.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wide font-body">Services</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Wedding Planning</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Event Design</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Day-Of Coordination</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wide font-body">Company</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wide font-body">Connect</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="mailto:info@belleddings.com" className="text-gray-300 hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400 font-body">
            © 2024 Belle Weddings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;