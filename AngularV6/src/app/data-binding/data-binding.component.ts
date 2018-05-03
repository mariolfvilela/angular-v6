import { Component, OnInit } from '@angular/core';
import { HtmlTagDefinition } from '@angular/compiler';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'www.google.com.br';
  valorSalvo: string = '';
  valorAtual: string = '';
  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showClick() {
    alert('OK');
  }
  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }
  salvarValor(valor) {
    this.valorSalvo = valor;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
}
