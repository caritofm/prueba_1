import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualrecetas',
  templateUrl: './visualrecetas.page.html',
  styleUrls: ['./visualrecetas.page.scss'],
})
export class VisualrecetasPage implements OnInit {

  ingredientes:any = [
    {
    ingredinte1: 'Galletas de soda',
    ingrediente2: 'Manjar',
    ingrediente3:'coco rayado',
    },
  ]

  preparacion:any=[
    {
      paso1:'1.Moler las galletas hasta que queden polvo',
      paso2:'2.vertir in poco de manjar en la mezcla',
      paso3: 'hacer bolitas medianas y luego vertir el coco rayado en ellas'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
