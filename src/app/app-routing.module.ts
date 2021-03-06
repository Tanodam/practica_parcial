import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';

const routes: Routes = [{path: '' ,component: BienvenidoComponent},
{path: 'busqueda' ,component: BusquedaComponent},
{path: 'peliculas/alta' ,component: PeliculaAltaComponent},
{path: 'actor/alta' ,component: ActorAltaComponent},
{path: 'peliculas/listado' ,component: PeliculaListadoComponent},
{path: 'actor/listado' ,component: ActorListadoComponent},
{path: 'paises/listado' ,component: PaisesListadoComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
