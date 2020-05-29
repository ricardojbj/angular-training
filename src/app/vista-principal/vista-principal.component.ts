import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})
export class VistaPrincipalComponent implements OnInit {

  nuevoValor: any = 0;
  dataEntrante: any;

  constructor() { }

  ngOnInit() {
  }

  aumentarNumero() {
    this.nuevoValor = this.nuevoValor + 1;
  }

  recibeData(evt) {
    this.dataEntrante = evt;
    console.log(evt);
  }

}
