import { Component } from '@angular/core';
import { ImageSelectComponent } from '../../../../core/components/image-select/image-select.component';

@Component({
  selector: 'app-profil-form',
  imports: [ImageSelectComponent],
  templateUrl: './profil-form.component.html',
  styleUrl: './profil-form.component.scss',
})
export class ProfilFormComponent {}
