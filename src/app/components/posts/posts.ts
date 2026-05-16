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
      title: 'Como automatizar sua rotina, organização com Markdown e IA',
      summary:
        'Neste artigo, compartilho como automatizei minha rotina de organização usando Markdown e Inteligência Artificial (Devin), transformando meu fluxo de trabalho diário.',
      platform: 'dev.to',
      url: 'https://dev.to/vitoria_de_lima_boin/como-automatizar-sua-rotina-organizacao-com-markdown-e-ia-3ked',
      publishedAt: '04/05/2026',
      tags: ['Markdown', 'Automação', 'IA', 'Devin'],
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
