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

export interface OwnerData {
  displayName: string;
  subtitle: string;
  email: string;
  location: string;
  linkedin: string;
  resumeUrl: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutData {
  headline: string;
  paragraphs: string[];
  pullQuote: string;
  credential: string;
  stats: AboutStat[];
}

export interface ServiceEntry {
  iconName: string;
  title: string;
  description: string;
}

export interface WhyHireEntry {
  iconName: string;
  title: string;
  description: string;
}

export interface PharmacistRole {
  slug: string;
  role: string;
  company: string;
  badge: string;
  isCurrent: boolean;
  period: string;
  sortOrder: number;
  highlights: string[];
}

export interface PharmacistCompetencyEntry {
  iconName: string;
  title: string;
  description: string;
}

export interface PharmacistEducation {
  degree: string;
  institution: string;
  period: string;
  note: string;
}

export interface PharmacistCertificate {
  name: string;
  issuer: string;
  year: string;
}

export interface PharmacistAffiliation {
  organization: string;
  role: string;
  year: string;
}

export interface PharmacistLanguage {
  language: string;
  level: string;
}

export interface PharmacistCredentials {
  education: PharmacistEducation[];
  certificates: PharmacistCertificate[];
  affiliations: PharmacistAffiliation[];
  languages: PharmacistLanguage[];
}
