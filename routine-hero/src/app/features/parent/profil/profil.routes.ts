import { Routes } from '@angular/router';
import { ProfilFormComponent } from './profil-form/profil-form.component';

export const profileRoutes: Routes = [
  {
    path: 'create',
    title: 'Profile - create',
    component: ProfilFormComponent,
  },
  {
    path: 'update/:id',
    title: 'Profile - update',
    component: ProfilFormComponent,
  },
];
