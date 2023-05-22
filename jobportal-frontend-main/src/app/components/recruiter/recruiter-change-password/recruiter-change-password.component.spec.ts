import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterChangePasswordComponent } from './recruiter-change-password.component';

describe('RecruiterChangePasswordComponent', () => {
  let component: RecruiterChangePasswordComponent;
  let fixture: ComponentFixture<RecruiterChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
