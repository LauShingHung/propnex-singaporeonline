import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerPage } from './buyer.page';

const routes: Routes = [
  {
    path: '',
    component: BuyerPage,
  },
  {
    path: ':postalId',
    loadChildren: () => import('../units/block-detail/block-detail.module').then( m => m.BlockDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BuyerPageRoutingModule {}
