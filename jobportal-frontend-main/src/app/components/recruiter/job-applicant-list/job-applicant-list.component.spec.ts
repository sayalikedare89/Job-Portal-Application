import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicantListComponent } from './job-applicant-list.component';

describe('JobApplicantListComponent', () => {
  let component: JobApplicantListComponent;
  let fixture: ComponentFixture<JobApplicantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
