import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterSigninComponent } from './recruiter-signin.component';

describe('RecruiterSigninComponent', () => {
  let component: RecruiterSigninComponent;
  let fixture: ComponentFixture<RecruiterSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
