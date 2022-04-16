import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';
import { SuperheroeModel } from '../../models/SuperheroeModel';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'Superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.css']
})
export class SuperheroesComponent implements OnInit {

  superheroes: any = [];
  error : boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getSuperheroes();
  }

  deleteUser(superheroe: SuperheroeModel) {
    let { id, nombre } = superheroe;
    Swal.fire({
      icon: 'warning',
      title: "ESPERA!",
      footer: 'Esta acción no se puede deshacer',
      text: `¿Estás seguro que deseas eliminar al superheroe ${nombre} con id ${id}?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí, deseo eliminarlo',
      cancelButtonText: 'No eliminar superheroe'
    }).then((alert) => {
      if (alert.isConfirmed) {
        this.api.deleteSuperheroe(id).then((response) => {
          this.getSuperheroes();
          Swal.fire(response.data);
        })
      }
    })
  }

  getSuperheroes(){
    this.api.getSuperheroes().then((response: any) => this.superheroes = response.data).catch(e => this.error = true);
  }

}
