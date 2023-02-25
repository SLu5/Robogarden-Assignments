import { Component, OnInit } from '@angular/core';
import { CurrencyDisplayComponent } from '../currency-display/currency-display.component';
import { InventorysService } from '../inventorys.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  totalInv: number=0;
  saleThirty: number=0;
  itemThirty: number=0;
  constructor(private service: InventorysService ) {
  }

  get grossMargin() { 
    return this.saleThirty - this.itemThirty;
  }

  ionViewWillEnter() {
    this.service.getTotalInv().subscribe((results) => {
      this.totalInv = results
    });

    this.service.getThirtyDaySales().subscribe((results) => {
      this.saleThirty = results
    });

    this.service.getThirtyDayItems().subscribe((results) => {
      this.itemThirty = results
    });
  }

  ngOnInit(): void {
  }
}
