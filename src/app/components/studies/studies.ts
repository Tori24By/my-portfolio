import { Component, OnInit, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { CurrentStudy } from '../../models/study.model';
import { StudyService } from '../../services/study.service';

@Component({
  selector: 'app-studies',
  imports: [UpperCasePipe],
  templateUrl: './studies.html',
  styleUrl: './studies.scss',
})
export class Studies implements OnInit {
  studies: CurrentStudy[] = [];
  
  private studyService = inject(StudyService);

  ngOnInit(): void {
    this.studyService.getStudies().subscribe({
      next: (dados) => this.studies = dados,
      error: (erro) => console.error("Erro ao carregar estudos", erro)
    });
  }
}