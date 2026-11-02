import React from 'react';
import { Award, UserCheck, Crown, Smile, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Professional Beauty Services',
      description: 'Our senior specialists bring certified artistry, state-of-the-art hair techniques, and meticulous skincare methods using premium professional salon formulations.',
      detail: 'Certified Hair & Makeup Artists',
    },
    {
      icon: UserCheck,
      title: 'Personalized Customer Care',
      description: 'Every appointment begins with a thorough 1-on-1 consultation to understand your face shape, hair texture, personal lifestyle, and bridal preferences.',
      detail: 'Tailored 1-on-1 Consultations',
    },
    {
      icon: Crown,
      title: 'Premium Salon Experience',
      description: 'Step into an air-conditioned luxury lounge at Ajit Complex equipped with ergonomic camel leather styling chairs, arched LED mirrors, and private grooming suites.',
      detail: 'Refined Ambiance & Hygiene',
    },
    {
      icon: Smile,
      title: 'Customer Satisfaction',
      description: 'Prompt appointment coordination, transparent guidance, and welcoming hospitality ensure you leave feeling pampered, confident, and celebrated.',
      detail: 'Prompt & Attentive Service',
    },
    {
      icon: Sparkles,
      title: 'Hair & Beauty Transformations',
      description: 'Renowned for dramatic yet natural hair transformations—from multi-layer blowouts to smooth keratin restorations and breathtaking royal bridal looks.',
      detail: 'Signature Makeovers',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#141416] border-t border-[#2A2A32] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] mb-3 font-medium">
            <span>The Distinction</span>
            <span aria-hidden="true">·</span>
            <span>Why Siwan Chooses Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF8F5] mb-4 [text-wrap:balance]">
            Why Choose The Luxuria Lounge
          </h2>

          <p className="text-sm sm:text-base text-[#FAF8F5]/75 font-light leading-relaxed [text-wrap:balance]">
            We set a new benchmark for beauty in Siwan through uncompromising quality, genuine hospitality, and signature transformations.
          </p>
        </div>

        {/* 5 Distinct Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isWide = index === 4; // 5th card spans nicely
            return (
              <div
                key={pillar.title}
                className={`bg-[#1A1A1E] border border-[#2A2A32] hover:border-[#D4AF37]/50 p-8 rounded-sm transition-all duration-300 group hover:-translate-y-1 shadow-lg ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm bg-[#141416] border border-[#2A2A32] group-hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-[#D4AF37]/60 tracking-wider">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#FAF8F5] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#FAF8F5]/75 font-light leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-medium text-[#D4AF37] pt-4 border-t border-[#2A2A32]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{pillar.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
