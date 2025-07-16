import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ListeProfilesComponent } from '../../../components/liste-profiles/liste-profiles.component';
import { ContextService } from '../../../../core/services/context.service';
import { AppContext } from '../../../../core/models/app-context.enum';

@Component({
  selector: 'app-parent-dashboard',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ListeProfilesComponent,
  ],
  templateUrl: './parent-dashboard.component.html',
  styleUrl: './parent-dashboard.component.scss',
})
export class ParentDashboardComponent implements OnInit {
  constructor(private contextService: ContextService) {}

  ngOnInit(): void {
    this.contextService.setContext(AppContext.Parent);
  }
}
