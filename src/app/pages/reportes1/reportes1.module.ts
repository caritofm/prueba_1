import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reportes1PageRoutingModule } from './reportes1-routing.module';

import { Reportes1Page } from './reportes1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reportes1PageRoutingModule
  ],
  declarations: [Reportes1Page]
})
export class Reportes1PageModule {}
