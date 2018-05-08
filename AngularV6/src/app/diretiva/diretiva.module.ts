import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { MaterializeModule } from 'angular2-materialize';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MaterializeModule,
    CommonModule,
    FormsModule
  ],
  exports: [DiretivaNgifComponent],
  declarations: [DiretivaNgifComponent, DiretivaNgstyleComponent, DiretivaNgswitchComponent]
})
export class DiretivaModule { }
