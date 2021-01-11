import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritosComponent } from "./view/favoritos/favoritos.component"
import { ListarUsuarioComponent } from "./view/listar-usuario/listar-usuario.component";
import { HomeComponent } from "./view/home/home.component"

const routes: Routes = [
  {   
    path: "",
    component: HomeComponent
  },
  {
    path: "listar-usuarios",
    component: ListarUsuarioComponent
  },
  {
    path: "favoritos",
    component: FavoritosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
