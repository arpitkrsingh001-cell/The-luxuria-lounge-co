import React from 'react';
import { ArrowRight, Calendar, Sparkles, MapPin, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background imagery with measured luxury dark scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/Screenshot_20261102-232157_4248a1d1.png"
          alt="The Luxuria Lounge Salon Interior"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.08] scale-105 transform animate-pulse duration-[10000ms]"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend smoothly into deep black */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/70 to-[#0B0B0C]/40" />
        <div className="absolute inset-0 bg-radial at-center from-transparent via-[#0B0B0C]/50 to-[#0B0B0C]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Luxury Pre-Heading */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs uppercase tracking-widest sm:tracking-[0.25em] text-[#D4AF37] mb-6 font-medium text-center">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>Upscale Beauty Salon & Academy</span>
          <span aria-hidden="true" className="text-[#FAF8F5]/30">·</span>
          <span>Siwan, Bihar</span>
        </div>

        {/* Mandatory Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#FAF8F5] tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
          Where Beauty Meets <span className="gold-gradient-text italic font-normal">Elegance</span>
        </h1>

        {/* Mandatory Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#FAF8F5]/85 max-w-2xl font-light leading-relaxed mb-10 [text-wrap:balance]">
          Experience premium beauty, professional styling and personalized care at The Luxuria Lounge.
        </p>

        {/* Mandatory Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#E6CA65] active:bg-[#B89327] text-[#0B0B0C] font-semibold text-xs tracking-widest uppercase rounded-sm transition-all duration-200 shadow-xl shadow-[#D4AF37]/25 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-[#141416]/80 hover:bg-[#1A1A1E] text-[#FAF8F5] border border-[#FAF8F5]/20 hover:border-[#D4AF37]/60 font-medium text-xs tracking-widest uppercase rounded-sm transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <span>Explore Services</span>
          </a>
        </div>

        {/* Quiet Trust Bar */}
        <div className="w-full max-w-4xl pt-8 border-t border-[#2A2A32]/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-2.5 text-xs text-[#FAF8F5]/75">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Ajit Complex, JP Chowk, Siwan</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-xs text-[#FAF8F5]/75">
            <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Hair, Skin, Bridal & Spa Experts</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-xs text-[#FAF8F5]/75">
            <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Open Daily 10:00 AM – 8:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};
