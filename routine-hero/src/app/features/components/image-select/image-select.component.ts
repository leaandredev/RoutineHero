import {
  Component,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Picture } from '../../../core/interfaces/picture.interface';
import { FormErrorComponent } from '../form-error/form-error.component';

@Component({
  selector: 'app-image-select',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FormErrorComponent,
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
  @Input() public pictures: Picture[] | null = null;
  @Input() public label: string = '';

  private defaultPicture = '/profile_icons/non_selected_picture.png';

  public selectedPicture: string = this.defaultPicture;
  public control!: FormControl;

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    const ngControl = this.injector.get(NgControl);
    if (ngControl instanceof FormControlName) {
      const parent = this.injector.get(FormGroupDirective);
      this.control = parent.form.get(ngControl.name as string) as FormControl;
    } else if (ngControl instanceof FormControlDirective) {
      this.control = ngControl.form as FormControl;
    }
  }

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
