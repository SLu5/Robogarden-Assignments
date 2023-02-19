import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddPage } from './add/add.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs/item/new',
    loadChildren: () => import('./create-new-inventory-form/create-new-inventory-form.module').then( m => m.CreateNewInventoryFormPageModule)
  },
  {
    path: 'tabs/item/add/:item_id',
    loadChildren: () => import('./add/add.module').then(m=> m.AddPageModule)

  },

  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'tabs/item/record/:item_id',
    loadChildren: () => import('./record-sale/record-sale.module').then( m => m.RecordSalePageModule)
  },
  {
    path: 'record',
    loadChildren: () => import('./record-sale/record-sale.module').then( m => m.RecordSalePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
