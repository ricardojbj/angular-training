import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-general',
  templateUrl: './formulario-general.component.html',
  styleUrls: ['./formulario-general.component.css']
})
export class FormularioGeneralComponent implements OnInit {

  @Input() mensajeRecibido: string;
  @Output() formIsValid: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  constructor( private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      gender: ['', [Validators.required ] ],
    });

    this.form.valueChanges.subscribe(data => {
      this.formIsValid.emit({
        datos: data,
        isValid: this.form.valid,
      });

    });

  }

}
