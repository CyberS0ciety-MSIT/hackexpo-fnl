
import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
}

export interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string | null;
  linkedin?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
