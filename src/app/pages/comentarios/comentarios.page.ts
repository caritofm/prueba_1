import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {
  usuario:any=[
    {
      nombreUsuario:'Macarena29',
      comentario:'exclente receta'
    },
    {
      nombreUsuario:'Blanca23',
      comentario:'Me quedo maravillosa'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
