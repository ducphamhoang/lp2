import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Full Wedding Planning",
      description: "Comprehensive planning from concept to execution. We handle every detail so you can enjoy your engagement.",
      image: "https://static.wixstatic.com/media/84770f_b8b4fa457a4b4c1d90e6dd623f79e559~mv2_d_3625_2366_s_2.jpg/v1/fill/w_560,h_400,q_90,enc_avif,quality_auto/84770f_b8b4fa457a4b4c1d90e6dd623f79e559~mv2_d_3625_2366_s_2.jpg"
    },
    {
      title: "Event Design",
      description: "Creative design and styling to bring your wedding vision to life with attention to every aesthetic detail.",
      image: "https://static.wixstatic.com/media/84770f_fe3dcf168ab14985a003abe162b6aa67~mv2_d_4331_2436_s_4_2.jpg/v1/fill/w_560,h_400,q_90,enc_avif,quality_auto/84770f_fe3dcf168ab14985a003abe162b6aa67~mv2_d_4331_2436_s_4_2.jpg"
    },
    {
      title: "Day-Of Coordination",
      description: "Professional coordination on your wedding day to ensure everything runs smoothly while you relax and celebrate.",
      image: "https://static.wixstatic.com/media/c19c76_25110d3e3046416494ddcc29893bff2d~mv2_d_3999_2662_s_4_2.jpg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c19c76_25110d3e3046416494ddcc29893bff2d~mv2_d_3999_2662_s_4_2.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="services">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-gray-900 mb-6 font-elegant">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-serif-body italic">
          Expertly crafted experiences for your most important day
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
            <p className="text-sm text-gray-600 font-body leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="#contact"
          className="inline-block border border-gray-900 text-gray-900 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gray-900 hover:text-white transition-colors duration-300 font-body"
        >
          View Our Packages
        </a>
      </div>
    </section>
  );
};

export default Services;