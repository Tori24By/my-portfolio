import { Component } from '@angular/core';
import { Skill } from '../../models/skill.model';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', category: 'frontend', level: 85 },
        { name: 'TypeScript', category: 'frontend', level: 80 },
        { name: 'HTML / CSS / SCSS', category: 'frontend', level: 90 },
      ],
    },
    {
      name: 'Backend & Banco de Dados',
      skills: [
        { name: 'Java', category: 'backend', level: 55 },
        { name: 'SQL Server', category: 'database', level: 80 },
        { name: 'PostgreSQL', category: 'database', level: 60 },
        { name: 'Databricks', category: 'database', level: 65 },
      ],
    },
    {
      name: 'Ferramentas & Automação',
      skills: [
        { name: 'Power Automate', category: 'tools', level: 85 },
        { name: 'SharePoint', category: 'tools', level: 80 },
        { name: 'Git / GitHub', category: 'tools', level: 85 },
        { name: 'Azure', category: 'tools', level: 50 },
      ],
    },
  ];
}
