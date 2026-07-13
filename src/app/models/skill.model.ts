export interface Skill {
  pk_skill?: number;
  name: string;
  percentage: number;
  iconClass?: string;
}

export interface SkillCategory {
  pk_category?: number;
  name: string;
  skills: Skill[];
}
