import { Routes } from '@angular/router';
import { parentRoutes } from './features/parent/parent.routes';

export const routes: Routes = [
  {
    path: 'parent',
    children: parentRoutes,
  },
  {
    path: '',
    redirectTo: '/parent',
    pathMatch: 'full',
  },
];
