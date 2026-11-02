import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#121214] border-t border-[#2A2A32] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] mb-3 font-medium">
            <span>Location & Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>Visit Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF8F5] mb-4 [text-wrap:balance]">
            Visit The Luxuria Lounge
          </h2>

          <p className="text-sm sm:text-base text-[#FAF8F5]/75 font-light leading-relaxed [text-wrap:balance]">
            Centrally situated at JP Chowk in Siwan. Connect with our concierge or navigate directly to our 1st floor salon suite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#161619] border border-[#2A2A32] p-8 sm:p-10 rounded-sm flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                Salon Information
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#FAF8F5] mb-6">
                The Luxuria Lounge
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1A1A1E] border border-[#2A2A32] flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#FAF8F5]/50 font-medium mb-1">
                      Salon Address
                    </h4>
                    <p className="text-sm text-[#FAF8F5] leading-relaxed font-normal">
                      1st Floor, Ajit Complex, JP Chowk, Kagzi Muhalla, Siwan, Bihar 841226.
                    </p>
                    <div className="text-xs text-[#D4AF37] mt-1 font-light">
                      Landmark: JP Chowk Commercial District
                    </div>
                  </div>
                </div>

                {/* Contact Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1A1A1E] border border-[#2A2A32] flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#FAF8F5]/50 font-medium mb-1">
                      Contact Number
                    </h4>
                    <a
                      href={`tel:${SALON_INFO.contactPhoneRaw}`}
                      className="text-base font-semibold text-[#FAF8F5] hover:text-[#D4AF37] transition-colors"
                    >
                      {SALON_INFO.contactNumber}
                    </a>
                    <p className="text-xs text-[#FAF8F5]/60 mt-0.5">
                      Call for quick consultations & queries
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1A1A1E] border border-[#2A2A32] flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#FAF8F5]/50 font-medium mb-1">
                      Opening Hours
                    </h4>
                    <p className="text-sm text-[#FAF8F5] font-normal">
                      {SALON_INFO.openingHours}
                    </p>
                    <p className="text-xs text-[#FAF8F5]/60 mt-0.5">
                      Open 7 days a week for appointments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-8 mt-8 border-t border-[#2A2A32] space-y-3">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#D4AF37] hover:bg-[#E6CA65] text-[#0B0B0C] font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20The%20Luxuria%20Lounge!%20I%20would%20like%20to%20connect%20with%20your%20team.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#1A1A1E] hover:bg-[#25D366]/20 hover:border-[#25D366] text-[#FAF8F5] border border-[#2A2A32] font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Maps Card */}
          <div className="lg:col-span-7 bg-[#161619] border border-[#2A2A32] rounded-sm overflow-hidden flex flex-col justify-between shadow-xl">
            {/* Visual Storefront Preview */}
            <div className="relative h-64 sm:h-72 w-full bg-[#1A1A1E] overflow-hidden">
              <img
                src="/assets/aistudio/Screenshot_20261102-232216_58d01e36.png"
                alt="The Luxuria Lounge Exterior Entrance at Ajit Complex"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161619] via-[#161619]/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#0B0B0C]/85 backdrop-blur-sm border border-[#2A2A32] px-3 py-1.5 text-xs text-[#FAF8F5] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Storefront: 1st Floor, Ajit Complex</span>
              </div>
            </div>

            {/* Map Guidance Box */}
            <div className="p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#FAF8F5]">
                    Google Maps Navigation
                  </h4>
                  <p className="text-xs sm:text-sm text-[#FAF8F5]/70 font-light mt-1">
                    Direct GPS coordinates to JP Chowk, Kagzi Muhalla, Siwan.
                  </p>
                </div>

                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1A1A1E] hover:bg-[#D4AF37] text-[#FAF8F5] hover:text-[#0B0B0C] border border-[#2A2A32] hover:border-[#D4AF37] text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Wayfinding directions helper */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#FAF8F5]/80 bg-[#1A1A1E] p-4 rounded-sm border border-[#2A2A32]">
                <div className="space-y-1">
                  <div className="font-semibold text-[#D4AF37]">Arrival Guide</div>
                  <div className="text-[#FAF8F5]/70">Arrive at JP Chowk, locate Ajit Complex building. Take the stairs/lift to the 1st Floor.</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-[#D4AF37]">Parking & Access</div>
                  <div className="text-[#FAF8F5]/70">Convenient parking available along the commercial street for two-wheelers and cars.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
