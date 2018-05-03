import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-properties',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent implements OnInit {
  @Input('nome') nomeTeste: string='';
  constructor() { }

  ngOnInit() {
  }

}
