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
import { ImageSelectComponent } from '../../../../../core/components/image-select/image-select.component';
import { Picture } from '../../../../../core/interfaces/picture.interface';
import { PictureDataService } from '../../../../../core/services/picture-data.service';

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
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent implements OnInit {
  public form: FormGroup | undefined;
  public taskPictures: Picture[] = [];

  constructor(private pictureDataService: PictureDataService) {}

  ngOnInit(): void {
    this.taskPictures = this.pictureDataService.getTaskPictures();
  }
}
