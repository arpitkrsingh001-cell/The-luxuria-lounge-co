import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { SALON_INFO, SERVICES } from '../data/salonData';

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#080809] border-t border-[#2A2A32] text-[#FAF8F5]/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#2A2A32]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <span className="text-2xl font-serif font-bold text-[#FAF8F5] tracking-wider uppercase gold-gradient-text">
                The Luxuria Lounge
              </span>
            </a>
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium">
              Saloon & Academy · Siwan, Bihar
            </p>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 font-light leading-relaxed max-w-sm">
              {SALON_INFO.description} Offering upscale beauty, signature hair transformations, bespoke bridal couture, and relaxing spa therapies.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-4 py-2 bg-[#D4AF37] hover:bg-[#E6CA65] text-[#0B0B0C] font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors cursor-pointer"
              >
                Book Appointment
              </button>

              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#FAF8F5]/70 hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#FAF8F5]">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/70">
              {SERVICES.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onOpenBooking(srv.name)}
                    className="hover:text-[#D4AF37] transition-colors text-left cursor-pointer"
                  >
                    {srv.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#FAF8F5]">
              Salon Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF8F5]/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${SALON_INFO.contactPhoneRaw}`}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {SALON_INFO.contactNumberFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  WhatsApp: +{SALON_INFO.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{SALON_INFO.openingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/50">
          <div>
            © {new Date().getFullYear()} The Luxuria Lounge. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <span aria-hidden="true">·</span>
            <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
            <span aria-hidden="true">·</span>
            <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
