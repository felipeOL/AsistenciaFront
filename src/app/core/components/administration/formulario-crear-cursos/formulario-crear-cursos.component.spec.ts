import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearCursosComponent } from './formulario-crear-cursos.component';

describe('FormularioCrearCursosComponent', () => {
  let component: FormularioCrearCursosComponent;
  let fixture: ComponentFixture<FormularioCrearCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCrearCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
