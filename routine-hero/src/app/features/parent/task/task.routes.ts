import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

export const taskRoutes: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
  {
    path: 'create',
    component: TaskFormComponent,
  },
];
