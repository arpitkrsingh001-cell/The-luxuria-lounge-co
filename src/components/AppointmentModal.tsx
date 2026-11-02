import React from 'react';
import { X } from 'lucide-react';
import { AppointmentSection } from './AppointmentSection';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  selectedService,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#141416] border border-[#D4AF37]/40 rounded-sm shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2A2A32] bg-[#121214]">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-medium">
              Direct Reservation
            </div>
            <h3 className="text-xl font-serif font-bold text-[#FAF8F5]">
              Book Your Salon Appointment
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1A1A1E] text-[#FAF8F5]/80 hover:text-white hover:bg-[#222228] flex items-center justify-center transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6">
          <AppointmentSection
            preselectedService={selectedService}
            isModal={true}
            onSuccess={() => {
              // Keep modal open so customer can see the confirmation instructions and re-open button
            }}
          />
        </div>
      </div>
    </div>
  );
};
