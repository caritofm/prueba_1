import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'registre',
    loadChildren: () => import('./pages/registre/registre.module').then( m => m.RegistrePageModule)
  },
  {
    path: 'reportes1',
    loadChildren: () => import('./pages/reportes1/reportes1.module').then( m => m.Reportes1PageModule)
  },
  {
    path: 'calificar',
    loadChildren: () => import('./pages/calificar/calificar.module').then( m => m.CalificarPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'eliminarcuenta',
    loadChildren: () => import('./pages/eliminarcuenta/eliminarcuenta.module').then( m => m.EliminarcuentaPageModule)
  },
  {
    path: 'olvidasteclave',
    loadChildren: () => import('./pages/olvidasteclave/olvidasteclave.module').then( m => m.OlvidasteclavePageModule)
  },
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
