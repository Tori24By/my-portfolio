export interface Project {
  id?: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  category: string;
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
