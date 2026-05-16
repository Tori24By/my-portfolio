import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 1,
      images: ['../assets/images/Modelagem_Estrela.drawio.png'],
      title: 'SisGESC',
      description:
        'Sistema ERP de Gestão Escolar Universitária.',
      longDescription:
        'Sistema integrado de gestão educacional (ERP) projetado para automatizar processos administrativos, acadêmicos e pedagógicos. O desenvolvimento envolveu uma arquitetura robusta com mapeamento completo de processos e modelagem conceitual e lógica de banco de dados para garantir alta consistência e integridade das informações universitárias.',
      technologies: ['MySQL', 'Databricks', 'Python', 'Aiven'],
      category: 'ERP',
      featured: true,
      highlights: [
        'Modelagem detalhada de banco de dados e diagramas de entidade-relacionamento (DER)',
        'Gerenciamento modular de registros acadêmicos e turmas',
        'Estrutura escalável voltada para automação de rotinas administrativas',
        'Arquitetura modular para facilitar manutenção e expansão futura',
      ],
    },
    {
      id: 2,
      images: ['../assets/images/kingscape_img.png'],
      title: 'Kingscape: A Fuga de Dante',
      description:
        'Jogo no estilo top-down desenvolvido como projeto acadêmico, inspirado na clássica literatura do Inferno de Dante.',
      longDescription:
        'Jogo no estilo top-down desenvolvido como projeto acadêmico, inspirado na clássica literatura do Inferno de Dante. O projeto une uma narrativa criativa e satírica com foco em lógica de programação de jogos, desenvolvimento de eventos internos, movimentação de personagens e design de elementos visuais.',
      technologies: ['Construct 3'],
      category: 'Jogo Eletrônico Top-Down',
      featured: true,
      highlights: [
        'Enredo adaptado de forma lúdica e conceitual',
        'Mecânicas de exploração e movimentação top-down',
        'Implementação completa de lógica de colisão e estados de jogo',
      ],
    },
  ];



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
