import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AlertModule.forRoot(),
    CommonModule,
    FormsModule
  ],
  declarations: [DataBindingComponent],
  exports:[DataBindingComponent]
})
export class DataBindingModule { }
