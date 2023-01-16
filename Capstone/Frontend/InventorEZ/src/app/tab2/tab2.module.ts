import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


import { InventoryComponent } from '../Inventory/inventory.component';
import { InventorysComponent } from '../inventorys/inventorys.component';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { NewFormButtonComponent } from '../new-form-button/new-form-button.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
  ],
  declarations: [InventoryComponent, InventorysComponent, NewFormButtonComponent, Tab2Page, ]
})
export class Tab2PageModule {}
