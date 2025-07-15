import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Profile } from '../../../core/interfaces/profile.interface';
import { ContextService } from '../../../core/services/context.service';
import { AppContext } from '../../../core/models/app-context.enum';

@Component({
  selector: 'app-profile-card',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent implements OnInit {
  @Input() profile: Profile | null = null;
  public canModify: boolean = false;

  constructor(private contextService: ContextService) {}

  ngOnInit(): void {
    this.canModify = this.contextService.getCurrentValue() == AppContext.Parent;
  }
}
