import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks$: BehaviorSubject<Task[]>;

  constructor() {
    this.tasks$ = new BehaviorSubject<Task[]>(this.getTasksFromStorage());
  }

  public create(task: Task): void {
    task.taskId = crypto.randomUUID();
    this.saveTasks([...this.tasks$.value, task]);
  }

  // Storage

  private getTasksFromStorage() {
    const jsonTasks = localStorage.getItem('tasks');
    return jsonTasks ? JSON.parse(jsonTasks) : [];
  }

  private saveTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.tasks$.next(tasks);
  }
}
