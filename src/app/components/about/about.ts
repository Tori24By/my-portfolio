import { Component, OnInit, inject } from '@angular/core';
import { AboutMe } from '../../models/about.model';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
 
  aboutData: AboutMe | null = null; 
  
  private aboutService = inject(AboutService);

  ngOnInit(): void {
    this.aboutService.getAboutMe().subscribe({
      next: (dados) => {
        
        if (dados && dados.length > 0) {
          this.aboutData = dados[0];
        }
      },
      error: (erro) => console.error("Erro ao carregar About", erro)
    });
  }
}