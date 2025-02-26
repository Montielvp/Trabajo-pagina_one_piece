import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule) },
  { path: 'personajes', loadChildren: () => import('./pages/personajes/personajes.module').then(m => m.PersonajesPageModule) },
  { path: 'detalles-personaje/:id', loadChildren: () => import('./pages/detalles-personaje/detalles-personaje.module').then(m => m.DetallesPersonajePageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

