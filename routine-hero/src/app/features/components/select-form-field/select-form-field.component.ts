import { Component, forwardRef, Injector, Input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormErrorComponent } from '../form-error/form-error.component';

@Component({
  selector: 'app-select-form-field',
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormErrorComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectFormFieldComponent),
      multi: true,
    },
  ],
  templateUrl: './select-form-field.component.html',
  styleUrl: './select-form-field.component.scss',
})
export class SelectFormFieldComponent implements ControlValueAccessor {
  @Input() public formControlName: string = '';
  @Input() public label: string = '';
  @Input() public options: string[] = [];
  @Input() public multiple: boolean = false;
  @Input() required?: boolean = false;

  public selectedOption: string = '';
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
    this.selectedOption = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onOptionSelected(option: string) {
    this.selectedOption = option;
    this.onChange(option);
    this.onTouched;
  }
}
