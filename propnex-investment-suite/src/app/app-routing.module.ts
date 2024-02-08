import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule) },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canLoad: [AuthGuard] 
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule),
    canLoad: [AuthGuard] 
  },
  {
    path: 'stats',
    loadChildren: () => import('./pages/stats/stats.module').then( m => m.StatsPageModule),
    canLoad: [AuthGuard] 
  },
  {
    path: 'units',
    loadChildren: () => import('./pages/units/units.module').then( m => m.UnitsPageModule),
    canLoad: [AuthGuard] 
  },
  {
    path: 'buyer',
    loadChildren: () => import('./pages/buyer/buyer.module').then( m => m.BuyerPageModule),
    canLoad: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
