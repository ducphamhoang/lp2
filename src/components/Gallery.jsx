import React from 'react';

const Gallery = () => {
  const images = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmwRpG4sdYiKstWcAYY7o98XS5xcowTg-rkJIRg2Ert_sbN-uW8ZWO9v0c1HqelBcnmDai8UxXWOhmM41JTn5vWMN-5eD5X6sca8ATcZp45J4Ye1irVPf0f6MfwrhlLne_zf1yKEMOs96coQ_cGidSX0pVsXLGq75jLlx_fCSj9YQSEQLN5jWVQp1COcKo/s2560/HXK_0031-scaled.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmyJW0y2jRTjs104r7gvPShIXu9v9iAJubDE0TutrQW0m_G5MAEYnTgrRFsrIrnAphHqUO3wU0Izb_2E8ujwKinoLA8ekRv8HUxcZVB_wnx1XYJhgDUNbFCcezSPC4YWMrj9T9TLY-fwtnCb30B4FdW9qT0n-kcCZv83H-LL3W76Yjl2yskyCPLqJy8sTK/s1841/20221001112644_IMG_9972_edited.jpeg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkbfyeq0A6m6FbUcDxrxxiozY_1YjjjZ76zYNg1PwVM7-0RWVj8x2QIoRDbsQDnzL6PqcnbXE17KccujSWq1td5ZfN_Eno87yyWNMeAiPoygVKiX2Zy_iNa_Ijqu4TAwzhbrIKq365FEtiyWhsMOURRQLyDtKPCo_Y5rBMrQMKvIG0pQW3RXs346bOJB8j/s2560/z2213735971625_bd09b657caecdcff4019c2b66363229e-scaled.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2kxbrvMDvfpJ3gVAbZVjYba8U7Sz1Tn4Zr7A_XgxEjNd3LukSnGLhrnoOMEIzL7PeIpU9QHhXcbqJbbjhIIOMPw7-V70nRRmwhUUSjXqFskfGJxkHZulGK3OmPaUXg8YyUVu0obeopOvjYFzcbXmZjG_dWrVJwl9iI9RIBRmv5llJfIlcva8bWncCjniN/s1920/IMG-_-0778.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCIKXzStEY3hevpTCr4722Stj94f75GsXJhKpRB93434MTEAdAwPC-FTx8I26qYP8CJO12bn4g_3Llxh0AVNR0FRmrYSIw7fOWAmSbFDHi_uAannNYI5H4JT0J5SAoMgqyZldDwRtCCqyjagsjlCfvrEyAfJWzanVcmiVhxuEiPZYuyHVV61iMhwUP_z3q/s1280/z2062764154026_1b965862d8af8187ffa339fc66a84c1f.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeAUg5KpDgtdmO_vfkFm2tdqL2rVEDbTTqs7kgcQEUQEXgh967GsFKHe5BZbxLrXjGtQXxu69RJRehobpnEkdT7Uzdv9i70wbBsFwirQvdl_6F4frEAKpi9b1vtTF1UawwGpUq4O4XBE_gIvDHamMGyTR037vtdI0Kosmjgku2JdPMGTqsiqqxT-39tboF/s1920/IMG_0780.jpg"
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
            href="https://whitehousewedding.com.vn/sanh-tiec/"
            className="inline-block border-2 border-orange-600 text-orange-600 px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-orange-600 hover:text-white transition-colors duration-300 font-brandon"
          >
            Xem thêm sảnh tiệc
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;