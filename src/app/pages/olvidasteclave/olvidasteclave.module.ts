import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidasteclavePageRoutingModule } from './olvidasteclave-routing.module';

import { OlvidasteclavePage } from './olvidasteclave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidasteclavePageRoutingModule
  ],
  declarations: [OlvidasteclavePage]
})
export class OlvidasteclavePageModule {}
