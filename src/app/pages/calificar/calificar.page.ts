import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.page.html',
  styleUrls: ['./calificar.page.scss'],
})
export class CalificarPage implements OnInit {
  constructor(private alertController:AlertController, private router:Router, private toastController:ToastController) { }

  ngOnInit() {
  }

  async presentToast(position:'middle'|'bottom'){
    const toast = await this.toastController.create({
      message:'Gracias por calificar',
      duration:3000,
      position:position,
      color:'light',
    })
    await toast.present();
  }


  calificado(){
    let navigationextras:NavigationExtras = {

    }
    this.presentToast('middle');
    this.router.navigate(['/login'],navigationextras);
  }



}
