import { Routes } from '@angular/router';
import { childrenRoutes } from './features/pages/children/children.routes';
import { parentRoutes } from './features/pages/parent/parent.routes';

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
