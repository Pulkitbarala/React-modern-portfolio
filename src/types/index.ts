
export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  percentage: number;
  category: 'technical' | 'soft' | 'tools';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}
