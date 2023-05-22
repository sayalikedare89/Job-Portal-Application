import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterProfileComponent } from './recruiter-profile.component';

describe('RecruiterProfileComponent', () => {
  let component: RecruiterProfileComponent;
  let fixture: ComponentFixture<RecruiterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
