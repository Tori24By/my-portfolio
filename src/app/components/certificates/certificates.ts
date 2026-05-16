import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Certificate } from '../../models/certificate.model';

@Component({
  selector: 'app-certificates',
  imports: [UpperCasePipe],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class Certificates {
  selectedCert: Certificate | null = null;

  certificates: Certificate[] = [
    {
      title: 'Angular: Desenvolvimento de Aplicações Web',
      issuer: 'DIO',
      issueDate: '2025-06',
      category: 'frontend',
      hours: 40,
    },
    {
      title: 'TypeScript para Desenvolvedores',
      issuer: 'Udemy',
      issueDate: '2025-04',
      category: 'frontend',
      hours: 30,
    },
    {
      title: 'SQL Server: Modelagem e Consultas Avançadas',
      issuer: 'Alura',
      issueDate: '2025-03',
      category: 'database',
      hours: 25,
    },
    {
      title: 'Power Automate: Automação de Processos',
      issuer: 'Microsoft Learn',
      issueDate: '2025-02',
      category: 'automation',
      hours: 20,
    },
    {
      title: 'Node.js e APIs RESTful',
      issuer: 'Rocketseat',
      issueDate: '2024-12',
      category: 'backend',
      hours: 35,
    },
    {
      title: 'Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      issueDate: '2024-10',
      category: 'cloud',
      hours: 15,
    },
  ];

  openCertificate(cert: Certificate): void {
    this.selectedCert = cert;
    document.body.style.overflow = 'hidden';
  }

  closeCertificate(): void {
    this.selectedCert = null;
    document.body.style.overflow = '';
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('cert-modal-overlay')) {
      this.closeCertificate();
    }
  }
}
