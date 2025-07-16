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
import { TaskFequency } from '../../../../../core/models/task-frequency.enum';
import { TaskDays } from '../../../../../core/models/task-days.enum';
import { TaskTimesOfDay } from '../../../../../core/models/task-times-of-day.enum';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SelectFormFieldComponent } from '../../../../components/select-form-field/select-form-field.component';
import { InputFormFieldComponent } from '../../../../components/input-form-field/input-form-field.component';

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
  public taskCategory: string[] = Object.values(TaskType);
  public taskFrequency: string[] = Object.values(TaskFequency);
  public taskDaysOfWeek: string[] = Object.values(TaskDays);
  public taskTimesOfDay: string[] = Object.values(TaskTimesOfDay);

  constructor(
    private fb: FormBuilder,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private pictureDataService: PictureDataService
  ) {}

  ngOnInit(): void {
    this.taskPictures = this.pictureDataService.getTaskPictures();
    this.initForm();
  }

  public back() {
    window.history.back();
  }

  private initForm(): void {
    this.form = this.fb.group({
      picture: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      mandatory: [true, Validators.required],
      category: [TaskType.Routine, Validators.required],
      frequency: [TaskFequency.Daily, Validators.required],
      daysOfWeek: [[Object.values(TaskDays)], Validators.required],
      timesOfDay: [[Object.values(TaskTimesOfDay)], Validators.required],
      points: [1, Validators.required],
    });
  }
}
