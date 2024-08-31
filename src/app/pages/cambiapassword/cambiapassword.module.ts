import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiapasswordPageRoutingModule } from './cambiapassword-routing.module';

import { CambiapasswordPage } from './cambiapassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiapasswordPageRoutingModule
  ],
  declarations: [CambiapasswordPage]
})
export class CambiapasswordPageModule {}
