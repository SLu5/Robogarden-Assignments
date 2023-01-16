import { Component, OnInit } from '@angular/core';
import { Iinventory } from '../iinventory';
import { InventorysService } from '../inventorys.service';

@Component({
  selector: 'app-inventorys',
  templateUrl: './inventorys.component.html',
  styleUrls: ['./inventorys.component.scss'],
})
export class InventorysComponent implements OnInit {
  inventorys!: Iinventory[];
  constructor(private service: InventorysService) {
    service.getInventorys().subscribe((results) => {
      this.inventorys = results;
    });}

  ngOnInit(): void {}

}
