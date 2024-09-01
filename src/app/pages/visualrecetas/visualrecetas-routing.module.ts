import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualrecetasPage } from './visualrecetas.page';

const routes: Routes = [
  {
    path: '',
    component: VisualrecetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualrecetasPageRoutingModule {}
