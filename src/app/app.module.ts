import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Aula01Component } from './aula01/aula01.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { Aula02Component } from './aula02/aula02.component';
import { Aula03Component } from './aula03/aula03.component';
import { Aula04Component } from './aula04/aula04.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';


// import { registerLocaleData } from '@angular/common';
// import localePt from '@angular/common/locales/pt';
// registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ConversorPipe,
    Aula01Component,
    Aula02Component,
    Aula03Component,
    Aula04Component,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-PT'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
