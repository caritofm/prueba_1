import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespuestaseguridadPage } from './respuestaseguridad.page';

const routes: Routes = [
  {
    path: '',
    component: RespuestaseguridadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespuestaseguridadPageRoutingModule {}
