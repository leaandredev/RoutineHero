import { CommonModule } from '@angular/common';
import {
  Component,
  Injector,
  Input,
  OnInit,
  forwardRef,
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormErrorComponent } from '../form-error/form-error.component';

@Component({
  selector: 'app-input-form-field',
  templateUrl: './input-form-field.component.html',
  styleUrl: './input-form-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFormFieldComponent),
      multi: true,
    },
  ],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FormErrorComponent,
  ],
})
export class InputFormFieldComponent implements ControlValueAccessor, OnInit {
  @Input() label: string = '';
  @Input() fieldType: 'input' | 'textarea' = 'input';
  @Input() maxLength?: number;
  @Input() required?: boolean = false;

  public value: string | null = null;
  public disabled = false;
  public control!: FormControl;

  private onChange = (_: any) => {};
  private onTouched = () => {};

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
    this.value = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const value = target.value;

    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
