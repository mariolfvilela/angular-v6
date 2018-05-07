import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { OutPutPropertyComponent } from './out-put-property/out-put-property.component';

@NgModule({
  imports: [
    AlertModule.forRoot(),
    CommonModule,
    FormsModule
  ],
  declarations: [DataBindingComponent, InputPropertiesComponent, OutPutPropertyComponent],
  exports:[DataBindingComponent, InputPropertiesComponent, OutPutPropertyComponent]
})
export class DataBindingModule { }
