import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Belle Weddings transformed our vision into reality. Every detail was perfect, and we could truly relax and enjoy our special day.",
      author: "Sarah & Michael Johnson"
    },
    {
      quote: "The team's attention to detail and creative flair made our wedding absolutely magical. We received countless compliments from our guests.",
      author: "Emma Richardson"
    },
    {
      quote: "From our first meeting to the final dance, Belle Weddings was with us every step of the way. Professional, creative, and utterly reliable.",
      author: "James & Olivia Parker"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50" id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-gray-900 mb-6 font-elegant">Testimonials</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-serif-body italic">
          Hear from couples who have trusted us with their special day
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 font-serif-body italic">
              "{testimonial.quote}"
            </blockquote>
            <cite className="text-base font-medium text-gray-900 font-body">
              - {testimonial.author}
            </cite>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="#contact"
          className="inline-block border border-gray-900 text-gray-900 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300 font-body"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
};

export default Testimonials;