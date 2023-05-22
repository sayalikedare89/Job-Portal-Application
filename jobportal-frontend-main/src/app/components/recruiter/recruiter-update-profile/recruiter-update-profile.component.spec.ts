import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterUpdateProfileComponent } from './recruiter-update-profile.component';

describe('RecruiterUpdateProfileComponent', () => {
  let component: RecruiterUpdateProfileComponent;
  let fixture: ComponentFixture<RecruiterUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterUpdateProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
