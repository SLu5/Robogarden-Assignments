import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewInventoryFormPage } from '../create-new-inventory-form/create-new-inventory-form.page';
import { NewFormButtonComponent } from '../new-form-button/new-form-button.component';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    children: []
  },
  {path:'new', component:CreateNewInventoryFormPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
