import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      // Map form fields to Google Form entry IDs
      const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdKTUlvfUOEXaMB-9REsR6XigZZR9IKTpVQsj82wqGPV2457Q/formResponse';

      // Split date (YYYY-MM-DD) into year, month, day without timezone issues
      const [yearRaw = '', monthRaw = '', dayRaw = ''] = (formData.date || '').split('-');
      const year = yearRaw;
      const month = monthRaw ? String(parseInt(monthRaw, 10)) : '';
      const day = dayRaw ? String(parseInt(dayRaw, 10)) : '';

      const params = new URLSearchParams();
      params.append('entry.1222129918', formData.name);
      params.append('entry.355506656', formData.phone);
      if (year) params.append('entry.1171600566_year', year);
      if (month) params.append('entry.1171600566_month', month);
      if (day) params.append('entry.1171600566_day', day);
      params.append('entry.748895279', formData.message || '');

      // Submit using no-cors (response is opaque; assume success if no exception)
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: params.toString(),
      });

      alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ sớm phản hồi.');
      // Push event to dataLayer for Google Tag Manager
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submit_success',
        form_name: 'ContactForm'
      });
      // Reset form
      setFormData({ name: '', phone: '', date: '', message: '' });
    } catch (error) {
      console.error('Form submit error:', error);
      alert('Gửi thông tin thất bại. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-gray-900 mb-6 font-heading-main">Liên hệ với chúng tôi</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-paragraph">
          Hãy bắt đầu lên kế hoạch cho đám cưới trong mơ của bạn ngay hôm nay.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-medium text-gray-900 mb-6 font-elegant">Liên hệ ngay để nhận tư vấn</h3>
          <p className="text-gray-600 mb-8 font-paragraph leading-relaxed">
            Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng hỗ trợ bạn lên kế hoạch cho ngày trọng đại. Liên hệ ngay để được tư vấn gói tiệc phù hợp nhất.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gray-100 rounded-full p-3 mr-4">
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 font-subheading">Điện thoại</h4>
                <p className="text-gray-600 font-subheading">0938798642</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gray-100 rounded-full p-3 mr-4">
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 font-subheading">Email</h4>
                <p className="text-gray-600 font-subheading">whitehousewedding256@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gray-100 rounded-full p-3 mr-4">
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 font-subheading">Địa chỉ</h4>
                <p className="text-gray-600 font-subheading">256-258 Tô Ký, Phường Tân Chánh Hiệp, Quận 12, TPHCM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-subheading">Họ và tên *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 font-subheading"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-subheading">Số điện thoại *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 font-subheading"
              />
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1 font-subheading">Ngày tổ chức</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 font-subheading"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-subheading">Lời nhắn</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 font-subheading"
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 text-white px-6 py-3 text-sm font-medium tracking-wide uppercase hover:bg-orange-700 transition-colors duration-300 font-brandon disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Đang gửi...' : 'TƯ VẤN MIỄN PHÍ'}
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;