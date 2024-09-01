import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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

  constructor(private router:Router, private toastController:ToastController) { }

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom',) {
    const toast = await this.toastController.create({
      message: 'Reporte enviado con exito',
      duration: 3500,
      position: position,
      color:'light',
    });

    await toast.present();
  }

  redirect(){
    let navigationextras:NavigationExtras = {
      state:{

      }
    }
    this.presentToast('bottom');
    this.router.navigate(['/cuenta'], navigationextras);
  }

}
