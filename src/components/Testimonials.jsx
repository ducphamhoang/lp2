import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: '"Tôi chắc chắn sẽ giới thiệu White House Wedding cho bất kỳ ai đang tìm kiếm một đám cưới vừa đẹp vừa ấm cúng"',
      author: 'Nguyễn Thị Hồng'
    },
    {
      quote: 'Không gian sang trọng, thực đơn tinh tế và dịch vụ chuyên nghiệp. White House Wedding đã giúp chúng tôi có một ngày cưới hoàn hảo như mơ ước.',
      author: 'Trần Văn Nam & Lê Thị Mai'
    },
    {
      quote: 'Từ khâu tư vấn đến ngày cưới, đội ngũ White House Wedding luôn tận tâm và chu đáo. Chúng tôi rất hài lòng với dịch vụ.',
      author: 'Lê Hoàng Anh'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50" id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-gray-900 mb-6 font-heading-main">Khách hàng nói về chúng tôi</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-paragraph">
          Những chia sẻ từ các cặp đôi đã tổ chức tiệc cưới tại White House Wedding
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 font-paragraph">
              {testimonial.quote}
            </blockquote>
            <cite className="text-base font-medium text-gray-900 font-subheading">
              - {testimonial.author}
            </cite>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="#contact"
          className="inline-block border border-gray-900 text-gray-900 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300 font-brandon"
        >
          Xem thêm cảm nhận
        </a>
      </div>
    </section>
  );
};

export default Testimonials;