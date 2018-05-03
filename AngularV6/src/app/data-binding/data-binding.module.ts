import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    AlertModule.forRoot(),
    CommonModule
  ],
  declarations: [DataBindingComponent],
  exports:[DataBindingComponent]
})
export class DataBindingModule { }
