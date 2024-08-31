import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cambiapassword',
  templateUrl: './cambiapassword.page.html',
  styleUrls: ['./cambiapassword.page.scss'],
})
export class CambiapasswordPage implements OnInit {

  nombre:string ="Lopez"

  constructor(private alertController:AlertController, private router:Router, private toastController:ToastController) { }

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom',) {
    const toast = await this.toastController.create({
      message: 'Su contraseña ha sido cambiada con exito',
      duration: 3500,
      position: position,
      color:'light',
    });

    await toast.present();
  }

  async presentAlert(titulo:string, texto:string){
    const alert =await this.alertController.create({
      header:titulo,
      message:texto,
      buttons:['Aceptar']

    })

  }

  irPagina(){
    let navigationextras:NavigationExtras = {
      state:{
        nombre:this.nombre

      }
    }
    this.presentToast('middle');
    this.router.navigate(['/login'], navigationextras);
  }

}
