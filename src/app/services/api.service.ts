import { Injectable } from '@angular/core';
import axios from 'axios';
import { SuperheroeModel } from '../models/SuperheroeModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private rutaApi = "http://localhost:8080";

  constructor() { }

  async getSuperheroes() : Promise<void>{
    return await axios.get(this.rutaApi+'/superheroes');
  }

  async getSuperheroesById(id : any) : Promise<void>{
    return await axios.get(`${this.rutaApi}/superheroes/${id}`);
  }

  async getGrupos() : Promise<void>{
    return await axios.get(this.rutaApi+'/grupos');
  }

  async addSuperheroe(superHeroe : SuperheroeModel){
    return await axios.post(this.rutaApi+'/superheroes', superHeroe);
  }

  async updateSuperheroe(superHeroe : SuperheroeModel){
    return this.addSuperheroe(superHeroe);
  }

  async deleteSuperheroe(id : any){
    return await axios.delete(`${this.rutaApi}/superheroes/${id}`);
  }

  async getBatallaGrupos(){
    return await axios.get(`${this.rutaApi}/superheroes/batalla/grupos`);
  }

  async getEnfrentamientos(){
    return await axios.get(`${this.rutaApi}/superheroes/batalla/enfrentamientos`);
  }

  async getResultados(){
    return await axios.get(`${this.rutaApi}/superheroes/batalla/resultados`);
  }

}
