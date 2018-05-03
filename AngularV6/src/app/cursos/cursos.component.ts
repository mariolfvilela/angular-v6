import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  nomePotal:string;
  cursos: string[];

  constructor(private CursosService: CursosService) {
    this.nomePotal = 'Nome do portal';
    this.cursos = this.CursosService.getCursos();
   }

  ngOnInit() {
  }

}
