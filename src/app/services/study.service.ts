import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentStudy } from '../models/study.model';

@Injectable({ providedIn: 'root' })
export class StudyService {
  constructor(private http: HttpClient) {}
  getStudies(): Observable<CurrentStudy[]> {
    return this.http.get<CurrentStudy[]>('http://localhost:8080/api/estudos');
  }
}