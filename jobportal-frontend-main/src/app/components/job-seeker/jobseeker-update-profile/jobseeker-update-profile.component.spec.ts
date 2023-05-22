import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerUpdateProfileComponent } from './jobseeker-update-profile.component';

describe('JobseekerUpdateProfileComponent', () => {
  let component: JobseekerUpdateProfileComponent;
  let fixture: ComponentFixture<JobseekerUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerUpdateProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
