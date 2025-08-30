import React from 'react';

const FeaturedOffer = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading-main">
            Ưu Đãi Hấp Dẫn Nhất
          </h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mb-4 font-elegant">
              Tiệc Cưới Trọn Gói Chỉ 79 Triệu Cho 200 Khách
            </h3>
            <p className="text-lg text-gray-700 mb-8 font-paragraph">
              Bao gồm không gian sảnh tiệc sang trọng, thực đơn tinh tế và trang trí lộng lẫy. Đặt tiệc trong tháng 8 - 9 để nhận thêm quà tặng giá trị.
            </p>
            <a
              href="#contact"
              className="inline-block bg-amber-600 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-amber-700 transition-colors duration-300 font-brandon"
            >
              Xem Chi Tiết Gói Tiệc
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOffer;