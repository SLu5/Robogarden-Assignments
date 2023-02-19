import { Component } from '@angular/core';
import { CurrencyDisplayComponent } from '../currency-display/currency-display.component';
import { Iinventory } from '../iinventory';
import { InventorysService } from '../inventorys.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  inventory!: Iinventory[];
  totalInv: number=0;
  saleThirty: number=0;
  itemThirty: number=0;
  grossMargin: number=0;
  constructor(private service: InventorysService,) {
    service.getTotalInv().subscribe((results) => {
      this.totalInv = results
    });

    service.getThirtyDaySales().subscribe((results) => {
      this.saleThirty = results
    });

    service.getThirtyDayItems().subscribe((results) => {
      console.log(typeof results);
      this.itemThirty = results
    });


    this.grossMargin = this.saleThirty - this.itemThirty;
  }

}
