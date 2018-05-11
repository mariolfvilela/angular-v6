import { FundoAmareloDirective } from './../shared/fundo-amarelo.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgElseDirective } from './../shared/ng-else.directive';
import { HighlightDirective } from './../shared/highlight.directive';
import { HighlightMouseDirective } from './../shared/highlight-mouse.directive';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { MaterializeModule } from 'angular2-materialize';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { FormsModule } from '@angular/forms';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';

@NgModule({
  imports: [
    MaterializeModule,
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports: [DiretivaNgifComponent, ExemploNgContentComponent],
  declarations: [
    DiretivaNgifComponent,
    DiretivaNgstyleComponent,
    DiretivaNgswitchComponent,
    ExemploNgContentComponent,
    OperadorElvisComponent,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    FundoAmareloDirective
  ]
})
export class DiretivaModule { }
