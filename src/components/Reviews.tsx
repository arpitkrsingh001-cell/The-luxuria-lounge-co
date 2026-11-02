import React from 'react';
import { Star, ExternalLink, ThumbsUp, ShieldCheck, MapPin } from 'lucide-react';
import { FEEDBACK_PILLARS, SALON_INFO } from '../data/salonData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] mb-3 font-medium">
            <span>Client Satisfaction</span>
            <span aria-hidden="true">·</span>
            <span>Google Maps Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF8F5] mb-4 [text-wrap:balance]">
            Recognized for Excellence in Siwan
          </h2>

          <p className="text-sm sm:text-base text-[#FAF8F5]/75 font-light leading-relaxed [text-wrap:balance]">
            Authentic customer sentiments summarized directly from our verified Google Maps profile, highlighting our service quality and client care.
          </p>

          {/* Google Maps Trust Badge */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 bg-[#161619] border border-[#2A2A32] rounded-sm">
            <div className="flex items-center gap-1.5 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
              ))}
            </div>
            <span className="text-xs text-[#FAF8F5]/90 font-medium">
              Verified Salon on Google Maps
            </span>
            <span aria-hidden="true" className="text-[#FAF8F5]/30">·</span>
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#D4AF37] hover:text-[#E6CA65] flex items-center gap-1 transition-colors"
            >
              <span>View Google Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Feedback Pillars Grid (Truthful to customer feedback highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {FEEDBACK_PILLARS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#141416] border border-[#2A2A32] hover:border-[#D4AF37]/50 p-8 rounded-sm transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium tracking-wider uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{item.tag}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-serif font-bold text-[#FAF8F5] mb-3 group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#FAF8F5]/75 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Google Maps Callout Box */}
        <div className="p-8 bg-[#161619] border border-[#2A2A32] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#1A1A1E] border border-[#2A2A32] flex items-center justify-center shrink-0 text-[#D4AF37]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold text-[#FAF8F5] mb-1">
                Experience It Yourself at Ajit Complex, Siwan
              </h4>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/70 font-light">
                Visit our salon or read additional photos and customer contributions directly on our official Google Maps profile.
              </p>
            </div>
          </div>

          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#1A1A1E] hover:bg-[#D4AF37] text-[#FAF8F5] hover:text-[#0B0B0C] border border-[#2A2A32] hover:border-[#D4AF37] text-xs font-semibold tracking-wider uppercase rounded-sm transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Read on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
