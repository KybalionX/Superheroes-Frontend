import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'LoadingComponent',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input()
  mensajeCarga : string = "Cargando...";

  constructor() { }

  ngOnInit(): void {
  }

}
