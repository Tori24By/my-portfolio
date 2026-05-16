import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Study } from '../../models/study.model';

@Component({
  selector: 'app-studies',
  imports: [UpperCasePipe],
  templateUrl: './studies.html',
  styleUrl: './studies.scss',
})
export class Studies {
  studies: Study[] = [
    {
      topic: 'Angular Avançado',
      description:
        'Aprofundando conhecimentos em signals, standalone components, SSR e otimização de performance.',
      category: 'frontend',
      progress: 70,
    },
    {
      topic: 'Arquitetura de Microsserviços',
      description:
        'Estudando padrões de arquitetura distribuída, comunicação entre serviços e deploy com Docker e Kubernetes.',
      category: 'devops',
      progress: 40,
    },
    {
      topic: 'Azure Cloud Services',
      description:
        'Preparação para certificação AZ-204, focando em Azure Functions, App Services e Azure DevOps.',
      category: 'cloud',
      progress: 55,
    },
    {
      topic: 'Power Platform Avançado',
      description:
        'Explorando Power Apps, Power BI e integrações avançadas com Power Automate e Dataverse.',
      category: 'automation',
      progress: 60,
    },
    {
      topic: 'Testes Automatizados',
      description:
        'Aprendendo Jest, Cypress e boas práticas de testes unitários, de integração e end-to-end.',
      category: 'frontend',
      progress: 35,
    },
    {
      topic: 'Design Patterns com TypeScript',
      description:
        'Estudando padrões de projeto como Singleton, Observer, Strategy e Factory aplicados ao TypeScript.',
      category: 'backend',
      progress: 50,
    },
  ];
}
