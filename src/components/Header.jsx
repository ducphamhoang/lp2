import React, { useState } from 'react';
import { useModal } from '../contexts/ModalContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="https://whitehousewedding.com.vn/" className="text-2xl font-bold text-gray-900 font-didot">
              White House Wedding
            </a>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="https://whitehousewedding.com.vn/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors font-brandon">
                Trang chủ
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors font-brandon">
                Dịch vụ
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors font-brandon">
                Thư viện ảnh
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors font-brandon">
                Cảm nhận
              </a>
              <button onClick={openModal} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors font-brandon">
                Liên hệ
              </button>
            </div>
          </nav>

          <div className="hidden md:block">
            <button onClick={openModal} className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors font-brandon">
              Yêu cầu tư vấn
            </button>
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
                Trang chủ
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Dịch vụ
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Thư viện ảnh
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Cảm nhận
              </a>
              <button onClick={() => { openModal(); setIsMenuOpen(false); }} className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Liên hệ
              </button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <button onClick={() => { openModal(); setIsMenuOpen(false); }} className="w-full bg-orange-600 text-white text-center px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors font-brandon">
                  Yêu cầu tư vấn
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;