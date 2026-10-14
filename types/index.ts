export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  focusAreas: string[];
  idealFor: string;
  approachKey: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface OfficeFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface OfficeImage {
  src: string;
  alt: string;
  caption: string;
  tag: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  sessionPreference: 'in-person' | 'telehealth' | 'flexible';
  locationConfirm: boolean;
  notes: string;
}
