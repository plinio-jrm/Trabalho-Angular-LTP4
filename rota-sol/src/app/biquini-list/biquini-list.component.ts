import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Biquini } from './biquini/biquini.model';
import { BiquinisFiltro } from './biquinis-filtro.model';
import { RotaDoSolService } from './../rota-do-sol.service';

@Component({
  selector: 'biquini-list',
  templateUrl: './biquini-list.component.html',
  styleUrls: ['./biquini-list.component.css']
})
export class BiquiniListComponent implements OnInit {
  biquiniListArray: Biquini[];
  cores: string[]=[];
  tamanhos: string[]=["Todos"];

  filtro: BiquinisFiltro = new BiquinisFiltro();
  @ViewChild('biquiniFiltro') biquiniFiltro;

  constructor(private service: RotaDoSolService) {}

  ngOnInit() {
    this.service.GetBiquiniList('/biquinis').subscribe(bArray => {
      this.DoBiquini(bArray);
      this.biquiniListArray = bArray;
    });
  }

  IsDataEmpty(): boolean {
    return (this.filtro.dataCount === 0) && this.biquiniListArray !== undefined;
  }

  OnFilterChange(filtro: BiquinisFiltro) {
    this.filtro = filtro;
  }

  private DoBiquini(biquinis: Biquini[]) {
    for (let B of biquinis) {
      this.AddSize(B.size);
      this.AddColors(B.colors);
    }
    this.biquiniFiltro.SetColors(this.cores);
  }

  private AddSize(size: string) {
    let haveit: boolean = false;
    for (let T of this.tamanhos) {
      if (T == size) {
        haveit = true;
        break;
      }
    }

    if (!haveit)
      this.tamanhos.push(size);
  }

  private AddColors(colors: string[]) {
    for (let color of colors) {
      this.AddColor(color);
    }

  }

  private AddColor(color: string) {
    let haveit: boolean = false;
    for (let C of this.cores) {
      if (C == color) {
        haveit = true;
        break;
      }
    }

    if (!haveit)
      this.cores.push(color);
  }
}
