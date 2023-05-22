import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterLogoComponent } from './recruiter-logo.component';

describe('RecruiterLogoComponent', () => {
  let component: RecruiterLogoComponent;
  let fixture: ComponentFixture<RecruiterLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
