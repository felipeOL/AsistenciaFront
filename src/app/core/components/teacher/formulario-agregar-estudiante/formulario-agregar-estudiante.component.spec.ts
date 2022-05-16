import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAgregarEstudianteComponent } from './formulario-agregar-estudiante.component';

describe('FormularioAgregarEstudianteComponent', () => {
  let component: FormularioAgregarEstudianteComponent;
  let fixture: ComponentFixture<FormularioAgregarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAgregarEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAgregarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
