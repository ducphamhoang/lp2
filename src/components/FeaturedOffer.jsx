import React from 'react';

const FeaturedOffer = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://static.wixstatic.com/media/84770f_b8b4fa457a4b4c1d90e6dd623f79e559~mv2_d_3625_2366_s_2.jpg/v1/fill/w_560,h_400,q_90,enc_avif,quality_auto/84770f_b8b4fa457a4b4c1d90e6dd623f79e559~mv2_d_3625_2366_s_2.jpg"
                alt="Tiệc cưới trọn gói tại White House Wedding"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading-main">
              Ưu Đãi Hấp Dẫn Nhất
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-elegant">
              Tiệc Cưới Trọn Gói Chỉ 79 Triệu
            </h3>
            <p className="text-xl text-gray-600 mb-6 font-subheading">
              Dành cho 200 khách mời
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-700 font-paragraph">Không gian sảnh tiệc sang trọng, đẳng cấp</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-700 font-paragraph">Thực đơn tinh tế & Gói trang trí hoa lụa</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-700 font-paragraph">Quà tặng đặc biệt khi đặt tiệc trong tháng 8 - 9</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-orange-600 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-orange-700 transition-colors duration-300 font-brandon rounded-md"
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