import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sol-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  imagem404:string="assets/imgs/404.jpg";

  constructor() { }

  ngOnInit() {
  }

}
