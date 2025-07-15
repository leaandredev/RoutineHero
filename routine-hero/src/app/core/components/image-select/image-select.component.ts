import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
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
import { Picture } from '../../interfaces/picture.interface';

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

  @Input() public pictures: Picture[] | null = null;

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
