import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css'],
})

export class VistaPrincipalComponent implements OnInit {

  urlPrueba = 'https://api.exchangeratesapi.io/latest';
  datos: any;

  constructor(private http: ApiService) {}

  ngOnInit() {

  }

  getData() {
    this.http.getPrueba(this.urlPrueba).subscribe(algo => {
      this.datos = algo;
      console.log(this.datos);
    });
  }

}
