import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BiquinisFiltro } from './../biquinis-filtro.model';

@Component({
  selector: 'biquini-filtro',
  templateUrl: './biquini-filtro.component.html',
  styleUrls: ['./biquini-filtro.component.css']
})
export class BiquiniFiltroComponent implements OnInit {
  @Input() tamanhos: string[];
  @Input() cores: string[];
  @Output() onFilter = new EventEmitter<BiquinisFiltro>();

  filtro: BiquinisFiltro = new BiquinisFiltro();

  constructor() { }

  ngOnInit() {

  }

  // define as cores do filtro
  SetColors(colors: string[]) {
    for (let cor of colors) {
      this.filtro.colors.push(cor);
    }
    this.onFilter.emit(this.filtro);
  }

  // evento do input do modelo
  onKey(value: string) {
    this.filtro.modelo = value;
    this.onFilter.emit(this.filtro);
  }

  // evento da mudança de seleção do tamanho
  onTamanho(value: string) {
    if (value == "Todos") {
      this.filtro.size = "";
    } else
      this.filtro.size = value;

    this.onFilter.emit(this.filtro);
  }

  // evento da mudança de seleção da disponibilidade
  onAvailable(value: string) {
    if (value == "Todos") {
      this.filtro.available = "";
    } else
      this.filtro.available = (value == "Disponível") ? "true" : "false";

    this.onFilter.emit(this.filtro);
  }

  // evento quando seleciona uma cor!
  OnColorChecked(color: string) {
    let index = this.filtro.colors.indexOf(color);
    if (index === -1) {
      this.filtro.colors.push(color);
    } else
      this.filtro.colors.splice(index, 1);

    this.onFilter.emit(this.filtro);
  }
}
