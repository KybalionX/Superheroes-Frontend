import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatallaResultadosComponent } from './components/batalla-resultados/batalla-resultados.component';
import { BatallaComponent } from './components/batalla/batalla.component';
import { IndexComponent } from './components/index/index.component';
import { SuperheroesCreateComponent } from './components/superheroes-create/superheroes-create.component';
import { SuperheroesEditComponent } from './components/superheroes-edit/superheroes-edit.component';
import { SuperheroesComponent } from './components/superheroes/superheroes.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'superheroes',
    component: SuperheroesComponent,
  },
  {
    path: 'superheroes/create',
    component: SuperheroesCreateComponent
  },
  {
    path: 'superheroes/edit/:id',
    component: SuperheroesEditComponent
  },
  {
    path: 'batalla',
    component: BatallaComponent,
  },
  {
    path: 'batalla/resultados',
    component: BatallaResultadosComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
