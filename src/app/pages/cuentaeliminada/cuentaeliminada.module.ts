import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaeliminadaPageRoutingModule } from './cuentaeliminada-routing.module';

import { CuentaeliminadaPage } from './cuentaeliminada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaeliminadaPageRoutingModule
  ],
  declarations: [CuentaeliminadaPage]
})
export class CuentaeliminadaPageModule {}
