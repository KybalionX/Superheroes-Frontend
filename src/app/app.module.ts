import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { SuperheroesComponent } from './components/superheroes/superheroes.component';
import { SuperheroesCreateComponent } from './components/superheroes-create/superheroes-create.component';
import { SuperheroesEditComponent } from './components/superheroes-edit/superheroes-edit.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { BatallaComponent } from './components/batalla/batalla.component';
import { ErrorComponent } from './components/error/error.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { BatallaResultadosComponent } from './components/batalla-resultados/batalla-resultados.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    IndexComponent,
    SuperheroesComponent,
    SuperheroesCreateComponent,
    SuperheroesEditComponent,
    BatallaComponent,
    ErrorComponent,
    LoadingComponent,
    CardInfoComponent,
    BatallaResultadosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
