import React from 'react';
import { useModal } from '../contexts/ModalContext';

const Footer = () => {
  const { openModal } = useModal();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4 font-didot">White House Wedding</h3>
            <p className="text-sm text-gray-300 leading-relaxed font-paragraph">
              Không gian cưới đẳng cấp cho ngày trọng đại của bạn.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wide font-brandon">Dịch vụ</h4>
            <ul className="space-y-2 text-sm font-brandon">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Tiệc cưới trọn gói</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Trải nghiệm ẩm thực</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Tổ chức chuyên nghiệp</a></li>
              <li><button onClick={openModal} className="text-gray-300 hover:text-white transition-colors">Tư vấn miễn phí</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wide font-brandon">Công ty</h4>
            <ul className="space-y-2 text-sm font-brandon">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Thư viện ảnh</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Cảm nhận</a></li>
              <li><button onClick={openModal} className="text-gray-300 hover:text-white transition-colors">Liên hệ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wide font-brandon">Kết nối</h4>
            <ul className="space-y-2 text-sm font-brandon">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Zalo</a></li>
              <li><a href="mailto:whitehousewedding256@gmail.com" className="text-gray-300 hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400 font-brandon">
            © 2025 White House Wedding. Bảo lưu mọi quyền.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;