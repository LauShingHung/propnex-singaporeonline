import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BuyerPageRoutingModule } from '../buyer/buyer-routing.module';
import { BuyerPage } from '../buyer/buyer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BuyerPage]
})

export class BuyerPageModule {}
