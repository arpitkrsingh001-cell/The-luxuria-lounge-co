import React, { useState } from 'react';
import { X, ZoomIn, Calendar, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onBookLook: (title: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onBookLook }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'bridal', label: 'Bridal & Festive' },
    { id: 'hair', label: 'Hair Transformations' },
    { id: 'nails', label: 'Nail Studio' },
    { id: 'interior', label: 'Salon Ambience' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] mb-3 font-medium">
            <span>Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>Real Transformations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF8F5] mb-4 [text-wrap:balance]">
            The Luxuria Gallery
          </h2>

          <p className="text-sm sm:text-base text-[#FAF8F5]/75 font-light leading-relaxed [text-wrap:balance]">
            Explore authentic hair transformations, regal bridal artistry, and the ambient interior of our salon at Ajit Complex, Siwan.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#D4AF37] text-[#0B0B0C] font-semibold shadow-md shadow-[#D4AF37]/20'
                    : 'bg-[#141416] text-[#FAF8F5]/70 hover:text-[#FAF8F5] border border-[#2A2A32]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative h-80 rounded-sm overflow-hidden border border-[#2A2A32] bg-[#141416] cursor-pointer hover:border-[#D4AF37]/60 transition-all duration-300 shadow-md hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 bg-[#0B0B0C]/85 backdrop-blur-sm border border-[#2A2A32] px-2.5 py-1 text-[10px] tracking-wider uppercase text-[#D4AF37] font-medium">
                {item.categoryLabel}
              </div>

              {/* Zoom icon on hover */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0B0B0C]/80 border border-[#FAF8F5]/20 flex items-center justify-center text-[#FAF8F5] opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#D4AF37]" />
              </div>

              {/* Caption details at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="font-serif text-lg font-bold text-[#FAF8F5] mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#FAF8F5]/75 line-clamp-2 font-light">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#D4AF37] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Details & Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141416] border border-[#2A2A32] rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-[#FAF8F5] flex items-center justify-center border border-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
              {/* Media viewer */}
              <div className="md:col-span-7 bg-black flex items-center justify-center p-2">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[60vh] md:max-h-[75vh] w-auto object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Metadata panel */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#2A2A32]">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-2">
                    {selectedItem.categoryLabel}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#FAF8F5] mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-[#FAF8F5]/80 font-light leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  <div className="p-4 bg-[#1A1A1E] border border-[#2A2A32] rounded-sm mb-6">
                    <div className="text-xs font-semibold text-[#D4AF37] mb-1">
                      The Luxuria Lounge Experience
                    </div>
                    <div className="text-xs text-[#FAF8F5]/70">
                      Captured at 1st Floor, Ajit Complex, JP Chowk, Siwan. All services are performed with personalized consultation and bespoke styling.
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#2A2A32]">
                  <button
                    onClick={() => {
                      const look = selectedItem.title;
                      setSelectedItem(null);
                      onBookLook(look);
                    }}
                    className="w-full py-3.5 px-4 bg-[#D4AF37] hover:bg-[#E6CA65] text-[#0B0B0C] font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#D4AF37]/20"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book an Appointment for this Style</span>
                  </button>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-2.5 text-xs text-[#FAF8F5]/60 hover:text-white transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
