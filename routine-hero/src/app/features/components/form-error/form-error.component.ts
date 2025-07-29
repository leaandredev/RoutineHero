// form-error.component.ts
import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
  imports: [MatInputModule],
})
export class FormErrorComponent {
  @Input() controlName!: any;
  @Input() labelField!: string;

  constructor(private rootFormGroup: FormGroupDirective) {}

  get control(): AbstractControl | null {
    return this.rootFormGroup.control.get(this.controlName);
  }

  get errorMessage(): string | null {
    if (
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched)
    ) {
      if (this.control.errors['required']) {
        return `Le champ ${this.labelField} est obligatoire.`;
      }
      if (this.control.errors['minlength']) {
        return `Minimum ${this.control.errors['minlength'].requiredLength} caractères.`;
      }
      if (this.control.errors['maxlength']) {
        return `Maximum ${this.control.errors['maxlength'].requiredLength} caractères.`;
      }
      if (this.control.errors['email']) {
        return 'Adresse e-mail invalide.';
      }
      if (this.control.errors['pattern']) {
        return 'Format invalide.';
      }
      // Ajouter d’autres règles personnalisées ici
    }
    return null;
  }
}
