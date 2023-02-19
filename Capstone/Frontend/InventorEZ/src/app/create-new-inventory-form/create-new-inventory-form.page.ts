import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl, } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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

  constructor(private toastController: ToastController,formBuilder: FormBuilder, private service: InventorysService, private router: Router) {
    this.userForm = formBuilder.group({
      
      name: ["", [Validators.minLength(2), Validators.required]],
      SKU: ["", [Validators.required]],
      quantity: ["", [Validators.required, Validators.min(0)]],
      quantity_type: ["", [Validators.required]],
      price: ["", [Validators.required, Validators.min(0)]],
      intended_sale_price: ["", [Validators.required, Validators.min(0)]]



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
  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

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
    this.service.postInventory(this.userForm.value).subscribe((result) => {
      console.log(result);

      this.presentToast('top', 'New Inventory Item Created')

      /*this.service.getList();*/
      this.router.navigate(['../tabs/item']);
      
    });


  }
  ngOnInit(): void {
  }
}
