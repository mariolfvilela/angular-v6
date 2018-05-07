import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    DiretivaNgifComponent
  ],
  declarations: [DiretivaNgifComponent]
})
export class DiretivaModule { }
