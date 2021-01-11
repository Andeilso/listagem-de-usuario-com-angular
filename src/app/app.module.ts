import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListarUsuarioComponent } from './view/listar-usuario/listar-usuario.component';
import { FavoritosComponent } from './view/favoritos/favoritos.component';
import { HomeComponent } from './view/home/home.component';
import { UsuariosService } from './usuarios.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    ListarUsuarioComponent,
    FavoritosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsuariosService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
