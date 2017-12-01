import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
  appVersion: string = "1.0.0";
  description: string = "Trabalho de Auto Instrucional LTP 4";
  workers: string[] = [
    "Henrique Camilo Mapa",
    "Plinio Jose Rodrigues Mourao",
    "Vitor Chamon",
    "Felipe Ravani"
  ]

  constructor() { }

  ngOnInit() {
  }

}
