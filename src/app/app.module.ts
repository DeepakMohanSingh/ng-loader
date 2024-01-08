import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgOnWaitModule } from 'projects/ng-on-wait/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgOnWaitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
