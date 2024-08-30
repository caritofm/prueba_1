import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarcuentaPageRoutingModule } from './eliminarcuenta-routing.module';

import { EliminarcuentaPage } from './eliminarcuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarcuentaPageRoutingModule
  ],
  declarations: [EliminarcuentaPage]
})
export class EliminarcuentaPageModule {}
