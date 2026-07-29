export type MenuItem = {
  id: number;
  label: string;
  href: string;
};

export type bioParagraph = {
  paragraph: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
};

export type Formation = {
  period: string;
  title: string;
  institution: string;
  description: string[];
  icon: LucideIcon;
  active: boolean;
};

type LucideIcon = React.ComponentType<{ className?: string }>;

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
};
