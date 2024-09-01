import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-olvidasteclave',
  templateUrl: './olvidasteclave.page.html',
  styleUrls: ['./olvidasteclave.page.scss'],
})
export class OlvidasteclavePage implements OnInit {

  constructor(private alertController:AlertController, private router:Router) { }

  ngOnInit() {
  }

  redirect(){
    let navigationextras:NavigationExtras = {}
    this.router.navigate(['/respuestaseguridad'],navigationextras)
    
  }

}
