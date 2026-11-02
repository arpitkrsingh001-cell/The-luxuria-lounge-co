import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20The%20Luxuria%20Lounge!%20I%20would%20like%20to%20inquire%20about%20your%20salon%20services.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Optional dismissible tooltip prompt */}
      {showTooltip && (
        <div className="relative bg-[#141416] text-[#FAF8F5] text-xs px-3.5 py-2 rounded-sm border border-[#D4AF37]/40 shadow-xl flex items-center gap-2 max-w-[240px] animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0 animate-ping"></span>
          <span>Chat with our salon desk</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#FAF8F5]/50 hover:text-white p-0.5 ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with The Luxuria Lounge on WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 fill-white text-transparent group-hover:scale-110 transition-transform" />
        
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping pointer-events-none" />
      </a>
    </div>
  );
};
