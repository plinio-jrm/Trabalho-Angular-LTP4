import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { BiquinisComponent } from './biquinis/biquinis.component';

import { BiquiniService } from './biquinis/biquini.service';
import { BiquiniComponent } from './biquinis/biquini/biquini.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FooterComponent,
    BiquinisComponent,
    BiquiniComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [BiquiniService],
  bootstrap: [AppComponent]
})
export class AppModule { }
