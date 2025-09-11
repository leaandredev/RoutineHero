import { Component, OnInit } from '@angular/core';
import { ListeProfilesComponent } from '../../../components/liste-profiles/liste-profiles.component';
import { ContextService } from '../../../../core/services/context.service';
import { AppContext } from '../../../../core/models/app-context.enum';

@Component({
  selector: 'app-childrens-list',
  imports: [ListeProfilesComponent],
  templateUrl: './childrens-list.component.html',
  styleUrl: './childrens-list.component.scss',
})
export class ChildrensListComponent implements OnInit {
  constructor(private contextService: ContextService) {}

  ngOnInit(): void {
    this.contextService.setContext(AppContext.Children);
  }
}
