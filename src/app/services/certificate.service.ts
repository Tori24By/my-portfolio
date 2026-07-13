import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificate } from '../models/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  
  private apiUrl = 'https://portfolio-api-cg4v.onrender.com/api/certificados';

  constructor(private http: HttpClient) { }

  // Método que vai no Spring Boot e traz a lista
  getCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(this.apiUrl);
  }
}