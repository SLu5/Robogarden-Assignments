import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNewInventoryFormPage } from './create-new-inventory-form.page';

const routes: Routes = [
  {
    path: '',
    component: CreateNewInventoryFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNewInventoryFormPageRoutingModule {}
