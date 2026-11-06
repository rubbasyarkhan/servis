export type ServiceTradeSlug = string;

export interface SubService {
  id: string;
  title: string;
  description: string;
  keySteps?: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  timeWindow?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceLine {
  id: string;
  slug: ServiceTradeSlug;
  title: string;
  shortTitle: string;
  iconName: string;
  svgIcon?: string;
  category?: 'residential' | 'commercial' | 'both';
  heroTagline: string;
  description: string;
  emergencyResponseTime: string;
  subServices: SubService[];
  processSteps: ProcessStep[];
  equipment: string[];
  commercialCapabilities: string[];
  residentialCapabilities: string[];
  insuranceGuidance?: string;
  faqs: FAQItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface LocationHub {
  id: string;
  slug: string;
  city: string;
  state: string;
  zip: string;
  isMainHub: boolean;
  serviceRadiusMiles: number;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  emergencyHours: string;
  coveredZips: string[];
  localManager: string;
  localReviewStats: {
    rating: number;
    count: number;
  };
  localTestimonials: {
    author: string;
    role: string;
    comment: string;
    rating: number;
    service: string;
  }[];
  geo: {
    lat: number;
    lng: number;
  };
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
  defaultPhone: string;
  displayPhone: string;
  emergencyHotlineNotice: string;
  corporateAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
    notes: string;
  };
  licenseInfo: string;
  insuranceCoverage: string;
  callRailDniId?: string;
  gtmId?: string;
  liveChatId?: string;
}

export interface LeadSubmission {
  trade: string;
  propertyType: 'residential' | 'commercial';
  urgency: 'emergency-now' | 'same-day' | 'scheduled';
  damageDetails: string;
  address: string;
  city: string;
  zip: string;
  fullName: string;
  email: string;
  phone: string;
  filesAttached?: string[];
  tcpaConsent: boolean;
  locationHubSlug?: string;
}
