import { Routes } from '@angular/router';
import { parentRoutes } from './features/parent/parent.routes';
import { childrenRoutes } from './features/children/children.routes';

export const routes: Routes = [
  {
    path: 'parent',
    children: parentRoutes,
  },
  {
    path: 'children',
    children: childrenRoutes,
  },
  {
    path: '',
    redirectTo: '/children',
    pathMatch: 'full',
  },
];
