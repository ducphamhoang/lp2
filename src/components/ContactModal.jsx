import React, { useState } from 'react';
import { useModal } from '../contexts/ModalContext';

const ContactModal = () => {
  const { isModalOpen, closeModal } = useModal();
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
      // Reset form
      setFormData({ name: '', phone: '', date: '', message: '' });
      closeModal();
    } catch (error) {
      console.error('Form submit error:', error);
      alert('Gửi thông tin thất bại. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={closeModal}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-light text-gray-900 mb-2 font-heading-main">Liên hệ với chúng tôi</h2>
            <p className="text-gray-600 font-paragraph">
              Hãy bắt đầu lên kế hoạch cho đám cưới trong mơ của bạn ngay hôm nay.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1 font-subheading">Họ và tên *</label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 font-subheading"
              />
            </div>

            <div>
              <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1 font-subheading">Số điện thoại *</label>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 font-subheading"
              />
            </div>

            <div>
              <label htmlFor="modal-date" className="block text-sm font-medium text-gray-700 mb-1 font-subheading">Ngày tổ chức</label>
              <input
                type="date"
                id="modal-date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500 font-subheading"
              />
            </div>

            <div>
              <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1 font-subheading">Lời nhắn</label>
              <textarea
                id="modal-message"
                name="message"
                rows={3}
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
  );
};

export default ContactModal;
