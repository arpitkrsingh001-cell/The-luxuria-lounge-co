import React from 'react';
import { Sparkles, Scissors, Heart, Award, ArrowUpRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Scissors,
      title: 'Hair Transformations',
      description: 'Signature cuts, multi-dimensional layers, and mirror-gloss keratin therapies designed for your unique profile.',
    },
    {
      icon: Sparkles,
      title: 'Makeup Artistry',
      description: 'Regal bridal makeovers, HD festive finishes, and flawless day-to-evening looks with premium beauty products.',
    },
    {
      icon: Heart,
      title: 'Facial & Spa Experiences',
      description: 'Restorative skincare rituals, deep cleansing facials, and calming head massages in a serene, private environment.',
    },
    {
      icon: Award,
      title: 'Professional Beauty Care',
      description: 'Senior stylists and certified artists who prioritize personalized hygiene, precision technique, and hair health.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0B0B0C] relative overflow-hidden">
      {/* Subtle ambient luxury light in background */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Highlights */}
          <div className="lg:col-span-7">
            {/* Quiet section kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-3 font-medium">
              <span>About The Salon</span>
              <span aria-hidden="true">·</span>
              <span>Siwan, Bihar</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF8F5] leading-tight mb-6 [text-wrap:balance]">
              An Upscale Sanctuary of Elegance & Refinement
            </h2>

            <p className="text-base sm:text-lg text-[#FAF8F5]/80 font-light leading-relaxed mb-6">
              Nestled at <strong className="text-[#FAF8F5] font-medium">Ajit Complex, JP Chowk in Siwan</strong>, <strong className="text-[#D4AF37] font-medium">The Luxuria Lounge</strong> brings modern cosmopolitan salon luxury, world-class hair artistry, and royal bridal couture to Bihar.
            </p>

            <p className="text-sm sm:text-base text-[#FAF8F5]/70 font-light leading-relaxed mb-10">
              Designed as both an upscale salon and beauty academy, our space is curated to provide complete comfort, personal consultations, and transformative beauty care without rush. Whether you seek an occasion makeover, an editorial blowout, or a relaxing spa ritual, our certified team is dedicated to bringing out your finest glow.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#2A2A32]">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-sm bg-[#1A1A1E] border border-[#2A2A32] group-hover:border-[#D4AF37]/60 flex items-center justify-center shrink-0 transition-colors">
                      <IconComponent className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-base font-serif font-semibold text-[#FAF8F5] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#FAF8F5]/65 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Composition with Authentic Salon Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Interior Frame */}
              <div className="relative rounded-sm overflow-hidden border border-[#2A2A32] shadow-2xl bg-[#141416]">
                <img
                  src="/assets/aistudio/Screenshot_20261102-232157_4248a1d1.png"
                  alt="The Luxuria Lounge Hair Styling Stations"
                  className="w-full h-[380px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs tracking-wider uppercase text-[#D4AF37] font-medium mb-1">
                    Ajit Complex Interior
                  </div>
                  <div className="text-sm text-[#FAF8F5] font-serif">
                    Modern Styling Stations & Arched LED Mirrors
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Thumbnail */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-56 rounded-sm overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl bg-[#141416]">
                <img
                  src="/assets/aistudio/Screenshot_20261102-232136_6aeeedaa.png"
                  alt="Bridal Lounge with Natural Green Wall"
                  className="w-full h-36 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-2.5 bg-[#141416]">
                  <div className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-medium">
                    Bridal Lounge Suite
                  </div>
                  <div className="text-xs text-[#FAF8F5]/80 font-light truncate">
                    Private Dressing & Care
                  </div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="absolute top-4 right-4 bg-[#0B0B0C]/90 backdrop-blur-md border border-[#D4AF37]/40 px-3.5 py-2 rounded-sm text-right">
                <div className="text-[10px] tracking-wider uppercase text-[#FAF8F5]/60">Location</div>
                <div className="text-xs font-serif text-[#D4AF37] font-semibold">1st Floor, JP Chowk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
