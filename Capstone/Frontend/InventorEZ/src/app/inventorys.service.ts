import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iinventory } from './iinventory';
import { Observable } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { Isales } from './isales';

@Injectable({
  providedIn: 'root'
})
export class InventorysService {

  constructor(private http: HttpClient, private router: Router) { }

  getInventorys() {
    return this.http.get<Iinventory[]>("http://localhost:3000/item")
  }

  getInventory(item_id:number) {
    return this.http.get<Iinventory>(`http://localhost:3000/item/${item_id}`)
  }


  postInventory(inventoryItem: Iinventory): Observable<Iinventory> {
    return this.http.post<Iinventory>("http://localhost:3000/item",inventoryItem)
  }

  patchInventory(item_id: number, inventoryItem: Iinventory): Observable<Iinventory> {
    return this.http.patch<Iinventory>(`http://localhost:3000/item/${item_id}`, inventoryItem)
  }

  getSales() {
    return this.http.get<Isales[]>("http://localhost:3000/sale")
  }

  getSale(sale_id: number) {
    return this.http.get<Isales>(`http://localhost:3000/sale/${sale_id}`)

  }

  getSaleDate(date: Date): Observable<Isales[]> {
   
    const url = `http://localhost:3000/history?date=${date}`
    console.log(url);
    return this.http.get<Isales[]>(url);
  }


  postSale(saleItem: Isales): Observable<Isales> {
    return this.http.post<Isales>("http://localhost:3000/sale", saleItem)
  }

  getTotalInv() {
    return this.http.get<number>("http://localhost:3000/summary")
  }

  getThirtyDaySales() {
    return this.http.get<number>("http://localhost:3000/summary/sale30")
  }

  getThirtyDayItems() {
    return this.http.get<number>("http://localhost:3000/summary/item30")
  }

  getNameFilter(name: string): Observable<Iinventory[]> {
    const url = `http://localhost:3000/inventory/filter?name=${name}`
    console.log(url);
    return this.http.get<Iinventory[]>(url);
  }
//  latestList: any;
//  getList(): Observable<any[]> {

//    return this.http.post<any[]>("http://localhost:3000/item", { 'operation': 'getData' })
//      .subscribe(response => {
//        this.latestList = response.list;
//        this.router.navigate(['/item']);
//      },
//      error => {
//        console.log(error);
//      }


//    )
//  };
 
}
