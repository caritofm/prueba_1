import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirect(){
    let navigationextras:NavigationExtras = {
      state:{

      }
    }
    
    this.router.navigate(['/cuenta'], navigationextras);
  }
}
