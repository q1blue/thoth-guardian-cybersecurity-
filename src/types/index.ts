export interface Category {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'Guide' | 'Tutorial' | 'Reference' | 'Template' | 'Comparison';
  category: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
  content?: string;
}

export type ResourceType = 'Guide' | 'Tutorial' | 'Reference' | 'Template' | 'Comparison';
export type FilterType = 'Newest' | 'Most Popular' | 'A-Z';