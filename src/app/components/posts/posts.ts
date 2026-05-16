import { Component } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts {
  posts: Post[] = [
    {
      title: 'Como automatizar fluxos de trabalho com Power Automate',
      summary:
        'Um guia prático sobre como usar o Power Automate para automatizar processos empresariais, desde a criação de fluxos simples até integrações avançadas.',
      platform: 'DIO',
      url: 'https://dio.me',
      publishedAt: '2025-06',
      tags: ['Power Automate', 'Automação', 'Microsoft'],
    },
    {
      title: 'Construindo APIs RESTful com Node.js e Express',
      summary:
        'Tutorial completo sobre criação de APIs robustas usando Node.js, Express e boas práticas de desenvolvimento backend.',
      platform: 'dev.to',
      url: 'https://dev.to',
      publishedAt: '2025-05',
      tags: ['Node.js', 'Express', 'API', 'Backend'],
    },
    {
      title: 'Angular 20: Novidades e Melhores Práticas',
      summary:
        'Explorando as novidades do Angular 20, incluindo standalone components, signals e as melhores práticas para projetos modernos.',
      platform: 'dev.to',
      url: 'https://dev.to',
      publishedAt: '2025-04',
      tags: ['Angular', 'Frontend', 'TypeScript'],
    },
    {
      title: 'Modelagem de Banco de Dados: Do Conceitual ao Físico',
      summary:
        'Entendendo as etapas de modelagem de banco de dados e como aplicá-las em projetos reais com SQL Server e PostgreSQL.',
      platform: 'DIO',
      url: 'https://dio.me',
      publishedAt: '2025-03',
      tags: ['SQL Server', 'PostgreSQL', 'Banco de Dados'],
    },
  ];

  getPlatformIcon(platform: string): string {
    const icons: Record<string, string> = {
      DIO: '🎓',
      'dev.to': '👩‍💻',
      Medium: '📝',
      LinkedIn: '💼',
    };
    return icons[platform] ?? '📄';
  }
}
