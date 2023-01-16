import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './create-new-inventory-form/models/item.model';
@Injectable({
  providedIn: 'root'
})
export class ItemcrudService {
  private _itemsURL= "http://localhost:3000/item"
  constructor(private http: HttpClient) { }
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._itemsURL);
  }
  postItems(itemOBJ: Item[]): Observable<Item[]> {
    return this.http.post<Item[]>(this._itemsURL, itemOBJ);
  }
  deleteItems(item_id: Item[]): Observable<Item[]> {
    return this.http.delete<Item[]>(`${this._itemsURL}/${item_id}`);
  }
  putItems(item_id: Item[], updatedItem:Item[]): Observable<Item[]> {
    return this.http.put<Item[]>(`${this._itemsURL}/${item_id}`, updatedItem);
  }
}
