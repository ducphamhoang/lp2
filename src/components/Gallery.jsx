import React from 'react';

const Gallery = () => {
  const images = [    
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNZdqJ85sIMe8JVerWIoCcdGLxkbfK_lOO6675xcuDnCL9VDIsqmEr_AVtzPNchj5OmzicbaV3fJMEQZKNJX6fyORpv7YnvIhvJFuCb-pPZaPqCkZtUCdv2fYjGd11alpTYZfACxWuVOzhDlBSucvxpez-Wb8i1BruQlo2SYZpmhZuNu8ZRpksawQT9VES/s640/Copy%20of%20IMG_5741.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrUTWFEzMM6dq7qiwysCOZHPX8mBkwvIxQbUyC3_KTYvqRUVbCVlF_7P1VSq1uFGTfpQsWw0WkxdDwxBkz4NKtPklEWy3WNMUD5HqJ50Vdgvdu2SiHWbwZhjLfwXWd-WqlH-NObD0go_jAubvOhsTd9Ewyp0JCr30EOTXwbtIJ7L1xc4IR6uU9EVcBfKJY/s640/z6700749876895_05ed2c9dcee673e62aaf357c7b421cf9.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbLkNo_QY0lgyF1v6uJpwfflsukitzMZ25n9XmWE1n0q8U5QLbc2MlyUcsaGbPkWzF8kc61zCv1Vx0WnhQ3RzhF9C9R44VqGL3BS3igMXb04jIxUdyq15GUXLEfucc4rQWMXbvKOCbUi4n4FHNVoN-JJy7_maLq01NSp5CAlIYfHh3MFW1igsVktlU2tBb/s640/twh-hinh-event-02.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6BwOmy-zPBzMrq0QQ6n6PsPTPTMwFCN-UkPuva16XCe7VmiZJH0j1xVIhf36NYBBSPLrc0RDlkxAkHx1Bw_7rtb6n_Fz_RNDk3WuPMVuSqojAYSwm0Y0z44lU7FTbqYC1MhPqM_qaMozfSvhmeY5BSy1TmoS1ORvJq32_2cJ1iz3Xq0mC50cE7oBT7k5I/s640/IMG_9890.JPG",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjW1cpTTVYelFsWf82mFKY61Ggl42NbZBVFGO88hGGYY1DkNJbtdJsyRZ7jK7H-zzy6ZgOW8pV96s9UetOdKmiJDb8U61JqKrlrjtaMF8XKFWr3cya-JIRwC9Ur8D7HYn4sNAne106uRIrqy6U8uAge-E9lfvJjF7LpopOMu2viFl3ObEkuKlOY2-owLIFt/s640/IMG_9706.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8QuJV74s8QDfdCdXW4sTe9aRyE2KQWCyv6f6zbY8TMWLHkVFe8zqqRd1iRr3JPdTY5Q0ySCuVfBOc9AtPzq9CIgD1hiTNucZp521voSv6X678Z9ckb1lLQgh8Dd1WEJYX9kSExK73bBeBzsJmAjvaH6Lh2P-dgKSwvC4cI30she3alYRhWr6DiurONoF6/s640/20221210180717_IMG_2004_edited.jpeg"
  ];

  return (
    <section className="py-20 bg-gray-50 track-view" id="gallery" data-tracking-id="gallery-section-viewed">
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