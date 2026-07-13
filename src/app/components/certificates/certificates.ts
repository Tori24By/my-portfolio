import { Component, OnInit, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { CertificateService } from '../../services/certificate.service';
import { Certificate } from '../../models/certificate.model';

@Component({
  selector: 'app-certificates',
  imports: [UpperCasePipe], 
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class Certificates implements OnInit { 
  
  selectedCert: Certificate | null = null;
  
  certificates: Certificate[] = [];

  private certificateService = inject(CertificateService);

  ngOnInit(): void {
    this.carregarCertificados();
  }

  // Função que busca os dados na API
  carregarCertificados(): void {
    this.certificateService.getCertificates().subscribe({
      next: (dados) => {
        this.certificates = dados;
        console.log("Certificados carregados da API com sucesso!", dados);
      },
      error: (erro) => {
        console.error("Ops, falha ao conectar na API", erro);
      }
    });
  }


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