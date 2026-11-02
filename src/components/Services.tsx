import React, { useState } from 'react';
import { Calendar, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/salonData';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'makeup', label: 'Bridal & Makeup' },
    { id: 'skin', label: 'Facial & Skin' },
    { id: 'spa', label: 'Spa & Care' },
    { id: 'nails', label: 'Nails & Art' },
    { id: 'grooming', label: 'Grooming' },
  ];

  const filteredServices =
    filter === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === filter);

  return (
    <section id="services" className="py-24 bg-[#121214] border-t border-b border-[#2A2A32] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] mb-3 font-medium">
            <span>Our Offerings</span>
            <span aria-hidden="true">·</span>
            <span>Tailored Luxury</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF8F5] mb-4 [text-wrap:balance]">
            Exclusive Salon Services
          </h2>

          <p className="text-sm sm:text-base text-[#FAF8F5]/75 font-light leading-relaxed [text-wrap:balance]">
            From bespoke bridal transformations to revitalizing hair therapies, each service is performed with premium products and personalized attention.
          </p>

          {/* Interactive Filter Tabs (Valid interactive segmented control) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer ${
                  filter === cat.id
                    ? 'bg-[#D4AF37] text-[#0B0B0C] font-semibold shadow-md shadow-[#D4AF37]/20'
                    : 'bg-[#1A1A1E] text-[#FAF8F5]/70 hover:text-[#FAF8F5] hover:bg-[#222228] border border-[#2A2A32]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: Service) => (
            <div
              key={service.id}
              className="group bg-[#161619] rounded-sm border border-[#2A2A32] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/5"
            >
              {/* Service Card Image */}
              <div className="relative h-64 overflow-hidden bg-[#1A1A1E]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized dark container if image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-[#1A1A1E]');
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161619] via-[#161619]/20 to-transparent" />

                {/* Subtle category indicator */}
                <div className="absolute top-3 left-3 bg-[#0B0B0C]/80 backdrop-blur-md border border-[#2A2A32] px-2.5 py-1 text-[11px] font-medium tracking-wider uppercase text-[#D4AF37]">
                  {service.name}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#FAF8F5] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#FAF8F5]/75 font-light leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#FAF8F5]/80">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Appointment Button (sets service and triggers form) */}
                <div className="pt-4 border-t border-[#2A2A32]">
                  <button
                    onClick={() => onSelectService(service.name)}
                    className="w-full py-3 px-4 bg-[#1A1A1E] group-hover:bg-[#D4AF37] text-[#FAF8F5] group-hover:text-[#0B0B0C] border border-[#2A2A32] group-hover:border-[#D4AF37] text-xs font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
