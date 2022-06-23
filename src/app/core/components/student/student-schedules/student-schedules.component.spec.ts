import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSchedulesComponent } from './student-schedules.component';

describe('StudentSchedulesComponent', () => {
  let component: StudentSchedulesComponent;
  let fixture: ComponentFixture<StudentSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
