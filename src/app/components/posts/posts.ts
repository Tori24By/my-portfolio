import { Component, OnInit, inject } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts implements OnInit {
  posts: Post[] = [];
  
  private postService = inject(PostService);

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (dados) => this.posts = dados,
      error: (erro) => console.error("Erro ao carregar posts", erro)
    });
  }

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