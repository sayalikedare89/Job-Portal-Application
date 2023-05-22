import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerProfileImageComponent } from './jobseeker-profile-image.component';

describe('JobseekerProfileImageComponent', () => {
  let component: JobseekerProfileImageComponent;
  let fixture: ComponentFixture<JobseekerProfileImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerProfileImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
