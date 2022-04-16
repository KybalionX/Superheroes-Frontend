import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'CardInfo',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  @Input()
  title : string = "DEFAULT_TITLE";
  @Input()
  description : string = "DEFAULT_DESCRIPTION";
  @Input()
  bordercolor : string = "#0acfff";
  @Input()
  buttonText : string = "";
  @Input()
  buttonLink : string = "/";

  constructor() { }

  ngOnInit(): void {
  }

}
