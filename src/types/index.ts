export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; icon: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  about: AboutProps;
  skills: SkillProps[];
  experience: ExperienceProps[];
  volunteer: VolunteerProps[];
  projects: ProjectProps[];
  contributions: ContributionProps[];
  education: EducationProps[];
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  tagline: string;
  email: string;
}

export interface EducationProps {
  college: string;
  subject: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface VolunteerProps {
  organization: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  linkTryApk?: string;
}

export interface ContributionProps {
  name: string;
  summary: string;
  image: string;
  demoLink?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface SkillProps {
  name: string;
  icon: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
