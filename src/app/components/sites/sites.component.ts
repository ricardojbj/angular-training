import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  form: any = {
    nombre: '',
    apellido: '',
  };

  constructor() { }

  ngOnInit() {
  }

  recibeForm(evt) {
    this.form = evt;
    console.log('Llega Formulario:');
    console.log(this.form);
  }

}
