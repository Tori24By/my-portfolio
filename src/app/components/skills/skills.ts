import { Component, OnInit, inject } from '@angular/core';
import { SkillCategory } from '../../models/skill.model';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  skillCategories: SkillCategory[] = [];
  
  private skillService = inject(SkillService);

  ngOnInit(): void {
    this.skillService.getSkills().subscribe({
      next: (dados) => this.skillCategories = dados,
      error: (erro) => console.error("Erro ao carregar skills", erro)
    });
  }
}