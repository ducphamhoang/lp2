import React from 'react';
import { useModal } from '../contexts/ModalContext';

const Services = () => {
  const { openModal } = useModal();

  const services = [
    {
      title: "Tiệc Cưới Trọn Gói",
      description: "Gói dịch vụ toàn diện bao gồm không gian sảnh tiệc, trang trí, hệ thống âm thanh ánh sáng và thực đơn đặc sắc cho 200 khách mời chỉ với 79 triệu đồng.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1N4pdou2UInn2U6bZ0UuZxkflFVnr3jQCCdFGPcTtcqiLlXDaOWr1c4vGIH12aMMNzuMveBzixERMwarcT1Jw1-_HxqEMXuu61PvEsnTXtLO8E-SNFCyNR6ewkucOcXuwSqMmvznEtSTqh4W4oG9pfAJpC4RKQ2VW2APx-BeLZq1B6DEW351US7_e481g/s640/sanh-tiec-twh.jpg"
    },
    {
      title: "Trải Nghiệm Ẩm Thực",
      description: "Mời bạn và gia đình đến nhà hàng của chúng tôi để dùng thử các món ăn trong thực đơn tiệc cưới, đảm bảo mỗi món ăn đều làm hài lòng những vị khách quý giá nhất.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqSF4fYXFwDLGF-pPmi1C8384un0y7tB11wE5Ixp4cEQBwv5Gl61mNuWboeru2UE4mlAExKjumShUgOGqU0OuX1qZ9cFWtCJy96DhEG6HYlnoD_VtO_1pc8VQdCjujxywcpkf6i268eaOCrfHNapVgGXow4xLKWLrP-7FCHsGeq80bX3trz7kTcULTcGfl/s640/4a65cf7eedde0a8053cf.jpg"
    },
    {
      title: "Tổ Chức & Điều Phối Chuyên Nghiệp",
      description: "Đội ngũ chuyên gia của chúng tôi sẽ điều phối mọi hoạt động trong ngày cưới, đảm bảo buổi lễ diễn ra suôn sẻ và hoàn hảo đến từng chi tiết.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6L-wNpniFdO6fQAiC_vLS2Mdu0_pNc1_Ay4DQTILjg4lG3GngRGM_lQPg-b0wgu4JLx1Ed1iYx3ZA7qga_iUHvFf47n4NF7mg5F1g4D805xalr2239ocuq7aHvQawE03hM4ZDXv61n35MaRaCT-oSJz5wOos8lkUfC7DwSMu7Z-QHbFj4fzAX7tYjDdrY/s640/HXK_9794-scaled.jpg"
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
        <button
          onClick={openModal}
          className="inline-block border-2 border-orange-600 text-orange-600 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-orange-600 hover:text-white transition-colors duration-300 font-brandon"
        >
          Xem chi tiết các gói tiệc
        </button>
      </div>
      </div>
    </section>
  );
};

export default Services;