import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespuestaseguridadPageRoutingModule } from './respuestaseguridad-routing.module';

import { RespuestaseguridadPage } from './respuestaseguridad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespuestaseguridadPageRoutingModule
  ],
  declarations: [RespuestaseguridadPage]
})
export class RespuestaseguridadPageModule {}
