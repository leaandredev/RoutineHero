import { Routes } from '@angular/router';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { profileRoutes } from './profil/profil.routes';

export const parentRoutes: Routes = [
  {
    path: '',
    component: ParentDashboardComponent,
  },
  {
    path: 'profil',
    children: profileRoutes,
  },
];
