import React from 'react';
import { useModal } from '../contexts/ModalContext';

const Services = () => {
  const { openModal } = useModal();

  const services = [
    {
      title: "Tiệc Cưới Trọn Gói",
      description: "Gói dịch vụ toàn diện bao gồm không gian sảnh tiệc, trang trí, hệ thống âm thanh ánh sáng và thực đơn đặc sắc cho 200 khách mời chỉ với 79 triệu đồng.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPqhXcvByaPkryrW_WPhjxhV1-QnhHyHm9D0DdCnscWG0xFwdMImTk9PfJneP1IUm0tnPYTOeuQ33EUQr_XXw4YqqoiT3nxayJjl6yTBzCL2CsT9f9_X0e_6nd-8gju_HwmrPsRufVEAdb7f4deN3YNBKzx-Ux7NYJfC6dzaBxgLxaWUssPjRhyUvzjdxk/s640/IMG_9849.JPG"
    },
    {
      title: "Trải Nghiệm Ẩm Thực",
      description: "Mời bạn và gia đình đến nhà hàng của chúng tôi để dùng thử các món ăn trong thực đơn tiệc cưới, đảm bảo mỗi món ăn đều làm hài lòng những vị khách quý giá nhất.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSsRea6WgGAKmRsepZXLWlxIMZEAe1Uz1DjdF6UhS12UfG4RM3vGyEMt_9pKVbkx4rYgC-YRECc0xFaUB_ux0-OES4IQj7hiMf9uNG8ZNkd2HTt1-bmC3lW3-CU5zY86CKSry656gc-7IRbceDESsCUB4U7ZLXu1AAuup_PYfVRKYe5fY9KKDNSUlERGRZ/s640/IMG_5185%281%29.JPG"
    },
    {
      title: "Tổ Chức & Điều Phối Chuyên Nghiệp",
      description: "Đội ngũ chuyên gia của chúng tôi sẽ điều phối mọi hoạt động trong ngày cưới, đảm bảo buổi lễ diễn ra suôn sẻ và hoàn hảo đến từng chi tiết.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpyqC9UflEiy9UGrsEu6-Wy5lYucdTW8ZznpaOm0bkOt36HYITyDlpWjWkz9XKQAQ4zPpUxrqKP8LaEsyWVvT0Jpw4BRHD3ajzK31yhry0dLaCcMXkx4Ly4oqeah6NeWj8yqkPnO-ZJDATkE1WXtByTcVq_04lutt7we-n0x2j1wgaIqQtMYS3Eq4p0dTh/s640/twh-hinh-event-01.jpgHXK_9794-scaled.jpg"
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