import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidasteclavePage } from './olvidasteclave.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidasteclavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidasteclavePageRoutingModule {}
