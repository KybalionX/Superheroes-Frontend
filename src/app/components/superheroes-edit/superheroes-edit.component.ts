import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as _ from 'lodash';
import Swal from 'sweetalert2';
import { SuperheroeModel } from '../../models/SuperheroeModel';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'SuperheroesEdit',
  templateUrl: './superheroes-edit.component.html',
  styleUrls: ['./superheroes-edit.component.css']
})
export class SuperheroesEditComponent implements OnInit {

  @ViewChildren('inputNumber') elements : QueryList<ElementRef> = new QueryList<ElementRef>();

  superheroe: SuperheroeModel = {};
  superHeroeNotFound: boolean = false;
  grupos: any = [];
  loading: boolean = true;
  habilidad: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private api: ApiService) {

    //Verificamos que el parametro id que llega por la url sea Integer, en caso contrario, redirecciona a el index
    activatedRoute.params.subscribe((params: Params) => {
      if (_.toInteger(params.id) == 0) router.navigate(['/']);
      this.getSuperheroes(params.id);
    })

  }

  habilidadChange() {
    let { fuerza, inteligencia, velocidad, valentia } = this.superheroe;
    //Habilidad del superheroe es la sumatoria entre fuerza, inteligencia, velocidad y valentía
    this.habilidad = _.reduce([fuerza, inteligencia, velocidad, valentia], (sum, n) => sum! + n!);
    this.superheroe.habilidad = this.habilidad;
  }

  ngOnInit(): void {
    this.api.getGrupos().then((response: any) => {
      this.grupos = response.data;
      this.loading = false;
      this.loadInputListener();
    })
  }

  loadInputListener() {
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

  getSuperheroes(id: any) {
    this.api.getSuperheroesById(id).then((response: any) => {
      if (_.isNil(response.data)) {
        this.superHeroeNotFound = true;
      }
      this.superheroe = response.data;
      this.habilidad = this.superheroe.habilidad;
    });
  }

  updateSuperheroe() {
    this.api.updateSuperheroe(this.superheroe).then((response: any) => Swal.fire(response.data))
  }

}
