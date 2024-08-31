import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaeliminadaPage } from './cuentaeliminada.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaeliminadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaeliminadaPageRoutingModule {}
