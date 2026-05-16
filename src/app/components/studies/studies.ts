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
      topic: 'AWS Cloud Practitioner',
      description:
        'Estudando os fundamentos da computação em nuvem na AWS.',
      category: 'cloud',
      progress: 75,
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
        'Estudando os serviços da Microsoft Azure e suas aplicações em cloud computing.',
      category: 'cloud',
      progress: 25,
    },
    {
      topic: 'Power Platform Avançado',
      description:
        'Explorando Power Apps, Power BI e integrações avançadas com Power Automate e Dataverse.',
      category: 'automation',
      progress: 60,
    },
    {
      topic: 'Java e Spring',
      description:
        'Estudando Java e Spring: Realizando processamento em lote com Spring Batch pela Alura.',
      category: 'backend',
      progress: 50,
    },
  ];
}
