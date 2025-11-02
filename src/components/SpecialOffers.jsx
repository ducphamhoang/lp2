import React from 'react';
import { useModal } from '../contexts/ModalContext';

const SpecialOffers = () => {
  const { openModal } = useModal();

  const offers = [
    {
      title: "Tặng Váy Cưới Trị Giá 15 Triệu",
      description: "Cô dâu sẽ được nhận ngay một chiếc váy cưới lộng lẫy trị giá 15 triệu đồng khi ký hợp đồng dịch vụ."
    },
    {
      title: "Đặt tiệc cưới sớm — Nhận tiền mặt 3–7 triệu",
      description: "Đặt cọc sớm để nhận tiền mặt từ 3.000.000 đến 7.000.000 VND (mức cụ thể phụ thuộc gói). Liên hệ để biết chi tiết điều kiện áp dụng."
    },
    {
      title: "Khuyến mãi Tiệc Catering",
      description: "Ưu đãi đặc biệt cho đơn hàng catering — giảm giá hoặc quà tặng theo số lượng và gói dịch vụ. Liên hệ để nhận báo giá chi tiết."
    },
    {
      title: "Bốc thăm trúng xe điện",
      description: "Tất cả khách đặt cọc trong thời gian khuyến mãi sẽ được tham gia bốc thăm trúng xe điện. Điều khoản & điều kiện áp dụng."
    }
  ];

  return (
    <section className="py-20 bg-white track-view" data-tracking-id="special-offers-section-viewed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6 font-heading-main">
            Ưu đãi đặc biệt khi đặt tiệc trong tháng 11-12
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-paragraph">
            Những món quà ý nghĩa dành tặng các cặp đôi yêu dấu khi lựa chọn dịch vụ của White House Wedding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-elegant">{offer.title}</h3>
              <p className="text-gray-600 font-paragraph leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={openModal}
            className="inline-block bg-orange-600 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-orange-700 transition-colors duration-300 font-brandon"
          >
            Liên hệ nhận ưu đãi
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;