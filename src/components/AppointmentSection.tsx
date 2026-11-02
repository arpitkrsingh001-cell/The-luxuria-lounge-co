import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Phone, User, MessageSquare, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { SALON_INFO, SERVICES, TIME_SLOTS } from '../data/salonData';
import { AppointmentFormData, FormErrors } from '../types';

interface AppointmentSectionProps {
  preselectedService?: string;
  isModal?: boolean;
  onSuccess?: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedService,
  isModal = false,
  onSuccess,
}) => {
  // Get today's date formatted as YYYY-MM-DD for the min date constraint
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    contactNumber: '',
    service: preselectedService || '',
    appointmentDate: '',
    appointmentTime: '',
    additionalMessage: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);
  const [lastGeneratedUrl, setLastGeneratedUrl] = useState<string>('');

  // Sync if preselectedService changes
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // 1. Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // 2. Contact Number validation (10-digit Indian mobile number)
    const cleanPhone = formData.contactNumber.replace(/\D/g, '');
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      newErrors.contactNumber = 'Please enter a valid 10-digit Indian mobile number (e.g., 83404 36359)';
    }

    // 3. Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a salon service';
    }

    // 4. Date validation
    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'Please select your preferred appointment date';
    } else if (formData.appointmentDate < todayStr) {
      newErrors.appointmentDate = 'Appointment date cannot be in the past';
    }

    // 5. Time validation
    if (!formData.appointmentTime) {
      newErrors.appointmentTime = 'Please select your preferred appointment time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for the current field if user is editing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Clean phone number for display
    const cleanPhone = formData.contactNumber.replace(/\D/g, '');

    // Format readable date
    let formattedDate = formData.appointmentDate;
    try {
      const [year, month, day] = formData.appointmentDate.split('-');
      const d = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      formattedDate = d.toLocaleDateString('en-IN', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      formattedDate = formData.appointmentDate;
    }

    // Construct the WhatsApp message following the exact template requested:
    /*
    Hello The Luxuria Lounge!

    I would like to book an appointment.

    Customer Name: [Customer Name]

    Contact Number: [Customer Number]

    Selected Service: [Selected Service]

    Preferred Date: [Appointment Date]

    Preferred Time: [Appointment Time]

    Additional Message: [Customer Message]

    Please confirm my appointment.
    */
    const customerMsg = formData.additionalMessage.trim() || 'None';

    const rawMessage = `Hello The Luxuria Lounge!\n\nI would like to book an appointment.\n\nCustomer Name: ${formData.fullName.trim()}\n\nContact Number: ${cleanPhone}\n\nSelected Service: ${formData.service}\n\nPreferred Date: ${formattedDate}\n\nPreferred Time: ${formData.appointmentTime}\n\nAdditional Message: ${customerMsg}\n\nPlease confirm my appointment.`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodedMessage}`;

    setLastGeneratedUrl(whatsappUrl);
    setSubmittedStatus(true);

    // Directly open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div
      id="booking"
      className={`${
        isModal
          ? 'p-0'
          : 'py-24 bg-[#0B0B0C] border-t border-[#2A2A32] relative overflow-hidden'
      }`}
    >
      <div className={`${isModal ? 'w-full' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {!isModal && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] mb-3 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Salon Scheduling</span>
              <span aria-hidden="true">·</span>
              <span>WhatsApp Connected</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF8F5] mb-4 [text-wrap:balance]">
              Book Your Appointment
            </h2>

            <p className="text-sm sm:text-base text-[#FAF8F5]/75 font-light leading-relaxed [text-wrap:balance]">
              Fill in your preferred date and service below. Your details will be prefilled directly into WhatsApp for quick confirmation with our team.
            </p>
          </div>
        )}

        {/* Submitted state message */}
        {submittedStatus ? (
          <div className="bg-[#141416] border border-[#D4AF37]/50 rounded-sm p-8 sm:p-10 shadow-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#FAF8F5] mb-2">
              WhatsApp Opened with Your Appointment Details
            </h3>

            <p className="text-sm text-[#FAF8F5]/80 font-light max-w-lg mx-auto mb-6">
              Please tap the <strong className="text-[#D4AF37]">"Send"</strong> button inside WhatsApp to deliver your appointment request to The Luxuria Lounge salon desk. Our team will review your slot and confirm back shortly.
            </p>

            <div className="bg-[#1A1A1E] border border-[#2A2A32] p-4 rounded-sm text-left max-w-md mx-auto mb-6 text-xs text-[#FAF8F5]/80 space-y-1.5">
              <div><strong className="text-[#D4AF37]">Customer:</strong> {formData.fullName}</div>
              <div><strong className="text-[#D4AF37]">Contact:</strong> {formData.contactNumber}</div>
              <div><strong className="text-[#D4AF37]">Service:</strong> {formData.service}</div>
              <div><strong className="text-[#D4AF37]">Date & Time:</strong> {formData.appointmentDate} at {formData.appointmentTime}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={lastGeneratedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#0B0B0C] font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Re-open WhatsApp Message</span>
              </a>

              <button
                onClick={() => setSubmittedStatus(false)}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#1A1A1E] hover:bg-[#222228] text-[#FAF8F5] border border-[#2A2A32] text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors"
              >
                Book Another Service
              </button>
            </div>
          </div>
        ) : (
          /* The Form */
          <form
            onSubmit={handleSubmit}
            className="bg-[#141416] border border-[#2A2A32] rounded-sm p-6 sm:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Field 1: Full Name */}
              <div>
                <label className="block text-xs font-medium tracking-wider uppercase text-[#FAF8F5]/80 mb-2">
                  Full Name <span className="text-[#D4AF37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FAF8F5]/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full pl-10 pr-4 py-3 bg-[#1A1A1E] border ${
                      errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-[#2A2A32] focus:border-[#D4AF37]'
                    } rounded-sm text-sm text-[#FAF8F5] placeholder-[#FAF8F5]/30 focus:outline-none transition-colors`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Field 2: Contact Number */}
              <div>
                <label className="block text-xs font-medium tracking-wider uppercase text-[#FAF8F5]/80 mb-2">
                  Contact Number (WhatsApp) <span className="text-[#D4AF37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FAF8F5]/40">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile (e.g. 83404 36359)"
                    maxLength={13}
                    className={`w-full pl-10 pr-4 py-3 bg-[#1A1A1E] border ${
                      errors.contactNumber ? 'border-red-500 focus:border-red-500' : 'border-[#2A2A32] focus:border-[#D4AF37]'
                    } rounded-sm text-sm text-[#FAF8F5] placeholder-[#FAF8F5]/30 focus:outline-none transition-colors`}
                  />
                </div>
                {errors.contactNumber && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.contactNumber}</span>
                  </p>
                )}
              </div>

              {/* Field 3: Select Service */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium tracking-wider uppercase text-[#FAF8F5]/80 mb-2">
                  Select Service <span className="text-[#D4AF37]">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-[#1A1A1E] border ${
                    errors.service ? 'border-red-500 focus:border-red-500' : 'border-[#2A2A32] focus:border-[#D4AF37]'
                  } rounded-sm text-sm text-[#FAF8F5] focus:outline-none transition-colors cursor-pointer`}
                >
                  <option value="" disabled className="bg-[#1A1A1E] text-[#FAF8F5]/40">
                    Choose a service from our menu...
                  </option>
                  {SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.name} className="bg-[#1A1A1E] text-[#FAF8F5]">
                      {srv.name}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.service}</span>
                  </p>
                )}
              </div>

              {/* Field 4: Preferred Appointment Date */}
              <div>
                <label className="block text-xs font-medium tracking-wider uppercase text-[#FAF8F5]/80 mb-2">
                  Preferred Appointment Date <span className="text-[#D4AF37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FAF8F5]/40">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    name="appointmentDate"
                    min={todayStr}
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 bg-[#1A1A1E] border ${
                      errors.appointmentDate ? 'border-red-500 focus:border-red-500' : 'border-[#2A2A32] focus:border-[#D4AF37]'
                    } rounded-sm text-sm text-[#FAF8F5] focus:outline-none transition-colors [color-scheme:dark]`}
                  />
                </div>
                {errors.appointmentDate && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.appointmentDate}</span>
                  </p>
                )}
              </div>

              {/* Field 5: Preferred Appointment Time */}
              <div>
                <label className="block text-xs font-medium tracking-wider uppercase text-[#FAF8F5]/80 mb-2">
                  Preferred Appointment Time <span className="text-[#D4AF37]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#FAF8F5]/40">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 bg-[#1A1A1E] border ${
                      errors.appointmentTime ? 'border-red-500 focus:border-red-500' : 'border-[#2A2A32] focus:border-[#D4AF37]'
                    } rounded-sm text-sm text-[#FAF8F5] focus:outline-none transition-colors cursor-pointer`}
                  >
                    <option value="" disabled className="bg-[#1A1A1E] text-[#FAF8F5]/40">
                      Select preferred time slot...
                    </option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#1A1A1E] text-[#FAF8F5]">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.appointmentTime && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.appointmentTime}</span>
                  </p>
                )}
              </div>

              {/* Field 6: Additional Message (Optional) */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium tracking-wider uppercase text-[#FAF8F5]/80 mb-2">
                  Additional Message <span className="text-[#FAF8F5]/40 lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3.5 pointer-events-none text-[#FAF8F5]/40">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    name="additionalMessage"
                    rows={3}
                    value={formData.additionalMessage}
                    onChange={handleInputChange}
                    placeholder="Tell us about specific styling preferences, event dates, or hair length..."
                    className="w-full pl-10 pr-4 py-3 bg-[#1A1A1E] border border-[#2A2A32] focus:border-[#D4AF37] rounded-sm text-sm text-[#FAF8F5] placeholder-[#FAF8F5]/30 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Submission Button */}
            <div className="pt-4 border-t border-[#2A2A32] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#FAF8F5]/60 flex items-center gap-1.5 text-center sm:text-left">
                <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0"></span>
                <span>Connects directly to WhatsApp: <strong className="text-[#FAF8F5]">{SALON_INFO.contactNumberFormatted}</strong></span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#E6CA65] active:bg-[#B89327] text-[#0B0B0C] font-semibold text-xs tracking-widest uppercase rounded-sm transition-all duration-200 shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Book Appointment via WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
