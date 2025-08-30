import React from 'react';

const Gallery = () => {
  const images = [
    "https://static.wixstatic.com/media/c19c76_6a1edc1794ce4e8d8502349a9feea00e~mv2_d_4892_3261_s_4_2.jpg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c19c76_6a1edc1794ce4e8d8502349a9feea00e~mv2_d_4892_3261_s_4_2.jpg",
    "https://static.wixstatic.com/media/c19c76_25110d3e3046416494ddcc29893bff2d~mv2_d_3999_2662_s_4_2.jpg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c19c76_25110d3e3046416494ddcc29893bff2d~mv2_d_3999_2662_s_4_2.jpg",
    "https://static.wixstatic.com/media/84770f_fe3dcf168ab14985a003abe162b6aa67~mv2_d_4331_2436_s_4_2.jpg/v1/fill/w_560,h_400,q_90,enc_avif,quality_auto/84770f_fe3dcf168ab14985a003abe162b6aa67~mv2_d_4331_2436_s_4_2.jpg",
    "https://static.wixstatic.com/media/84770f_b8b4fa457a4b4c1d90e6dd623f79e559~mv2_d_3625_2366_s_2.jpg/v1/fill/w_560,h_400,q_90,enc_avif,quality_auto/84770f_b8b4fa457a4b4c1d90e6dd623f79e559~mv2_d_3625_2366_s_2.jpg",
    "https://static.wixstatic.com/media/f61af8_8312a429fb674ea3b525dae7a46b3d03~mv2_d_2186_1457_s_2.jpg/v1/fill/w_560,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f61af8_8312a429fb674ea3b525dae7a46b3d03~mv2_d_2186_1457_s_2.jpg",
    "https://static.wixstatic.com/media/c19c76_6a1edc1794ce4e8d8502349a9feea00e~mv2_d_4892_3261_s_4_2.jpg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c19c76_6a1edc1794ce4e8d8502349a9feea00e~mv2_d_4892_3261_s_4_2.jpg"
  ];

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-6 font-heading-main">Thư viện ảnh</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-paragraph">
            Cùng chiêm ngưỡng không gian sang trọng tại nhà hàng của chúng tôi và những khoảnh khắc hạnh phúc của các cặp đôi đã tin tưởng lựa chọn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden">
              <img 
                src={image}
                alt={`Wedding Gallery ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block border-2 border-orange-600 text-orange-600 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-orange-600 hover:text-white transition-colors duration-300 font-brandon"
          >
            Xem thêm hình ảnh
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;