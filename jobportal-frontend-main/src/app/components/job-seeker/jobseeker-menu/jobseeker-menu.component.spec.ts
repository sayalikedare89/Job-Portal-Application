import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerMenuComponent } from './jobseeker-menu.component';

describe('JobseekerMenuComponent', () => {
  let component: JobseekerMenuComponent;
  let fixture: ComponentFixture<JobseekerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobseekerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
