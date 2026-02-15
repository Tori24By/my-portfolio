import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', redirectTo: 'home' }, 
];
