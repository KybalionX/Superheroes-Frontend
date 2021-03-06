import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-batalla-resultados',
  templateUrl: './batalla-resultados.component.html',
  styleUrls: ['./batalla-resultados.component.css']
})
export class BatallaResultadosComponent implements OnInit {

  ganadores: any = [];
  empates: any = [];
  perdedores: any = [];
  marcador: any = {};
  loading: boolean = true;
  noBattle : boolean = false;
  noBattleResponse : string = "";

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getResultados();
  }

  getResultados() {
    this.api.getResultados().then((response) => {
      if(response.data.noBattle){
        this.noBattle = true;
        this.noBattleResponse = response.data.noBattle[0];
        return;
      }
      let { ganadores, empates, perdedores, marcador } = response.data;
      this.ganadores = ganadores;
      this.empates = empates;
      this.perdedores = perdedores;
      this.marcador = marcador[0];
      this.loading = false;
    })
  }

}
