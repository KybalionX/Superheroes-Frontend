import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'Index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  cards: { title: string, description: string, buttonText?: string, buttonLink?: string }[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getSuperheroes().then((response: any) => {
      this.cards.push({
        title: 'Cantidad de Superheroes',
        description: response.data.length,
        buttonText: 'Ver superheroes',
        buttonLink: '/superheroes'
      })
    })

    this.api.getGrupos().then((response: any) => {
      this.cards.push({
        title: 'Cantidad de Grupos',
        description: response.data.length,
      })
    })
  }

}
