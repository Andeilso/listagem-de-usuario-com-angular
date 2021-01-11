import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: Array<any> = new Array();

  constructor(public usuariosService: UsuariosService ) { }

  ngOnInit(){
    this.listarUsuarios();
  }

  listarUsuarios (){
    this.usuariosService.listarUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
      this.usuarios.forEach( u => {
        return u.favorito = false
      } )
    }, err => {
      console.log("Erro ao listar os usuarios")
    })
  }
}
