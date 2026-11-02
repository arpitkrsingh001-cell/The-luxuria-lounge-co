import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { AppointmentSection } from './components/AppointmentSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    setSelectedService(serviceName);
    // Smooth scroll down to the dedicated booking section or open the modal
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  const handleBookLookFromGallery = (lookTitle: string) => {
    // Look up suitable service based on title keywords
    let matchService = 'Bridal Makeup';
    const lower = lookTitle.toLowerCase();
    if (lower.includes('hair') || lower.includes('blowout') || lower.includes('curl')) {
      matchService = 'Hair Styling';
    } else if (lower.includes('nail')) {
      matchService = 'Nail Services';
    } else if (lower.includes('keratin') || lower.includes('smooth')) {
      matchService = 'Hair Treatments';
    } else if (lower.includes('party')) {
      matchService = 'Party Makeup';
    }
    handleOpenBooking(matchService);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#FAF8F5] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#FAF8F5]">
      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* About Us */}
        <About />

        {/* Services Menu (9 Services) */}
        <Services onSelectService={handleSelectServiceFromCard} />

        {/* Gallery */}
        <Gallery onBookLook={handleBookLookFromGallery} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Customer Reviews & Feedback Highlights */}
        <Reviews />

        {/* Dedicated Appointment Booking Section */}
        <AppointmentSection preselectedService={selectedService} />

        {/* Contact & Google Maps Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Modal Booking Drawer */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}
