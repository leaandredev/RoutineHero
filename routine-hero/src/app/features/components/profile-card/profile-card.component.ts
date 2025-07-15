import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Profile } from '../../../core/interfaces/profile.interface';
import { ContextService } from '../../../core/services/context.service';
import { AppContext } from '../../../core/models/app-context.enum';
import { ProfileService } from '../../../core/services/profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent implements OnInit {
  @Input() profile: Profile | null = null;
  public canModify: boolean = false;

  constructor(
    private contextService: ContextService,
    private profileService: ProfileService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.canModify = this.contextService.getCurrentValue() == AppContext.Parent;
  }

  deleteProfile(profileId: string) {
    this.profileService.delete(profileId);
    this.matSnackBar.open('Le profile a bien été supprimé.', 'Close', {
      duration: 3000,
    });
  }
}
