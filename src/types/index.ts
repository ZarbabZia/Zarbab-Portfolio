export interface PersonalInfo {
  fullName: string;
  professionalTitle: string;
  positioning: string;
  location: string;
  headline: string;
  leadDescription: string;
  heroPortrait: {
    src: string;
    alt: string;
    isPlaceholder: boolean;
    note: string;
  };
  contactLinks: {
    email: string;
    linkedinUrl?: string;
    whatsappNumber?: string;
    whatsappUrl?: string;
    resumeUrl?: string;
  };
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  specialization: string;
  responsibilities: string[];
  documentedResult?: string;
  statusNote?: string;
  isFreelance?: boolean;
}

export interface UpworkProfile {
  id: string;
  title: string;
  category: string;
  reportedStatus?: string;
  description: string;
  profileUrl: string;
  screenshot: string;
  placeholderAlt: string;
}

export interface AchievementItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  metricLabel: string;
  timeframe: string;
  company: string;
  context: string;
}

export interface DigitalServiceItem {
  name: string;
  category: string;
  focus: string;
}

export interface IndustryItem {
  name: string;
  description: string;
}

export interface ToolGroup {
  groupName: string;
  tools: {
    name: string;
    purpose: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period?: string;
  details?: string;
}

export interface ApproachStep {
  stepNumber: string;
  title: string;
  description: string;
  details: string;
}
