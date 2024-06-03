import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './pais/pais.component';
import { ProvinciaComponent } from './provincia/provincia.component';
import { MunicipioComponent } from './municipio/municipio.component';


const routes: Routes = [
  { path: 'aeropuertos', component: PaisComponent },
  { path: 'vuelos', component: ProvinciaComponent },
  { path: 'pasajeros', component: MunicipioComponent },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export const appRoutes = routes;