import React from 'react';

const SpecialOffers = () => {
  const offers = [
    {
      title: "Tặng Váy Cưới Trị Giá 15 Triệu",
      description: "Cô dâu sẽ được nhận ngay một chiếc váy cưới lộng lẫy trị giá 15 triệu đồng khi ký hợp đồng dịch vụ."
    },
    {
      title: "Tặng Tour Du Lịch Đà Lạt",
      description: "Một chuyến du lịch ngọt ngào dành cho cặp đôi tại Đà Lạt như một món quà mừng hạnh phúc từ chúng tôi."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6 font-heading-main">
            Ưu đãi đặc biệt khi đặt tiệc trong tháng 8 - 9
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
          <a
            href="#contact"
            className="inline-block bg-orange-600 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-orange-700 transition-colors duration-300 font-brandon"
          >
            Liên hệ nhận ưu đãi
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;