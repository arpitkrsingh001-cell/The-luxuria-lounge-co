import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0C]/95 backdrop-blur-md border-b border-[#2A2A32] shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-[#0B0B0C]/90 via-[#0B0B0C]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-8">
            {/* Zone 1: Single-element Brand Wordmark */}
            <a
              href="#"
              className="group flex items-center gap-1.5 sm:gap-2 text-base sm:text-xl lg:text-2xl font-serif tracking-wide sm:tracking-wider font-semibold text-[#FAF8F5] whitespace-nowrap min-w-0 shrink"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform shrink-0"></span>
              <span className="gold-gradient-text uppercase truncate">The Luxuria Lounge</span>
            </a>

            {/* Zone 2: 4–6 concise single-line nav links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#FAF8F5]/80">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action (Desktop) */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${SALON_INFO.contactPhoneRaw}`}
                className="hidden xl:flex items-center gap-2 text-xs text-[#FAF8F5]/70 hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0"
                title="Call The Luxuria Lounge"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{SALON_INFO.contactNumber}</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-[#D4AF37] hover:bg-[#E6CA65] active:bg-[#B89327] rounded-sm transition-all duration-200 shadow-lg shadow-[#D4AF37]/20 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile menu and booking button */}
            <div className="flex sm:hidden items-center gap-1.5 shrink-0">
              <button
                onClick={() => onOpenBooking()}
                className="px-2.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#0B0B0C] bg-[#D4AF37] active:bg-[#B89327] rounded-sm whitespace-nowrap shrink-0"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-[#FAF8F5] hover:text-[#D4AF37] transition-colors shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#121214] border-l border-[#2A2A32] p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#2A2A32]">
                <span className="font-serif text-lg tracking-wider font-semibold text-[#D4AF37]">
                  The Luxuria Lounge
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#FAF8F5]/80 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[#FAF8F5]/90 hover:text-[#D4AF37] transition-colors py-2 border-b border-[#2A2A32]/50"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#2A2A32]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider uppercase text-[#0B0B0C] bg-[#D4AF37] hover:bg-[#E6CA65] rounded-sm transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20The%20Luxuria%20Lounge!%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-medium tracking-wider uppercase text-[#FAF8F5] bg-[#1A1A1E] border border-[#2A2A32] hover:border-[#D4AF37]/50 rounded-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Inquiry</span>
              </a>

              <a
                href={`tel:${SALON_INFO.contactPhoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-[#FAF8F5]/70 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call {SALON_INFO.contactNumber}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
