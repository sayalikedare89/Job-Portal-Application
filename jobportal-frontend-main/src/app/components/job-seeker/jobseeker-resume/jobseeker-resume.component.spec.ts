import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerResumeComponent } from './jobseeker-resume.component';

describe('JobseekerResumeComponent', () => {
  let component: JobseekerResumeComponent;
  let fixture: ComponentFixture<JobseekerResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
