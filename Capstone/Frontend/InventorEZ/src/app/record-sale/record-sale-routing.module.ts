import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordSalePage } from './record-sale.page';

const routes: Routes = [
  {
    path: '',
    component: RecordSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordSalePageRoutingModule {}
