import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCoursesComponent } from './sheet-courses.component';

describe('SheetCoursesComponent', () => {
  let component: SheetCoursesComponent;
  let fixture: ComponentFixture<SheetCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
