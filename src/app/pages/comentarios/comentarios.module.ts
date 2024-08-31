import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentariosPageRoutingModule } from './comentarios-routing.module';
import { Componente1Component } from 'src/app/components/componente1/componente1.component';
import { ComentariosPage } from './comentarios.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentariosPageRoutingModule
  ],
  declarations: [ComentariosPage, Componente1Component]
})
export class ComentariosPageModule {}
