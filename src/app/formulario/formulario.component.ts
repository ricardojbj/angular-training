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
      nombre: 'Venezuela'
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
      nombre: 'Soltero',
    },
    {
      id: 2,
      nombre: 'Casado',
    }
  ];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      paises: [null, Validators.required],
      nombre: [null, Validators.required],
      genero: [null, Validators.required],
      apellido: [null, Validators.required], /* Validators.minLength(10), Validators.maxLength(20)]] */
      estado: [null, Validators.required],
      dni:[null, Validators.required]
    });


    this.form.valueChanges.subscribe((data) => {
      this.formIsValid = this.form.valid;
    });

  }

  sendForm() {
    console.log(this.form.value);
    console.log(this.form.valid);
  }
}