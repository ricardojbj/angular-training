import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-general',
  templateUrl: './vista-general.component.html',
  styleUrls: ['./vista-general.component.css']
})
export class VistaGeneralComponent implements OnInit {

  disableButton = true;
  form: any;
  mensaje: string;

  constructor() { }

  ngOnInit() {

    this.mensaje = 'Saludando al componente Hijo';

  }

  getFormValues(evt) {
    this.form = evt.Datos;
    this.disableButton = !evt.isValid;
  }

}
