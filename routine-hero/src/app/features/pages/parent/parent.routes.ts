import { Routes } from '@angular/router';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { profileRoutes } from './profil/profil.routes';
import { taskRoutes } from './task/task.routes';

export const parentRoutes: Routes = [
  {
    path: '',
    component: ParentDashboardComponent,
  },
  {
    path: 'profil',
    children: profileRoutes,
  },
  {
    path: 'task',
    children: taskRoutes,
  },
];
