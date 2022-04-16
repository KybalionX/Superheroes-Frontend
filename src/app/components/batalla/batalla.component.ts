import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-batalla',
  templateUrl: './batalla.component.html',
  styleUrls: ['./batalla.component.css']
})
export class BatallaComponent implements OnInit {

  grupos: any = [];
  descalificados : any = [];
  error: boolean = false;
  enfrentamientos: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getGruposBatalla();
  }

  getGruposBatalla() {
    this.api.getBatallaGrupos().then((response: any) => {
      this.grupos = response.data;
    }).catch(() => this.error = true);

    this.api.getEnfrentamientos().then((response) => {
      console.log(response.data);
      this.enfrentamientos = _.filter(response.data, (e) => e.length == 2);
      this.descalificados = _.reject(response.data, (e) => e.length == 2);
    })
  }

  iniciarBatalla(){
    console.log("Iniciar batalla");
  }

}
