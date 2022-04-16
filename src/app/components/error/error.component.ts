import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ErrorComponent',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input()
  mensajeError: string = "Ha ocurrido un error :/";

  constructor() { }

  ngOnInit(): void {
  }

}
