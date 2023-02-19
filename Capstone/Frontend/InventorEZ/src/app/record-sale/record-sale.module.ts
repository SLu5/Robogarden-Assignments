import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordSalePageRoutingModule } from './record-sale-routing.module';

import { RecordSalePage } from './record-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordSalePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RecordSalePage]
})
export class RecordSalePageModule {}
