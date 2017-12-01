import { Pipe, PipeTransform } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { BiquinisFiltro } from './biquinis-filtro.model';
import { Biquini } from './biquini/biquini.model';

@Pipe({
  name: 'biquinisFiltro',
  pure: false
})
export class BiquinisFiltroPipe implements PipeTransform {

  transform(value: Biquini[], filter: BiquinisFiltro): Biquini[] {
    if (filter === undefined || value === undefined)
      return value;

    let novaLista: Biquini[] = value;

    // primeiro filtra as cores
    novaLista = novaLista.filter(biquini => {
      for (let cor of biquini.colors) {
        if (filter.colors.indexOf(cor) === -1)
          return false;
      }
      return true;
    });
    if (filter.IsModified()) {
      // filtro do modelo
      if (filter.modelo != "") {
        novaLista = novaLista.filter(biquini => biquini.modelo.indexOf(filter.modelo) > -1);
      }
      // filtro de tamanho
      if (filter.size != "") {
        novaLista = novaLista.filter(biquini => biquini.size === filter.size);
      }
      // filtro de Disponibilidade
      if (filter.available != "") {
        novaLista = novaLista.filter(biquini => (biquini.available?"true":"false") === filter.available);
      }
    }

    filter.dataCount = novaLista.length;
    return novaLista;
  }
}
