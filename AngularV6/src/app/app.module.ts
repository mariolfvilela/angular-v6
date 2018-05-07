import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DiretivaModule } from './diretiva/diretiva.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    CursosModule,
    DataBindingModule,
    DiretivaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
