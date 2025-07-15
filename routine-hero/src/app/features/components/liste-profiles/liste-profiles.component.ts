import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../core/services/profile.service';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { Observable } from 'rxjs';
import { Profile } from '../../../core/interfaces/profile.interface';

@Component({
  selector: 'app-liste-profiles',
  imports: [CommonModule, ProfileCardComponent],
  templateUrl: './liste-profiles.component.html',
  styleUrl: './liste-profiles.component.scss',
})
export class ListeProfilesComponent implements OnInit {
  public profiles$!: Observable<Profile[]>;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profiles$ = this.profileService.getProfiles();
  }

  public trackByProfileId(id: number, profile: Profile) {
    return profile.profileId;
  }
}
