import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCreationStudentsComponent } from './result-creation-students.component';

describe('ResultCreationStudentsComponent', () => {
  let component: ResultCreationStudentsComponent;
  let fixture: ComponentFixture<ResultCreationStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultCreationStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCreationStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
