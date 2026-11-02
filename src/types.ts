export interface Service {
  id: string;
  name: string;
  category: 'hair' | 'makeup' | 'skin' | 'spa' | 'nails' | 'grooming';
  shortDescription: string;
  features: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'hair' | 'interior' | 'nails';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface AppointmentFormData {
  fullName: string;
  contactNumber: string;
  service: string;
  appointmentDate: string;
  appointmentTime: string;
  additionalMessage: string;
}

export interface FormErrors {
  fullName?: string;
  contactNumber?: string;
  service?: string;
  appointmentDate?: string;
  appointmentTime?: string;
}
