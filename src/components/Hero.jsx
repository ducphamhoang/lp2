import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://static.wixstatic.com/media/f61af8_8312a429fb674ea3b525dae7a46b3d03~mv2_d_2186_1457_s_2.jpg/v1/fill/w_1784,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f61af8_8312a429fb674ea3b525dae7a46b3d03~mv2_d_2186_1457_s_2.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-4 font-script">
          Belle Weddings
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 font-serif-body font-light tracking-wide italic">
          Creating unforgettable moments for your special day
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-gray-100 transition-colors duration-300 font-body"
          >
            Plan Your Wedding
          </a>
          <a
            href="#gallery"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-gray-900 transition-colors duration-300 font-body"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;