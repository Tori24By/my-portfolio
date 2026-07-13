import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutMe } from '../models/about.model';

@Injectable({ providedIn: 'root' })
export class AboutService {
  constructor(private http: HttpClient) {}
  getAboutMe(): Observable<AboutMe[]> {
    return this.http.get<AboutMe[]>('https://portfolio-api-cg4v.onrender.com/api/sobre-mim');
  }
}