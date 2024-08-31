import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes2',
  templateUrl: './reportes2.page.html',
  styleUrls: ['./reportes2.page.scss'],
})
export class Reportes2Page implements OnInit {


  usuario:any=[
    {
      nombreUsuario:'Macarena29'
    },
    {
      nombreUsuario:'Blanca23'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
