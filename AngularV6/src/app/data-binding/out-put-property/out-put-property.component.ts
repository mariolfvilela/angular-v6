import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './out-put-property.component.html',
  styleUrls: ['./out-put-property.component.css']
})
export class OutPutPropertyComponent implements OnInit {

  @Input() valor: number=0;
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
