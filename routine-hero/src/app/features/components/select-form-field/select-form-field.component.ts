import { Component, forwardRef, Input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-select-form-field',
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatFormFieldModule,
    ReactiveFormsModule,
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
  public selectedOption: string = '';

  @Input() public formControlName: string = '';
  @Input() public label: string = '';
  @Input() public options: string[] = [];
  @Input() public multiple: boolean = false;

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

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
