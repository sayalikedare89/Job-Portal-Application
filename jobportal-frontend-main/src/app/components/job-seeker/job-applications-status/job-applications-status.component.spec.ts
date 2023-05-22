import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationsStatusComponent } from './job-applications-status.component';

describe('JobApplicationsStatusComponent', () => {
  let component: JobApplicationsStatusComponent;
  let fixture: ComponentFixture<JobApplicationsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationsStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
