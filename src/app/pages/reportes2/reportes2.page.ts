import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
