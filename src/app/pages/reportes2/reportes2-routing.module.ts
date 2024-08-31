import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reportes2Page } from './reportes2.page';

const routes: Routes = [
  {
    path: '',
    component: Reportes2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reportes2PageRoutingModule {}
