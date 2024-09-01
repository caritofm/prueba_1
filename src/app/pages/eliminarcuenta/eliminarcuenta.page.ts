import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-eliminarcuenta',
  templateUrl: './eliminarcuenta.page.html',
  styleUrls: ['./eliminarcuenta.page.scss'],
})
export class EliminarcuentaPage implements OnInit {

  constructor(private alertController:AlertController, private router:Router, private toastController: ToastController) { }

  ngOnInit() {
  }


  async presentToast(position: 'top' | 'middle' | 'bottom',) {
    const toast = await this.toastController.create({
      message: 'Su cuenta ha sido eliminada con exito',
      duration: 3500,
      position: position,
      color:'light',
    });

    await toast.present();
  }

  si(){
    let navigationextras:NavigationExtras = {
      state:{

      }
    }
    this.presentToast('middle');
    this.router.navigate(['/notfound'], navigationextras);
  }
  no(){
    let navigationextras:NavigationExtras = {}
    this.router.navigate(['/cuenta'],navigationextras)
    
  }

}
