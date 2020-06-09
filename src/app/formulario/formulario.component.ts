import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  formIsValid: boolean;

  listaPaises = [
    {
      id: 1,
      nombre: 'Argentina',
    },
    {
      id: 2,
      nombre: 'Brasil',
    },
    {
      id: 3,
      nombre: 'Chile',
    },
    {
      id: 4,
      nombre: 'Colombia',
    },
    {
      id: 5,
      nombre: 'Ecuador',
    },
    {
      id: 6,
      nombre: 'México',
    },
    {
      id: 7,
      nombre: 'Perú',
    },
    {
      id: 8,
      nombre: 'Venezuela'
    }
  ];

  listaOcupacion = [
    {
      id: 1,
      nombre: 'Abogado(a)',
    },
    {
      id: 2,
      nombre: 'Arquitecto(a)',
    },
    {
      id: 3,
      nombre: 'Deportista',
    },
    {
      id: 4,
      nombre: 'Estudiante',
    },
    {
      id: 5,
      nombre: 'Ingeniero(a)',
    },
    
    {
      id: 6,
      nombre: 'Licenciado(a)',
    },
    {
      id: 7,
      nombre: 'Médico(a)',
    },
    {
      id: 8,
      nombre: 'Profesor(a)'
    }
  ];

  listaGeneros = [
    {
      id: 1,
      nombre: 'Masculino',
    },
    {
      id: 2,
      nombre: 'Femenino',
    }
  ];

  listaEstado = [
    {
      id: 1,
      nombre: 'Soltero(a)',
    },
    {
      id: 2,
      nombre: 'Casado(a)',
    }
  ];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
   
    this.form = this.formBuilder.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      dni: [null, Validators.required],
      estado: [null, Validators.required],
      genero: [null, Validators.required],
      correo: [null, Validators.required],
      paises: [null, Validators.required],
      fecha: [null, Validators.required],
      ocupacion: [null],
      telefono:[null, Validators.required]
    });


    this.form.valueChanges.subscribe((data) => {
    
      
      this.formIsValid = this.form.valid;
      console.log(this.form.valid);
      
    });

  }

  sendForm() {
    console.log(this.form.value);
    console.log(this.form.valid);
  }
}