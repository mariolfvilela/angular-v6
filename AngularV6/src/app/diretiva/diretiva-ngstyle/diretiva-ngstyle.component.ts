import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  tamanhoFonte: number = 10;
  ativo: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  mudarAtivo(){
    this.ativo= !this.ativo;
  }
}
