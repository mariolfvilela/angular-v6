import { Component, OnInit, EventEmitter} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {
  selectOptions: string[] = ['teste1'];
  modalActions = new EventEmitter<string|MaterializeAction>();
  
  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

}
