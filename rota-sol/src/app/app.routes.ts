import { Routes } from '@angular/router';

import { BiquiniListComponent } from './biquini-list/biquini-list.component';
import { SobreComponent } from './sobre/sobre.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: '', component: BiquiniListComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', component: PageNotFoundComponent }
];
