import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursoModule } from './curso/curso.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
