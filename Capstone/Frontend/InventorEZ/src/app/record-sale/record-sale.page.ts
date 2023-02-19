import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl, } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Iinventory } from '../iinventory';
import { InventorysService } from '../inventorys.service';
import { ItemcrudService } from '../itemcrud.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-record-sale',
  templateUrl: './record-sale.page.html',
  styleUrls: ['./record-sale.page.scss'],
})
export class RecordSalePage implements OnInit {
  userForm: FormGroup;
  inventory!: Iinventory;
  item_id: number = 0;
  constructor(private toastController: ToastController, formBuilder: FormBuilder, private service: InventorysService, private route: ActivatedRoute, private router: Router) {
    this.userForm = formBuilder.group({

      sell_price_per_unit: ["", [Validators.required, Validators.min(0)]],
      quantity_sold: ["", [Validators.required, Validators.min(0)]],
      date: ["", [Validators.required]]


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
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message:  message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  get sell_price_per_unit() {
    return this.userForm.get('sell_price_per_unit');
  }
  get quantity_sold() {
    return this.userForm.get('quantity_sold');
  }
  get date() {
    return this.userForm.get('date');
  }

  add_sale() {
    console.log(this.userForm.value);
    let formData = this.userForm.value;
    formData.item_id = this.inventory.item_id;
    formData.value_of_goods = this.inventory.price * formData.quantity_sold;
    this.service.postSale(formData).subscribe((result) => {
      console.log(result);

      this.presentToast('middle', 'Quantities Updated');
      
    });

    let formData1 = this.inventory;
    formData1.item_id = this.inventory.item_id;
    formData1.quantity -= formData.quantity_sold;
    formData1.SKU = this.inventory.SKU;
    formData1.name = this.inventory.name;
    formData1.quantity_type = this.inventory.quantity_type;
    this.service.patchInventory(this.item_id, formData1).subscribe((result) => {
      console.log(result);

      this.presentToast('top', 'Sale Recorded');
      this.router.navigate(['../tabs/item']);
    })
    ;
  }
  ngOnInit(): void {
 
    }
  }


