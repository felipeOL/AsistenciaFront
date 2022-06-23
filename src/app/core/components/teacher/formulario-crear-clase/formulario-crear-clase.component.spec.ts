import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearClaseComponent } from './formulario-crear-clase.component';

describe('FormularioCrearClaseComponent', () => {
  let component: FormularioCrearClaseComponent;
  let fixture: ComponentFixture<FormularioCrearClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCrearClaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
