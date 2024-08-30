import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reportes1Page } from './reportes1.page';

const routes: Routes = [
  {
    path: '',
    component: Reportes1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reportes1PageRoutingModule {}
