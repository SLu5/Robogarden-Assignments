import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl, } from '@angular/forms';
import { InventorysService } from '../inventorys.service';
import { ItemcrudService } from '../itemcrud.service';
import { Item } from './models/item.model';

@Component({
  selector: 'app-create-new-inventory-form',
  templateUrl: './create-new-inventory-form.page.html',
  styleUrls: ['./create-new-inventory-form.page.scss'],
})
export class CreateNewInventoryFormPage implements OnInit {
 /* items!: Item[];*/
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: InventorysService) {
    this.userForm = formBuilder.group({
      item_id: ["birb"],
      name: ["", [Validators.minLength(2), Validators.required]],
      SKU: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      quantity_type: ["", [Validators.required]],
      price: ["", [Validators.required]],
      intended_sale_price: ["", [Validators.required]]



    }
    );
  }
  //constructor(private _itemService: ItemcrudService) { }
  //ngOnInit() {

  //  this._itemService.getItems().subscribe(
  //    res => this.items = res,
  //    err => console.log(err)
  //  )

  //}
  get item_id() {
    return this.userForm.get('item_id');
  }
  get name() {
    return this.userForm.get('name');
  }
  get SKU() {
    return this.userForm.get('SKU');
  }
  get quantity_type() {
    return this.userForm.get('quantity_type');
  }
  get quantity() {
    return this.userForm.get('quantity');
  }
  get price() {
    return this.userForm.get('price');
  }
  get intended_sale_price() {
    return this.userForm.get('intended_sale_price');
  }

  add_inventory() {
    this.service.postInventory(this.userForm.value);
  }
  ngOnInit(): void {
  }
}
