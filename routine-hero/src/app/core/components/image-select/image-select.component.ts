import {
  Component,
  EventEmitter,
  forwardRef,
  OnInit,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageSelectComponent),
      multi: true,
    },
  ],
  templateUrl: './image-select.component.html',
  styleUrl: './image-select.component.scss',
})
export class ImageSelectComponent implements ControlValueAccessor {
  private defaultPicture = '/profile_icons/non_selected_picture.png';
  public selectedPicture: string = this.defaultPicture;

  public profilePictures = [
    { label: 'Chevalier', path: '/profile_icons/knight.png' },
    { label: 'Cyclope', path: '/profile_icons/cyclops_5064863.png' },
    { label: 'Princesse', path: '/profile_icons/princess_5101538.png' },
    { label: 'Dragon', path: '/profile_icons/dragon_3410567.png' },
    { label: 'Elfe', path: '/profile_icons/elf_9307751.png' },
    { label: 'Fée', path: '/profile_icons/fairy_6756063.png' },
    { label: 'Viking', path: '/profile_icons/viking_5101673.png' },
    { label: 'Yéti', path: '/profile_icons/yeti_1149401.png' },
  ];

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.selectedPicture = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onPictureSelected(picturePath: string) {
    this.selectedPicture = picturePath;
    this.onChange(picturePath);
    this.onTouched;
  }

  get pictureDisplay() {
    return this.selectedPicture || this.defaultPicture;
  }
}
