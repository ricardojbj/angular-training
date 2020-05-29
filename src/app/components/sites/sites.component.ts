import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  @Input() valorRecibido: any;
  @Output() variableSalida: EventEmitter<any> = new EventEmitter();

  valor = 0;
  mymodel;
  mensajeBorrar;

  constructor() { }

  ngOnInit() {
  }

  modificaValor() {
    this.valor += 1;
    this.variableSalida.emit(this.valor);
  }

  valuechange(newValue) {
    this.mymodel = newValue;
    console.log(newValue);
    this.mymodel = this.mensajeBorrar;
  }

}
