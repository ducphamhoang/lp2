import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-900 font-didot">
              Belle Weddings
            </a>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors font-brandon">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors font-brandon">
                Services
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors font-brandon">
                Gallery
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors font-brandon">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors font-brandon">
                Contact
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors font-brandon">
              Enquire Now
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-brandon">
              <a href="#home" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Gallery
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Contact
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <a href="#contact" className="w-full bg-gray-900 text-white text-center px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors font-brandon">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;