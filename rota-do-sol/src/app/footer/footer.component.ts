import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sol-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  nome:string = 'Rota do Sol';
  subTitle:string = 'Trabalho de Auto Instrucional LTP 4';
  professor:string ='Vincius Tolentino';

  integrantes:string[] =
  [
    "Henrique Camilo Mapa",
    "Plinio Jose Rodrigues Mourao",
    "Vitor Chamon",
    "Felipe Ravani"
  ];

  ngOnInit() {
  }

}
