import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ex1aPageComponent } from './ex1a-page/ex1a-page.component';
import { Ex1bPageComponent } from './ex1b-page/ex1b-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1aPageComponent,
    Ex1bPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
