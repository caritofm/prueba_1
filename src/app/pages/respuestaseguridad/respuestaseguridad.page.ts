import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-respuestaseguridad',
  templateUrl: './respuestaseguridad.page.html',
  styleUrls: ['./respuestaseguridad.page.scss'],
})
export class RespuestaseguridadPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirect(){
    let navigationextras:NavigationExtras = {}
    this.router.navigate(['/cambiapassword'],navigationextras)
    
  }

}
