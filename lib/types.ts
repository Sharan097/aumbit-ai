import { LucideIcon } from 'lucide-react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface FeatureItem {
  label: string;
  icon: LucideIcon;
}
