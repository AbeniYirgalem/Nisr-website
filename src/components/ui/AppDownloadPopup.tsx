import React, { useState } from 'react';

interface AppDownloadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onWaitlistClick?: () => void;
}

const brandColor = '#FE2188';

const AppDownloadPopup: React.FC<AppDownloadPopupProps> = ({ isOpen, onClose, onWaitlistClick }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      {/* Card */}
      <div className="relative bg-white w-full max-w-md rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: brandColor }}></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: brandColor }}></div>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="flex flex-col items-center px-8 py-10 text-center relative z-0">
          <div className="mb-6 p-4 rounded-2xl shadow-lg bg-white">
            <svg 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={brandColor} 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 font-['Nunito']">
            Buy & Sell in Your Pocket
          </h2>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed font-['Nunito']">
            Connect directly with buyers and sellers nearby. 
            Experience the fastest <span className="font-bold" style={{ color: brandColor }}>P2P marketplace</span> with zero fees on your first sale!
          </p>
          <div className="flex flex-col w-full gap-3">
            <button className="flex items-center justify-center w-full px-4 py-3 text-white rounded-xl hover:opacity-90 transition-opacity shadow-md" style={{ backgroundColor: brandColor }}>
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.125 2.25L8.575 4.775C9.6 4.3 10.75 4.025 12 4.025C13.25 4.025 14.4 4.3 15.425 4.775L16.875 2.25C17.05 1.95 17.45 1.85 17.75 2.025C18.05 2.2 18.15 2.6 17.975 2.9L16.475 5.5C18.7 6.725 20.2 9.05 20.45 11.75H3.55C3.8 9.05 5.3 6.725 7.525 5.5L6.025 2.9C5.85 2.6 5.95 2.2 6.25 2.025C6.55 1.85 6.95 1.95 7.125 2.25ZM5.25 13.5H18.75V20.25C18.75 21.5 17.75 22.5 16.5 22.5H7.5C6.25 22.5 5.25 21.5 5.25 20.25V13.5ZM8.25 9.25C8.25 9.8 8.7 10.25 9.25 10.25C9.8 10.25 10.25 9.8 10.25 9.25C10.25 8.7 9.8 8.25 9.25 8.25C8.7 8.25 8.25 8.7 8.25 9.25ZM14.75 10.25C15.3 10.25 15.75 9.8 15.75 9.25C15.75 8.7 15.3 8.25 14.75 8.25C14.2 8.25 13.75 8.7 13.75 9.25C13.75 9.8 14.2 10.25 14.75 10.25Z" />
                </svg> 
               <div className="text-left">
                <div className="text-[10px] leading-none">GET Nisr Market</div>
                <div className="text-sm font-bold leading-tight">Download the App</div>
              </div>
            </button>

            <button 
              className="flex items-center justify-center w-full px-4 py-3 rounded-xl transition-colors"
              style={{ 
                backgroundColor: `${brandColor}1A`, // 1A is roughly 10% opacity in Hex
                color: brandColor 
              }}
              onClick={onWaitlistClick}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${brandColor}26`} // Darker on hover
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = `${brandColor}1A`}
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-none font-semibold">FULL WEB VERSION</div>
                <div className="text-sm font-bold leading-tight">Join the waitlist</div>
              </div>
            </button>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            When you download our app, your browser will likely show a 'Harmful file' warning. This is standard for apps downloaded outside the Play Store. Please select 'Keep' or 'Download Anyway' to proceed.
            <br />
            If you have any problems or concerns, please contact us here: <a href="mailto:nisrmarket@gmail.com" className="text-pink-600">nisrmarket@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadPopup;
