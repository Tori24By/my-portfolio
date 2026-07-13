import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkillCategory } from '../models/skill.model';

@Injectable({ providedIn: 'root' })
export class SkillService {
  constructor(private http: HttpClient) {}
  getSkills(): Observable<SkillCategory[]> {
    return this.http.get<SkillCategory[]>('https://portfolio-api-cg4v.onrender.com/api/habilidades');
  }
}