import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { MaskPipe } from './pipes/mask.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    MaskPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }  
