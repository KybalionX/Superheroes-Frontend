import { Component, ElementRef, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { SuperheroeModel } from '../../models/SuperheroeModel';
import Swal from 'sweetalert2';
import * as _ from 'lodash';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'SuperheroesCreate',
  templateUrl: './superheroes-create.component.html',
  styleUrls: ['./superheroes-create.component.css']
})
export class SuperheroesCreateComponent implements OnInit {

  grupos: any = [];
  loading: boolean = true;
  error: boolean = false;

  @ViewChildren('inputNumber') elements : QueryList<ElementRef> = new QueryList<ElementRef>();

  superheroe: SuperheroeModel = {
    nombre: "",
    fuerza: 0,
    inteligencia: 0,
    velocidad: 0,
    valentia: 0,
    grupo: {
      id: 0,
      nombre: "magia"
    }
  };

  habilidad?: number = 0;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getGrupos().then((response: any) => {
      this.loading = false;
      this.grupos = response.data;
      this.listenerInputs();
    }).catch((e) => {
      this.error = true;
    });
  }

  listenerInputs(): void {
    this.elements.changes.subscribe(changes => changes.forEach((element : any) => {
      element.nativeElement.addEventListener('keydown', (e: any) => {
        e.preventDefault();
        alert("Recuerda usar solo las flechas del input!");
      })
      element.nativeElement.addEventListener('input', (e: any) => {
        this.habilidadChange();
      });
    }));
  }

  habilidadChange() {
    let { fuerza, inteligencia, velocidad, valentia } = this.superheroe;
    //Habilidad del superheroe es la sumatoria entre fuerza, inteligencia, velocidad y valentía
    this.habilidad = _.reduce([fuerza, inteligencia, velocidad, valentia], (sum, n) => sum! + n!);
    this.superheroe.habilidad = this.habilidad;
  }

  crearSuperheroe() {

    if (this.superheroe.nombre === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Debes agregarle un nombre al superheroe!',
        icon: 'error',
      })
      return;
    } else if (this.superheroe.grupo?.id === 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Debes seleccionar un grupo!',
        icon: 'error',
      })
      return;
    }

    this.api.addSuperheroe(this.superheroe).then((response: any) => {
      Swal.fire(response.data).then(() => {
        if (response.data.icon === "success") {
          this.router.navigate(['/superheroes']);
        }
      });
    });

  }

}
