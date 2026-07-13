import { Component, OnInit, inject } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  selectedProject: Project | null = null;
  
  // Lista vazia que será preenchida pela API
  projects: Project[] = [];

  // Injetando o serviço
  private projectService = inject(ProjectService);

  ngOnInit(): void {
    this.carregarProjetos();
  }

  carregarProjetos(): void {
    this.projectService.getProjects().subscribe({
      next: (dados) => {
        this.projects = dados;
        console.log("Projetos carregados da API!", dados);
      },
      error: (erro) => {
        console.error("Erro ao carregar projetos", erro);
      }
    });
  }

  openProject(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('project-modal-overlay')) {
      this.closeProject();
    }
  }
}