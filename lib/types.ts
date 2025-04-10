export type PromptCategory =
  | "productivity-business"
  | "marketing-social-media"
  | "coding-development"
  | "education-research"
  | "creative-writing"
  | "personal-development"
  | "daily-life";

export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: PromptCategory;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  popularity: number;
  placeholders?: {
    name: string;
    description: string;
    defaultValue?: string;
  }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  favorites: string[]; // Array of prompt IDs
  createdAt: Date;
  updatedAt: Date;
}

export interface PromptSearchParams {
  query?: string;
  category?: PromptCategory;
  sortBy?: "popularity" | "date" | "title";
  order?: "asc" | "desc";
}

export interface PromptPlaceholder {
  name: string;
  description: string;
  defaultValue: string;
}
