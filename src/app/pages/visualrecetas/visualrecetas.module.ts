import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualrecetasPageRoutingModule } from './visualrecetas-routing.module';

import { VisualrecetasPage } from './visualrecetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualrecetasPageRoutingModule
  ],
  declarations: [VisualrecetasPage]
})
export class VisualrecetasPageModule {}
