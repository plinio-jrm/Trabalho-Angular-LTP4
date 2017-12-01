import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { BiquiniListComponent } from './biquini-list/biquini-list.component';
import { BiquiniComponent } from './biquini-list/biquini/biquini.component';
import { CorBuilderComponent } from './cor-builder/cor-builder.component';
import { CorSingleComponent } from './cor-builder/cor-single/cor-single.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { BiquiniFiltroComponent } from './biquini-list/biquini-filtro/biquini-filtro.component';
import { SobreComponent } from './sobre/sobre.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BiquinisFiltroPipe } from './biquini-list/biquinis-filtro.pipe';
import { RotaDoSolService } from './rota-do-sol.service';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    BiquiniListComponent,
    BiquiniComponent,
    CorBuilderComponent,
    CorSingleComponent,
    AppFooterComponent,
    BiquiniFiltroComponent,
    BiquinisFiltroPipe,
    SobreComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RotaDoSolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
