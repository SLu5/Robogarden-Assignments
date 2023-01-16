import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewInventoryFormPageRoutingModule } from './create-new-inventory-form-routing.module';

import { CreateNewInventoryFormPage } from './create-new-inventory-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateNewInventoryFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateNewInventoryFormPage]
})
export class CreateNewInventoryFormPageModule {}
