import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Gestão Empresarial',
      description:
        'Sistema completo de gestão empresarial com dashboard interativo, relatórios dinâmicos e controle de acesso por perfis.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Docker'],
      category: 'Web App',
      featured: true,
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description:
        'Plataforma de e-commerce completa com carrinho de compras, integração de pagamento e painel administrativo.',
      technologies: ['React', 'TypeScript', 'Stripe', 'MongoDB'],
      category: 'Web App',
      featured: true,
    },
    {
      id: 3,
      title: 'Automação de Processos',
      description:
        'Automação de fluxos de trabalho corporativos utilizando Power Automate com integrações SharePoint e Teams.',
      technologies: ['Power Automate', 'SharePoint', 'Azure', 'Teams'],
      category: 'Automação',
      featured: true,
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description:
        'Painel de análise de dados com gráficos interativos, filtros avançados e exportação de relatórios em PDF.',
      technologies: ['Angular', 'Chart.js', 'REST API'],
      category: 'Data Viz',
      featured: false,
    },
    {
      id: 5,
      title: 'API RESTful',
      description:
        'API robusta e documentada para gestão de recursos, com autenticação JWT e testes automatizados.',
      technologies: ['Node.js', 'Express', 'SQL Server', 'Jest'],
      category: 'Backend',
      featured: false,
    },
    {
      id: 6,
      title: 'Landing Page Corporativa',
      description:
        'Landing page responsiva e otimizada para SEO, com formulário de contato e integração com CRM.',
      technologies: ['HTML', 'SCSS', 'JavaScript', 'Power Automate'],
      category: 'Website',
      featured: false,
    },
  ];
}
