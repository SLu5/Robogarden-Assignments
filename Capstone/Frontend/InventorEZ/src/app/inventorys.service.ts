import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iinventory } from './iinventory';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventorysService {

  constructor(private http: HttpClient) { }

  getInventorys() {
    return this.http.get<Iinventory[]>("http://localhost:3000/item")
  }

  postInventory(inventoryItem: Iinventory): Observable<Iinventory> {
    return this.http.post<Iinventory>("http://localhost:3000/item",inventoryItem)
  }

 
}
