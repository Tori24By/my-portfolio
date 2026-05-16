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
      title: 'Sistema de Gestão Empresarial',
      description:
        'Sistema completo de gestão empresarial com dashboard interativo, relatórios dinâmicos e controle de acesso por perfis.',
      longDescription:
        'Sistema desenvolvido para otimizar a gestão empresarial, com módulos de controle financeiro, gestão de estoque, relatórios gerenciais e controle de acesso baseado em perfis. O dashboard interativo permite visualizar métricas em tempo real, enquanto os relatórios dinâmicos podem ser filtrados por período, departamento e categoria.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Docker'],
      category: 'Web App',
      featured: true,
      highlights: [
        'Dashboard interativo com métricas em tempo real',
        'Relatórios dinâmicos com filtros avançados',
        'Controle de acesso por perfis de usuário',
        'Integração com APIs externas',
      ],
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description:
        'Plataforma de e-commerce completa com carrinho de compras, integração de pagamento e painel administrativo.',
      longDescription:
        'Plataforma de e-commerce completa com catálogo de produtos, carrinho de compras, checkout seguro via Stripe, gestão de pedidos e painel administrativo. Inclui sistema de avaliações, busca com filtros e notificações por email para atualizações de status de pedidos.',
      technologies: ['React', 'TypeScript', 'Stripe', 'MongoDB'],
      category: 'Web App',
      featured: true,
      highlights: [
        'Checkout seguro com Stripe',
        'Painel administrativo completo',
        'Sistema de avaliações e reviews',
        'Notificações por email automatizadas',
      ],
    },
    {
      id: 3,
      title: 'Automação de Processos',
      description:
        'Automação de fluxos de trabalho corporativos utilizando Power Automate com integrações SharePoint e Teams.',
      longDescription:
        'Projeto de automação de processos corporativos que reduziu o tempo de tarefas manuais em 70%. Inclui fluxos automatizados para aprovação de documentos, notificações via Teams, sincronização de dados entre SharePoint e outros sistemas, e geração automática de relatórios.',
      technologies: ['Power Automate', 'SharePoint', 'Azure', 'Teams'],
      category: 'Automação',
      featured: true,
      highlights: [
        'Redução de 70% no tempo de tarefas manuais',
        'Fluxos de aprovação automatizados',
        'Integração SharePoint + Teams',
        'Relatórios gerados automaticamente',
      ],
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description:
        'Painel de análise de dados com gráficos interativos, filtros avançados e exportação de relatórios em PDF.',
      longDescription:
        'Painel analítico desenvolvido para visualização de dados corporativos com gráficos interativos (barras, linhas, pizza), filtros por período e categoria, e exportação de relatórios em PDF. O dashboard atualiza em tempo real e suporta múltiplas fontes de dados via REST API.',
      technologies: ['Angular', 'Chart.js', 'REST API'],
      category: 'Data Viz',
      featured: false,
      highlights: [
        'Gráficos interativos com Chart.js',
        'Exportação de relatórios em PDF',
        'Atualização em tempo real',
        'Múltiplas fontes de dados',
      ],
    },
    {
      id: 5,
      title: 'API RESTful',
      description:
        'API robusta e documentada para gestão de recursos, com autenticação JWT e testes automatizados.',
      longDescription:
        'API RESTful robusta com documentação Swagger, autenticação JWT, rate limiting, validação de dados e testes automatizados com Jest. Arquitetura modular com separação de responsabilidades, middleware de tratamento de erros e logging estruturado.',
      technologies: ['Node.js', 'Express', 'SQL Server', 'Jest'],
      category: 'Backend',
      featured: false,
      highlights: [
        'Documentação Swagger completa',
        'Autenticação JWT segura',
        'Testes automatizados com Jest',
        'Arquitetura modular e escalável',
      ],
    },
    {
      id: 6,
      title: 'Landing Page Corporativa',
      description:
        'Landing page responsiva e otimizada para SEO, com formulário de contato e integração com CRM.',
      longDescription:
        'Landing page corporativa responsiva com design moderno, otimização SEO avançada, formulário de contato com validação e integração com CRM via Power Automate. Inclui animações suaves, lazy loading de imagens e performance otimizada com score Lighthouse acima de 90.',
      technologies: ['HTML', 'SCSS', 'JavaScript', 'Power Automate'],
      category: 'Website',
      featured: false,
      highlights: [
        'Score Lighthouse acima de 90',
        'SEO otimizado',
        'Integração CRM via Power Automate',
        'Design responsivo e acessível',
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
