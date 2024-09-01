import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor(private alertController:AlertController, private router:Router) { }

  ngOnInit() {
  }
  async presentAlert(titulo:string, texto:string){
    const alert =await this.alertController.create({
      header:titulo,
      message:texto,
      buttons:['Aceptar']

    })

  }

  eliminarCuenta(){
    let navigationextras:NavigationExtras = {
      state:{

      }
    }
    this.router.navigate(['/eliminarcuenta'], navigationextras);
  }
  modificar(){
    let navigation:NavigationExtras={}
    this.router.navigate(['/cambiapassword'])
  }

}
