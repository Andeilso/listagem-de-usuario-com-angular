import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Array<any> = new Array();

  constructor(public usuariosService: UsuariosService ) { };

  ngOnInit(){
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.usuariosService.listarUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    }, err => {
      console.log("Erro ao listar os usuarios")
    })
  }

}
