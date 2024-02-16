import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UnitsPageRoutingModule } from './units-routing.module';
import { UnitsPage } from './units.page';
import { AddBlockComponent } from './add-block/add-block.component';
import { ContactFormModule } from '../contact-form/contact-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitsPageRoutingModule,
    ReactiveFormsModule,
    ContactFormModule
  ],
  declarations: [UnitsPage, AddBlockComponent,ContactFormModule]
})

export class UnitsPageModule {}
