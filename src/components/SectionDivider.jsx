import React from 'react';

const SectionDivider = () => {
  return (
    <div className="py-8 flex justify-center items-center">
      <div className="flex items-center space-x-4">
        <div className="h-px w-16 bg-gray-300"></div>
        <div className="text-gray-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
            {/* Elegant floral/ornamental icon */}
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9C21 10.1 20.1 11 19 11C17.9 11 17 10.1 17 9C17 7.9 17.9 7 19 7C20.1 7 21 7.9 21 9ZM3 9C3 10.1 3.9 11 5 11C6.1 11 7 10.1 7 9C7 7.9 6.1 7 5 7C3.9 7 3 7.9 3 9ZM6 20C6 21.1 6.9 22 8 22C9.1 22 10 21.1 10 20C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20ZM14 20C14 21.1 14.9 22 16 22C17.1 22 18 21.1 18 20C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20ZM12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10Z"/>
          </svg>
        </div>
        <div className="h-px w-16 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
