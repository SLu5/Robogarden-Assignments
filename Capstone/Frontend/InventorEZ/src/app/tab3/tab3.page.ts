import { Component, OnInit, ViewChild } from '@angular/core';
import { InventorysService } from '../inventorys.service';
import { Isales } from '../isales';
import { SalesComponent } from '../sales/sales.component';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  child: any;
  @ViewChild(SalesComponent) set appShark(child: SalesComponent) {
    this.child=child
  };
  sales!: Isales[];
  constructor(private service: InventorysService) {
   


  }

  ionViewWillEnter() {
    this.child.reset();
    
    console.log("Tab 3");
    
  }

  ngOnInit(): void {
    console.log("Tab 3 Init Function")
  }

}
