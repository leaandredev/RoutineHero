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
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-form',
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
  templateUrl: './profil-form.component.html',
  styleUrl: './profil-form.component.scss',
})
export class ProfilFormComponent implements OnInit {
  public form: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      profilePicture: ['', Validators.required],
      profileName: ['', Validators.required],
    });
  }

  public submitForm() {
    if (this.form && this.form.valid) {
      const profilRequest = this.form.value as Profile;
      this.profileService.create(profilRequest);
      this.matSnackBar.open('Votre article a bien été créé.', 'Close', {
        duration: 3000,
      });
      this.router.navigate(['/parent']);
    }
  }

  public back() {
    window.history.back();
  }
}
