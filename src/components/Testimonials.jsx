import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: '"Tôi chắc chắn sẽ giới thiệu White House Wedding cho bất kỳ ai đang tìm kiếm một đám cưới vừa đẹp vừa ấm cúng"',
      author: 'Hà Đức'
    },
    {
      quote: 'Không gian sang trọng, thực đơn tinh tế và dịch vụ chuyên nghiệp. White House Wedding đã giúp chúng tôi có một ngày cưới hoàn hảo như mơ ước.',
      author: 'Tân Neha'
    },
    {
      quote: 'Từ khâu tư vấn đến ngày cưới, đội ngũ White House Wedding luôn tận tâm và chu đáo. Chúng tôi rất hài lòng với dịch vụ.',
      author: 'Lê Hoàng Anh'
    }
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-gray-900 mb-6 font-heading-main">Khách hàng nói về chúng tôi</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-paragraph">
          Những chia sẻ từ các cặp đôi đã tổ chức tiệc cưới tại White House Wedding
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
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
          className="inline-block border-2 border-orange-600 text-orange-600 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-orange-600 hover:text-white transition-colors duration-300 font-brandon"
        >
          Xem thêm cảm nhận
        </a>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;