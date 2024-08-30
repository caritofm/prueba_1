import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarcuentaPage } from './eliminarcuenta.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarcuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarcuentaPageRoutingModule {}
