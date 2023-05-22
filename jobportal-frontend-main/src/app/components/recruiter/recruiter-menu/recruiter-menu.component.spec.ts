import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterMenuComponent } from './recruiter-menu.component';

describe('RecruiterMenuComponent', () => {
  let component: RecruiterMenuComponent;
  let fixture: ComponentFixture<RecruiterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
