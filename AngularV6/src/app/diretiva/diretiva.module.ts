import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  imports: [
    MaterializeModule,
    CommonModule
  ],
  exports: [DiretivaNgifComponent],
  declarations: [DiretivaNgifComponent]
})
export class DiretivaModule { }
