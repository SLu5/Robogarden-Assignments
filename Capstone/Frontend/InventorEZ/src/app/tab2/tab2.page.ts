import { Component, OnInit } from '@angular/core';
import { Iinventory } from '../iinventory';
import { InventorysService } from '../inventorys.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  inventorys!: Iinventory[];
  constructor(private service: InventorysService) {
   
  }

  ionViewWillEnter() {
    console.log("Tab 2");
    this.service.getInventorys().subscribe((results) => {
      this.inventorys = results;
    });
  }

  ngOnInit(): void {
    console.log("Tab 2 Init Function")
  }
}
