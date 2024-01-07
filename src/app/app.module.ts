import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgOnWaitModule } from 'dist/ng-on-wait';

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
