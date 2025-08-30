import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Tiệc Cưới Trọn Gói",
      description: "Gói dịch vụ toàn diện bao gồm không gian sảnh tiệc, trang trí, hệ thống âm thanh ánh sáng và thực đơn đặc sắc cho 200 khách mời chỉ với 79 triệu đồng.",
      image: "https://static.wixstatic.com/media/84770f_b8b4fa457a4b4c1d90e6dd623f79e559~mv2_d_3625_2366_s_2.jpg/v1/fill/w_560,h_400,q_90,enc_avif,quality_auto/84770f_b8b4fa457a4b4c1d90e6dd623f79e559~mv2_d_3625_2366_s_2.jpg"
    },
    {
      title: "Trải Nghiệm Ẩm Thực",
      description: "Mời bạn và gia đình đến nhà hàng của chúng tôi để dùng thử các món ăn trong thực đơn tiệc cưới, đảm bảo mỗi món ăn đều làm hài lòng những vị khách quý giá nhất.",
      image: "https://static.wixstatic.com/media/84770f_fe3dcf168ab14985a003abe162b6aa67~mv2_d_4331_2436_s_4_2.jpg/v1/fill/w_560,h_400,q_90,enc_avif,quality_auto/84770f_fe3dcf168ab14985a003abe162b6aa67~mv2_d_4331_2436_s_4_2.jpg"
    },
    {
      title: "Tổ Chức & Điều Phối Chuyên Nghiệp",
      description: "Đội ngũ chuyên gia của chúng tôi sẽ điều phối mọi hoạt động trong ngày cưới, đảm bảo buổi lễ diễn ra suôn sẻ và hoàn hảo đến từng chi tiết.",
      image: "https://static.wixstatic.com/media/c19c76_25110d3e3046416494ddcc29893bff2d~mv2_d_3999_2662_s_4_2.jpg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c19c76_25110d3e3046416494ddcc29893bff2d~mv2_d_3999_2662_s_4_2.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-gray-900 mb-6 font-heading-main">Dịch vụ của chúng tôi</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-paragraph">
          Chúng tôi cung cấp các giải pháp toàn diện để biến đám cưới trong mơ của bạn thành hiện thực, từ khâu lên kế hoạch chi tiết đến một thực đơn hoàn hảo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <div key={index} className="group">
            <img 
              src={service.image}
              alt={service.title}
              className="w-full h-80 object-cover mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-medium text-gray-900 mb-2 font-elegant">{service.title}</h3>
            <p className="text-sm text-gray-600 font-paragraph leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="#contact"
          className="inline-block border-2 border-orange-600 text-orange-600 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-orange-600 hover:text-white transition-colors duration-300 font-brandon"
        >
          Xem chi tiết các gói tiệc
        </a>
      </div>
      </div>
    </section>
  );
};

export default Services;