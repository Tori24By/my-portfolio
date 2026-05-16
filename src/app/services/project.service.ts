import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly apiUrl = `${environment.apiBaseUrl}/projects`;

  constructor(private readonly http: HttpClient) {}

  /**
   * Get all projects.
   * Returns static data until a database is connected.
   */
  getProjects(): Observable<Project[]> {
    if (!environment.production && !environment.apiBaseUrl) {
      return of(this.getStaticProjects());
    }

    return this.http.get<Project[]>(this.apiUrl);
  }

  /**
   * Get a single project by ID (requires database connection).
   */
  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  /**
   * Static project data used before database integration.
   * Replace with real API calls once the backend is set up.
   */
  private getStaticProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Sistema de Gestão',
        description: 'Sistema completo de gestão empresarial com dashboard interativo.',
        technologies: ['Angular', 'Node.js', 'PostgreSQL'],
        category: 'Web App',
        featured: true,
      },
      {
        id: 2,
        title: 'E-commerce Platform',
        description: 'Plataforma de e-commerce com integração de pagamento.',
        technologies: ['React', 'TypeScript', 'Stripe'],
        category: 'Web App',
        featured: true,
      },
      {
        id: 3,
        title: 'Automação de Processos',
        description: 'Automação de fluxos de trabalho com Power Automate e integrações.',
        technologies: ['Power Automate', 'SharePoint', 'Azure'],
        category: 'Automação',
        featured: true,
      },
    ];
  }
}
