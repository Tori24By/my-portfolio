export interface ProjectHighlight {
  pk_highlight?: number;
  description: string;
}

export interface ProjectTechnology {
  pk_tech?: number;
  tech_name: string;
}

export interface Project {
  pk_project?: number;
  title: string;
  type: string;
  about: string;
  image_url: string;
  highlights: ProjectHighlight[];
  technologies: ProjectTechnology[];
  short_description?: string; 
  featured?: boolean;
  live_url?: string;
  repo_url?: string;
}