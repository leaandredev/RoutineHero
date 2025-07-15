import { Component } from '@angular/core';
import { ProfileService } from '../../../core/services/profile.service';
import { CommonModule } from '@angular/common';
import { Profile } from '../../../core/interfaces/profile.interface';
import { ProfileCardComponent } from "../profile-card/profile-card.component";

@Component({
  selector: 'app-liste-profiles',
  imports: [CommonModule, ProfileCardComponent],
  templateUrl: './liste-profiles.component.html',
  styleUrl: './liste-profiles.component.scss',
})
export class ListeProfilesComponent {
  public profiles: Profile[];

  constructor(private profileService: ProfileService) {
    this.profiles = this.profileService.getAll();
  }
}
