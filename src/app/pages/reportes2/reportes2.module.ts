import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reportes2PageRoutingModule } from './reportes2-routing.module';

import { Reportes2Page } from './reportes2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reportes2PageRoutingModule
  ],
  declarations: [Reportes2Page]
})
export class Reportes2PageModule {}
