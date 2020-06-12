import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css'],
})

export class VistaPrincipalComponent implements OnInit {

  @Output() salida: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  formIsValid: boolean;

  listaPaises = [
    {
      id: 1,
      nombre: 'Venezuela',
    },
    {
      id: 2,
      nombre: 'Colombia',
    },
    {
      id: 3,
      nombre: 'México',
    },
    {
      id: 4,
      nombre: 'Brasil',
    },
    {
      id: 5,
      nombre: 'Chile',
    },
    {
      id: 6,
      nombre: 'Ecuador',
    },
  ];

  listaGeneros = [
    {
      id: 1,
      nombre: 'masculino',
    },
    {
      id: 2,
      nombre: 'femenino',
    }
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      paises: [null, Validators.required],
      nombre: [null , Validators.required],
      genero: [null, Validators.required],
      descripcion: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]]
    });


    this.form.valueChanges.subscribe( (data) => {
      this.formIsValid = this.form.valid;
      this.salida.emit();
    });

  }

  sendForm() {
    console.log(this.form.value);
    console.log(this.form.valid);
  }


  pruebaEmisor(evt) {
    
  }

  controlMatrix() {
   
 }
}
