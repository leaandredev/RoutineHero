import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilFormComponent } from './profil-form.component';

describe('ProfilFormComponent', () => {
  let component: ProfilFormComponent;
  let fixture: ComponentFixture<ProfilFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
