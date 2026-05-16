export interface Study {
  id?: number;
  topic: string;
  description: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'automation' | 'devops' | 'other';
  progress: number;
  resources?: string[];
  startedAt?: string;
}
