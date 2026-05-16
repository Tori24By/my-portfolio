export interface Project {
  id?: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  images?: string[];
  liveUrl?: string;
  repoUrl?: string;
  category: string;
  featured: boolean;
  highlights?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
