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
  public onUpdate: boolean = false;
  public form: FormGroup | undefined;
  private id: string | undefined;

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

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const url = this.router.url;
    if (url.includes('update')) {
      this.onUpdate = true;
      this.id = this.route.snapshot.paramMap.get('id')!;
      this.profileService
        .all()
        .pipe(first())
        .subscribe((profiles) => {
          const profile = profiles.find((p) => p.profileId === this.id);
          this.initForm(profile);
        });
    } else {
      this.initForm();
    }
  }

  public submitForm() {
    if (this.form && this.form.valid) {
      const profilRequest = this.form.value as Profile;
      let confirmationText = '';
      if (!this.onUpdate) {
        this.profileService.create(profilRequest);
        confirmationText = 'Le profile a bien été créé.';
      } else {
        console.log(profilRequest);
        profilRequest.profileId = this.id ?? '';

        this.profileService.update(profilRequest);
        confirmationText = 'Le profile a bien été modifié.';
      }
      this.matSnackBar.open(confirmationText, 'Close', {
        duration: 3000,
      });
      this.router.navigate(['/parent']);
    }
  }

  public back() {
    window.history.back();
  }

  private initForm(profile?: Profile): void {
    this.form = this.fb.group({
      profilePicture: [
        profile ? profile.profilePicture : '',
        Validators.required,
      ],
      profileName: [profile ? profile.profileName : '', Validators.required],
    });
  }
}
