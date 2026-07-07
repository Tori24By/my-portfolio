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
      imageUrl: 'https://i.ibb.co/C3Y6XX6S/cpa-10.png',
      title: 'CPA-10',
      issuer: 'ANBIMA',
      issueDate: '09/02/2024 à 09/02/2029',
      category: 'other',
      hours: undefined,
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
