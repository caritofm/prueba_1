import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes1',
  templateUrl: './reportes1.page.html',
  styleUrls: ['./reportes1.page.scss'],
})
export class Reportes1Page implements OnInit {

  usuarios: {nombre:string}[]= [
    {nombre:'Joaquina'}
  ]

  recetas :{nombreRecetas:string}[] = [
    {nombreRecetas:  ' Cupcake'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
