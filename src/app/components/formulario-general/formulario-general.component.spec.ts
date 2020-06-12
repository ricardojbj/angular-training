import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGeneralComponent } from './formulario-general.component';

describe('FormularioGeneralComponent', () => {
  let component: FormularioGeneralComponent;
  let fixture: ComponentFixture<FormularioGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
