import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProfilesComponent } from './liste-profiles.component';

describe('ListeProfilesComponent', () => {
  let component: ListeProfilesComponent;
  let fixture: ComponentFixture<ListeProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeProfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
