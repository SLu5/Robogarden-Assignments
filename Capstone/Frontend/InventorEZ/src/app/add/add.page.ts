import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl, } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Iinventory } from '../iinventory';
import { InventorysService } from '../inventorys.service';
import { ItemcrudService } from '../itemcrud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  userForm: FormGroup;
  inventory!: Iinventory;
  item_id: number = 0;
  constructor(private toastController: ToastController ,formBuilder: FormBuilder, private service: InventorysService, private route: ActivatedRoute, private router: Router) {
    this.userForm = formBuilder.group({
      
      quantity: ["", [Validators.required, Validators.min(0)]],
      
      price: ["", [Validators.required, Validators.min(0)]],
      intended_sale_price: ["", [Validators.required, Validators.min(0)]]

    }
    );
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.item_id = Number(params.get('item_id'));
      service.getInventory(this.item_id).subscribe((result) => {
        console.log(result);
        this.inventory = result;

      });
    });
   
/*Put in subscribe using the subscribe method found in inventorys.ts*/
  //}
 
  //get name() {
  //  return this.userForm.get('name');
  //}
  //get SKU() {
  //  return this.userForm.get('SKU');
  //}
  //get quantity_type() {
  //  return this.userForm.get('quantity_type');
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
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
    console.log(this.userForm.value);

    let formData = this.userForm.value;
    
    formData.item_id = this.inventory.item_id;
    formData.price = (this.inventory.price * this.inventory.quantity + formData.quantity * formData.price) / (formData.quantity + this.inventory.quantity);
    formData.quantity += this.inventory.quantity;
    formData.SKU = this.inventory.SKU;
    formData.name = this.inventory.name;
    formData.quantity_type = this.inventory.quantity_type;
    
    this.service.patchInventory(this.item_id, formData).subscribe((result) => {
      console.log(result);

      this.presentToast('top', 'Additional Inventory Added')

      this.router.navigate(['/tabs/item']);
    });
  }
  ngOnInit(): void {
   
  }

}
