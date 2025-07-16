import { Component, OnInit } from '@angular/core';
import { ImageSelectComponent } from '../../../../core/components/image-select/image-select.component';
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
import { Profile } from '../../../../core/interfaces/profile.interface';
import { ProfileService } from '../../../../core/services/profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Picture } from '../../../../core/interfaces/picture.interface';

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
export class TaskFormComponent {
  public form: FormGroup | undefined;
  public profilePictures: Picture[] = [
    { label: 'Chambre', path: '/task_icons/bedroom_1069454.png' },
    {
      label: 'Couvert',
      path: 'routine-hero/public/task_icons/dish_1069461.png',
    },
    {
      label: 'Vaisselles',
      path: 'routine-hero/public/task_icons/dishes_1907179.png',
    },
    {
      label: 'Lave-vaiselle',
      path: 'routine-hero/public/task_icons/dishwasher_7935337.png',
    },
    {
      label: 'Linges étendus',
      path: 'routine-hero/public/task_icons/drying_7212534.png',
    },
    {
      label: 'Linges pliés',
      path: 'routine-hero/public/task_icons/laundry-basket_2542434.png',
    },
    {
      label: 'Douche',
      path: 'routine-hero/public/task_icons/shower_2858233.png',
    },
    {
      label: 'Éponge',
      path: 'routine-hero/public/task_icons/sponge_2542427.png',
    },
    {
      label: 'Brosse à dent',
      path: 'routine-hero/public/task_icons/toothbrush_1028807.png',
    },
    {
      label: 'Aspirateur',
      path: 'routine-hero/public/task_icons/vaccum-cleaner_7935295.png',
    },
  ];
}
