import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nomeCurso: string ='Angular V6';
  valorInicial: number = 10;

  onMudouValor(evento){
    console.log(evento);
  }
}
