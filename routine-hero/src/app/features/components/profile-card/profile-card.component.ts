import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Profile } from '../../../core/interfaces/profile.interface';

@Component({
  selector: 'app-profile-card',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() profile: Profile | null = null;
}
