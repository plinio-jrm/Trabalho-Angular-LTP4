import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import { Biquini } from './biquini-list/biquini/biquini.model';

@Injectable()
export class RotaDoSolService {
  constructor(private db: AngularFireDatabase) { }

  GetBiquiniList(path): Observable<Biquini[]> {
    return this.db.list<Biquini>(path).valueChanges();
  }
}
