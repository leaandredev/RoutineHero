import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ImageSelectComponent } from '../../../../components/image-select/image-select.component';
import { Picture } from '../../../../../core/interfaces/picture.interface';
import { PictureDataService } from '../../../../../core/services/picture-data.service';
import { TaskType } from '../../../../../core/models/task-type.enum';
import { TaskDays } from '../../../../../core/models/task-days.enum';
import { TaskTimesOfDay } from '../../../../../core/models/task-times-of-day.enum';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SelectFormFieldComponent } from '../../../../components/select-form-field/select-form-field.component';
import { InputFormFieldComponent } from '../../../../components/input-form-field/input-form-field.component';
import { Task } from '../../../../../core/interfaces/task.interface';
import { TaskService } from '../../../../../core/services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [
    ImageSelectComponent,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    SelectFormFieldComponent,
    InputFormFieldComponent,
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent implements OnInit {
  public form: FormGroup | undefined;
  public taskPictures: Picture[] = [];
  public taskType: string[] = Object.values(TaskType);
  public taskDaysOfWeek: string[] = Object.values(TaskDays);
  public taskTimesOfDay: string[] = Object.values(TaskTimesOfDay);

  constructor(
    private fb: FormBuilder,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private pictureDataService: PictureDataService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskPictures = this.pictureDataService.getTaskPictures();
    this.initForm();
  }

  public submitForm() {
    console.log('submit');
    console.log(this.form?.value);

    if (this.form && this.form.valid) {
      console.log('form valid');

      const taskRequest = this.form.value as Task;
      this.taskService.create(taskRequest);
      this.matSnackBar.open('La tâche a bien été créée.', 'Close', {
        duration: 3000,
      });
      this.router.navigate(['/parent']);
    }
  }

  public back() {
    window.history.back();
  }

  private initForm(): void {
    this.form = this.fb.group({
      picture: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      mandatory: [true],
      category: [TaskType.Routine, Validators.required],
      daysOfWeek: [[], Validators.required],
      timesOfDay: [[], Validators.required],
    });
  }
}
