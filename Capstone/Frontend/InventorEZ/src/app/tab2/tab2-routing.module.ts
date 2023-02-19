import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPage } from '../add/add.page';
import { CreateNewInventoryFormPage } from '../create-new-inventory-form/create-new-inventory-form.page';
import { RecordSalePage } from '../record-sale/record-sale.page';

import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: []
  },
  { path: 'new', component: CreateNewInventoryFormPage },
  { path: 'add/:item_id', component: AddPage },
  {path: 'record/:item_id', component: RecordSalePage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
