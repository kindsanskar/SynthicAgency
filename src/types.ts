export type PageId = 'home' | 'ai-studio' | 'pricing' | 'about';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  tags: string[];
  deliverables: string[];
  gradient: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  tagline: string;
  scope: string;
  features: string[];
  isFeatured?: boolean;
  badge?: string;
  ctaText: string;
  whatsappMessage: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  tag: string;
  description: string;
  iconName: string;
  actionHint: string;
}

export interface StudioFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
  badge: string;
}

export interface DemoRequest {
  shopName: string;
  productCategory: string;
  phoneNumber: string;
  notes?: string;
}

export interface FounderInfo {
  id: 'arpit' | 'sanskar';
  name: string;
  role: string;
  age: number;
  bio: string;
  phone: string;
  phoneRaw: string;
  address: string;
  photoKey: string;
  specialty: string;
  isGymEnthusiast?: boolean;
  gymNote?: string;
}
