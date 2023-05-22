import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerPasswordChangeComponent } from './jobseeker-password-change.component';

describe('JobseekerPasswordChangeComponent', () => {
  let component: JobseekerPasswordChangeComponent;
  let fixture: ComponentFixture<JobseekerPasswordChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerPasswordChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerPasswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
