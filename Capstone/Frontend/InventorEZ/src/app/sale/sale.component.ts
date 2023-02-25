import { Component,Input, OnInit } from '@angular/core';
import { Iinventory } from '../iinventory';
import { InventorysService } from '../inventorys.service';
import { Isales } from '../isales';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {
  @Input() sale!: Isales
  inventory!: Iinventory[];
  constructor(private service: InventorysService) {
    service.getInventorys().subscribe((results) => {
      this.inventory = results;
    })
  }

  ngOnInit(): void{}

}
