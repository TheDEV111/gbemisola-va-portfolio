export interface ExperienceEntry {
  slug: string;
  role: string;
  company: string;
  type: string;
  period: string;
  sortOrder: number;
  highlights: string[];
}

export interface TestimonialEntry {
  slug: string;
  name: string;
  title: string;
  initials: string;
  quote: string;
  sortOrder: number;
}

export interface SkillGroup {
  category: string;
  tools: string[];
}

export interface AvailabilityData {
  isAvailable: boolean;
  description: string;
}

export interface HeroData {
  tagline: string;
  subTagline: string;
}
