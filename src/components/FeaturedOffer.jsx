import React from 'react';
import { useModal } from '../contexts/ModalContext';

const FeaturedOffer = () => {
  const { openModal } = useModal();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="h-full overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2NEXUeU-Dv8gxJrZAOHxnXXItOziK-LM2AJcuAeRXkcmhJgSNneAjqoL4XNp9JWKJn2MrsYO-LKcGlHrfCcBpwe_uLebVoLMRhBJIgrB_uwFDamixrCedvFtM2Z-o5inbeasPBwlINWwco2hvczZVRFbJIwz381Sd-dHpLpDcES4DEYHSxVSlsBlLJrnH/s640/79tr-02.jpg"
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

            <button
              onClick={openModal}
              className="inline-block bg-orange-600 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-orange-700 transition-colors duration-300 font-brandon rounded-md"
            >
              Xem Chi Tiết Gói Tiệc
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOffer;