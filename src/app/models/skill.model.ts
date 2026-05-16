export interface Skill {
  id?: number;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  level: number;
  iconClass?: string;
}
