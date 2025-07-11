import { Component, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-select',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './image-select.component.html',
  styleUrl: './image-select.component.scss',
})
export class ImageSelectComponent {
  selectedPicture: string | null = '/profile_icons/knight.png';
  profilePictures = [
    { label: 'Chevalier', path: '/profile_icons/knight.png' },
    { label: 'Cyclope', path: '/profile_icons/cyclops_5064863.png' },
    { label: 'Princesse', path: '/profile_icons/princess_5101538.png' },
    { label: 'Dragon', path: '/profile_icons/dragon_3410567.png' },
    { label: 'Elfe', path: '/profile_icons/elf_9307751.png' },
    { label: 'Fée', path: '/profile_icons/fairy_6756063.png' },
    { label: 'Viking', path: '/profile_icons/viking_5101673.png' },
    { label: 'Yéti', path: '/profile_icons/yeti_1149401.png' },
  ];
}
